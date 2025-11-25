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
  );
};

export default Index;
