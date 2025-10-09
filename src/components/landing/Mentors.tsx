import { Award, TrendingUp, Users, Lightbulb } from "lucide-react";
import mentorsImage from "@/assets/mentors-team.jpg";
import lucasRochaImage from "@/assets/lucas-rocha.jpg";
import rogerioCintraImage from "@/assets/rogerio-cintra.jpg";

export const Mentors = () => {
  const mentors = [
    {
      name: "Lucas Rocha",
      title: "Fundador da Acelero.vc",
      bio: "Especialista em vendas e estruturação comercial com mais de 15 anos de experiência no mercado de saúde. Criador do método A.C.E.L.E.R.O que já transformou mais de 250 clínicas.",
      highlights: [
        "15+ anos em vendas e gestão",
        "Criador do método A.C.E.L.E.R.O",
        "250+ clínicas mentoradas",
      ],
    },
    {
      name: "Rogério Cintra",
      title: "Executivo de Estratégia",
      bio: "Executivo com mais de 20 anos de experiência em estratégia, marketing e gestão de clínicas de saúde. Especialista em transformação comercial e escalabilidade.",
      highlights: [
        "20+ anos de experiência executiva",
        "Especialista em marketing para saúde",
        "Expert em escalabilidade de negócios",
      ],
    },
  ];

  const expertise = [
    { icon: Award, text: "Experiência comprovada no mercado de saúde" },
    { icon: TrendingUp, text: "Resultados mensuráveis em centenas de clínicas" },
    { icon: Users, text: "Metodologia validada na prática" },
    { icon: Lightbulb, text: "Visão estratégica e execução no campo" },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F6F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mentoria com quem vive o <span className="text-primary">campo de batalha</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Aprenda com quem realmente entende de vendas para clínicas de saúde
            </p>
          </div>

          {/* Mentors Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mentors.map((mentor, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-lift transition-all duration-300 border border-border"
              >
                {/* Image Placeholder */}
                <div className="h-96 bg-gradient-hero relative overflow-hidden">
                  <img 
                    src={index === 0 ? lucasRochaImage : rogerioCintraImage} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-1">{mentor.name}</h3>
                    <p className="text-cyan font-semibold">{mentor.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{mentor.bio}</p>
                  
                  <div className="space-y-3">
                    {mentor.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                        <span className="text-foreground font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 shadow-lift">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Por que confiar nesta mentoria?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-cyan" />
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
