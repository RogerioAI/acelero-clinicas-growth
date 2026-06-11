## Objetivo
Publicar o 11º artigo do blog — "Equity na odontologia: como aplicar os conceitos de Flávio Augusto para aumentar o valor da sua clínica" — seguindo exatamente a estrutura dos posts existentes (id 1–10) com cobertura completa de SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) e AIO (AI Indexing Optimization).

## O que será feito

### 1. Imagens (2)
Gerar via `imagegen` em `src/assets/blog/`:
- `equity-odontologia-crescimento.jpg` — imagem principal (hero). Alt: "Dentista empresário analisando indicadores de crescimento, faturamento e valor de mercado da clínica odontológica".
- `equity-roteiro-90-dias.png` — imagem interna do roteiro. Alt: "Roteiro de 90 dias para construir valor comercial em uma clínica odontológica com o Método A.C.E.L.E.R.O".

Padrão visual idêntico aos blogs anteriores (mesmo estilo dos `pre-venda-*` e `fechar-orcamentos-*`).

### 2. Novo post em `src/data/blogPosts.ts`
Adicionar entrada `id: 11` no início do array (ordem de exibição é por data) com todos os campos do tipo `BlogPost`:

- **title**: "Equity na odontologia: como aplicar os conceitos de Flávio Augusto para aumentar o valor da sua clínica"
- **slug**: `equity-flavio-augusto-clinica-odontologica-metodo-acelero`
- **category**: "Gestão e Estratégia"
- **tags**: ["equity", "valuation", "gestão clínica", "Flávio Augusto", "Método ACELERO", "odontologia"]
- **metaTitle**: "Equity na odontologia: como aumentar o valor da sua clínica"
- **metaDescription**: a fornecida no documento
- **excerpt**: resumo curto chamativo
- **date**: "11 Jun 2026" (mantém padrão de datas futuras consecutivas)
- **readTime**: "13 min" (estimado pelo wordcount)
- **keywords**: string com keywords de cauda longa (equity odontologia, valuation clínica, Flávio Augusto clínica, método ACELERO, valor de mercado clínica, etc.)
- **thumbnail**: import da nova imagem principal
- **content**: markdown completo do documento, convertido seguindo o mesmo formato dos posts anteriores:
  - link interno para `/mentoria` ao mencionar Método A.C.E.L.E.R.O
  - link interno para `/sobre` quando relevante
  - bloco `<figure>` com a imagem interna no meio do conteúdo (seção "Roteiro 90 dias")
  - CTA final com link para `https://diagnostico.acelero.vc/`
  - assinatura do Lucas Rocha
  - sem long dashes, frases curtas (regra do projeto)
- **faq**: array com as 8 perguntas frequentes do documento (vai gerar `FAQPage` JSON-LD automaticamente via `BlogPost.tsx`)

### 3. SEO / GEO / AEO / AIO — cobertura automática
A infraestrutura existente já cobre tudo ao adicionar o post:
- **SEO técnico**: `BlogPost.tsx` injeta título, meta description, canonical, hreflang, OG, Twitter Card, `Article` JSON-LD, `BreadcrumbList` JSON-LD, preload da imagem hero.
- **AEO**: FAQ schema (`FAQPage` JSON-LD) gerado pelo array `faq`. `SpeakableSpecification` já presente.
- **GEO/AIO**: o resumo executivo no topo + FAQ no fim + headings semânticos (H2/H3) tornam o conteúdo legível para LLMs. `scripts/generate-llms-full.ts` (rodado no prebuild) inclui automaticamente o novo post em `public/llms-full.txt`.
- **Sitemap**: `vite.config.ts` auto-descobre posts de `blogPosts.ts` no prebuild → entra em `public/sitemap.xml`.
- **RSS**: `scripts/generate-rss.ts` regenera `public/rss.xml` no prebuild incluindo o novo item.

Nenhuma mudança adicional em config é necessária.

### 4. Verificação
Após edição, rodar uma busca rápida para confirmar:
- post aparece em `blogPosts`
- imagens importadas corretamente
- nota editorial final preservada (disclaimer sobre Flávio Augusto)

## Arquivos alterados
- `src/data/blogPosts.ts` (adiciona entrada + 2 imports de imagem)
- `src/assets/blog/equity-odontologia-crescimento.jpg` (novo)
- `src/assets/blog/equity-roteiro-90-dias.png` (novo)
