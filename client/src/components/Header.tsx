import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

interface HeaderProps {
  logoSrc: string;
}

export default function Header({ logoSrc }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="ProjetoCel" className="h-10 md:h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`button-nav-${item.id}`}
                className="hover-elevate"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
              data-testid="button-instagram"
              className="hover-elevate"
            >
              <SiInstagram className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
              data-testid="button-whatsapp-header"
              className="gap-2"
            >
              <SiWhatsapp className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start hover-elevate"
                data-testid={`button-nav-mobile-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            <div className="flex gap-2 pt-2">
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
