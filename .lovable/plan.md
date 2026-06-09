## Objetivo

Publicar o novo artigo **"Como fechar mais orçamentos na clínica: o que separa quem converte de quem perde o paciente na consulta"** seguindo o mesmo padrão dos posts existentes, com cobertura completa de SEO, AEO (FAQ schema), GEO (foco Brasil/clínicas) e AIO (descoberta por IAs).

## Entendimento

- Conteúdo extenso (~214 linhas), com sumário, 4 etapas, manejo de objeções, roteiro e FAQ com 6 perguntas — perfeito para AEO.
- O texto referencia duas imagens (`![][image1]` e `![][image2]`) que precisarão ser geradas/removidas.
- Toda a infraestrutura SEO/AIO já existe (sitemap, rss, llms-full, JSON-LD Article/FAQ/Breadcrumb por rota) — basta adicionar o post no array que tudo se regenera no prebuild.

## Plano de execução

### 1. Imagem de capa
Gerar `src/assets/blog/fechar-orcamentos-clinica.jpg` (estilo coerente com os outros thumbs — paleta cyan/dark, profissional de saúde / consulta odonto-médica).

### 2. Imagens inline (image1, image2)
Substituir os marcadores `![][image1]` e `![][image2]` por:
- Opção A (recomendada): remover os marcadores e usar 2 blocos visuais textuais (callouts/quotes) já existentes no padrão do `MarkdownRenderer` — mantém leveza e evita custo de geração.
- Opção B: gerar 2 ilustrações temáticas adicionais.

Vou seguir a Opção A salvo objeção sua.

### 3. Novo post em `src/data/blogPosts.ts`
Adicionar objeto `BlogPost` com:
- `slug`: `como-fechar-mais-orcamentos-clinica-consulta`
- `category`: "Vendas e Conversão"
- `tags`: ["vendas", "conversão", "consulta", "fechamento", "objeções", "método ACELERO"]
- `metaTitle`: "Como fechar mais orçamentos na clínica" (<60 chars)
- `metaDescription`: ~150 chars otimizada com keyword principal
- `excerpt`: resumo executivo enxuto
- `date`: "09 Jun 2026" (segue padrão futuro-datado do projeto)
- `readTime`: "12 min"
- `keywords`: "fechar orçamentos clínica, conversão consulta, objeções paciente, taxa de conversão clínica, vendas odontologia"
- `content`: markdown completo (limpo dos links internos do Claude e dos placeholders de imagem)
- `faq`: 6 perguntas/respostas do bloco "Perguntas frequentes" → renderiza FAQPage schema automaticamente em `BlogPost.tsx`

### 4. Limpeza do conteúdo
- Remover links âncora apontando para `claude.ai/chat/...` no sumário.
- Manter os 2 links internos para `acelero.vc/metodo` (intralink SEO bom — mas verificar se a rota existe: provavelmente trocar para `/mentoria`).
- Normalizar travessões/aspas conforme regras de memória (sem long dashes).

### 5. SEO/AEO/GEO/AIO — automático via infra existente
Após adicionar o post, no `npm run dev`/`build`:
- `scripts/generate-sitemap.ts` → inclui a nova URL automaticamente.
- `scripts/generate-rss.ts` → publica no feed RSS.
- `scripts/generate-llms-full.ts` → entrega conteúdo completo para LLMs (GPTBot, ClaudeBot, PerplexityBot etc.).
- `BlogPost.tsx` (Helmet + JsonLd) → emite Article, BreadcrumbList e FAQPage JSON-LD, OG, Twitter, canonical, hreflang.

Nenhuma alteração de scripts/infra é necessária — está tudo pronto desde a última iteração.

## Arquivos a editar/criar

- **Criar**: `src/assets/blog/fechar-orcamentos-clinica.jpg` (imagem de capa)
- **Editar**: `src/data/blogPosts.ts` (adicionar import + novo objeto no array)

## Ganhos esperados

- **SEO**: nova URL indexável, sitemap + RSS atualizados, JSON-LD Article/Breadcrumb, OG e Twitter Cards corretos.
- **AEO** (Answer Engine Optimization): FAQPage schema com 6 Q&As + resumo executivo direto → forte candidato a featured snippet / People Also Ask.
- **GEO** (Generative Engine Optimization): linguagem objetiva, dados numéricos (10-15% vs 45-60%, 250 clínicas, R$ 50M), seções escaneáveis — formato que LLMs citam.
- **AIO** (AI Indexing): post entra em `llms-full.txt` automaticamente, lido por GPTBot/ClaudeBot/Perplexity já autorizados no `robots.txt`.

Posso prosseguir?
