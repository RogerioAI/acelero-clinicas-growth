## Novo post de blog: "Como aumentar o faturamento da clínica"

Publicação seguindo exatamente o padrão visual e estrutural dos posts existentes (`Header`, `Footer`, hero com capa, autor, CTA inline, box "Sobre o autor", CTA box final, related posts, breadcrumb e Article JSON-LD).

### 1. Imagens

- **Capa do post** (`thumbnail`): gerar via `imagegen--generate_image` (modelo `standard`, 1200x630) → `src/assets/blog/faturamento-clinica-vendas.jpg`. Estilo dark, cyan/blue, minimalista, com gráfico ascendente + elemento de saúde — coerente com as demais capas.
- **Imagem inline (5 gargalos)**: copiar `user-uploads://faturamento_travado_gargalo_comercial_clinica.png` para `src/assets/blog/gargalos-comerciais-clinica.png`. Embutida no `content` na seção "Os 5 gargalos comerciais".

### 2. Conteúdo (`src/data/blogPosts.ts`)

Adicionar `id: 7` ao final do array `blogPosts` com:

- `title`: "Como aumentar o faturamento da clínica: o que ninguém te conta sobre vendas"
- `slug`: `como-aumentar-faturamento-clinica-vendas`
- `category`: `"Processos Comerciais"`
- `tags`: `["faturamento", "vendas", "processo comercial", "gestão de clínicas", "método ACELERO"]`
- `metaTitle`: "Como aumentar o faturamento da clínica: guia completo de vendas"
- `metaDescription`: "Descubra os 5 gargalos comerciais que travam o crescimento de clínicas e o passo a passo para estruturar pré-venda, venda e pós-venda. Método aplicado em +250 clínicas."
- `excerpt`: "A maioria das clínicas não fatura mais por falta de pacientes, mas por falta de processo. Veja os 5 gargalos comerciais e como destravar o crescimento."
- `thumbnail`: import da capa gerada
- `date`: "12 Mai 2026"
- `updatedAt`: "2026-05-12"
- `readTime`: "12 min"
- `keywords`: "como aumentar faturamento clínica, gestão comercial clínicas, vendas para clínicas, processo comercial odontologia, método ACELERO"
- `faq`: array com as 5 perguntas/respostas finais (para JSON-LD FAQPage)
- `content`: conteúdo do .md fornecido, com:
  - Resumo executivo, sumário e todas as seções preservados;
  - Imagem dos 5 gargalos como `<img src="..." alt="Os 5 gargalos comerciais que travam o faturamento da clínica" loading="lazy" />` inline (AIO/acessibilidade);
  - Substituir a frase "Agende uma Demonstração do Método..." por **CTA inline estilizado** (botão cyan, classes Tailwind) apontando para `https://diagnostico.acelero.vc/`, texto "Quero meu diagnóstico comercial gratuito" — mesmo padrão do post SPIN;
  - Remover a linha placeholder `![][image1]` original.

### 3. Tipo (`src/types/blog.ts`)

Adicionar campo opcional:
- `faq?: { question: string; answer: string }[]`

### 4. SEO / AEO / GEO / AIO (`src/pages/BlogPost.tsx`)

Sem alterar layout, reforçar discoverability por IAs:

- **FAQPage JSON-LD condicional**: se `post.faq` existir, emitir `<JsonLd>` com `@type: "FAQPage"` e `mainEntity` mapeando perguntas/respostas (AEO — respostas diretas em SERP/IA).
- **ImageObject** dentro do `articleSchema`: trocar `image: post.thumbnail` por objeto `{ "@type": "ImageObject", url, width: 1200, height: 630 }` (AIO).
- **inLanguage / about / isAccessibleForFree**: adicionar ao `articleSchema` os campos `"inLanguage": "pt-BR"`, `"about": [{"@type":"Thing","name":"Gestão comercial de clínicas"}, {"@type":"Thing","name":"Método A.C.E.L.E.R.O"}]`, `"isAccessibleForFree": true` (GEO/AIO — semântica explícita).

Esses campos são genéricos e aproveitam todos os posts sem quebrar os existentes.

### 5. Sitemap

`vite.config.ts` já auto-descobre posts a partir de `blogPosts.ts` — nenhuma alteração em `src/sitemap/registry.ts`.

### Arquivos alterados/criados

- **Criar**: `src/assets/blog/faturamento-clinica-vendas.jpg` (capa gerada)
- **Criar**: `src/assets/blog/gargalos-comerciais-clinica.png` (cópia da imagem enviada)
- **Editar**: `src/data/blogPosts.ts` — novo post id 7 + imports
- **Editar**: `src/types/blog.ts` — campo opcional `faq`
- **Editar**: `src/pages/BlogPost.tsx` — FAQPage JSON-LD condicional, ImageObject, `inLanguage`/`about`/`isAccessibleForFree`

### O que NÃO muda

- Estrutura visual do post (idêntica aos demais).
- URL/slug de outros posts.
- Componentes de header, footer, related posts e CTA box global.
- Demais posts e páginas.
