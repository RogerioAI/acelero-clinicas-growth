import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-acelero-white.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "#hero", type: "scroll" },
    { name: "Método", href: "#method", type: "scroll" },
    { name: "Benefícios", href: "#benefits", type: "scroll" },
    { name: "Depoimentos", href: "#testimonials", type: "scroll" },
    { name: "Mentores", href: "#mentors", type: "scroll" },
    { name: "Blog", href: "/blog", type: "route" },
  ];

  const handleNavigation = (item: typeof navigation[0]) => {
    if (item.type === "route") {
      navigate(item.href);
      setIsMenuOpen(false);
    } else {
      // Se estiver em outra página, navega para home primeiro
      if (location.pathname !== "/") {
        navigate("/");
        // Aguarda navegação completar antes de fazer scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <img 
              src={logo} 
              alt="Acelero" 
              className="h-16 relative z-10 drop-shadow-[0_0_8px_rgba(23,200,208,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(23,200,208,0.8)] group-hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-primary-foreground hover:text-cyan transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cyan" size="default">
              Falar com o time
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="text-primary-foreground hover:text-cyan transition-colors font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="cyan" size="default" className="mt-2">
                Falar com o time
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
