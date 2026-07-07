// Build-time prerender: renders each route to static HTML in dist/.
// Uses puppeteer headless Chromium. If puppeteer is missing or fails, logs and exits 0
// so the build never breaks. Run after `vite build`.
import { existsSync, mkdirSync, writeFileSync, readFileSync, statSync } from "fs";
import { resolve, join } from "path";
import { createServer } from "http";
import { extname } from "path";
import { blogPosts } from "../src/data/blogPosts";

const DIST = resolve("dist");
const PORT = 4173;

const routes = [
  "/",
  "/sobre",
  "/mentoria",
  "/blog",
  ...blogPosts.map((p) => `/blog/${p.slug}`),
];

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

async function main() {
  if (!existsSync(DIST)) {
    console.log("[prerender] dist/ missing, skipping");
    return;
  }

  let puppeteer: any;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch (e) {
    console.warn("[prerender] puppeteer not installed, skipping prerender");
    return;
  }

  const indexHtml = readFileSync(join(DIST, "index.html"), "utf-8");

  const server = createServer((req, res) => {
    try {
      const url = (req.url || "/").split("?")[0];
      const filePath = join(DIST, url);
      if (existsSync(filePath) && !filePath.endsWith("/")) {
        const stat = statSync(filePath);
        if (stat.isFile()) {
          const ct = MIME[extname(filePath)] || "application/octet-stream";
          res.writeHead(200, { "Content-Type": ct });
          res.end(readFileSync(filePath));
          return;
        }
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(indexHtml);
    } catch (e) {
      res.writeHead(500);
      res.end(String(e));
    }
  });

  await new Promise<void>((r) => server.listen(PORT, r));

  let browser;
  let rendered = 0;
  try {
    browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
    for (const route of routes) {
      const page = await browser.newPage();
      page.on("console", (msg) => console.log(`[browser:${route}] console.${msg.type()}:`, msg.text()));
      page.on("pageerror", (err) => console.log(`[browser:${route}] pageerror:`, err.message));
      page.on("requestfailed", (req) => console.log(`[browser:${route}] requestfailed:`, req.url(), req.failure()?.errorText));
      page.on("response", (res) => {
        if (!res.ok()) console.log(`[browser:${route}] response ${res.status()}:`, res.url());
      });
      try {
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
        await page.waitForSelector("#root > *", { timeout: 10000 });
        // little extra time for helmet to flush
        await new Promise((r) => setTimeout(r, 300));
        const html = await page.content();
        const outDir = route === "/" ? DIST : join(DIST, route);
        if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, "index.html"), html);
        console.log(`[prerender] ${route}`);
        rendered++;
      } catch (e) {
        console.warn(`[prerender] failed ${route}:`, (e as Error).message);
      } finally {
        await page.close();
      }
    }
    console.log(`[prerender] Páginas pré-renderizadas: ${rendered}`);
  } catch (e) {
    console.warn("[prerender] browser error:", (e as Error).message);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

main().catch((e) => {
  console.warn("[prerender] aborted:", e?.message || e);
  process.exit(0);
});
