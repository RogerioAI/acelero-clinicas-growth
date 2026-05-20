## Objetivo

Publicar o 9º post do blog ("Pré-venda em clínica: o que é, como estruturar e por que ela define se você fatura ou não"), seguindo exatamente o padrão dos posts existentes (capa, autor, CTA de diagnóstico, FAQ, JSON-LD), e otimizado para SEO tradicional + AEO/GEO/AIO (busca por IAs como ChatGPT, Perplexity, Gemini).

## Assets

1. **Capa do post** — gerar via `imagegen` em `src/assets/blog/pre-venda-clinica.jpg` (1920×1080, estilo dark/cyan coerente com o brand, conceito: funil comercial / WhatsApp / agendamento).
2. **Imagem 1 (3 funções da pré-venda)** — copiar `user-uploads://3_funções_da_pre-venda_em_clinicas.png` → `src/assets/blog/pre-venda-3-funcoes.png`.
3. **Imagem 2 (3 toques de confirmação)** — copiar `user-uploads://3_estrategias_que_reduzem_faltas_na_clinica.png` → `src/assets/blog/pre-venda-3-toques-confirmacao.png`.

As duas imagens serão importadas como ES6 e embutidas no `content` em markdown nos pontos `![][image1]` e `![][image2]` do texto original (substituídas por `![alt descritivo](url)` com `loading="lazy"` via tag `<img>` quando necessário para preservar atributos).

## Conteúdo

Adicionar novo objeto em `src/data/blogPosts.ts`:

- `id: 9`
- `slug: "pre-venda-clinica-como-estruturar"`
- `category: "Processos Comerciais"`
- `tags: ["pré-venda", "SDR", "WhatsApp", "no-show", "agendamento", "mentoria comercial"]`
- `date: "20 Mai 2026"`, `updatedAt: "2026-05-20"`
- `readTime: "11 min"`
- `thumbnail`: capa gerada
- `excerpt`: 1 frase de gancho (versão curta do resumo executivo)
- `content`: texto do .md adaptado (h2 = `##`, h3 = `###`), imagens nos pontos corretos, sem long-dash (regra do projeto), com o CTA final apontando para `https://diagnostico.acelero.vc/` (não para `/metodo`)
- `faq`: 5 perguntas do bloco "Perguntas frequentes" do .md (já vêm prontas no texto)

## SEO / AEO / GEO / AIO

Otimizações para busca tradicional + busca por IAs:

**SEO clássico (campos já existentes):**
- `metaTitle`: ≤60 chars — `"Pré-venda em clínica: como estruturar e faturar mais"`
- `metaDescription`: ≤155 chars com keyword principal
- `keywords`: "pré-venda clínica, SDR clínica odontológica, qualificação de lead, no-show, agendamento WhatsApp, mentoria comercial"
- Slug curto e descritivo

**AEO (Answer Engine Optimization):**
- Resumo executivo no topo (já vem no .md) — responde direto a "o que é pré-venda em clínica"
- Headings em forma de pergunta/resposta
- `faq` populado → renderiza `BlogFAQ` + injeta `FAQPage` JSON-LD (já implementado em `BlogPost.tsx`)
- Frases curtas, declarativas (formato ideal para featured snippet)

**GEO (Generative Engine Optimization) / AIO (AI Optimization):**
- Definições objetivas e citáveis (1 frase, sujeito + verbo + objeto) que IAs extraem como citação
- Listas numeradas com dados concretos (% de no-show, R$ de custo, prazos em dias) — IAs preferem citar fontes com números específicos
- Bloco de atribuição no final ("Texto produzido pela Acelero. Lucas Rocha…") — sinaliza autoridade
- `Article` JSON-LD já inclui `author`, `publisher`, `wordCount`, `speakable`, `about` (BlogPost.tsx)
- `BreadcrumbList` JSON-LD já incluído
- Cobertura de intenções de busca: "o que é", "como estruturar", "em quanto tempo", "quanto custa", "diferença entre" — todas presentes nas H2/H3 e FAQ

**Sem código novo necessário** para JSON-LD: `src/pages/BlogPost.tsx` já gera `Article`, `FAQPage` e `BreadcrumbList` automaticamente a partir dos campos do post. Sitemap também é auto-descoberto via `scripts/generate-sitemap` parseando `blogPosts.ts`.

## Arquivos afetados

- `src/assets/blog/pre-venda-clinica.jpg` (novo, gerado)
- `src/assets/blog/pre-venda-3-funcoes.png` (novo, copiado do upload)
- `src/assets/blog/pre-venda-3-toques-confirmacao.png` (novo, copiado do upload)
- `src/data/blogPosts.ts` (adiciona import dos 3 assets + objeto do post 9 no array)

Nada mais precisa ser editado: header, footer, autor, CTA de diagnóstico, related posts, JSON-LD, sitemap e blog index já consomem `blogPosts` automaticamente.
