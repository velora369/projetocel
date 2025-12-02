import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

interface HeaderProps {
  logoSrc: string;
}

export default function Header({ logoSrc }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Adoção", id: "adocao" },
    { label: "Apadrinhamento", id: "apadrinhamento" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/98 backdrop-blur-xl shadow-lg" 
          : "bg-background/85 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-14 gap-4">
          <div className="flex items-center animate-fade-in lg:-ml-8">
            <img
              src={logoSrc}
              alt="ProjetoCel"
              className="h-12 md:h-[60px] w-auto transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => scrollToSection("inicio")}
            />
          </div>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`button-nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="hover-elevate active-elevate-2 transition-all duration-300"
              onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
              data-testid="button-instagram"
            >
              <SiInstagram className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="transition-all duration-300 hover-lift"
              onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
              data-testid="button-whatsapp-header"
            >
              <SiWhatsapp className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover-elevate active-elevate-2 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            data-testid="button-menu-toggle"
          >
            {menuOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div id="main-menu" className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-1">
            {navItems.map((item, idx) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-base md:text-lg hover-elevate active-elevate-2 animate-slide-in-right transition-all duration-300"
                style={{ animationDelay: `${idx * 50}ms` }}
                data-testid={`button-nav-${item.id}-mobile`}
              >
                {item.label}
              </Button>
            ))}
            
            <div className="pt-4 border-t border-border/30 mt-4">
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 hover-elevate active-elevate-2 justify-center transition-all duration-300"
                  onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
                  data-testid="button-instagram-mobile"
                >
                  <SiInstagram className="h-4 w-4" />
                  <span>Instagram</span>
                </Button>
                <Button
                  className="flex-1 gap-2 justify-center transition-all duration-300 hover-lift"
                  onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
                  data-testid="button-whatsapp-mobile"
                >
                  <SiWhatsapp className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
