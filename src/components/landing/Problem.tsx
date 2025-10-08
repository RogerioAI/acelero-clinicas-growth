import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const Problem = () => {
  const problems = [
    "Agenda cheia, mas faturamento estagnado",
    "Equipe comercial sem direção clara",
    "Processos de venda desorganizados",
    "Baixa conversão de orçamentos em vendas",
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
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
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-left text-foreground font-medium">{problem}</p>
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
