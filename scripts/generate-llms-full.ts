// Generates public/llms-full.txt with full post bodies for LLM crawlers.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://acelero.vc";

const header = `# Acelero — Conteúdo completo para LLMs

> Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O: estruture pré-venda, venda e pós-venda e escale o faturamento com previsibilidade.

Fundador: Lucas Rocha — +15 anos em vendas, +250 clínicas atendidas.
Site: ${BASE_URL}
Diagnóstico gratuito: https://diagnostico.acelero.vc/

## Páginas principais

- Home (${BASE_URL}/): Mentoria comercial para clínicas, método A.C.E.L.E.R.O, depoimentos.
- Sobre (${BASE_URL}/sobre): Trajetória de Lucas Rocha, fundador da Acelero.
- Mentoria (${BASE_URL}/mentoria): Programa A.C.E.L.E.R.O em 7 fases, formato, investimento.
- Blog (${BASE_URL}/blog): Artigos sobre vendas, marketing e processos para clínicas.

## Método A.C.E.L.E.R.O — 7 fases

1. Alinhamento Estratégico — diagnóstico, metas e plano.
2. Canais de Aquisição — geração de leads qualificados.
3. Estrutura Comercial — papéis, processos, CRM.
4. Liderança Comercial — gestão de pessoas e indicadores.
5. Engrenagem de Vendas — scripts, SPIN Selling, follow-up.
6. Rampagem Comercial — ramp-up de novos vendedores.
7. Ousadia para Escalar — expansão sustentável.

---

# Artigos do blog

`;

const articles = blogPosts.map((p) => `## ${p.title}

URL: ${BASE_URL}/blog/${p.slug}
Categoria: ${p.category}
Data: ${p.date}
Tempo de leitura: ${p.readTime}

${p.metaDescription || p.excerpt || ""}

${p.content?.trim() || ""}

---
`).join("\n");

writeFileSync(resolve("public/llms-full.txt"), header + articles);
console.log(`llms-full.txt written (${blogPosts.length} articles)`);
