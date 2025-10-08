import { Button } from "@/components/ui/button";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. Natália Palmier",
      role: "Diretora Clínica",
      clinic: "Clínica Odontológica Premium",
      content: "A mentoria A.C.E.L.E.R.O transformou completamente nossa área comercial. Em 6 meses, aumentamos nosso faturamento em 180% com processos estruturados e uma equipe muito mais preparada.",
      rating: 5,
    },
    {
      name: "Dr. Ricardo Santos",
      role: "Sócio-Proprietário",
      clinic: "Clínica Odonto Brasil",
      content: "Antes da mentoria, tínhamos muitos leads mas pouca conversão. Hoje temos um funil organizado, equipe treinada e resultados previsíveis. Melhor investimento que fizemos na clínica.",
      rating: 5,
    },
    {
      name: "Dra. Amanda Costa",
      role: "Gestora Comercial",
      clinic: "Studio Dental Class",
      content: "O método é prático e funciona de verdade. Conseguimos implementar tudo com o suporte dos mentores. Nossa taxa de conversão praticamente dobrou e a equipe está muito mais confiante.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mais de <span className="text-gold">250 clínicas</span> impactadas
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos mentorados têm a dizer sobre os resultados
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-lift transition-all duration-300 border border-border relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-gold">
                  <Quote className="w-6 h-6 text-gold-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-semibold mt-1">{testimonial.clinic}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="bg-gradient-subtle rounded-2xl p-12 text-center shadow-elegant border border-border">
            <div className="max-w-2xl mx-auto">
              <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-foreground border-b-8 border-b-transparent ml-1" />
                  </div>
                  <p className="text-muted-foreground">Depoimentos em vídeo dos mentorados</p>
                </div>
              </div>
            </div>
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
