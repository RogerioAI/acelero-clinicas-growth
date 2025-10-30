import { Button } from "@/components/ui/button";
import { AlertCircle, TrendingDown, Navigation, Shuffle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export const Problem = () => {
  const problems = [
    { text: "Faturamento estagnado", icon: TrendingDown },
    { text: "Equipe comercial sem resultado", icon: Navigation },
    { text: "Baixa conversão de vendas", icon: Shuffle },
    { text: "Não saber vender", icon: AlertTriangle },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#F6F7FA' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div 
            className="mb-8 inline-flex items-center justify-center relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Outer glow ring - animated */}
            <motion.div 
              className="absolute w-32 h-32 rounded-full"
              style={{ 
                background: 'radial-gradient(circle, rgba(23, 200, 208, 0.3) 0%, rgba(23, 200, 208, 0) 70%)',
                filter: 'blur(8px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Middle ring */}
            <motion.div 
              className="absolute w-24 h-24 rounded-full border-2 border-cyan/30"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner circle with gradient */}
            <div 
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #17C8D0 0%, #3DD4DB 100%)',
                boxShadow: '0 0 30px rgba(23, 200, 208, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)'
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <AlertTriangle className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Você trabalha muito, mas o <span className="text-primary">faturamento não cresce?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Mesmo clínicas excelentes tecnicamente sofrem no comercial. E estes são alguns problemas que podem frear as suas vendas.
          </p>

          {/* Problems List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div 
                  key={index}
                  className="bg-[#13213e] rounded-xl p-8 border border-cyan/20 hover:border-cyan/40 transition-all duration-300 hover:shadow-lift flex flex-col items-center justify-center gap-4"
                  style={{ boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)' }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-cyan/20 flex items-center justify-center group-hover:bg-cyan/30 transition-colors">
                      <Icon className="w-7 h-7 text-cyan" />
                    </div>
                  </div>
                  <p className="text-center text-primary-foreground/90 font-semibold text-lg">{problem.text}</p>
                </div>
              );
            })}
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
