## Ajustes no post "Como fechar mais orçamentos na clínica"

### 1. Refazer a capa no padrão dos demais posts

A capa atual ficou escura (consultório sombrio, dentista de máscara) e destoa do grid do blog, onde todas as capas têm:
- Iluminação clara e ambiente bright
- Paleta cyan/azul claro com brancos
- Cena clínica moderna e arejada

**Ação:** regerar `src/assets/blog/fechar-orcamentos-clinica.jpg` (1216×640, JPG) em modo `standard`, com cena: dentista sorridente apresentando plano de tratamento em tablet para paciente, em consultório odontológico claro, paredes brancas e detalhes cyan, luz natural, estilo fotográfico realista, sem texto, no mesmo padrão visual dos outros covers do blog.

### 2. Inserir as 2 imagens internas que estavam no .md original

O .md de origem trazia `![][image1]` (linha 88) e `![][image2]` (linha 154) embutidas como base64. Foram removidas na primeira versão; agora serão geradas como JPGs reais e referenciadas no `content` via Markdown padrão (`![alt](url)` — o `MarkdownRenderer` já suporta via `startsWithHtmlBlock` fallback, mas para garantir vamos inserir como `<figure>` HTML inline para passar pelo passthrough do renderer).

**Imagens a gerar (mesmo padrão visual claro/cyan):**
- `src/assets/blog/fechar-orcamentos-apresentacao-valor.jpg` (1216×640) — Dentista apresentando plano de tratamento em tablet para paciente atento, sorridente, consultório claro, paleta cyan/branco. **Posição:** entre Etapa 2 (Apresentação de valor) e Etapa 3 (Manejo de objeções).
- `src/assets/blog/fechar-orcamentos-followup.jpg` (1216×640) — Recepcionista de clínica fazendo follow-up por celular/WhatsApp, sorrindo, ambiente claro, paleta cyan/branco. **Posição:** antes da seção "Erros que derrubam a conversão".

**Inserção no content:** dois blocos HTML inline (o `MarkdownRenderer` passa `<figure>` direto):

```html
<figure class="my-10">
  <img src="<url-importada>" alt="..." class="w-full h-auto rounded-xl" loading="lazy" />
</figure>
```

### 3. Arquivos editados

- `src/assets/blog/fechar-orcamentos-clinica.jpg` — regenerada
- `src/assets/blog/fechar-orcamentos-apresentacao-valor.jpg` — novo
- `src/assets/blog/fechar-orcamentos-followup.jpg` — novo
- `src/data/blogPosts.ts` — 2 novos imports + 2 blocos `<figure>` no content
- regerar `public/sitemap.xml`, `public/rss.xml`, `public/llms-full.txt` via `npm run gen:seo`

Posso seguir?
