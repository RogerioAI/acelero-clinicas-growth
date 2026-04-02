import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { Target, Users, Wrench, Crown, Cog, Rocket, Flame } from "lucide-react";

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Mentoria A.C.E.L.E.R.O",
  "description": "Programa de transformação comercial para clínicas de saúde com 7 fases: Alinhamento Estratégico, Captação de Leads, Estrutura Comercial, Liderança Comercial, Engrenagem de Vendas, Rampagem Comercial e Ousadia para Escalar.",
  "provider": { "@id": "https://acelero.vc/#organization" },
  "educationalLevel": "Professional",
  "audience": {
    "@type": "Audience",
    "audienceType": "Gestores e proprietários de clínicas de saúde e odontológicas"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "duration": "P6M",
    "courseSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "P2W",
      "repeatCount": 16
    }
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
    { "@type": "ListItem", "position": 2, "name": "Mentoria", "item": "https://acelero.vc/mentoria" }
  ]
};

const phases = [
  {
    letter: "A",
    title: "Alinhamento Estratégico",
    icon: Target,
    description: "O ponto de partida é um diagnóstico completo da clínica. Mapeamos o cenário atual de faturamento, taxa de conversão, ticket médio, custo de aquisição e ocupação de agenda. Definimos metas realistas baseadas em dados, não em achismos.",
    deliverables: "Dashboard de indicadores comerciais, análise SWOT comercial, definição de metas SMART para 90, 180 e 360 dias, mapeamento do funil de vendas atual."
  },
  {
    letter: "C",
    title: "Captação de Leads",
    icon: Users,
    description: "Estruturamos os canais de aquisição de pacientes para que a clínica não dependa exclusivamente de indicações. Configuramos campanhas no Google e Instagram, otimizamos o Google Meu Negócio, criamos programas de indicação estruturados e parcerias estratégicas.",
    deliverables: "Plano de mídia com orçamento sugerido, templates de anúncios validados para clínicas, configuração do Google Meu Negócio, programa de indicação com script e rastreamento."
  },
  {
    letter: "E",
    title: "Estrutura Comercial",
    icon: Wrench,
    description: "Implementamos o CRM, definimos os estágios do funil de vendas e criamos os scripts de atendimento para cada ponto de contato. Da primeira ligação ao pós-procedimento, cada interação é padronizada para maximizar conversão.",
    deliverables: "CRM configurado com funis personalizados, scripts de primeiro contato, agendamento, confirmação, follow-up e recuperação de inativos, templates de WhatsApp e e-mail."
  },
  {
    letter: "L",
    title: "Liderança Comercial",
    icon: Crown,
    description: "Treinamos o gestor ou responsável comercial da clínica para liderar a equipe de atendimento com rituais de gestão: reuniões de pipeline, análise de indicadores semanais e feedback estruturado. A clínica aprende a se autogerir comercialmente.",
    deliverables: "Rotina de gestão comercial semanal, templates de reunião de pipeline, checklist de liderança, modelo de feedback para atendentes e secretárias."
  },
  {
    letter: "E",
    title: "Engrenagem de Vendas",
    icon: Cog,
    description: "Refinamos o processo de vendas com técnicas avançadas de negociação, tratamento de objeções e fechamento. Aplicamos SPIN Selling adaptado para clínicas, economia comportamental e gatilhos de decisão específicos do setor de saúde.",
    deliverables: "Treinamento de SPIN Selling para clínicas, matriz de objeções com respostas validadas, scripts de negociação de orçamentos, técnicas de ancoragem de preço."
  },
  {
    letter: "R",
    title: "Rampagem Comercial",
    icon: Rocket,
    description: "Com processos rodando, escalamos o volume. Aumentamos a capacidade de atendimento, otimizamos a ocupação de agenda, implementamos cross-selling e upselling de procedimentos e reduzimos o no-show com técnicas de compromisso comportamental.",
    deliverables: "Estratégias de cross-sell e upsell por especialidade, protocolo anti no-show com 5 camadas, otimização de agenda por lucratividade, modelo de precificação dinâmica."
  },
  {
    letter: "O",
    title: "Ousadia para Escalar",
    icon: Flame,
    description: "A fase final prepara a clínica para crescer além do patamar atual. Planejamos expansão de unidades, contratação de novos profissionais com onboarding comercial e construção de uma cultura de vendas que se sustenta sem o mentor.",
    deliverables: "Playbook comercial completo da clínica, plano de expansão com projeções financeiras, processo de onboarding comercial para novos colaboradores, checklist de autonomia operacional."
  },
];

const Mentoria = () => {
  return (
    <>
      <Helmet>
        <title>Mentoria A.C.E.L.E.R.O | Programa de Transformação Comercial para Clínicas</title>
        <meta name="description" content="Programa de 4 a 6 meses com sessões quinzenais, diagnóstico inicial, dashboards, scripts e templates. 7 fases para escalar o faturamento da sua clínica." />
        <link rel="canonical" href="https://acelero.vc/mentoria" />
        <link rel="alternate" hrefLang="pt-BR" href="https://acelero.vc/mentoria" />
        <link rel="alternate" hrefLang="x-default" href="https://acelero.vc/mentoria" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acelero.vc/mentoria" />
        <meta property="og:title" content="Mentoria A.C.E.L.E.R.O | Transformação Comercial para Clínicas" />
        <meta property="og:description" content="Programa de 4 a 6 meses com 7 fases para escalar o faturamento da sua clínica de saúde." />
        <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mentoria A.C.E.L.E.R.O | Transformação Comercial para Clínicas" />
        <meta name="twitter:description" content="7 fases para escalar o faturamento da sua clínica de saúde." />
        <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />
      </Helmet>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="pt-20">
          {/* Hero */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary/95">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Método <span className="text-cyan">A.C.E.L.E.R.O</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-4">
                Programa de transformação comercial para clínicas de saúde com 7 fases progressivas, sessões quinzenais e entregas mensuráveis.
              </p>
              <p className="text-primary-foreground/70">Duração: 4 a 6 meses · +16 sessões · 100% online</p>
            </div>
          </section>

          {/* Phases */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">As 7 Fases da Transformação</h2>
                <div className="space-y-12">
                  {phases.map((phase, index) => (
                    <div key={index} className="flex gap-6 md:gap-8">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-cyan flex items-center justify-center">
                          <span className="text-2xl font-bold text-cyan-foreground">{phase.letter}</span>
                        </div>
                        {index < phases.length - 1 && (
                          <div className="w-0.5 flex-1 bg-border mt-4" />
                        )}
                      </div>
                      <div className="pb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <phase.icon className="w-5 h-5 text-cyan" />
                          <h3 className="text-xl font-bold">{phase.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{phase.description}</p>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-1">O que você recebe:</p>
                          <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-primary to-primary/95">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Pronto para acelerar?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Agende um diagnóstico comercial gratuito e descubra em qual fase sua clínica está hoje.
              </p>
              <Link to="/" className="inline-block px-8 py-4 bg-cyan text-cyan-foreground font-bold rounded-lg hover:bg-cyan-light transition-colors">
                Agendar Diagnóstico Gratuito
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Mentoria;
