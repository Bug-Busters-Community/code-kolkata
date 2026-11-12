import { MongoClient } from "mongodb";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sendPartnerConfirmationMail } from "./mail.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to load connection string from env or .env file
function getMongoUri() {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;
  if (process.env.VITE_MONGODB_CONNECTION_STRING) return process.env.VITE_MONGODB_CONNECTION_STRING;

  // Attempt to read from .env files if not in process.env
  const possiblePaths = [
    path.resolve(__dirname, "../.env"),
    path.resolve(__dirname, "../../frontend/.env"),
    path.resolve(process.cwd(), ".env"),
    path.resolve(process.cwd(), "frontend/.env"),
  ];

  for (const envPath of possiblePaths) {
    if (fs.existsSync(envPath)) {
      try {
        const content = fs.readFileSync(envPath, "utf-8");
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
          if (trimmed.startsWith("VITE_MONGODB_CONNECTION_STRING=")) {
            return trimmed.replace("VITE_MONGODB_CONNECTION_STRING=", "").trim();
          }
          if (trimmed.startsWith("MONGODB_URI=")) {
            return trimmed.replace("MONGODB_URI=", "").trim();
          }
        }
      } catch {
        // continue search
      }
    }
  }

  return null;
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = getMongoUri();
  if (!uri) {
    throw new Error(
      "MongoDB connection string not found. Please set VITE_MONGODB_CONNECTION_STRING or MONGODB_URI in your .env file."
    );
  }

  const client = new MongoClient(uri);
  await client.connect();
  const dbName = process.env.MONGODB_DB_NAME || "code_kolkata";
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function saveCommunityPartnerForm(formData) {
  const { db } = await connectToDatabase();
  const collection = db.collection("communityPartnerForms");

  // Validate required fields
  if (!formData.name?.trim()) throw new Error("Full name is required.");
  if (!formData.email?.trim()) throw new Error("Email address is required.");
  if (!formData.phone?.trim()) throw new Error("Phone number is required.");
  if (!formData.role?.trim()) throw new Error("Role/designation is required.");
  if (!formData.communityName?.trim()) throw new Error("Community name is required.");
  if (!formData.city?.trim()) throw new Error("City/region is required.");
  if (!formData.website?.trim()) throw new Error("Community link is required.");
  if (!formData.howYouCanHelp?.trim()) throw new Error("Description of support is required.");
  if (!formData.whatYouWant?.trim()) throw new Error("Expectations from us is required.");

  const rawImage = typeof formData.image === "string" ? formData.image.trim() : "";
  if (rawImage) {
    if (!/^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(rawImage)) {
      throw new Error("Invalid image format. Expected a base64-encoded image.");
    }
    if (rawImage.length > 3 * 1024 * 1024) {
      throw new Error("Image payload is too large (max 2 MB).");
    }
  }

  const document = {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    role: formData.role.trim(),
    communityName: formData.communityName.trim(),
    category: formData.category || "Developer & Open Source Community",
    size: formData.size || "500 – 1,500 members",
    city: formData.city.trim(),
    website: formData.website.trim(),
    image: rawImage,
    howYouCanHelp: formData.howYouCanHelp.trim(),
    whatYouWant: formData.whatYouWant.trim(),
    agree: Boolean(formData.agree),
    submittedAt: new Date(),
    createdAt: new Date(),
    status: "pending",
  };

  const result = await collection.insertOne(document);

  // Trigger confirmation email asynchronously (does not block client response if slow)
  let emailResult = { sent: false };
  try {
    emailResult = await sendPartnerConfirmationMail(document, result.insertedId.toString());
  } catch (err) {
    console.error("Failed to trigger partner confirmation mail:", err);
  }

  return {
    success: true,
    insertedId: result.insertedId.toString(),
    emailSent: emailResult.sent,
  };
}
