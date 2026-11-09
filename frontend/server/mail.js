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

function getAssetPath(relativePath) {
  const possibleRoots = [
    path.resolve(__dirname, "../src/assets"),
    path.resolve(__dirname, "../../frontend/src/assets"),
    path.resolve(process.cwd(), "src/assets"),
    path.resolve(process.cwd(), "frontend/src/assets"),
  ];

  for (const root of possibleRoots) {
    const full = path.join(root, relativePath);
    if (fs.existsSync(full)) {
      return full;
    }
  }
  return null;
}

function getHtmlTemplate() {
  const templatePath = getAssetPath("communityPartnerForm.html");
  if (templatePath && fs.existsSync(templatePath)) {
    return fs.readFileSync(templatePath, "utf-8");
  }

  throw new Error("Could not find communityPartnerForm.html template");
}

function getEmailAttachments() {
  const assetDefinitions = [
    { file: "CodeKolkataLogo.png", cid: "code-kolkata-logo", contentType: "image/jpeg" },
    { file: "HowrahBridge.png", cid: "howrah-bridge", contentType: "image/png" },
    { file: "email/title-reached-us.png", cid: "title-reached-us", contentType: "image/png" },
    { file: "email/heading-app-details.png", cid: "heading-app-details", contentType: "image/png" },
    { file: "email/heading-next-steps.png", cid: "heading-next-steps", contentType: "image/png" },
    { file: "email/heading-organizers.png", cid: "heading-organizers", contentType: "image/png" },
  ];

  const attachments = [];
  for (const item of assetDefinitions) {
    const filePath = getAssetPath(item.file);
    if (filePath && fs.existsSync(filePath)) {
      attachments.push({
        filename: path.basename(item.file),
        content: fs.readFileSync(filePath),
        contentType: item.contentType,
        contentId: item.cid,
      });
    } else {
      console.warn(`Could not locate asset for email attachment: ${item.file}`);
    }
  }

  return attachments;
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

  const attachments = getEmailAttachments();
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Code Kolkata <noreply@bugbusterscommunity.in>",
      to: formData.email,
      bcc: "community.bugbusters@gmail.com",
      subject: `Your form has reached to us! — Code Kolkata Community Partner (${formData.communityName})`,
      html: renderedHtml,
      attachments,
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
