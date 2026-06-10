## Problema

O Google Search Console aponta que `https://acelero.vc/assets/hero-video-*.mp4` (o vídeo de fundo do Hero) foi detectado como conteúdo de vídeo, mas a home não é uma "página de exibição de vídeo" (o vídeo é apenas decorativo de background). Por isso o Google não indexa.

Esse vídeo é puramente decorativo (autoplay, muted, loop, sem controles, atrás de um overlay escuro). Não faz sentido tentar indexá-lo como vídeo de conteúdo — a solução correta é **sinalizar ao Google que ele não deve ser tratado como vídeo indexável**.

## Solução

### 1. Bloquear o arquivo de vídeo no `public/robots.txt`
Adicionar antes do `Sitemap:`:

```
# Vídeo decorativo do hero — não indexar como conteúdo de vídeo
User-agent: Googlebot-Video
Disallow: /assets/hero-video-

User-agent: *
Disallow: /assets/hero-video-
```

Isso faz o Googlebot-Video parar de rastrear o arquivo, removendo o aviso no próximo ciclo.

### 2. Remover sinais de vídeo do markup do `<video>` no Hero
No `src/components/landing/Hero.tsx`, adicionar atributos que reforçam que é background decorativo:
- `aria-hidden="true"` no `<video>`
- `disablePictureInPicture`
- `disableRemotePlayback`
- `tabIndex={-1}`

Esses atributos não mudam aparência nem performance, apenas reforçam semanticamente que o elemento é decorativo (Google usa heurísticas que consideram esses sinais).

### O que NÃO mudar
- Não remover o vídeo do site (faz parte da experiência visual).
- Não criar VideoObject JSON-LD (seria contraproducente — sinalizaria que queremos indexação).
- Não alterar SEO de outras páginas, design ou conteúdo.

## Arquivos afetados
- `public/robots.txt` — adicionar Disallow do arquivo do hero
- `src/components/landing/Hero.tsx` — adicionar atributos decorativos ao `<video>`

## Validação
Após o deploy, no Search Console clicar em **"Validar a correção"** no relatório. Em poucos dias o aviso some pois o Googlebot-Video deixa de rastrear o arquivo.
