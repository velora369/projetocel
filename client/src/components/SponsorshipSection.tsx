import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Heart, Building } from "lucide-react";

export default function SponsorshipSection() {
  const goalAmount = 10000;
  const currentSponsors = 85;
  const targetSponsors = 200;
  const monthlyValue = 50;

  const progressPercentage = (currentSponsors / targetSponsors) * 100;

  const benefits = [
    "Ajuda a pagar aluguel do abrigo",
    "Contribui com contas de luz e água",
    "Garante alimentação para os animais",
    "Financia cuidados veterinários básicos",
  ];

  return (
    <section id="apadrinhamento" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Programa de <span className="gradient-text">Apadrinhamento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-3 animate-fade-in-up delay-100">
            Neste momento, 300 animais dependem da nossa ajuda para sobreviver. Cada um deles tem uma história de abandono, mas todos compartilham a mesma esperança: encontrar um lar.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            Sem padrinhos, não conseguimos pagar o aluguel, a ração ou os cuidados veterinários. <span className="font-semibold text-foreground">Sua doação mensal de R$ 50 pode ser a diferença entre a vida e a morte</span> para esses animais inocentes.
          </p>
        </div>

        <div className="group relative animate-scale-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <Card className="relative p-6 sm:p-8 mb-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 animate-slide-in-left group">
                  <Users className="h-8 w-8 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-3xl font-bold text-foreground gradient-text">
                      {currentSponsors}/{targetSponsors}
                    </div>
                    <div className="text-sm text-muted-foreground">Padrinhos Ativos</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 animate-slide-in-left delay-100 group">
                  <DollarSign className="h-8 w-8 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                  <div>
                    <div className="text-3xl font-bold text-foreground gradient-text">R$ {monthlyValue}</div>
                    <div className="text-sm text-muted-foreground">Contribuição Mensal</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-slide-in-right">
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Meta Mensal</span>
                    <span className="text-sm font-medium gradient-text">
                      {progressPercentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="relative h-4 bg-muted/50 backdrop-blur-sm rounded-full overflow-hidden border border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
                    <div
                      className="relative h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(2,178,255,0.5)]"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Meta: R$ {goalAmount.toLocaleString("pt-BR")}/mês
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2 font-medium text-foreground">O que sua doação ajuda:</p>
                  <ul className="space-y-1">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-6">
              <div className="flex items-start gap-3 mb-6 group">
                <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1 icon-bounce transition-all duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Dados Bancários</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium">Banco:</span> Bradesco
                    </p>
                    <p>
                      <span className="font-medium">Agência:</span> 2800-2
                    </p>
                    <p>
                      <span className="font-medium">Conta Corrente:</span> 12000-6
                    </p>
                    <p>
                      <span className="font-medium">CNPJ:</span> 05.842.110/0001-14
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full gap-2 text-base hover-lift hover-glow transition-all duration-300"
                onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
                data-testid="button-sponsor-contact"
              >
                <Heart className="h-5 w-5 icon-bounce" />
                Quero Ser um Padrinho
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
