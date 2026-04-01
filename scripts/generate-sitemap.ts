/**
 * Build-time sitemap generator.
 * Called by the Vite plugin during build to produce dist/sitemap.xml.
 * Can also be run standalone: npx tsx scripts/generate-sitemap.ts
 */
import { resolve } from "path";
import { writeFileSync } from "fs";

// Use dynamic import with alias resolved manually for standalone execution
async function main() {
  // Register path alias for standalone execution
  const { register } = await import("tsx/esm/api");
  
  const { generateSitemapXml } = await import("../src/sitemap/registry");
  const xml = generateSitemapXml();
  const outPath = resolve(__dirname, "../dist/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`✅ sitemap.xml generated with ${xml.split("<url>").length - 1} URLs`);
}

main().catch(console.error);
