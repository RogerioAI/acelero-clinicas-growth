## Problema
No componente `CircularTestimonials`, o `<video>` está com o atributo `loop`. Isso faz o vídeo reiniciar automaticamente ao terminar, então o evento `ended` nunca dispara e o áudio fica se repetindo indefinidamente.

## Correção
Tornar o `loop` condicional: só ativar quando o vídeo está mutado (modo carrossel silencioso). Quando o usuário desmuta, o vídeo toca uma vez, dispara `ended` e o handler existente:
1. muta o vídeo atual,
2. avança para o próximo depoimento do carrossel,
3. o `useEffect` de troca já pausa/reinicia os demais vídeos, cortando o áudio.

## Alteração
- `src/components/ui/circular-testimonials.tsx`, linha ~287: trocar `loop` por `loop={mutedStates[index]}` no `<video>`.

Nenhuma outra mudança de comportamento, layout ou lógica.