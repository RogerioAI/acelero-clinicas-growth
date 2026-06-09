---
name: SEO & Performance
description: SEO/AEO/GEO/AIO stack — build-time prerender, react-helmet-async, JSON-LD, llms.txt, sitemap, RSS
type: feature
---

## Estratégia

- **Crawler/IA visibility**: prerender em build-time via puppeteer (`scripts/prerender.ts`, rodado em `postbuild`) — gera `dist/{rota}/index.html` para Google, Bing, ChatGPT, Perplexity, Claude e Gemini lerem HTML pronto sem precisar executar JS.
- **Sem prerender.io**: o plano gratuito foi descontinuado. Não usar mais. Build-time prerender é a substituição.

## Per-route SEO

- `react-helmet-async` (HelmetProvider em `src/App.tsx`) — cada página define seu próprio title/description/canonical/og:*.
- `<link rel="canonical">` foi REMOVIDO de `index.html` para não conflitar com Helmet por rota.

## JSON-LD por página

- Home (`src/pages/Index.tsx`): Organization, WebSite, BreadcrumbList, FAQPage.
- Sobre (`src/pages/Sobre.tsx`): Person, BreadcrumbList, FAQPage.
- Mentoria (`src/pages/Mentoria.tsx`): Course, BreadcrumbList, FAQPage.
- Blog (`src/pages/Blog.tsx`): BreadcrumbList, ItemList.
- BlogPost (`src/pages/BlogPost.tsx`): Article, BreadcrumbList, FAQPage (quando aplicável).
- `index.html`: ProfessionalService (GEO — `areaServed: Brasil`, `serviceType`, `priceRange`).
- `src/components/PersonSchema.tsx`: Organization + Person sitewide.

## AIO (LLM discovery)

- `public/llms.txt` — sumário curado padrão llmstxt.org.
- `public/llms-full.txt` — gerado em `prebuild` por `scripts/generate-llms-full.ts` com todo o conteúdo dos posts.
- `<link rel="alternate" type="text/plain" href="/llms.txt">` em `index.html`.
- `public/robots.txt` permite explicitamente: GPTBot, ChatGPT-User, OAI-SearchBot, PerplexityBot, ClaudeBot, anthropic-ai, Google-Extended, CCBot, Applebot-Extended, Bytespider, meta-externalagent, cohere-ai.

## Sitemap & RSS

- `scripts/generate-sitemap.ts` → `public/sitemap.xml` (estático + posts dinâmicos com lastmod).
- `scripts/generate-rss.ts` → `public/rss.xml` (linkado via `<link rel="alternate" type="application/rss+xml">`).
- Ambos rodam em `predev` e `prebuild` via npm script `gen:seo`.
- Loader `scripts/_register.mjs` + `scripts/_asset-loader.mjs` stubam imports de imagens (.jpg/.png/.webp) para que os scripts possam importar `src/data/blogPosts.ts`.

## Domínio canônico

- Custom domain de produção: `https://acelero.vc`. Todos os JSON-LD, canonicals, sitemap e RSS usam esse domínio.

## Acessibilidade & Performance

- Imagens com `loading="lazy"` (exceto LCP com `fetchPriority="high"`).
- `React.lazy` em rotas secundárias (Blog, BlogPost, Sobre, Mentoria).
- Preconnect para fontes Google.
