import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { saveCommunityPartnerForm } from "./server/db.js";

function communityPartnerApiPlugin() {
  const handler = async (req, res) => {
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

    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(raw || "{}");
        const result = await saveCommunityPartnerForm(data);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: true, insertedId: result.insertedId }));
      } catch (error) {
        console.error("Error saving community partner form:", error);
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: error.message || "Submission failed" }));
      }
    });
  };

  return {
    name: "community-partner-api",
    configureServer(server) {
      server.middlewares.use("/api/community-partner", handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/community-partner", handler);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), communityPartnerApiPlugin()],
});
