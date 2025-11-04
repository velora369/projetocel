import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Clock } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Meu nome é ${formData.name}.\n\nContato: ${formData.email} | ${formData.phone}\n\nMensagem: ${formData.message}`;
    window.open(
      `https://wa.me/5511991233124?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative animate-slide-in-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
            <Card className="relative p-6 sm:p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-foreground mb-6">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(2,178,255,0.3)]"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(2,178,255,0.3)]"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(2,178,255,0.3)]"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="transition-all duration-300 focus:border-primary/50 focus:shadow-[0_0_15px_rgba(2,178,255,0.3)]"
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 hover-lift hover-glow transition-all duration-300"
                data-testid="button-submit-contact"
              >
                <SiWhatsapp className="h-4 w-4 icon-bounce" />
                Enviar via WhatsApp
              </Button>
            </form>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1 icon-bounce transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                    <p className="text-muted-foreground">+55 11 99123-3124</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <SiInstagram className="h-6 w-6 text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Instagram</h4>
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

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1 icon-bounce transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sábado</p>
                    <p className="text-muted-foreground">8h às 18h</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
