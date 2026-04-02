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

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Acelero | Mentoria Comercial para Clínicas de Saúde</title>
        <meta name="description" content="Mentoria comercial especializada para clínicas de saúde. Método A.C.E.L.E.R.O para estruturar sua área comercial e aumentar faturamento com previsibilidade. +250 clínicas transformadas." />
        <link rel="canonical" href="https://acelero.vc/" />
      </Helmet>
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
