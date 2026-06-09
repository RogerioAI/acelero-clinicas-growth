# Plano: melhorias de performance mobile

Diagnóstico do Lighthouse: **LCP 13,9s**, **FCP 1,9s**, Speed Index 4,4s. Causas principais identificadas no código:

- `hero-mentors.png` com **2 MB** (PNG) é carregado com `fetchpriority="high"` e domina o LCP.
- `hero-video.mp4` (1,8 MB) faz autoplay no Hero, competindo pela banda.
- `hero-background.png` (1,6 MB) e `aline-preisler.png` (825 KB) também são pesados.
- Vídeos de testimonials (`bruno-thais` 14 MB, `natalia-palmier` 15 MB) são importados estaticamente em `Testimonials.tsx`, entrando no bundle inicial.
- GTM carregado no `<head>` sem `defer`.
- Sem `Cache-Control` longo (estática Lovable já cuida, mas podemos pré-conectar/pré-carregar correto).

## O que vou alterar

### 1. Hero (maior ganho de LCP)
- Trocar `hero-mentors.png` (2 MB) por versão **JPG otimizada** (~150 KB) — converter via `sharp` em script e salvar como `hero-mentors.jpg`.
- Pré-carregar essa imagem no `index.html` com `<link rel="preload" as="image" fetchpriority="high">`.
- Mudar o `<video>` do Hero para `preload="none"` + `poster` da própria imagem hero, e só atribuir `src` após a imagem ter sido renderizada (montagem com `useEffect`/IntersectionObserver). Em mobile (≤768px) **não carregar o vídeo** — apenas a imagem estática. Isso elimina ~1,8 MB de tráfego mobile.
- Remover `hero-background.png` se não estiver em uso (verificar e excluir).

### 2. Imagens em geral
- Converter `aline-preisler.png` (825 KB) para JPG (~80 KB).
- Adicionar `loading="lazy"` e `decoding="async"` em todas as `<img>` abaixo da dobra (Testimonials, Mentors, Method, About) que ainda não tenham.
- Garantir `width`/`height` em todas as imagens (já existe na maioria) para evitar CLS.

### 3. Vídeos de testimonials (corte grande no bundle inicial)
- Trocar `import nataliaPalmierVideo from "@/assets/...mp4"` por **import dinâmico/lazy** dentro de um componente que só monta o `<video>` quando entra no viewport (IntersectionObserver).
- Adicionar `preload="none"` aos `<video>` de testimonials.

### 4. Render-blocking & cache
- Mover o script GTM para o fim do `<body>` com `defer` (ou usar `async`), mantendo a tag noscript. Mantém o tracking, mas libera a thread principal.
- Adicionar `<link rel="preload" as="video" ...>` **apenas** se decidirmos manter o hero-video em desktop.
- Garantir `font-display: swap` já está aplicado (Tailwind/Google Fonts já injetam — checar).

### 5. Vite build
- Adicionar `build.rollupOptions.output.manualChunks` simples (vendor split: react, radix-ui, framer-motion) para reduzir o tamanho do chunk inicial e melhorar cache de longo prazo.

## Arquivos editados

- `index.html` — preload da hero image, GTM com `defer` no fim do body.
- `src/components/landing/Hero.tsx` — JPG otimizado, vídeo lazy/desktop-only.
- `src/components/landing/Testimonials.tsx` — vídeos lazy com IntersectionObserver e `preload="none"`.
- `src/assets/hero-mentors.jpg` (novo) — versão otimizada da PNG.
- `src/assets/aline-preisler.jpg` (novo) — versão otimizada.
- `vite.config.ts` — `manualChunks` para vendor split.
- `src/components/landing/About.tsx`, `Mentors.tsx`, `Method.tsx` — `loading="lazy"` + `decoding="async"` onde faltar.

## Resultado esperado

- LCP mobile: de ~13,9s para **< 4s** (preload da imagem otimizada + remoção do vídeo no mobile).
- Bundle inicial: queda significativa (testimonials videos saem do JS principal).
- Speed Index: queda esperada para **< 2,5s**.
- Performance score mobile: alvo **85+**.

Posso seguir?
