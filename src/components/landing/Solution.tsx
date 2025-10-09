import { AuroraHero } from "@/components/ui/aurora-hero";

export const Solution = () => {
  return (
    <AuroraHero
      badge="Transforme sua clínica"
      title={
        <>
          Você precisa de <span className="text-cyan">processo</span>, não de mais pacientes.
        </>
      }
      description="A Mentoria A.C.E.L.E.R.O estrutura sua área comercial do zero, com metodologia prática, validada em mais de 250 clínicas no Brasil."
      buttonText="Entenda o método"
    />
  );
};
