import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-rocket.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Foguete Acelero" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary-dark/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up">
            <Badge className="bg-cyan text-cyan-foreground px-6 py-2 text-sm font-semibold shadow-cyan">
              Mais de 250 clínicas impactadas
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up [animation-delay:200ms]">
            Mentoria Comercial <span className="text-cyan">A.C.E.L.E.R.O</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            A mentoria que transforma clínicas desorganizadas em{" "}
            <span className="text-cyan font-semibold">máquinas de vendas consistentes e previsíveis</span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:600ms]">
            <Button variant="cta" size="xl" className="text-lg">
              Quero organizar as vendas da minha clínica
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up [animation-delay:800ms]">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">250+</div>
              <div className="text-primary-foreground/80">Clínicas Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">15+</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan mb-2">100%</div>
              <div className="text-primary-foreground/80">Método Validado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
