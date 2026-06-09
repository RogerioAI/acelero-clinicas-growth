// Generates public/sitemap.xml. Runs on predev/prebuild.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://acelero.vc";

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.8" },
  { path: "/mentoria", changefreq: "monthly", priority: "0.9" },
  { path: "/blog", changefreq: "daily", priority: "0.8" },
];

function parseDate(d: string): string {
  // blog dates are like "18 Mar 2026"
  const months: Record<string, string> = {
    Jan: "01", Fev: "02", Mar: "03", Abr: "04", Mai: "05", Jun: "06",
    Jul: "07", Ago: "08", Set: "09", Out: "10", Nov: "11", Dez: "12",
    Feb: "02", Apr: "04", May: "05", Aug: "08", Sep: "09", Oct: "10", Dec: "12",
  };
  const m = d.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (!m) return new Date().toISOString().split("T")[0];
  const day = m[1].padStart(2, "0");
  const mon = months[m[2]] ?? "01";
  return `${m[3]}-${mon}-${day}`;
}

const blogEntries: Entry[] = blogPosts.map((p) => ({
  path: `/blog/${p.slug}`,
  lastmod: parseDate(p.date),
  changefreq: "monthly",
  priority: "0.7",
}));

const all = [...staticEntries, ...blogEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...all.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${all.length} entries)`);
