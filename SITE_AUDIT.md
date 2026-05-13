# SITE AUDIT — Acelero

Auditoria técnica gerada automaticamente.

---

## 1. Árvore de arquivos (até 3 níveis)

```text
.
├── README.md
├── bun.lock
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── llms.txt
│   ├── og-image-home.jpg
│   ├── placeholder.svg
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   ├── (imagens .png/.jpg de mentores, hero, logos, problemas)
    │   ├── bruno-thais-curattio.mp4
    │   ├── hero-video.mp4
    │   ├── natalia-palmier-video.mp4
    │   └── blog/
    ├── components/
    │   ├── JsonLd.tsx
    │   ├── PersonSchema.tsx
    │   ├── blog/
    │   ├── landing/
    │   └── ui/
    ├── config/
    │   └── contact.ts
    ├── data/
    │   └── blogPosts.ts
    ├── hooks/
    │   ├── use-mobile.tsx
    │   └── use-toast.ts
    ├── lib/
    │   ├── dateUtils.ts
    │   └── utils.ts
    ├── pages/
    │   ├── Blog.tsx
    │   ├── BlogPost.tsx
    │   ├── Index.tsx
    │   ├── Mentoria.tsx
    │   ├── NotFound.tsx
    │   └── Sobre.tsx
    ├── sitemap/
    │   └── registry.ts
    └── types/
        └── blog.ts
```

---

## 2. package.json

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@react-three/drei": "^9.122.0",
    "@react-three/fiber": "^8.18.0",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.22",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^3.0.0",
    "react-hook-form": "^7.61.1",
    "react-icons": "^5.5.0",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "three": "^0.180.0",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lovable-tagger": "^1.1.10",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19"
  }
}
```

---

## 3. vite.config.ts

```typescript
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync, readFileSync, mkdirSync } from "fs";

