// Generates public/rss.xml from blog posts. Runs on prebuild.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://acelero.vc";

function parseDate(d: string): Date {
  const months: Record<string, number> = {
    Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5,
    Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11,
    Feb: 1, Apr: 3, May: 4, Aug: 7, Sep: 8, Oct: 9, Dec: 11,
  };
  const m = d.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
  if (!m) return new Date();
  return new Date(parseInt(m[3]), months[m[2]] ?? 0, parseInt(m[1]));
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const sorted = [...blogPosts].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

const items = sorted.map((p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${BASE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>
      <pubDate>${parseDate(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt || p.metaDescription || "")}</description>
      <category>${escapeXml(p.category)}</category>
    </item>`).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Acelero — Blog</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Estratégia comercial, vendas e gestão para clínicas médicas e odontológicas.</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

writeFileSync(resolve("public/rss.xml"), xml);
console.log(`rss.xml written (${sorted.length} items)`);
