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
    <section id="apadrinhamento" className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Programa de Apadrinhamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sua contribuição mensal mantém nosso abrigo funcionando e ajuda a salvar vidas
          </p>
        </div>

        <Card className="p-6 sm:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {currentSponsors}/{targetSponsors}
                  </div>
                  <div className="text-sm text-muted-foreground">Padrinhos Ativos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-foreground">R$ {monthlyValue}</div>
                  <div className="text-sm text-muted-foreground">Contribuição Mensal</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Meta Mensal</span>
                  <span className="text-sm font-medium text-primary">
                    {progressPercentage.toFixed(0)}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
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

          <div className="border-t pt-6">
            <div className="flex items-start gap-3 mb-6">
              <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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
              className="w-full gap-2 text-base"
              onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
              data-testid="button-sponsor-contact"
            >
              <Heart className="h-5 w-5" />
              Quero Ser um Padrinho
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
