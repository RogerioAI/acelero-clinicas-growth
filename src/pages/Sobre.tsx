import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { Linkedin, Instagram, Award, Users, BarChart3, Phone, FileText, Target, Quote, Youtube, ArrowRight, Sparkles } from "lucide-react";

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
  "worksFor": { "@type": "Organization", "@id": "https://acelero.vc/#organization" },
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "UNICURITIBA", "description": "MBA em Comunicação e Marketing" },
    { "@type": "EducationalOrganization", "name": "Faculdade FAEL", "description": "MBA em Marketing e Varejo" }
  ],
  "knowsAbout": [
    "Estruturação comercial para clínicas","Vendas em clínicas odontológicas","Gestão de equipes comerciais","SPIN Selling em odontologia","CRM para clínicas de saúde","Treinamento de secretárias para vendas","Método A.C.E.L.E.R.O"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/lucasgrocha","https://www.instagram.com/acelero.vc/","https://www.youtube.com/@acelerovc","https://www.youtube.com/@clinicasemcaos","https://open.spotify.com/show/54Q8Dez47yEnEiqQHrxIAN"
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
    { "@type": "Question", "name": "Quem é Lucas Rocha da Acelero?", "acceptedAnswer": { "@type": "Answer", "text": "Lucas Rocha é o fundador da Acelero.vc e criador do Método A.C.E.L.E.R.O. Consultor comercial especializado em clínicas de saúde e odontológicas, com mais de 15 anos de experiência em vendas e gestão comercial. Já ajudou mais de 250 clínicas a estruturarem sua área comercial e aumentarem o faturamento com previsibilidade." } },
    { "@type": "Question", "name": "Qual a formação de Lucas Rocha?", "acceptedAnswer": { "@type": "Answer", "text": "Lucas Rocha é formado em Relações Públicas, com MBA em Comunicação e Marketing pelo UNICURITIBA e MBA em Marketing e Varejo pela Faculdade FAEL." } },
    { "@type": "Question", "name": "O que é o Método A.C.E.L.E.R.O?", "acceptedAnswer": { "@type": "Answer", "text": "O Método A.C.E.L.E.R.O é uma metodologia de estruturação comercial para clínicas de saúde criada por Lucas Rocha em 2025. É composto por 7 fases: Alinhamento Estratégico, Canais de Aquisição, Estrutura Comercial, Liderança Comercial, Engrenagem de Vendas, Rampagem Comercial e Ousadia para Escalar." } },
    { "@type": "Question", "name": "Como contratar a mentoria da Acelero.vc?", "acceptedAnswer": { "@type": "Answer", "text": "O primeiro passo é agendar um diagnóstico gratuito com a equipe da Acelero em https://diagnostico.acelero.vc/ . Nessa sessão, Lucas Rocha analisa a situação comercial atual da clínica e apresenta como o Método A.C.E.L.E.R.O pode ser aplicado ao contexto específico do negócio." } },
    { "@type": "Question", "name": "Qual o podcast do Lucas Rocha?", "acceptedAnswer": { "@type": "Answer", "text": "Lucas Rocha é host do podcast Clínica Sem Caos, focado em gestão, marketing, vendas e finanças para donos de clínicas médicas e odontológicas, com 40 episódios no Spotify e YouTube e convidados como Caio Carinhena, Matheus Bueno, Magnus Guérios e Rita Silva." } }
  ]
};

