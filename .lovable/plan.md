## Melhorias de fallback SEO no `index.html`

Adicionar meta tags estáticas no `index.html` para que crawlers que não executam JavaScript (ou leem antes do React montar) já recebam descrição e imagem padrão do site.

### Alterações em `index.html`

Dentro do `<head>`, adicionar:

1. **Meta description global** (fallback para o site institucional)
   ```html
   <meta name="description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O: estruture pré-venda, venda e pós-venda e escale o faturamento com previsibilidade." />
   ```

2. **Robots padrão**
   ```html
   <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
   ```

3. **Canonical fallback**
   ```html
   <link rel="canonical" href="https://acelero.vc/" />
   ```

4. **Open Graph fallback** (usado quando o React Helmet ainda não substituiu)
   ```html
   <meta property="og:type" content="website" />
   <meta property="og:site_name" content="Acelero" />
   <meta property="og:locale" content="pt_BR" />
   <meta property="og:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
   <meta property="og:description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O para escalar faturamento com previsibilidade." />
   <meta property="og:url" content="https://acelero.vc/" />
   <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   ```

5. **Twitter Card fallback**
   ```html
   <meta name="twitter:card" content="summary_large_image" />
   <meta name="twitter:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
   <meta name="twitter:description" content="Mentoria comercial para clínicas médicas e odontológicas. Método A.C.E.L.E.R.O para escalar faturamento com previsibilidade." />
   <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />
   ```

### Por que importa

- Garante preview correto no WhatsApp, LinkedIn, X, Slack mesmo se o scraper não executar JS.
- Melhora indexação inicial do Google quando o bot pega o HTML estático antes do hydration.
- Não conflita com `react-helmet-async`: nas páginas internas, o Helmet sobrescreve esses valores.

### Arquivos alterados
- `index.html` (apenas adições no `<head>`)

Nenhum outro arquivo é tocado. Sem mudança de comportamento, só metadados.