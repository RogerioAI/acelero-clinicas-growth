## Diagnóstico

Após analisar o site depois das últimas atualizações (novo post "Pós-venda em clínica: como transformar pacientes em receita recorrente"), identifiquei que a infraestrutura de SEO/GEO/AEO/AIO está muito sólida (JSON-LD Article + FAQPage + BreadcrumbList, Helmet por rota, llms.txt/llms-full.txt, RSS, robots com liberação explícita para GPTBot/PerplexityBot/ClaudeBot etc.). Porém o novo post **não foi propagado** para os arquivos de descoberta. Isso derruba AEO/AIO justamente no conteúdo mais fresco.

## Correções necessárias

### 1. Sitemap (SEO — indexação)
`public/sitemap.xml` não contém a URL do novo post.
- Adicionar `<url>` para `https://acelero.vc/blog/pos-venda-clinica-receita-recorrente-indicacao-previsivel` com `lastmod`, `changefreq: monthly`, `priority: 0.7`.

### 2. RSS (AIO — descoberta por LLMs e leitores)
`public/rss.xml` não lista o novo post.
- Adicionar `<item>` no topo do feed com `title`, `link`, `guid`, `pubDate`, `description` e `category`, seguindo o padrão dos demais itens.

### 3. llms-full.txt (AIO — conteúdo consumido por LLMs)
O arquivo não inclui o conteúdo do novo post.
- Anexar seção com título, meta-descrição e corpo do post de pós-venda, no mesmo formato dos posts existentes.
- Atualizar `public/llms.txt` incluindo o link e resumo curto do novo post na lista "Blog".

### 4. Verificação de consistência (SEO/AEO)
- Confirmar que a página do novo post renderiza Article + FAQPage + BreadcrumbList (já herda de `BlogPost.tsx` — apenas validar visualmente).
- Manter o domínio `acelero.vc` em canonical/og:url/sitemap (é o domínio real; o scanner sugeriu o preview `.lovable.app`, mas isso seria regressão — vou ignorar essa sugestão específica).

## O que **não** vou mexer

- `index.html`, `robots.txt`, `PersonSchema`, JSON-LD sitewide — estão corretos e completos.
- Domínio canônico — permanece `acelero.vc`.
- Estrutura do post ou componentes de blog — sem mudanças de UI.

## Arquivos a editar

- `public/sitemap.xml`
- `public/rss.xml`
- `public/llms.txt`
- `public/llms-full.txt`
