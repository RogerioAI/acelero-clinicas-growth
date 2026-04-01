/**
 * Sitemap URL Registry
 * 
 * Centralized source of truth for sitemap-eligible URLs.
 * Used by the Vite plugin (vite.config.ts) for generation.
 * 
 * Architecture:
 * - Static pages are defined here
 * - Blog posts are auto-discovered from src/data/blogPosts.ts
 * - The Vite plugin parses the data file at build/dev time
 * - To add new content types, add extraction logic to vite.config.ts
 *   and document the content provider here
 * 
 * Content Providers:
 * 1. Static pages: /, /blog
 * 2. Blog posts: /blog/:slug (from blogPosts data)
 * 
 * Inclusion rules:
 * - Public, canonical, indexable pages only
 * - No drafts, redirects, noindex, or auth-gated pages
 */

export const SITEMAP_DOMAIN = "https://acelero.vc";

export const STATIC_PAGES = [
  { path: "/", changefreq: "weekly" as const, priority: 1.0 },
  { path: "/blog", changefreq: "weekly" as const, priority: 0.8 },
];
