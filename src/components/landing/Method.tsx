import { Button } from "@/components/ui/button";
import { Target, Users2, Building2, Trophy, Zap, TrendingUp, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/config/contact";

export const Method = () => {
  const steps = [
    {
      letter: "A",
      title: "Alinhamento Estratégico",
      description: "Entender a situação atual e definir os objetivos",
      icon: Target,
    },
    {
      letter: "C",
      title: "Captação de Oportunidades",
      description: "Estruturar funis/canais de vendas",
      icon: Users2,
    },
    {
      letter: "E",
      title: "Estrutura Comercial",
      description: "Organizar processos e definir metas",
      icon: Building2,
    },
    {
      letter: "L",
      title: "Liderança Comercial",
      description: "Criar um modelo eficiente para uma gestão comercial",
      icon: Trophy,
    },
    {
      letter: "E",
      title: "Engrenagem de Vendas",
      description: "Executar processos dentro da sua realidade",
      icon: Zap,
    },
    {
      letter: "R",
      title: "Rampagem Comercial",
      description: "Acelerar vendas com previsibilidade",
      icon: TrendingUp,
    },
    {
      letter: "O",
      title: "Ousadia para Escalar",
      description: "Quem tem processo, tem liberdade para ousar.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              <span style={{ color: "#17C8D0" }}>7 etapas</span> para ACELERAR suas vendas
            </h2>
            <p className="text-xl text-primary-foreground/80">
              O método A.C.E.L.E.R.O guia sua clínica do caos ao crescimento sustentável
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className="absolute left-[31px] md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5"
              style={{ backgroundImage: "linear-gradient(to bottom, hsl(220, 60%, 12%), #17C8D0, hsl(220, 60%, 12%))" }}
            />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col md:gap-8`}
                  >
                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"} mb-4 md:mb-0`}
                      initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div
                        className="bg-primary-light/50 rounded-2xl p-8 shadow-elegant hover:shadow-lift transition-all duration-300"
                        style={{ borderWidth: "1px", borderColor: "rgba(23, 200, 208, 0.2)" }}
                      >
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(23, 200, 208, 0.2)" }}
                          >
                            <Icon className="w-6 h-6" style={{ color: "#17C8D0" }} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary-foreground">{step.title}</h3>
                        </div>
                        <p className="text-primary-foreground/80">{step.description}</p>
                      </div>
                    </motion.div>

                    {/* Center Circle */}
                    <motion.div
                      className="absolute left-0 md:left-[calc(50%-2rem)] w-16 h-16 rounded-full flex items-center justify-center shadow-cyan z-10"
                      style={{ backgroundImage: "linear-gradient(135deg, #17C8D0 0%, #3DD4DB 100%)" }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <span className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>
                        {step.letter}
                      </span>
                    </motion.div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              variant="cta"
              size="xl"
              onClick={() =>
                window.open(getWhatsAppLink("Quero aplicar o método A.C.E.L.E.R.O na minha clínica"), "_blank")
              }
            >
              Quero aplicar o método <br></br> na minha clínica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
