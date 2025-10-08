import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/20">
            <CheckCircle2 className="w-10 h-10 text-gold" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Você precisa de <span className="text-gold">processo</span>, não de mais pacientes.
          </h2>

          {/* Highlight Box */}
          <div className="bg-primary-light/50 rounded-2xl p-8 md:p-12 shadow-lift mb-8 border border-gold/20">
            <p className="text-xl md:text-2xl leading-relaxed">
              A Mentoria <span className="font-bold text-gold">A.C.E.L.E.R.O</span> estrutura sua área comercial do zero, 
              com metodologia prática, validada em{" "}
              <span className="font-bold text-gold">mais de 250 clínicas</span> no Brasil.
            </p>
          </div>

          {/* CTA */}
          <Button variant="gold" size="lg">
            Entenda o método
          </Button>
        </div>
      </div>
    </section>
  );
};
