import { saveCommunityPartnerForm } from "../server/db.js";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed. Use POST." }));
    return;
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      body = JSON.parse(body);
    } else if (!body) {
      // In case body parser middleware wasn't run
      body = await new Promise((resolve, reject) => {
        let raw = "";
        req.on("data", (chunk) => (raw += chunk));
        req.on("end", () => {
          try {
            resolve(JSON.parse(raw || "{}"));
          } catch (e) {
            reject(e);
          }
        });
        req.on("error", reject);
      });
    }

    const result = await saveCommunityPartnerForm(body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true, insertedId: result.insertedId }));
  } catch (error) {
    console.error("Error submitting community partner form:", error);
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message || "Failed to submit partner form" }));
  }
}