const specialties = [
  { icon: BarChart3, title: "Gestão Comercial de Clínicas", description: "Estruturação completa da área comercial com processos, métricas e rotinas que geram previsibilidade de faturamento." },
  { icon: Users, title: "Treinamento de Equipes de Vendas", description: "Capacitação de secretárias, atendentes e consultoras com scripts validados, técnicas de SPIN Selling e follow-up estruturado." },
  { icon: Target, title: "CRM para Clínicas", description: "Implementação e configuração de CRM adaptado à realidade de clínicas de saúde, com funis de vendas e automações." },
  { icon: Phone, title: "Captação de Pacientes", description: "Estratégias de geração de leads qualificados via Google, Instagram, indicações estruturadas e parcerias com operadoras." },
  { icon: FileText, title: "Scripts de Atendimento", description: "Roteiros para primeiro contato, agendamento, confirmação, reagendamento e recuperação de pacientes inativos." },
  { icon: Award, title: "Indicadores Comerciais", description: "Dashboards com taxa de conversão, ticket médio, CAC, LTV, no-show, ocupação de agenda e receita por cadeira." },
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

      <div className="min-h-screen bg-primary-dark text-primary-foreground">
        <Header />
        <main id="main-content" className="pt-20">
          {/* Hero */}
          <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" aria-hidden="true" />

            <div className="container relative mx-auto px-4">
              <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] items-center gap-12">
                <div className="relative mx-auto md:mx-0">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-cyan to-cyan-light rounded-full blur-xl opacity-30" aria-hidden="true" />
                  <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-cyan/60 shadow-cyan">
                    <img
                      src={lucasRochaImage}
                      alt="Lucas Rocha - Consultor Comercial para Clínicas de Saúde"
                      width={288}
                      height={288}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-medium uppercase tracking-wider mb-5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Fundador da Acelero.vc
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
                    Lucas <span className="bg-gradient-to-r from-cyan to-cyan-light bg-clip-text text-transparent">Rocha</span>
                  </h1>
                  <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                    Consultor Comercial e Mentor de Vendas para Clínicas de Saúde. Criador do Método A.C.E.L.E.R.O.
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <a href="https://www.linkedin.com/in/lucasgrocha/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 hover:bg-cyan/20 hover:border-cyan/40 transition-colors" aria-label="LinkedIn de Lucas Rocha">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/acelero.vc/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 hover:bg-cyan/20 hover:border-cyan/40 transition-colors" aria-label="Instagram da Acelero">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.youtube.com/@clinicasemcaos" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 hover:bg-cyan/20 hover:border-cyan/40 transition-colors" aria-label="YouTube Clínica Sem Caos">
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { v: "250+", l: "Clínicas Transformadas" },
                  { v: "15+", l: "Anos de Experiência" },
                  { v: "7", l: "Fases do Método" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm hover:border-cyan/30 transition-colors">
                    <div className="text-5xl font-bold bg-gradient-to-br from-cyan to-cyan-light bg-clip-text text-transparent mb-2">{s.v}</div>
                    <div className="text-sm text-primary-foreground/70 uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bio */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">Trajetória</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">Quem é Lucas Rocha</h2>
                <div className="space-y-5 text-base md:text-lg text-primary-foreground/75 leading-relaxed">
                  <p>Lucas Rocha é consultor comercial especializado em clínicas de saúde e fundador da Acelero.vc. Formado em Relações Públicas, com MBA em Comunicação e Marketing (UNICURITIBA) e MBA em Marketing e Varejo (FAEL), construiu sua carreira liderando áreas comerciais de alta performance antes de se dedicar à transformação de clínicas médicas e odontológicas.</p>
                  <p>Sua trajetória no setor começou na <span className="text-primary-foreground font-medium">OralGift</span>, empresa de produtos de higiene bucal patenteados em mais de 40 países, onde teve o primeiro contato profundo com o mercado odontológico. Depois, no <span className="text-primary-foreground font-medium">Sistema Vitto</span>, estruturou do zero uma área comercial completa: entrou numa empresa com 4 vendedores e 30 vendas/mês, e saiu com equipe de 18 profissionais — 8 SDRs inbound, 4 BDRs outbound e 6 closers — alcançando 90 a 110 vendas mensais.</p>
                  <p>Durante a pandemia, enxergou a oportunidade que mudaria sua carreira. As clínicas precisaram migrar para o digital sem qualquer preparo comercial. Lucas percebeu que todo o conhecimento acumulado em pré-vendas e agendamentos poderia virar uma metodologia específica para clínicas. Nasceu aí a <span className="text-primary-foreground font-medium">Acelero.vc</span>.</p>
                  <p>Depois de cinco anos e mais de 250 clínicas atendidas, sistematizou esse aprendizado no <span className="text-cyan font-semibold">Método A.C.E.L.E.R.O</span>, criado em 2025 para mapear a jornada completa de estruturação comercial em clínicas de saúde, do diagnóstico inicial até a escalabilidade do faturamento.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Especialidades */}
          <section className="py-24 relative border-y border-primary-foreground/10 bg-primary/40">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">Áreas de atuação</div>
                  <h2 className="text-3xl md:text-4xl font-bold">Especialidades</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {specialties.map((spec) => (
                    <div key={spec.title} className="group relative p-7 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] hover:border-cyan/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center mb-5 group-hover:bg-cyan/25 transition-colors">
                        <spec.icon className="w-5 h-5 text-cyan" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{spec.title}</h3>
                      <p className="text-sm text-primary-foreground/65 leading-relaxed">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resultado */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">Estudo de caso</div>
                  <h2 className="text-3xl md:text-4xl font-bold">Resultado que fala por si</h2>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-cyan/20 bg-gradient-to-br from-primary-light/40 to-primary/40 backdrop-blur-sm">
                  <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan/20 rounded-full blur-3xl" aria-hidden="true" />
                  <div className="relative grid md:grid-cols-2 gap-10 items-center p-10 md:p-14">
                    <div>
                      <p className="text-lg text-primary-foreground/85 leading-relaxed">
                        <span className="font-semibold text-primary-foreground">Dra. Natalia Palmier</span> entrou na Mentoria A.C.E.L.E.R.O em abril de 2025 faturando <span className="font-semibold">R$ 8.000/mês</span>, trabalhando em paralelo num hospital, sem dedicação exclusiva ao consultório.
                      </p>
                      <p className="text-lg text-primary-foreground/85 leading-relaxed mt-4">
                        Em março de 2026, seu faturamento atingiu <span className="font-semibold text-cyan">R$ 56.000 mensais</span>.
                      </p>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-7xl md:text-9xl font-extrabold bg-gradient-to-br from-cyan to-cyan-light bg-clip-text text-transparent leading-none tracking-tight">600%</div>
                      <p className="text-primary-foreground/70 mt-5 leading-relaxed text-sm md:text-base">
                        de crescimento em 11 meses.<br />Sem aumentar a carga horária.<br />Apenas com estrutura comercial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Podcast */}
          <section className="py-24 border-y border-primary-foreground/10 bg-primary/40">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3">Podcast</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Clínica Sem Caos</h2>
                <div className="text-left space-y-4 text-primary-foreground/75 leading-relaxed">
                  <p>Um dos podcasts mais completos do mercado brasileiro de saúde. Focado em gestão, marketing, vendas e finanças para donos de clínicas médicas e odontológicas — 40 episódios no YouTube e Spotify, reunindo especialistas de referência nacional.</p>
                  <p>Entre os convidados: <span className="font-semibold text-primary-foreground">Caio Carinhena</span> (CEO do Clinicorp), Matheus Bueno, Magnus Guérios, Rita Silva e dezenas de outros especialistas.</p>
                  <p>Apresentado por <span className="font-semibold text-primary-foreground">Lucas Rocha</span>, <span className="font-semibold text-primary-foreground">Thiago Caparroz</span> e <span className="font-semibold text-primary-foreground">Rogério Haboski</span>.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
                  <a href="https://open.spotify.com/show/54Q8Dez47yEnEiqQHrxIAN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:border-cyan/40 transition-colors font-medium">
                    Ouvir no Spotify
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@clinicasemcaos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10 hover:border-cyan/40 transition-colors font-medium">
                    <Youtube className="w-5 h-5" />
                    Assistir no YouTube
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Propósito */}
          <section className="py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan mb-3 text-center">Propósito</div>
                <Quote className="w-12 h-12 text-cyan/40 mx-auto mb-8" aria-hidden="true" />
                <blockquote className="space-y-5 text-lg md:text-xl text-primary-foreground/85 leading-relaxed text-center">
                  <p>"Antes de ser mentor, quando me tornei líder e gestor comercial, sempre quis trazer uma visão que me motivou a entrar em vendas: a da prosperidade financeira através do trabalho comercial."</p>
                  <p>"Quando me tornei mentor comercial para clínicas, assumi um propósito de vida: fazer com que donos de clínica entendam que não são apenas profissionais da área da saúde — são donos de uma empresa, e essa empresa tem que ser próspera e lucrativa."</p>
                  <p>"Eu transformo donos de clínica em pessoas mais prósperas. Esses donos transformam a vida de pacientes que conquistam saúde, estética e autoestima melhores. Essa cadeia completa é o que mais me motiva."</p>
                </blockquote>
                <footer className="mt-10 text-center">
                  <div className="inline-block w-10 h-px bg-cyan/50 mb-4" aria-hidden="true" />
                  <div className="font-semibold">Lucas Rocha</div>
                  <div className="text-sm text-primary-foreground/60">Fundador da Acelero.vc</div>
                </footer>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 relative overflow-hidden border-t border-primary-foreground/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="container relative mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto leading-tight">
                Quer conversar com o <span className="text-cyan">Lucas</span>?
              </h2>
              <p className="text-primary-foreground/75 mb-10 max-w-2xl mx-auto text-lg">
                Agende um diagnóstico comercial gratuito e descubra como estruturar a área comercial da sua clínica.
              </p>
              <Button asChild variant="cta" size="xl">
                <a href="https://diagnostico.acelero.vc/" target="_blank" rel="noopener noreferrer">
                  Agendar Diagnóstico
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
