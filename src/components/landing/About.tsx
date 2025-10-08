import { Video, Users, FileText, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Video,
      title: "Encontros online ao vivo",
      description: "Sessões práticas e interativas com os mentores",
    },
    {
      icon: Users,
      title: "Acompanhamento contínuo",
      description: "Suporte direto durante toda a jornada",
    },
    {
      icon: FileText,
      title: "Materiais prontos para aplicar",
      description: "Templates, scripts e ferramentas validadas",
    },
    {
      icon: Target,
      title: "Diagnóstico e plano sob medida",
      description: "Estratégia personalizada para sua clínica",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Uma mentoria prática, personalizada e com{" "}
              <span className="text-primary">acompanhamento real</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A <span className="font-semibold text-gold">A.C.E.L.E.R.O</span> é uma mentoria comercial para clínicas da saúde. 
              Ao longo de encontros ao vivo, com ferramentas práticas e suporte de mentores experientes, 
              você vai transformar sua operação comercial em um{" "}
              <span className="font-semibold text-primary">processo previsível e lucrativo</span>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-6 p-8 bg-card rounded-2xl shadow-elegant hover:shadow-lift transition-all duration-300 border border-border group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
