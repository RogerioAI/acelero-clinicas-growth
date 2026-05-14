import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { Linkedin, Instagram, Award, Users, BarChart3, Phone, FileText, Target, Quote, Youtube } from "lucide-react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://acelero.vc/sobre#lucas-rocha",
  "name": "Lucas Gilberti Rocha",
  "alternateName": "Lucas Rocha",
  "jobTitle": "Consultor Comercial e Mentor de Vendas para Clínicas de Saúde",
  "description": "Fundador da Acelero.vc e criador do Método A.C.E.L.E.R.O. Especialista em estruturação comercial para clínicas médicas e odontológicas com mais de 15 anos de experiência em vendas e gestão comercial.",
  "url": "https://acelero.vc/sobre",
  "image": "https://acelero.vc/assets/lucas-rocha.jpg",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://acelero.vc/#organization"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "UNICURITIBA",
      "description": "MBA em Comunicação e Marketing"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Faculdade FAEL",
      "description": "MBA em Marketing e Varejo"
    }
  ],
  "knowsAbout": [
    "Estruturação comercial para clínicas",
    "Vendas em clínicas odontológicas",
    "Gestão de equipes comerciais",
    "SPIN Selling em odontologia",
    "CRM para clínicas de saúde",
    "Treinamento de secretárias para vendas",
    "Método A.C.E.L.E.R.O"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/lucasgrocha",
    "https://www.instagram.com/acelero.vc/",
    "https://www.youtube.com/@acelerovc",
    "https://www.youtube.com/@clinicasemcaos",
    "https://open.spotify.com/show/54Q8Dez47yEnEiqQHrxIAN"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" },
    { "@type": "ListItem", "position": 2, "name": "Sobre", "item": "https://acelero.vc/sobre" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quem é Lucas Rocha da Acelero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lucas Rocha é o fundador da Acelero.vc e criador do Método A.C.E.L.E.R.O. Consultor comercial especializado em clínicas de saúde e odontológicas, com mais de 15 anos de experiência em vendas e gestão comercial. Já ajudou mais de 250 clínicas a estruturarem sua área comercial e aumentarem o faturamento com previsibilidade."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a formação de Lucas Rocha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lucas Rocha é formado em Relações Públicas, com MBA em Comunicação e Marketing pelo UNICURITIBA e MBA em Marketing e Varejo pela Faculdade FAEL."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o Método A.C.E.L.E.R.O?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Método A.C.E.L.E.R.O é uma metodologia de estruturação comercial para clínicas de saúde criada por Lucas Rocha em 2025. É composto por 7 fases: Alinhamento Estratégico, Canais de Aquisição, Estrutura Comercial, Liderança Comercial, Engrenagem de Vendas, Rampagem Comercial e Ousadia para Escalar. O método foi desenvolvido com base em 5 anos de experiência e mais de 250 clínicas atendidas."
      }
    },
    {
      "@type": "Question",
      "name": "Como contratar a mentoria da Acelero.vc?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O primeiro passo é agendar um diagnóstico gratuito com a equipe da Acelero em https://diagnostico.acelero.vc/ . Nessa sessão, Lucas Rocha analisa a situação comercial atual da clínica e apresenta como o Método A.C.E.L.E.R.O pode ser aplicado ao contexto específico do negócio."
      }
    },
    {
      "@type": "Question",
      "name": "Qual o podcast do Lucas Rocha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lucas Rocha é host do podcast Clínica Sem Caos, um dos podcasts mais completos do mercado de saúde brasileiro, focado em gestão, marketing, vendas e finanças para donos de clínicas médicas e odontológicas. O podcast tem 40 episódios publicados no Spotify e no YouTube, com convidados como Caio Carinhena (CEO do Clinicorp), Matheus Bueno, Magnus Guérios e Rita Silva."
      }
    }
  ]
};

