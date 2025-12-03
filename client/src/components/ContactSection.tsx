import { Card } from "@/components/ui/card";
import { Phone, Clock } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-16 md:py-24 overflow-hidden bg-[#ffee80]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0266C9] mb-4 animate-fade-in-up">
            Entre em <span className="text-[#0266C9]">Contato</span>
          </h2>
          <p className="text-lg text-[#0266C9]/80 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Tire suas dúvidas ou manifeste interesse em adotar ou apadrinhar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative animate-fade-in-up">
            <Card className="relative p-8 bg-white border border-[#0266C9]/20 hover:border-[#0266C9]/40 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-[#0266C9]/10 border border-[#0266C9]/20">
                  <Phone className="h-8 w-8 text-[#0266C9] icon-bounce transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0266C9] text-lg mb-2">WhatsApp</h4>
                  <p className="text-[#0266C9]/70">+55 11 99123-3124</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="group relative animate-fade-in-up delay-100">
            <Card className="relative p-8 bg-white border border-[#0266C9]/20 hover:border-[#0266C9]/40 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-[#0266C9]/10 border border-[#0266C9]/20">
                  <SiInstagram className="h-8 w-8 text-[#0266C9] transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0266C9] text-lg mb-2">Instagram</h4>
                  <a
                    href="https://www.instagram.com/projetocel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0266C9] hover:underline transition-all duration-300"
                    data-testid="link-instagram"
                  >
                    @projetocel
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="group relative animate-fade-in-up delay-200">
            <Card className="relative p-8 bg-white border border-[#0266C9]/20 hover:border-[#0266C9]/40 transition-all duration-300 hover-lift h-full">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-[#0266C9]/10 border border-[#0266C9]/20">
                  <Clock className="h-8 w-8 text-[#0266C9] icon-bounce transition-all duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0266C9] text-lg mb-2">Horário de Atendimento</h4>
                  <p className="text-[#0266C9]/70">Segunda a Sábado</p>
                  <p className="text-[#0266C9]/70">8h às 18h</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
