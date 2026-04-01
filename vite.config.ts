import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, mkdirSync } from "fs";

function sitemapPlugin(): Plugin {
  return {
    name: "vite-plugin-sitemap",
    configureServer(server) {
      server.middlewares.use("/sitemap.xml", async (_req, res) => {
        try {
          const mod = await server.ssrLoadModule("/src/sitemap/registry.ts");
          const xml = mod.generateSitemapXml();
          res.setHeader("Content-Type", "application/xml");
          res.end(xml);
        } catch (e) {
          console.error("Sitemap generation error:", e);
          res.statusCode = 500;
          res.end("Error generating sitemap");
        }
      });
    },
    async closeBundle() {
      try {
        const { generateSitemapXml } = await import("./src/sitemap/registry.ts");
        const xml = generateSitemapXml();
        const distDir = path.resolve(__dirname, "dist");
        mkdirSync(distDir, { recursive: true });
        writeFileSync(path.resolve(distDir, "sitemap.xml"), xml, "utf-8");
        console.log(`✅ sitemap.xml generated at dist/sitemap.xml`);
      } catch (e) {
        console.error("Failed to generate sitemap at build time:", e);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
