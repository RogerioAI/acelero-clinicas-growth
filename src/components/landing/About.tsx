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
    <section className="py-24" style={{ backgroundColor: '#F6F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Uma mentoria prática, personalizada e com{" "}
              <span className="text-primary">acompanhamento real</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A <span className="font-bold text-cyan text-3xl">A.C.E.L.E.R.O</span> é uma mentoria comercial para clínicas da saúde. 
              Ao longo de encontros ao vivo, com ferramentas práticas e suporte de mentores experientes, 
              você vai transformar sua operação comercial em um{" "}
              <span className="font-bold text-primary text-2xl">processo previsível e lucrativo</span>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#13213e] rounded-2xl p-8 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift flex gap-6"
                  style={{ boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)' }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">{feature.title}</h3>
                    <p className="text-primary-foreground/80">{feature.description}</p>
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
