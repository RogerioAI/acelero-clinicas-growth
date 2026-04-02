import { Helmet } from "react-helmet-async";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { About } from "@/components/landing/About";
import { Method } from "@/components/landing/Method";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Mentors } from "@/components/landing/Mentors";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://acelero.vc/#organization",
  "name": "Acelero",
  "alternateName": "Acelero.vc",
  "url": "https://acelero.vc",
  "logo": "https://acelero.vc/logo.png",
  "description": "Mentoria comercial especializada para clínicas de saúde e odontológicas. Método A.C.E.L.E.R.O para estruturar área comercial e aumentar faturamento.",
  "foundingDate": "2025",
  "founder": {
    "@type": "Person",
    "name": "Lucas Rocha",
    "jobTitle": "Consultor Comercial e Mentor de Vendas para Clínicas de Saúde",
    "url": "https://acelero.vc/sobre",
    "sameAs": [
      "https://www.instagram.com/acelero.vc/",
      "https://www.linkedin.com/in/lucas-rocha-acelero"
    ]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "knowsAbout": [
    "Mentoria comercial para clínicas",
    "Vendas em clínicas odontológicas",
    "Gestão comercial de clínicas de saúde",
    "CRM para clínicas",
    "Treinamento de secretárias para clínicas",
    "Captação de pacientes",
    "Faturamento de clínicas"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Acelero",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mentoria A.C.E.L.E.R.O",
          "description": "Programa de transformação comercial de 4 a 6 meses com sessões quinzenais, diagnóstico, dashboards, scripts e templates para clínicas de saúde."
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "falecom@acelero.vc",
    "contactType": "sales"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Acelero",
  "url": "https://acelero.vc",
  "description": "Mentoria comercial especializada para clínicas de saúde",
  "publisher": { "@id": "https://acelero.vc/#organization" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://acelero.vc" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a Mentoria A.C.E.L.E.R.O?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É um programa de transformação comercial para clínicas de saúde com duração de 4 a 6 meses, sessões quinzenais, diagnóstico inicial, dashboards de indicadores, scripts de vendas e templates operacionais. O programa é dividido em 7 fases que cobrem desde alinhamento estratégico até escalabilidade do faturamento."
      }
    },
    {
      "@type": "Question",
      "name": "Para quem é a mentoria comercial da Acelero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para gestores e proprietários de clínicas de saúde e odontológicas que querem estruturar sua área comercial, aumentar o faturamento com previsibilidade e parar de depender exclusivamente de indicações."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo dura a mentoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O programa tem duração de 4 a 6 meses com sessões quinzenais. São mais de 16 encontros divididos em 7 fases progressivas, cada uma com entregas específicas e mensuráveis."
      }
    },
    {
      "@type": "Question",
      "name": "Quem é o mentor da Acelero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lucas Rocha, consultor comercial com vasta experiência em gestão comercial de clínicas de saúde e odontológicas. Especializado em crescimento de faturamento, treinamento de equipes comerciais e implementação de processos de vendas para clínicas."
      }
    },
    {
      "@type": "Question",
      "name": "A mentoria funciona para clínicas de qualquer especialidade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. O método A.C.E.L.E.R.O foi desenvolvido para clínicas de saúde em geral — odontológicas, médicas, estéticas e de especialidades. Os princípios de gestão comercial e vendas são adaptados à realidade de cada clínica durante o diagnóstico inicial."
      }
    },
    {
      "@type": "Question",
      "name": "Quais resultados posso esperar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os resultados incluem estruturação completa da área comercial, implementação de CRM, scripts de atendimento, dashboards de indicadores, treinamento da equipe de secretárias e vendas, e um plano de crescimento mensurável do faturamento. Mais de 250 clínicas já passaram pelo processo de transformação."
      }
    }
  ]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Acelero | Mentoria Comercial para Clínicas de Saúde</title>
        <meta name="description" content="Mentoria comercial especializada para clínicas de saúde. Método A.C.E.L.E.R.O para estruturar sua área comercial e aumentar faturamento com previsibilidade. +250 clínicas transformadas." />
        <link rel="canonical" href="https://acelero.vc/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://acelero.vc/" />
        <meta property="og:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
        <meta property="og:description" content="Método A.C.E.L.E.R.O para estruturar sua área comercial e aumentar faturamento com previsibilidade. +250 clínicas transformadas." />
        <meta property="og:image" content="https://acelero.vc/og-image-home.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Acelero" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acelero | Mentoria Comercial para Clínicas de Saúde" />
        <meta name="twitter:description" content="Método A.C.E.L.E.R.O para estruturar sua área comercial e aumentar faturamento com previsibilidade." />
        <meta name="twitter:image" content="https://acelero.vc/og-image-home.jpg" />
      </Helmet>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Problem />
        <About />
        <div id="method">
          <Method />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="mentors">
          <Mentors />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
    </>
  );
};

export default Index;
