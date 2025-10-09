import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-mentors.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mentores Acelero - Lucas e Rogério" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 animate-fade-in-up">
            <Badge className="px-5 py-1.5 text-xs font-semibold shadow-cyan" style={{ backgroundColor: '#17C8D0', color: '#FFFFFF' }}>
              Mais de 250 clínicas impactadas
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5 animate-fade-in-up [animation-delay:200ms]">
            Mentoria Comercial <span style={{ color: '#17C8D0' }}>A.C.E.L.E.R.O</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            A mentoria que transforma clínicas desorganizadas em{" "}
            <span style={{ color: '#17C8D0' }} className="font-semibold">máquinas de vendas consistentes e previsíveis</span>
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:600ms]">
            <Button variant="cta" size="lg" className="text-base">
              Quero organizar as vendas da minha clínica
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up [animation-delay:800ms]">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>250+</div>
              <div className="text-sm text-primary-foreground/80">Clínicas Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>15+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>100%</div>
              <div className="text-sm text-primary-foreground/80">Método Validado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#17C8D0' }} />
        </div>
      </div>
    </section>
  );
};
