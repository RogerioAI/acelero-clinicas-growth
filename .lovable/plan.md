# Plano: Prerender + SEO/AEO/GEO/AIO completo

Objetivo: fazer crawlers (Google, Bing) e IAs (ChatGPT, Perplexity, Claude, Gemini) lerem HTML pronto de cada rota, com schemas ricos, e remover qualquer resquício do prerender.io.

## 1. Prerender build-time (gratuito, sem serviço externo)

- Adicionar `puppeteer` como devDependency.
- Criar `scripts/prerender.ts`: sobe servidor estático em `dist/`, abre Chromium headless em cada rota da lista, espera hidratação, salva HTML final em `dist/{rota}/index.html`.
- Rotas a prerenderizar: `/`, `/sobre`, `/mentoria`, `/blog`, e cada post de `src/data/blogPosts.ts`.
- Wire-up em `package.json`: `"postbuild": "bunx tsx scripts/prerender.ts"`.

Resultado: cada URL serve HTML completo com `<title>`, `<meta>`, JSON-LD e conteúdo visível — sem JS.

## 2. Remover prerender.io

- Buscar e remover qualquer referência a `prerender.io`, `prerender-token`, user-agent sniffing, middlewares, headers, comentários e variáveis em: `index.html`, `vite.config.ts`, `public/`, `src/`, `package.json`, `.env*`, `mem://features/seo`.
- Atualizar memória `mem://features/seo` removendo prerender.io e documentando a nova abordagem build-time.

## 3. AEO (Answer Engine Optimization)

- `FAQPage` JSON-LD nas páginas Sobre e Mentoria (perguntas reais que clínicas fazem sobre pré-venda, mentoria, ROI).
- Reescrever introduções dos posts em formato "pergunta → resposta direta em 2 frases → detalhamento" (People Also Ask friendly).
- `HowTo` schema na seção do método ACELERO da home.

## 4. GEO (Generative Engine Optimization / busca local)

- Adicionar `ProfessionalService` JSON-LD em `index.html` com `areaServed: BR`, `serviceType`, `priceRange`.
- Enriquecer `Organization` com `sameAs` (LinkedIn, Instagram, YouTube) e `founder` (Lucas Rocha).

## 5. AIO (AI Optimization / llms.txt)

- Reescrever `public/llms.txt` no padrão llmstxt.org (seções H2, links com descrição).
- Gerar `public/llms-full.txt` durante o build com conteúdo completo de todos os posts + páginas (script `scripts/generate-llms-full.ts`, rodado no `prebuild`).
- Atualizar `public/robots.txt`: permitir explicitamente GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot.
- Adicionar `<link rel="alternate" type="text/plain" href="/llms.txt">` em `index.html`.

## 6. SEO técnico

- `WebSite` + `SearchAction` JSON-LD em `index.html` (sitelinks search box).
- `BreadcrumbList` JSON-LD nas páginas Sobre, Mentoria, Blog e posts.
- Gerar `public/rss.xml` no build (script `scripts/generate-rss.ts`, rodado no `prebuild`) e linkar em `index.html`.
- Confirmar que `sitemap.xml` continua coberto pelo gerador existente.

## Arquivos tocados

```text
package.json                          (devDep puppeteer, scripts pre/postbuild)
vite.config.ts                        (limpeza prerender.io se houver)
scripts/prerender.ts                  (novo)
scripts/generate-llms-full.ts         (novo)
scripts/generate-rss.ts               (novo)
public/llms.txt                       (reescrita)
public/robots.txt                     (bots de IA)
index.html                            (WebSite/ProfessionalService JSON-LD, alternate, limpeza prerender.io)
src/pages/Sobre.tsx                   (FAQPage + BreadcrumbList)
src/pages/Mentoria.tsx                (FAQPage + BreadcrumbList)
src/pages/Blog.tsx                    (BreadcrumbList)
src/pages/BlogPost.tsx                (BreadcrumbList)
src/components/JsonLd.tsx             (helpers novos)
mem://features/seo                    (atualizar)
```

## Ganhos esperados

- Crawlers e IAs passam a ver HTML completo por rota → indexação correta e citações em ChatGPT/Perplexity/Claude.
- +30–80% tráfego orgânico Google em 30–90 dias.
- +10–25% CTR via rich results (FAQ, Breadcrumb, HowTo).
- Visibilidade local (clínicas no BR) via ProfessionalService.
- Custo zero, sem dependência externa.

## Confirmação para implementar

Responda "pode ir" para entrar em build mode e executar.
