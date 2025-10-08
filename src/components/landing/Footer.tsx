import { Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo-acelero.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <img 
                src={logo} 
                alt="Acelero" 
                className="h-12 mb-4"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Transformando clínicas de saúde em máquinas de vendas através de 
                processos estruturados e mentoria especializada.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Links Importantes</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-cyan transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-cyan transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-cyan transition-colors">
                    Sobre a Acelero.vc
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-cyan/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-cyan/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
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