const DOMAIN = "https://acelero.vc";

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

  entries.push(`  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);
  entries.push(`  <url>
    <loc>${DOMAIN}/sobre</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
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
```

---

## 4. index.html

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acelero | Mentoria Comercial para Clínicas de Saúde</title>
    <meta name="author" content="Acelero.vc" />
    <meta name="description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O: estruture pré-venda, venda e pós-venda e escale o faturamento com previsibilidade." />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
    <link rel="canonical" href="https://acelero.vc/" />

    <!-- Open Graph fallback -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Acelero" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
    <meta property="og:description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O para escalar faturamento com previsibilidade." />
    <meta property="og:url" content="https://acelero.vc/" />
    <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter Card fallback -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
    <meta name="twitter:description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O para escalar faturamento com previsibilidade." />
    <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />

    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    <meta name="fragment" content="!">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5522B28V');</script>
<!-- End Google Tag Manager -->
</head>

  <body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5522B28V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 5. Arquivo principal de rotas

Arquivo: `src/App.tsx` (usa `BrowserRouter` + `<Route>` do react-router-dom v6).

```typescript
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PersonSchema } from "./components/PersonSchema";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Mentoria = lazy(() => import("./pages/Mentoria"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PersonSchema />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
```

---

## 6. Lista de rotas

- Caminho: `/` — Componente: `Index` — Arquivo: `src/pages/Index.tsx`
- Caminho: `/sobre` — Componente: `Sobre` — Arquivo: `src/pages/Sobre.tsx`
- Caminho: `/mentoria` — Componente: `Mentoria` — Arquivo: `src/pages/Mentoria.tsx`
- Caminho: `/blog` — Componente: `Blog` — Arquivo: `src/pages/Blog.tsx`
- Caminho: `/blog/:slug` — Componente: `BlogPost` — Arquivo: `src/pages/BlogPost.tsx`
- Caminho: `*` (catch-all) — Componente: `NotFound` — Arquivo: `src/pages/NotFound.tsx`

---

## 7. Pasta public/

| Arquivo            | Tamanho |
|--------------------|---------|
| favicon.ico        | 7.645 B |
| favicon.png        | 1.638 B |
| llms.txt           | 2.420 B |
| og-image-home.jpg  | 31.566 B |
| placeholder.svg    | 3.253 B |
| robots.txt         | 98 B    |

Checklist:
- ✅ robots.txt
- ❌ sitemap.xml (não está em `public/` — é gerado dinamicamente pelo plugin Vite em dev e gravado em `dist/sitemap.xml` no build)
- ✅ favicon.ico
- ❌ _redirects
- ❌ .htaccess

---

## 8. Conteúdo de robots.txt e sitemap.xml

`public/robots.txt`:

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://acelero.vc/sitemap.xml
```

`public/sitemap.xml`: ARQUIVO NÃO EXISTE como estático. É gerado pelo `sitemapPlugin()` em `vite.config.ts`:
- Em dev: middleware responde em `/sitemap.xml`.
- Em build: gravado em `dist/sitemap.xml` no hook `closeBundle`.

---

## 9. Páginas (src/pages) — primeiras 30 linhas

### src/pages/Index.tsx

```typescript
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { About } from "@/components/landing/About";
import { Method } from "@/components/landing/Method";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Mentors } from "@/components/landing/Mentors";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { FAQ } from "@/components/landing/FAQ";
import { JsonLd } from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://acelero.vc/#organization",
  "name": "Acelero",
  "alternateName": "Acelero.vc",
  "url": "https://acelero.vc",
  "logo": "https://acelero.vc/logo.png",
  "description": "Mentoria comercial especializada para clínicas de saúde e odontológicas. Método A.C.E.L.E.R.O para estruturar área comercial e aumentar faturamento.",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Lucas Rocha",
    "jobTitle": "Consultor Comercial e Mentor de Vendas para Clínicas de Saúde",
    "url": "https://acelero.vc/sobre",
```
Usa `<Helmet>` ✅, `JsonLd` ✅.

### src/pages/Sobre.tsx

```typescript
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { Linkedin, Instagram, Award, Users, BarChart3, Phone, FileText, Target } from "lucide-react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucas Rocha",
  "jobTitle": "Consultor Comercial e Mentor de Vendas para Clínicas de Saúde",
  "url": "https://acelero.vc/sobre",
  "image": lucasRochaImage,
  "worksFor": { "@id": "https://acelero.vc/#organization" },
  "knowsAbout": [
    "Gestão comercial de clínicas",
    "Treinamento de equipes de vendas",
    "CRM para clínicas",
    "Captação de pacientes",
    "Scripts de atendimento",
    "Indicadores comerciais"
  ],
  "sameAs": [
    "https://www.instagram.com/acelero.vc/",
    "https://www.linkedin.com/in/lucasgrocha"
  ]
};
```
Usa `<Helmet>` ✅, `JsonLd` ✅.

### src/pages/Mentoria.tsx

```typescript
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { Target, Users, Wrench, Crown, Cog, Rocket, Flame } from "lucide-react";

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Mentoria A.C.E.L.E.R.O",
  "description": "Programa de transformação comercial para clínicas de saúde com 7 fases: Alinhamento Estratégico, Captação de Leads, Estrutura Comercial, Liderança Comercial, Engrenagem de Vendas, Rampagem Comercial e Ousadia para Escalar.",
  "provider": { "@id": "https://acelero.vc/#organization" },
  "educationalLevel": "Professional",
  "audience": {
    "@type": "Audience",
    "audienceType": "Gestores e proprietários de clínicas de saúde e odontológicas"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P6M",
    "courseSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "P2W",
      "repeatCount": 16
    }
  }
};
```
Usa `<Helmet>` ✅, `JsonLd` ✅.

### src/pages/Blog.tsx

```typescript
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";
import { Link, useSearchParams } from "react-router-dom";
import { Clock, X } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { sortPostsByDateDesc, slugify } from "@/lib/dateUtils";
import { useMemo } from "react";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://acelero.vc/blog" }
  ]
};
```
Usa `<Helmet>` ✅, `JsonLd` ✅, canonical self-referencing ✅.

### src/pages/BlogPost.tsx

```typescript
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Home } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";
import { JsonLd } from "@/components/JsonLd";
import { ptDateToISO, sortPostsByDateDesc, slugify, estimateReadTime, countWords } from "@/lib/dateUtils";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { MarkdownRenderer, extractHeadings } from "@/components/blog/MarkdownRenderer";
import { BlogTOC } from "@/components/blog/BlogTOC";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { useMemo } from "react";
```
Usa `<Helmet>` ✅, `JsonLd` ✅.

### src/pages/NotFound.tsx

```typescript
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada | Acelero</title>
        <meta name="robots" content="noindex" />
      </Helmet>
```
Usa `<Helmet>` ✅, `noindex` ✅.

---

## 10. SEO e Prerender

- **Lib SEO**: `react-helmet-async@^3.0.0` (declarado em `package.json`, `HelmetProvider` aplicado em `src/App.tsx`, `<Helmet>` usado em todas as páginas). Não usa `react-helmet`, `@unhead/react` ou similares.
- **SSR / SPA**: É **puramente SPA** — Vite + React + react-router-dom. Não há servidor Node, não há SSR, não há `renderToString`.
- **Prerender / SSG**: ❌ **Nenhuma** configuração de prerender, static-generation, `vite-plugin-prerender`, `react-snap`, etc. Existe apenas a tag `<meta name="fragment" content="!">` em `index.html` (legacy AJAX crawling) e o sitemap dinâmico.
- **Canonical URL**:
  - `index.html`: `<link rel="canonical" href="https://acelero.vc/" />`
  - `src/pages/Blog.tsx`: `<link rel="canonical" href="https://acelero.vc/blog" />`
  - As demais páginas (`Sobre`, `Mentoria`, `BlogPost`) também definem canonical próprios via `<Helmet>` (verificar arquivos individuais — já confirmado por edições anteriores deste projeto).

---

## 11. Configurações adicionais

### tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "noImplicitAny": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "paths": {
      "@/*": ["./src/*"]
    },
    "skipLibCheck": true,
    "strictNullChecks": false
  },
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          light: "hsl(var(--cyan-light))",
          dark: "hsl(var(--cyan-dark))",
          foreground: "hsl(var(--cyan-foreground))",
        },
        // + secondary, destructive, muted, accent, popover, card (todos via HSL vars)
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-cyan': 'var(--gradient-cyan)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-dark': 'var(--gradient-dark)',
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'cyan': 'var(--shadow-cyan)',
        'lift': 'var(--shadow-lift)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // keyframes + animations: accordion-down/up, fade-in-up, fade-in, scale-in,
      // slide-in-right, glow, cinematic-reveal
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### .env.example

ARQUIVO NÃO EXISTE.

---

## 12. Scripts de build

Comando: `npm run build` → executa `vite build`.

Saída esperada (estrutura):

```text
dist/
├── index.html                  # HTML estático com meta tags do index.html original
├── sitemap.xml                 # gerado pelo sitemapPlugin().closeBundle()
├── favicon.ico
├── favicon.png
├── llms.txt
├── og-image-home.jpg
├── placeholder.svg
├── robots.txt
└── assets/
    ├── index-[hash].js         # bundle principal
    ├── index-[hash].css        # CSS compilado (Tailwind)
    ├── Blog-[hash].js          # chunks lazy (Blog/BlogPost/Sobre/Mentoria)
    ├── BlogPost-[hash].js
    ├── Sobre-[hash].js
    ├── Mentoria-[hash].js
    └── (imagens/vídeos otimizados de src/assets/*)
```

Pasta gerada: **`dist/`** (padrão do Vite). Tudo em `public/` é copiado verbatim para `dist/`. O sitemap é gravado adicionalmente pelo plugin custom.

Log esperado no final do build:

```text
✅ sitemap.xml generated with N blog posts + 2 static pages
```

---

_Fim da auditoria._
