import { Button } from "@/components/ui/button";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import nataliaPalmierVideo from "@/assets/natalia-palmier-video.mp4";
import ricardoSantosImage from "@/assets/ricardo-santos.png";
import alinePreislerImage from "@/assets/aline-preisler.png";
import laisKeilaImage from "@/assets/lais-keila-viva.jpg";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "A mentoria A.C.E.L.E.R.O transformou completamente nossa área comercial. E os resultados triplicaram já no primeiro mês e eu só tenho a agradecer.",
      name: "Dra. Natália Palmier",
      designation: "",
      src: nataliaPalmierVideo,
      type: "video" as const,
    },
    {
      quote: "Antes da mentoria, tínhamos muitos leads mas pouca conversão. Hoje temos um funil organizado, equipe treinada e resultados previsíveis. Melhor investimento que fizemos na clínica.",
      name: "Dr. Ricardo Santos",
      designation: "Sócio-Proprietário - Clínica Odonto Brasil",
      src: ricardoSantosImage,
    },
    {
      quote: "Depois que contratamos a Acelero, nossa clínica vive uma nova fase. Os treinamentos foram um divisor de águas para nossa equipe, que agora entende a importância da área comercial. Hoje, sentimos que temos uma direção clara e queremos sempre mais.",
      name: "Dra. Aline Preisler",
      designation: "Preisler Odontologia",
      src: alinePreislerImage,
    },
    {
      quote: "Com certeza, a ajuda do Lucas foi essencial para atingirmos nossas metas. Ter alguém experiente ao lado faz toda a diferença. Sozinhas é muito mais difícil, mas com o suporte da Acelero tudo ficou mais claro e possível.",
      name: "Dras. Laís Araujo e Keila Ilse",
      designation: "Viva Odontologia",
      src: laisKeilaImage,
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
