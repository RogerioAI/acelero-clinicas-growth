## Objetivo
Evitar "áudio fantasma" nos depoimentos em vídeo da seção "Mais de 250 clínicas impactadas": o som deve parar automaticamente quando o vídeo terminar ou quando a pessoa mudar para outro depoimento.

## Escopo
Somente `src/components/ui/circular-testimonials.tsx`. Nenhuma mudança de layout, textos ou outros componentes.

## Comportamento novo
1. **Ao terminar o vídeo** — o vídeo é automaticamente mutado (ícone volta para "Ativar som") e o autoplay do carrossel volta a rodar.
2. **Ao trocar de depoimento** (setas, teclado ou autoplay) — todos os vídeos que não são o ativo são mutados e pausados, garantindo que nenhum áudio continue tocando em segundo plano.

## Detalhes técnicos
- Adicionar `onEnded` no `<video>` (linha ~256) que faz `setMutedStates` marcando o índice atual como `true` e pausa o vídeo.
- Adicionar um `useEffect` dependente de `activeIndex` que percorre `videoRefs.current` e, para cada vídeo cujo índice for diferente do ativo, seta `muted = true`, pausa e reinicia (`currentTime = 0`) — além de atualizar `mutedStates` para refletir o ícone correto.
- Manter a lógica atual de pausa do autoplay quando o vídeo ativo está com som.

## Arquivos alterados
- `src/components/ui/circular-testimonials.tsx`