import { Heart } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

interface FooterProps {
  logoSrc: string;
}

export default function Footer({ logoSrc }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Início", id: "inicio" },
    { label: "Quem Somos", id: "quem-somos" },
    { label: "Adoção", id: "adocao" },
    { label: "Apadrinhamento", id: "apadrinhamento" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <img
              src={logoSrc}
              alt="ProjetoCel"
              className="h-12 mb-4 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              ONG de Proteção Animal desde 2003, dando um final feliz para cada animal recolhido
              das ruas.
            </p>
          </div>

          <div className="animate-fade-in delay-100">
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in delay-200">
            <h3 className="font-semibold text-foreground mb-4">Doações</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-medium">Banco:</span> Bradesco
              </p>
              <p>
                <span className="font-medium">Agência:</span> 2800-2
              </p>
              <p>
                <span className="font-medium">Conta:</span> 12000-6
              </p>
              <p className="pt-2">
                <span className="font-medium">CNPJ:</span>
                <br />
                05.842.110/0001-14
              </p>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-3 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://www.instagram.com/projetocel", "_blank")}
                data-testid="button-footer-instagram"
                className="hover-elevate icon-bounce"
              >
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
                data-testid="button-footer-whatsapp"
                className="hover-elevate icon-bounce"
              >
                <SiWhatsapp className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium mb-1">Horário de Atendimento</p>
              <p>Segunda a Sábado</p>
              <p>8h às 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> por Marina Esposito © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
