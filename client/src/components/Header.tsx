import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

interface HeaderProps {
  logoSrc: string;
}

export default function Header({ logoSrc }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setMobileMenuOpen(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          <div className="flex items-center justify-start animate-fade-in">
            <img
              src={logoSrc}
              alt="ProjetoCel"
              className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          <nav className="hidden md:flex items-center justify-center gap-1">
            {navItems.map((item, idx) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`button-nav-${item.id}`}
                className="hover-elevate transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end gap-3 animate-fade-in delay-300">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
              data-testid="button-instagram"
              className="hover-elevate icon-bounce"
            >
              <SiInstagram className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
              data-testid="button-whatsapp-header"
              className="gap-2 hover-lift"
            >
              <SiWhatsapp className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden col-start-3 justify-self-end hover-elevate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, idx) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start hover-elevate animate-slide-in-right"
                style={{ animationDelay: `${idx * 50}ms` }}
                data-testid={`button-nav-mobile-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            <div className="flex gap-2 pt-2 animate-fade-in-up delay-300">
              <Button
                variant="outline"
                className="flex-1 gap-2 hover-elevate"
                onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
                data-testid="button-instagram-mobile"
              >
                <SiInstagram className="h-4 w-4" />
                Instagram
              </Button>
              <Button
                className="flex-1 gap-2"
                onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
                data-testid="button-whatsapp-mobile"
              >
                <SiWhatsapp className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
