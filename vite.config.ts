import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

const DOMAIN = "https://acelero.vc";

/**
 * Extracts blog post slugs and dates from the source file without importing it.
 * This avoids issues with Vite aliases and image imports in Node context.
 */
function extractBlogDataFromSource(): Array<{ slug: string; date: string }> {
  const src = readFileSync(path.resolve(__dirname, "src/data/blogPosts.ts"), "utf-8");
  const posts: Array<{ slug: string; date: string }> = [];
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const dateRegex = /date:\s*"([^"]+)"/g;

  const slugs = [...src.matchAll(slugRegex)].map((m) => m[1]);
  const dates = [...src.matchAll(dateRegex)].map((m) => m[1]);

  for (let i = 0; i < slugs.length; i++) {
    posts.push({ slug: slugs[i], date: dates[i] || "" });
  }
  return posts;
}

function parsePtDate(dateStr: string): string | undefined {
  const months: Record<string, string> = {
    Jan: "01", Fev: "02", Mar: "03", Abr: "04",
    Mai: "05", Jun: "06", Jul: "07", Ago: "08",
    Set: "09", Out: "10", Nov: "11", Dez: "12",
  };
  const parts = dateStr.trim().split(" ");
  if (parts.length !== 3) return undefined;
  const [day, monthStr, year] = parts;
  const month = months[monthStr];
  if (!month) return undefined;
  return `${year}-${month}-${day.padStart(2, "0")}`;
}

function buildSitemapXml(posts: Array<{ slug: string; date: string }>): string {
  const entries: string[] = [];

  const today = new Date().toISOString().split("T")[0];

  // Static pages
  entries.push(`  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);
  entries.push(`  <url>
    <loc>${DOMAIN}/mentoria</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  entries.push(`  <url>
    <loc>${DOMAIN}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  entries.push(`  <url>
    <loc>${DOMAIN}/contato</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);

  // Blog posts
  for (const post of posts) {
    const lastmod = parsePtDate(post.date);
    let xml = `  <url>\n    <loc>${DOMAIN}/blog/${post.slug}</loc>`;
    if (lastmod) xml += `\n    <lastmod>${lastmod}</lastmod>`;
    xml += `\n    <changefreq>monthly</changefreq>`;
    xml += `\n    <priority>0.7</priority>`;
    xml += `\n  </url>`;
    entries.push(xml);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;
}

function sitemapPlugin(): Plugin {
  return {
    name: "vite-plugin-sitemap",
    configureServer(server) {
      server.middlewares.use("/sitemap.xml", (_req, res) => {
        try {
          const posts = extractBlogDataFromSource();
          const xml = buildSitemapXml(posts);
          res.setHeader("Content-Type", "application/xml");
          res.end(xml);
        } catch (e) {
          console.error("Sitemap generation error:", e);
          res.statusCode = 500;
          res.end("Error generating sitemap");
        }
      });
    },
    closeBundle() {
      try {
        const posts = extractBlogDataFromSource();
        const xml = buildSitemapXml(posts);
        const distDir = path.resolve(__dirname, "dist");
        mkdirSync(distDir, { recursive: true });
        writeFileSync(path.resolve(distDir, "sitemap.xml"), xml, "utf-8");
        console.log(`✅ sitemap.xml generated with ${posts.length} blog posts + 2 static pages`);
      } catch (e) {
        console.error("Failed to generate sitemap at build time:", e);
      }
    },
  };
}

const blogSlugs = extractBlogDataFromSource().map((p) => `/blog/${p.slug}`);
const prerenderRoutes = ["/", "/blog", ...blogSlugs];

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
    mode === "production" &&
      prerender({
        routes: prerenderRoutes,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 3000,
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        }),
        postProcess(renderedRoute) {
          // Ensure meta tags from Helmet are in the final HTML
          renderedRoute.html = renderedRoute.html
            .replace(/<script[^>]*data-react-helmet[^>]*><\/script>/g, "");
          return renderedRoute;
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
