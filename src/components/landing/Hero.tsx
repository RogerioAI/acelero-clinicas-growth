import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getWhatsAppLink } from "@/config/contact";

import heroImage from "@/assets/hero-mentors.png";
import heroVideo from "@/assets/hero-video.mp4";

export const Hero = () => {
  const [imageOpacity, setImageOpacity] = useState(0);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.currentTime >= 5) {
      setImageOpacity(1);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pb-16 md:pb-24 pt-24 md:pt-0 overflow-hidden bg-gradient-hero">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center"
        />
        <img 
          src={heroImage} 
          alt="Mentores Acelero - Lucas e Rogério" 
          className={`w-full h-full object-cover object-center absolute inset-0 ${imageOpacity > 0 ? 'animate-cinematic-reveal' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 animate-fade-in-up [animation-delay:200ms]">
            Mentoria Comercial <span style={{ color: '#17C8D0' }}>A.C.E.L.E.R.O</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            Deixe de ser mais uma clínica com{" "}
            <span style={{ color: '#17C8D0' }} className="font-semibold">potencial disperdiçado</span> e atinja os objetivos que sempre sonhou
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:600ms]">
            <Button 
              variant="cta" 
              size="default" 
              className="text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 h-auto"
              onClick={() => window.open(getWhatsAppLink("Quero acelerar minhas vendas"), '_blank')}
            >
              Quero acelerar minhas vendas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-14 md:mt-16 animate-fade-in-up [animation-delay:800ms]">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>250+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Clínicas Impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>15+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#17C8D0' }}>100%</div>
              <div className="text-xs sm:text-sm text-primary-foreground/80">Método Validado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#17C8D0' }} />
        </div>
      </div>
    </section>
  );
};
