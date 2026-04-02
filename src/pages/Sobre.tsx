import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Link } from "react-router-dom";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import { Linkedin, Instagram, Award, Users, BarChart3, Phone, FileText, Target } from "lucide-react";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lucas Rocha",
  "jobTitle": "Consultor Comercial e Mentor de Vendas para Clínicas de Saúde",
  "url": "https://acelero.vc/sobre",
  "image": lucasRochaImage,
  "worksFor": { "@id": "https://acelero.vc/#organization" },
  "knowsAbout": [
    "Gestão comercial de clínicas",
    "Treinamento de equipes de vendas",
    "CRM para clínicas",
    "Captação de pacientes",
    "Scripts de atendimento",
    "Indicadores comerciais"
  ],
  "sameAs": [
    "https://www.instagram.com/acelero.vc/",
    "https://www.linkedin.com/in/lucas-rocha-acelero"
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
        <title>Sobre a Acelero | Lucas Rocha - Especialista em Vendas para Clínicas</title>
        <meta name="description" content="Lucas Rocha, consultor comercial com vasta experiência em gestão de clínicas de saúde. Conheça a metodologia A.C.E.L.E.R.O e o propósito por trás da Acelero." />
        <link rel="canonical" href="https://acelero.vc/sobre" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://acelero.vc/sobre" />
        <meta property="og:title" content="Sobre a Acelero | Lucas Rocha - Especialista em Vendas para Clínicas" />
        <meta property="og:description" content="Lucas Rocha, consultor comercial com vasta experiência em gestão de clínicas de saúde. Conheça a metodologia A.C.E.L.E.R.O." />
        <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre a Acelero | Lucas Rocha" />
        <meta name="twitter:description" content="Consultor comercial especializado em clínicas de saúde. +250 clínicas transformadas." />
        <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />
      </Helmet>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
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
                    <a href="https://www.linkedin.com/in/lucas-rocha-acelero" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                    <a href="https://www.instagram.com/acelero.vc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
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
                  Lucas Rocha é consultor comercial especializado em clínicas de saúde e odontológicas, com vasta experiência em gestão comercial. Fundador da Acelero.vc, já transformou mais de 250 clínicas através do método A.C.E.L.E.R.O, focado em estruturação comercial e crescimento de faturamento com previsibilidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sua trajetória inclui a implementação de processos comerciais em clínicas que faturavam de R$ 80 mil a R$ 5 milhões mensais. Especialista em diagnosticar gargalos de conversão, treinar equipes de atendimento e construir máquinas de vendas adaptadas à realidade do setor de saúde.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com formação em gestão comercial e experiência prática em mais de 15 anos no mercado, Lucas desenvolveu o método A.C.E.L.E.R.O após identificar que a maioria das clínicas de saúde no Brasil opera sem processos comerciais estruturados, dependendo exclusivamente de indicações e do boca a boca para crescer.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan mb-2">250+</div>
                    <div className="text-sm text-muted-foreground">Clínicas Transformadas</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <div className="text-4xl font-bold text-cyan mb-2">7</div>
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

          {/* CTA */}
          <section className="py-16 bg-gradient-to-br from-primary to-primary/95">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Quer conversar com o Lucas?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Agende um diagnóstico comercial e descubra como estruturar a área comercial da sua clínica.
              </p>
              <Link to="/" className="inline-block px-8 py-4 bg-cyan text-cyan-foreground font-bold rounded-lg hover:bg-cyan-light transition-colors">
                Agendar Diagnóstico
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sobre;
