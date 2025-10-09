import { Button } from "@/components/ui/button";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A mentoria A.C.E.L.E.R.O transformou completamente nossa área comercial. Em 6 meses, aumentamos nosso faturamento em 180% com processos estruturados e uma equipe muito mais preparada.",
      name: "Dra. Natália Palmier",
      designation: "Diretora Clínica - Clínica Odontológica Premium",
      src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote: "Antes da mentoria, tínhamos muitos leads mas pouca conversão. Hoje temos um funil organizado, equipe treinada e resultados previsíveis. Melhor investimento que fizemos na clínica.",
      name: "Dr. Ricardo Santos",
      designation: "Sócio-Proprietário - Clínica Odonto Brasil",
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop",
    },
    {
      quote: "O método é prático e funciona de verdade. Conseguimos implementar tudo com o suporte dos mentores. Nossa taxa de conversão praticamente dobrou e a equipe está muito mais confiante.",
      name: "Dra. Amanda Costa",
      designation: "Gestora Comercial - Studio Dental Class",
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#0A162D' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mais de <span style={{ color: '#17C8D0' }}>250 clínicas</span> impactadas
            </h2>
            <p className="text-xl text-white/70">
              Veja o que nossos mentorados têm a dizer sobre os resultados
            </p>
          </div>

          {/* Circular Testimonials */}
          <div className="flex items-center justify-center mb-16">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#FFFFFF",
                designation: "rgba(255, 255, 255, 0.7)",
                testimony: "#FFFFFF",
                arrowBackground: "#17C8D0",
                arrowForeground: "#FFFFFF",
                arrowHoverBackground: "#13B3BA",
              }}
              fontSizes={{
                name: "28px",
                designation: "18px",
                quote: "20px",
              }}
            />
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="cta" size="xl">
              Quero resultados assim na minha clínica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
