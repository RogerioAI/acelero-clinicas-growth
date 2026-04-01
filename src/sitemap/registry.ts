/**
 * Sitemap URL Registry
 * 
 * Centralized source of truth for all sitemap-eligible URLs.
 * Add new content providers here as the site grows.
 */

import { blogPosts } from "@/data/blogPosts";

const DOMAIN = "https://acelero.vc";

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

/**
 * Parse a Portuguese date string like "18 Mar 2026" into ISO format.
 * Returns undefined if parsing fails.
 */
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

/** Static/institutional pages */
function getStaticPages(): SitemapEntry[] {
  return [
    { loc: `${DOMAIN}/`, changefreq: "weekly", priority: 1.0 },
    { loc: `${DOMAIN}/blog`, changefreq: "weekly", priority: 0.8 },
  ];
}

/** Blog post pages — dynamically derived from data */
function getBlogPostPages(): SitemapEntry[] {
  return blogPosts.map((post) => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: parsePtDate(post.date),
    changefreq: "monthly" as const,
    priority: 0.7,
  }));
}

/**
 * Content providers registry.
 * To add a new content type, just push a new function here.
 */
const contentProviders: Array<() => SitemapEntry[]> = [
  getStaticPages,
  getBlogPostPages,
];

/**
 * Returns all sitemap-eligible URLs, deduplicated.
 */
export function getAllSitemapEntries(): SitemapEntry[] {
  const seen = new Set<string>();
  const entries: SitemapEntry[] = [];

  for (const provider of contentProviders) {
    for (const entry of provider()) {
      if (!seen.has(entry.loc)) {
        seen.add(entry.loc);
        entries.push(entry);
      }
    }
  }

  return entries;
}

/**
 * Generates a valid XML sitemap string.
 */
export function generateSitemapXml(): string {
  const entries = getAllSitemapEntries();
  const urls = entries
    .map((entry) => {
      let xml = `  <url>\n    <loc>${entry.loc}</loc>`;
      if (entry.lastmod) xml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
      if (entry.changefreq) xml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
      if (entry.priority !== undefined) xml += `\n    <priority>${entry.priority.toFixed(1)}</priority>`;
      xml += `\n  </url>`;
      return xml;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
