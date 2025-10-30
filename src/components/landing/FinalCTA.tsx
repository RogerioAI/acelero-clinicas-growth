import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2 } from "lucide-react";

export const FinalCTA = () => {
  const features = [
    "Diagnóstico gratuito da sua operação comercial",
    "Entenda como o método A.C.E.L.E.R.O pode ajudar",
    "Plano personalizado para sua clínica",
    "Uma conversa estratégica para enxergar novas oportunidades de crescimento",
  ];

  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: '#17C8D0' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#17C8D0' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full" style={{ backgroundColor: 'rgba(23, 200, 208, 0.2)' }}>
            <Calendar className="w-10 h-10" style={{ color: '#17C8D0' }} />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Quer ACELERAR as vendas da sua clínica?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Agende uma seção exclusiva e descubra como o Método A.C.E.L.E.R.O irá transformar a sua realidade comercial
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0" style={{ color: '#17C8D0' }} />
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="cta" size="xl" className="text-xl">
            SIM eu quero
          </Button>
        </div>
      </div>
    </section>
  );
};
