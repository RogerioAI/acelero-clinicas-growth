## Objetivo
Publicar o 12º artigo do blog — "Pós-venda em clínica: como transformar paciente satisfeito em receita recorrente e indicação previsível" — seguindo exatamente o padrão dos posts anteriores, com cobertura completa de SEO, GEO, AEO e AIO.

## O que será feito

### 1. Imagens (2) via `imagegen` em `src/assets/blog/`
- `pos-venda-clinica-relacionamento.jpg` — hero. Fotografia realista: recepcionista/CRC de clínica ligando para paciente, ambiente clínico moderno em tons cyan/blue, mesmo estilo dos posts anteriores. Alt: "Profissional de pós-venda de clínica em contato com paciente para retorno e manutenção".
- `pos-venda-3-frentes.png` — infográfico interno das 3 frentes (Follow-up / Retenção e reativação / Indicação estruturada), mesmo estilo dos infográficos anteriores. Alt: "As 3 frentes do pós-venda estruturado em clínica: follow-up, retenção e reativação, indicação".

### 2. Novo post em `src/data/blogPosts.ts` (id: 12, no topo)
Campos do tipo `BlogPost`:
- **title**: "Pós-venda em clínica: como transformar paciente satisfeito em receita recorrente e indicação previsível"
- **slug**: `pos-venda-clinica-receita-recorrente-indicacao-previsivel`
- **category**: "Vendas e Processos"
- **tags**: ["pós-venda", "retenção de pacientes", "indicação", "LTV", "Método ACELERO", "gestão clínica"]
- **metaTitle**: "Pós-venda em clínica: receita recorrente e indicação previsível"
- **metaDescription**: descrição chamativa (~155 chars) baseada no resumo executivo.
- **excerpt**: resumo curto.
- **date**: "18 Jun 2026" (próxima data futura consecutiva depois de 11 Jun).
- **readTime**: "12 min".
- **keywords**: cauda longa (pós-venda clínica, retenção de pacientes, reativação, indicação previsível, LTV clínica, método ACELERO).
- **thumbnail**: import da hero.
- **content**: markdown fiel ao PDF, com:
  - Resumo executivo no topo (padrão GEO/AIO).
  - Sumário com links âncora.
  - H2/H3 semânticos idênticos ao PDF.
  - Tabela "LTV com/sem pós-venda" como tabela markdown.
  - Bloco `<figure>` com a imagem das 3 frentes no meio.
  - Link interno para `/mentoria` ao citar Método A.C.E.L.E.R.O e para `/sobre` quando pertinente.
  - CTA final para `https://diagnostico.acelero.vc/`.
  - Assinatura Lucas Rocha.
  - Frases curtas, sem long dashes (regra do projeto).
- **faq**: 4 perguntas frequentes do PDF (o que é / momento indicação / precisa CRM / reativar inativos) — gera `FAQPage` JSON-LD automático.

### 3. SEO / GEO / AEO / AIO — cobertura automática
Infraestrutura existente cobre tudo ao adicionar o post:
- `BlogPost.tsx`: title, meta description, canonical, hreflang, OG, Twitter Card, `Article` + `BreadcrumbList` JSON-LD, preload da hero.
- AEO: `FAQPage` JSON-LD via `faq[]`; `SpeakableSpecification` já presente.
- GEO/AIO: resumo executivo no topo + FAQ no fim + headings semânticos + `public/llms-full.txt` regenerado no prebuild.
- Sitemap (`vite.config.ts`) e RSS (`scripts/generate-rss.ts`) auto-descobrem o novo post.

Nenhuma alteração adicional de config.

### 4. Verificação
- Confirmar que `blogPosts` compila (evitar erros de template literal do post anterior).
- Confirmar imports das imagens.
- Confirmar CTA final e assinatura.

## Arquivos alterados
- `src/data/blogPosts.ts` (adiciona entrada id 12 + 2 imports)
- `src/assets/blog/pos-venda-clinica-relacionamento.jpg` (novo)
- `src/assets/blog/pos-venda-3-frentes.png` (novo)
