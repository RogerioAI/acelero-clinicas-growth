import { Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo-acelero.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <img src={logo} alt="Acelero" className="h-20 mb-6" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm text-center">
                Acelero.vc organiza, capacita e acelera o seu faturamento
              </p>
            </div>

            {/* Social Media */}
            <div className="md:col-span-1 md:text-right text-center">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4 md:justify-end justify-center">
                <a
                  href="https://instagram.com.br/acelero.vc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-cyan/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@clinicasemcaos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-cyan/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/acelerovc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-cyan/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>© 2025 Acelero.vc - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