const specialties = [
  { icon: BarChart3, title: "Gestão Comercial de Clínicas", description: "Estruturação completa da área comercial com processos, métricas e rotinas que geram previsibilidade de faturamento." },
  { icon: Users, title: "Treinamento de Equipes de Vendas", description: "Capacitação de secretárias, atendentes e consultoras com scripts validados, técnicas de SPIN Selling e follow-up estruturado." },
  { icon: Target, title: "CRM para Clínicas", description: "Implementação e configuração de CRM adaptado à realidade de clínicas de saúde, com funis de vendas e automações de acompanhamento." },
  { icon: Phone, title: "Captação de Pacientes", description: "Estratégias de geração de leads qualificados via Google, Instagram, indicações estruturadas e parcerias com operadoras." },
  { icon: FileText, title: "Scripts de Atendimento", description: "Criação de roteiros para primeiro contato, agendamento, confirmação, reagendamento e recuperação de pacientes inativos." },
  { icon: Award, title: "Indicadores Comerciais", description: "Dashboards com taxa de conversão, ticket médio, CAC, LTV, taxa de no-show, ocupação de agenda e receita por cadeira." },
];

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Lucas Rocha: Consultor Comercial para Clínicas | Acelero.vc</title>
        <meta name="description" content="Conheça Lucas Rocha, fundador da Acelero.vc e criador do Método A.C.E.L.E.R.O. Mais de 250 clínicas transformadas, 15 anos de experiência em vendas e gestão comercial para clínicas médicas e odontológicas." />
        <meta name="keywords" content="Lucas Rocha, consultor comercial clinicas, mentor vendas odontologia, Acelero.vc, Metodo ACELERO, estruturacao comercial clinicas saude" />
        <meta name="author" content="Lucas Rocha" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://acelero.vc/sobre" />
        <link rel="alternate" hrefLang="pt-BR" href="https://acelero.vc/sobre" />
        <link rel="alternate" hrefLang="x-default" href="https://acelero.vc/sobre" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://acelero.vc/sobre" />
        <meta property="og:title" content="Lucas Rocha: Consultor Comercial para Clínicas de Saúde" />
        <meta property="og:description" content="Fundador da Acelero.vc e criador do Método A.C.E.L.E.R.O. Mais de 250 clínicas transformadas em 5 anos." />
        <meta property="og:image" content="https://acelero.vc/assets/lucas-rocha.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucas Rocha: Consultor Comercial para Clínicas de Saúde" />
        <meta name="twitter:description" content="Fundador da Acelero.vc. Método A.C.E.L.E.R.O aplicado em 250+ clínicas." />
        <meta name="twitter:image" content="https://acelero.vc/assets/lucas-rocha.jpg" />
      </Helmet>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="pt-20">
          {/* Hero */}
          <section className="py-20 bg-gradient-to-b from-primary to-primary/95">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan flex-shrink-0">
                  <img
                    src={lucasRochaImage}
                    alt="Lucas Rocha - Consultor Comercial para Clínicas de Saúde"
                    width={256}
                    height={256}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                    Lucas <span className="text-cyan">Rocha</span>
                  </h1>
                  <p className="text-xl text-primary-foreground/90 mb-6">
                    Consultor Comercial e Mentor de Vendas para Clínicas de Saúde
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/lucasgrocha/" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn de Lucas Rocha">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a href="https://www.instagram.com/acelero.vc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram da Acelero">
                      <Instagram className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <h2 className="text-3xl font-bold mb-8">Quem é Lucas Rocha</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lucas Rocha é consultor comercial especializado em clínicas de saúde e fundador da Acelero.vc. Formado em Relações Públicas, com MBA em Comunicação e Marketing (UNICURITIBA) e MBA em Marketing e Varejo (FAEL), construiu sua carreira liderando áreas comerciais de alta performance antes de se dedicar integralmente à transformação de clínicas médicas e odontológicas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua trajetória no setor começou na OralGift, empresa de produtos de higiene bucal patenteados em mais de 40 países, onde atuou como gestor comercial e teve o primeiro contato profundo com o mercado odontológico. Depois, no Sistema Vitto, estruturou do zero uma área comercial completa: entrou numa empresa com 4 vendedores e média de 30 vendas por mês, e saiu com uma equipe de 18 profissionais, sendo 8 SDRs inbound, 4 BDRs outbound e 6 closers, alcançando 90 a 110 vendas mensais.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Foi durante a pandemia que enxergou a oportunidade que mudaria o rumo da sua carreira. As clínicas precisaram migrar para o digital sem qualquer preparo comercial: não sabiam como converter leads, treinar equipes nem criar previsibilidade de faturamento. Lucas percebeu que todo o conhecimento acumulado em pré-vendas e agendamentos poderia ser transformado numa metodologia específica para clínicas. Nasceu aí a Acelero.vc.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Depois de cinco anos e mais de 250 clínicas atendidas, sistematizou esse aprendizado no Método A.C.E.L.E.R.O, criado em 2025 para mapear a jornada completa de estruturação comercial em clínicas de saúde, do diagnóstico inicial até a escalabilidade do faturamento.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan-dark mb-2">250+</div>
                    <div className="text-sm text-muted-foreground">Clínicas Transformadas</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan-dark mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan-dark mb-2">7</div>
                    <div className="text-sm text-muted-foreground">Fases do Método</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {specialties.map((spec) => (
                    <div key={spec.title} className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                      <spec.icon className="w-8 h-8 text-cyan mb-4" />
                      <h3 className="text-lg font-bold mb-2">{spec.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resultado que fala por si */}
          <section className="py-20 bg-primary">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-12">
                  Resultado que fala por si
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center bg-[#13213e] rounded-2xl p-8 md:p-12 border border-cyan/20">
                  <div>
                    <p className="text-lg text-primary-foreground/90 leading-relaxed">
                      <span className="font-semibold text-primary-foreground">Dra. Natalia Palmier</span> entrou na Mentoria A.C.E.L.E.R.O em abril de 2025 faturando <span className="font-semibold text-primary-foreground">R$ 8.000 por mês</span>, trabalhando em paralelo com um hospital, sem dedicação exclusiva ao consultório.
                    </p>
                    <p className="text-lg text-primary-foreground/90 leading-relaxed mt-4">
                      Em março de 2026, seu faturamento atingiu <span className="font-semibold text-cyan">R$ 56.000 mensais</span>.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-extrabold text-cyan leading-none">600%</div>
                    <p className="text-primary-foreground/80 mt-4 leading-relaxed">
                      de crescimento em 11 meses.<br />Sem aumentar a carga horária.<br />Apenas com estrutura comercial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Clínica Sem Caos - Podcast */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Clínica Sem Caos: o podcast para donos de clínica
                </h2>
                <div className="text-left space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Um dos podcasts mais completos do mercado brasileiro para a área da saúde. Focado em gestão, marketing, vendas e finanças para proprietários de clínicas médicas e odontológicas, o Clínica Sem Caos já publicou 40 episódios no YouTube e no Spotify, reunindo especialistas de referência nacional.
                  </p>
                  <p>
                    Entre os convidados: <span className="font-semibold text-foreground">Caio Carinhena</span> (CEO e fundador do Clinicorp, maior sistema de gestão odontológica do Brasil), Matheus Bueno, Magnus Guérios, Rita Silva e dezenas de outros especialistas do mercado de saúde e vendas.
                  </p>
                  <p>
                    Apresentado por <span className="font-semibold text-foreground">Lucas Rocha</span>, <span className="font-semibold text-foreground">Thiago Caparroz</span> e <span className="font-semibold text-foreground">Rogério Haboski</span>.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                  <Button asChild variant="outline" size="lg">
                    <a href="https://open.spotify.com/show/54Q8Dez47yEnEiqQHrxIAN" target="_blank" rel="noopener noreferrer">
                      Ouvir no Spotify
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://www.youtube.com/@clinicasemcaos" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-5 h-5" />
                      Assistir no YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Propósito */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <Quote className="w-16 h-16 text-cyan-dark/40 mb-6" aria-hidden="true" />
                <blockquote className="space-y-5 text-lg text-foreground/90 leading-relaxed italic">
                  <p>
                    "Antes de ser mentor, quando me tornei líder e gestor comercial, sempre quis trazer uma visão que me motivou a entrar em vendas: a da prosperidade financeira através do trabalho comercial. Vendas é uma das profissões que mais possibilita liberdade financeira e sempre estimulei as pessoas a serem melhores vendedores e a terem uma mentalidade vendedora.
                  </p>
                  <p>
                    Quando me tornei mentor comercial para clínicas, assumi um propósito de vida: fazer com que donos de clínica entendam que não são apenas profissionais da área da saúde, são donos de uma empresa, e essa empresa tem que ser próspera e lucrativa.
                  </p>
                  <p>
                    Esse propósito está alinhado a algo maior: gerar resultado positivo em toda uma cadeia. Eu, como mentor, transformo donos de clínica em pessoas mais prósperas e felizes. Esses donos, realizando bem o seu trabalho, transformam a vida de pacientes que conquistam saúde, estética e autoestima melhores. Essa cadeia completa é o que mais me motiva."
                  </p>
                </blockquote>
                <footer className="mt-8 not-italic">
                  <div className="font-semibold text-foreground">Lucas Rocha</div>
                  <div className="text-sm text-muted-foreground">Fundador da Acelero.vc</div>
                </footer>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-primary to-primary/95">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Quer conversar com o Lucas?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Agende um diagnóstico comercial e descubra como estruturar a área comercial da sua clínica.
              </p>
              <a href="https://diagnostico.acelero.vc/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-cyan text-cyan-foreground font-bold rounded-lg hover:bg-cyan-light transition-colors">
                Agendar Diagnóstico
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
