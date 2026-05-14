## Plano de atualização da página /sobre

Todas as mudanças ficam concentradas em **um único arquivo**: `src/pages/Sobre.tsx`. Nenhuma outra rota, asset ou componente compartilhado precisa ser tocado.

### Arquivo alterado

- `src/pages/Sobre.tsx`

### Mudanças dentro de `src/pages/Sobre.tsx`

1. **Helmet (SEO/AIO/Twitter)** — substituir title, description, og:*, twitter:* pelos textos exatos do briefing. Adicionar `<meta name="keywords">`, `<meta name="author" content="Lucas Rocha">`, `<meta name="robots" content="index, follow">`. Canonical já existe e fica.

2. **JSON-LD — Person enriquecido** — substituir o `personSchema` atual pela versão nova com `@id`, `alternateName`, `alumniOf` (UNICURITIBA + FAEL), `knowsAbout` ampliado, `sameAs` ampliado (LinkedIn, Instagram, YouTube Acelero, YouTube Clínica Sem Caos, Spotify). Manter o `breadcrumbSchema`.

3. **JSON-LD — FAQPage** — novo objeto com as 5 perguntas/respostas do briefing, renderizado via `<JsonLd>` junto aos demais.

4. **Bio (seção "Quem é Lucas Rocha")** — substituir os 3 parágrafos atuais pelos 4 novos parágrafos (OralGift → Sistema Vitto → pandemia → Método A.C.E.L.E.R.O em 2025). Stats 250+/15+/7 permanecem intactos.

5. **Novo bloco "Resultado que fala por si"** (após Especialidades) — fundo escuro no estilo `bg-primary` / cards de depoimentos. Texto da Dra. Natalia Palmier + número grande `600%` em `text-cyan` + subtexto.

6. **Novo bloco "Clínica Sem Caos: o podcast para donos de clínica"** (após o resultado) — fundo claro, texto descritivo, dois botões lado a lado (`variant="outline"`) linkando Spotify e YouTube com `target="_blank" rel="noopener noreferrer"`.

7. **Novo bloco de propósito / citação** (após o podcast, antes do CTA final) — `<blockquote>` com fundo levemente diferenciado (`bg-muted/50` ou similar), aspas grandes decorativas, assinatura "Lucas Rocha, fundador da Acelero.vc".

### Ordem final das seções

```text
Hero (foto + nome + sociais)
Bio "Quem é Lucas Rocha" (texto novo + stats)
Especialidades (mantido)
Resultado que fala por si        ← novo
Clínica Sem Caos (podcast)        ← novo
Propósito (citação)               ← novo
CTA "Agendar Diagnóstico" (mantido)
```

### Detalhes técnicos

- Usar tokens semânticos (`bg-primary`, `text-cyan`, `text-cyan-dark`, `bg-muted/50`, `text-muted-foreground`) — sem cores hardcoded.
- Botões do podcast: `<Button asChild variant="outline" size="lg">` com `<a href=... target="_blank" rel="noopener noreferrer">`.
- FAQ JSON-LD entra como terceiro `<JsonLd data={...} />` no topo do JSX retornado.
- Contraste do `600%`: usar `text-cyan` sobre fundo escuro (`bg-primary`) — suficiente para WCAG no tamanho display.
- Nada em `index.html`, `App.tsx`, `PersonSchema.tsx` (que é sitewide) ou outros componentes precisa mudar.

Confirma que posso executar?