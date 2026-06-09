# Corrigir falha de publicação

## Diagnóstico

O erro nas imagens mostra duas pistas:
- `sh: bun: command not found`
- `build failed with exit status 1: upOptions.output.ma...` (truncado)

Causa raiz: o `package.json` usa `bun run gen:seo` nos hooks `predev` e `prebuild`. O ambiente de deploy da Lovable roda `npm`, não `bun`. Quando `prebuild` falha, o `vite build` nem chega a rodar e a publicação quebra.

Além disso, o `postbuild` chama `tsx scripts/prerender.ts`, que depende do Chromium do Puppeteer — esse binário não está disponível no ambiente de deploy e travaria o build mesmo se chegasse lá.

## Correções

1. **`package.json`** — trocar `bun run gen:seo` por `npm run gen:seo` em `predev` e `prebuild`.
2. **`package.json`** — remover o hook `postbuild` (prerender com Puppeteer). O Chromium não existe no deploy e o script só funcionaria em ambiente local. Mantemos o arquivo `scripts/prerender.ts` no repo caso seja útil rodar manualmente no futuro, mas ele deixa de bloquear o deploy.
3. Manter `gen:seo` (sitemap, rss, llms-full) — gera apenas arquivos estáticos via `tsx`, funciona com `npm`.

## Impacto SEO

- Sitemap, RSS, llms.txt, llms-full.txt, schemas JSON-LD, robots.txt: continuam 100% funcionando — eles não dependiam do prerender.
- O prerender build-time fica desativado no deploy (ele dependia do Puppeteer, que não está disponível). Crawlers modernos do Google, Bing, ChatGPT, Perplexity e Claude já executam JS, então o impacto é pequeno; o conteúdo crítico já está em meta tags + JSON-LD no `index.html` e no `llms-full.txt`.
- Se no futuro quiser prerender real, alternativa gratuita é gerar HTML estático com um SSG (ex.: migrar pra `vite-react-ssg`) — fica como opção futura, fora do escopo desse fix.

## Arquivos tocados

```text
package.json   (trocar bun→npm em predev/prebuild; remover postbuild)
```

Responda "pode ir" para aplicar o fix.
