import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é a Mentoria A.C.E.L.E.R.O?",
    answer: "É um programa de transformação comercial para clínicas de saúde com duração de 4 a 6 meses, sessões quinzenais, diagnóstico inicial, dashboards de indicadores, scripts de vendas e templates operacionais. O programa é dividido em 7 fases que cobrem desde alinhamento estratégico até escalabilidade do faturamento."
  },
  {
    question: "Para quem é a mentoria comercial da Acelero?",
    answer: "Para gestores e proprietários de clínicas de saúde e odontológicas que querem estruturar sua área comercial, aumentar o faturamento com previsibilidade e parar de depender exclusivamente de indicações."
  },
  {
    question: "Quanto tempo dura a mentoria?",
    answer: "O programa tem duração de 4 a 6 meses com sessões quinzenais. São mais de 16 encontros divididos em 7 fases progressivas, cada uma com entregas específicas e mensuráveis."
  },
  {
    question: "Quem é o mentor da Acelero?",
    answer: "Lucas Rocha, consultor comercial com vasta experiência em gestão comercial de clínicas de saúde e odontológicas. Especializado em crescimento de faturamento, treinamento de equipes comerciais e implementação de processos de vendas para clínicas."
  },
  {
    question: "A mentoria funciona para clínicas de qualquer especialidade?",
    answer: "Sim. O método A.C.E.L.E.R.O foi desenvolvido para clínicas de saúde em geral — odontológicas, médicas, estéticas e de especialidades. Os princípios de gestão comercial e vendas são adaptados à realidade de cada clínica durante o diagnóstico inicial."
  },
  {
    question: "Quais resultados posso esperar?",
    answer: "Os resultados incluem estruturação completa da área comercial, implementação de CRM, scripts de atendimento, dashboards de indicadores, treinamento da equipe de secretárias e vendas, e um plano de crescimento mensurável do faturamento. Mais de 250 clínicas já passaram pelo processo de transformação."
  },
  {
    question: "Como funciona o diagnóstico inicial?",
    answer: "O diagnóstico é a primeira etapa da mentoria. Analisamos os principais indicadores da clínica: faturamento mensal, taxa de conversão de orçamentos, ticket médio, custo de aquisição de pacientes, taxa de no-show e ocupação de agenda. Com esses dados, identificamos os gargalos prioritários e montamos o plano de ação personalizado."
  },
  {
    question: "A mentoria é online ou presencial?",
    answer: "A mentoria é 100% online, com sessões quinzenais via videoconferência. Isso permite que clínicas de qualquer cidade do Brasil participem sem deslocamento. Todo o material de apoio — dashboards, scripts, templates — é entregue digitalmente e acessível a qualquer momento."
  },
  {
    question: "Preciso ter equipe comercial para participar?",
    answer: "Não. Muitas clínicas iniciam a mentoria sem equipe comercial estruturada. Parte do programa é justamente montar essa estrutura: definir cargos, criar processos de atendimento, treinar secretárias e, se necessário, orientar a contratação de consultoras comerciais."
  },
  {
    question: "Como é o acompanhamento durante a mentoria?",
    answer: "Além das sessões quinzenais, o mentorado tem acesso a um canal de comunicação para dúvidas entre sessões. A cada encontro, revisamos os indicadores, avaliamos a implementação das ações anteriores e definimos as próximas entregas. O progresso é acompanhado via dashboard compartilhado com métricas atualizadas."
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Perguntas <span className="text-cyan">Frequentes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Tudo o que você precisa saber sobre a mentoria comercial da Acelero
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
