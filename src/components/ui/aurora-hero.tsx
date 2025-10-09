import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

// Colors adapted from the site's design system - using #17C8D0 (hsl(185, 84%, 45%))
const COLORS_TOP = ["hsl(185, 84%, 45%)", "hsl(220, 60%, 12%)", "hsl(185, 84%, 40%)", "hsl(185, 84%, 45%)"];

interface AuroraHeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const AuroraHero = ({ 
  badge = "Beta Now Live!", 
  title, 
  description, 
  buttonText,
  onButtonClick 
}: AuroraHeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, hsl(220, 60%, 12%) 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-[600px] place-content-center overflow-hidden px-4 py-24 text-primary-foreground"
    >
      <div className="relative z-10 flex flex-col items-center">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-cyan/20 px-4 py-2 text-sm border border-cyan/30 text-cyan-light">
            {badge}
          </span>
        )}
        <h2 className="max-w-3xl bg-gradient-to-br from-white to-cyan-light bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          {title}
        </h2>
        <div className="my-8 max-w-2xl bg-primary-light/50 rounded-2xl p-8 md:p-12 shadow-lift border border-cyan/20">
          <p className="text-center text-base leading-relaxed md:text-xl text-primary-foreground/90">
            {description}
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
