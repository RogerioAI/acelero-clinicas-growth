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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              O que sua clínica <span style={{ color: '#17C8D0' }}>ganha</span> com isso?
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados concretos que transformam a realidade do seu negócio
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.slice(0, 4).map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="rounded-2xl p-8 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift"
                  style={{ backgroundColor: '#13213e' }}
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Centered Last Benefit */}
          <div className="max-w-5xl mx-auto mt-8 flex justify-center">
            <div 
              className="rounded-2xl p-8 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift w-full md:w-[calc(50%-1rem)]"
              style={{ backgroundColor: '#13213e' }}
            >
              <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefits[4].title}</h3>
              <p className="text-white/80 leading-relaxed">{benefits[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
