import { BlogPost } from "@/types/blog";
import noShowImage from "@/assets/blog/no-show-clinica.jpg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "No-show na clínica: 5 táticas para reduzir faltas em até 30%",
    slug: "no-show-clinica-reduzir-faltas-ate-30",
    category: "Processos Comerciais",
    tags: ["no-show", "agenda", "odontologia", "mentoria comercial"],
    metaTitle: "No-show na clínica: 5 táticas práticas para reduzir faltas",
    metaDescription: "Corte o no-show em até 30% com táticas simples: confirmação ativa, pré-consulta de valor, política clara e gestão da agenda. Inclui planilha de ROI.",
    thumbnail: noShowImage,
    excerpt: "Faltas do paciente drenam tempo, mídia e receita. Veja 5 táticas práticas para reduzir no-show e proteger o caixa da sua clínica.",
    date: "31 Out 2024",
    readTime: "5 min",
    content: `
## Por que o no-show é um problema de processo

Em clínicas com tráfego pago, cada ausência custa caro: mídia desperdiçada, equipe ociosa e receita perdida. O bom é que **faltas respondem a processo**, não a sorte.

### 1️⃣ Confirmação ativa em duas janelas

- **T-24h:** mensagem curta, com botões de **Confirmar** / **Remarcar**.
- **T-3h:** lembrete rápido, com localização e instruções simples.
- Ofereça remarcação em **1 clique**.

**Exemplo (WhatsApp):**

> Olá, [Nome]! Sua consulta com [Profissional] está marcada para **[data, hora]**.  
> • Responda **1** para confirmar  
> • Responda **2** para remarcar  
> Dúvidas? É só responder esta mensagem 💬

### 2️⃣ Pré-consulta que gera compromisso

Use SPIN Selling para aumentar valor percebido:

- **Situação:** "Qual é o seu objetivo principal com o tratamento?"
- **Problema:** "O que tem te impedido de resolver isso agora?"
- **Implicação:** "Se adiar, isso pode agravar o quadro. Isso te preocupa?"
- **Necessidade:** "Se montarmos um plano claro, te ajuda a avançar?"

### 3️⃣ Política de remarcação clara

- Remarcação sem custo até **24h antes**.
- Após esse prazo, incluir **fila de espera** ou **crédito de sinal**.
- Envie a política junto da confirmação inicial.

### 4️⃣ Gestão dinâmica da agenda

- **Dupla janela** para horários curtos.
- **Lista de espera ativa.**
- **Encaixes estratégicos** para retorno e ajustes.

### 5️⃣ Métricas essenciais

| Métrica | Meta inicial |
|---------|--------------|
| 1ª resposta | ≤ 5 min |
| Taxa de contato | ≥ 70% |
| Agendamentos/Leads | ≥ 45% |
| Show-rate | +10 p.p. |
| Vagas realocadas | ≥ 60% |

---

## Próximos passos

Implementar essas táticas pode reduzir seu no-show significativamente e proteger o investimento em mídia paga. A chave está em transformar processos manuais em sistemas automáticos e criar compromisso desde o primeiro contato.

**Quer ajuda para implementar?** Nossa mentoria comercial já ajudou mais de 250 clínicas a estruturar processos que aumentam conversão e reduzem faltas.
    `,
  },
];
