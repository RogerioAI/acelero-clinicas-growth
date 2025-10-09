import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import stagnantRevenue from "@/assets/problem-stagnant-revenue.png";
import noDirection from "@/assets/problem-no-direction.png";
import disorganized from "@/assets/problem-disorganized.png";
import lowConversion from "@/assets/problem-low-conversion.png";

export const Problem = () => {
  const problems = [
    { text: "Agenda cheia, mas faturamento estagnado", icon: stagnantRevenue },
    { text: "Equipe comercial sem direção clara", icon: noDirection },
    { text: "Processos de venda desorganizados", icon: disorganized },
    { text: "Baixa conversão de orçamentos em vendas", icon: lowConversion },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F6F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <AlertCircle className="w-10 h-10 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Você atrai pacientes, mas o <span className="text-primary">faturamento não cresce?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            A maioria das clínicas trava na hora de organizar o comercial. Equipe sem rumo, 
            vendas mal conduzidas e processos que não funcionam.
          </p>

          {/* Problems List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-[#13213e] rounded-xl p-6 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift flex items-start gap-4"
                style={{ boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)' }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                    <img 
                      src={problem.icon} 
                      alt={problem.text}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <p className="text-left text-primary-foreground/90 font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="default" size="lg">
            Descubra como destravar o comercial da sua clínica
          </Button>
        </div>
      </div>
    </section>
  );
};
