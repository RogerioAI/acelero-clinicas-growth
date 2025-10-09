import { TrendingUp, Users, Target, Workflow, Award } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de faturamento com previsibilidade",
      description: "Processos estruturados que geram resultados consistentes mês a mês",
    },
    {
      icon: Users,
      title: "Equipe treinada e vendendo com confiança",
      description: "Time comercial preparado para converter mais orçamentos em vendas",
    },
    {
      icon: Target,
      title: "Funil de vendas funcionando",
      description: "Da captação ao fechamento, cada etapa otimizada para conversão",
    },
    {
      icon: Workflow,
      title: "Processos simples e fáceis de aplicar",
      description: "Metodologia prática que sua equipe consegue implementar imediatamente",
    },
    {
      icon: Award,
      title: "Acompanhamento de um mentor com experiência real",
      description: "Mais de 15 anos de vivência em vendas e gestão comercial para clínicas",
    },
  ];

  return (
    <section className="py-24 text-primary" style={{ backgroundColor: '#F6F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que sua clínica <span className="text-cyan">ganha</span> com isso?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Resultados concretos que transformam a realidade do seu negócio
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-primary-light/50 rounded-2xl p-8 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
