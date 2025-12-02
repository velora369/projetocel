import { Card } from "@/components/ui/card";
import { Phone, Clock } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function ContactSection() {
  const backgroundImage = "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/whatsapp-image-2025-11-30-at-18.34.39.webp";

  return (
    <section id="contato" className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Tire suas dúvidas ou manifeste interesse em adotar ou apadrinhar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <Card className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <Phone className="h-8 w-8 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">WhatsApp</h4>
                  <p className="text-muted-foreground">+55 11 99123-3124</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="group relative animate-fade-in-up delay-100">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <Card className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <SiInstagram className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Instagram</h4>
                  <a
                    href="https://www.instagram.com/projetocel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-all duration-300"
                    data-testid="link-instagram"
                  >
                    @projetocel
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="group relative animate-fade-in-up delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <Card className="relative p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <Clock className="h-8 w-8 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sábado</p>
                  <p className="text-muted-foreground">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
