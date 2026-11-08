import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getResendApiKey() {
  if (process.env.RESEND_API_KEY) return process.env.RESEND_API_KEY;
  if (process.env.VITE_RESEND_API_KEY) return process.env.VITE_RESEND_API_KEY;

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
          if (trimmed.startsWith("VITE_RESEND_API_KEY=")) {
            return trimmed.replace("VITE_RESEND_API_KEY=", "").trim();
          }
          if (trimmed.startsWith("RESEND_API_KEY=")) {
            return trimmed.replace("RESEND_API_KEY=", "").trim();
          }
        }
      } catch {
        // continue
      }
    }
  }

  return null;
}

function getHtmlTemplate() {
  const possiblePaths = [
    path.resolve(__dirname, "../src/assets/communityPartnerForm.html"),
    path.resolve(__dirname, "../../frontend/src/assets/communityPartnerForm.html"),
    path.resolve(process.cwd(), "src/assets/communityPartnerForm.html"),
    path.resolve(process.cwd(), "frontend/src/assets/communityPartnerForm.html"),
  ];

  for (const templatePath of possiblePaths) {
    if (fs.existsSync(templatePath)) {
      return fs.readFileSync(templatePath, "utf-8");
    }
  }

  throw new Error("Could not find communityPartnerForm.html template");
}

function getFontBase64() {
  const possiblePaths = [
    path.resolve(__dirname, "../src/assets/Road_Rage.otf"),
    path.resolve(__dirname, "../../frontend/src/assets/Road_Rage.otf"),
    path.resolve(process.cwd(), "src/assets/Road_Rage.otf"),
    path.resolve(process.cwd(), "frontend/src/assets/Road_Rage.otf"),
  ];

  for (const fontPath of possiblePaths) {
    if (fs.existsSync(fontPath)) {
      try {
        return fs.readFileSync(fontPath).toString("base64");
      } catch {
        // continue
      }
    }
  }

  return null;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendPartnerConfirmationMail(formData, insertedId = "") {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    console.warn("Resend API key not configured. Skipping confirmation email.");
    return { sent: false, reason: "No API key" };
  }

  const rawTemplate = getHtmlTemplate();

  const replacements = {
    "{{name}}": escapeHtml(formData.name),
    "{{email}}": escapeHtml(formData.email),
    "{{phone}}": escapeHtml(formData.phone),
    "{{role}}": escapeHtml(formData.role),
    "{{communityName}}": escapeHtml(formData.communityName),
    "{{category}}": escapeHtml(formData.category || "Developer & Open Source Community"),
    "{{size}}": escapeHtml(formData.size || "500 – 1,500 members"),
    "{{city}}": escapeHtml(formData.city || "Kolkata"),
    "{{website}}": escapeHtml(formData.website || ""),
    "{{howYouCanHelp}}": escapeHtml(formData.howYouCanHelp || ""),
    "{{whatYouWant}}": escapeHtml(formData.whatYouWant || ""),
    "{{id}}": escapeHtml(insertedId || ""),
    "{{submittedAt}}": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  let renderedHtml = rawTemplate;
  for (const [key, value] of Object.entries(replacements)) {
    renderedHtml = renderedHtml.replaceAll(key, value);
  }

  // Embed local Road_Rage.otf as base64 data URI so email clients render local font without external imports
  const fontBase64 = getFontBase64();
  if (fontBase64) {
    renderedHtml = renderedHtml.replace(
      "src: url('./Road_Rage.otf') format('opentype');",
      `src: url('data:font/otf;base64,${fontBase64}') format('opentype'), url('./Road_Rage.otf') format('opentype');`
    );
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Code Kolkata <noreply@bugbusterscommunity.in>",
      to: formData.email,
      bcc: "community.bugbusters@gmail.com",
      subject: `Your form has reached to us! — Code Kolkata 2026 Community Partner (${formData.communityName})`,
      html: renderedHtml,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return { sent: false, error: result.error };
    }

    return { sent: true, data: result.data };
  } catch (error) {
    console.error("Failed to send partner confirmation email via Resend:", error);
    return { sent: false, error: error.message };
  }
}
