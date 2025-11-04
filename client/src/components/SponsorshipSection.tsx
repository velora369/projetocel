import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Heart, Building, Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function SponsorshipSection() {
  const [open, setOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const goalAmount = 10000;
  const currentSponsors = 85;
  const targetSponsors = 200;
  const monthlyValue = 50;

  const progressPercentage = (currentSponsors / targetSponsors) * 100;

  const pixKey = "05.842.110/0001-14";
  const bankDetails = {
    banco: "Bradesco",
    agencia: "2800-2",
    conta: "12000-6",
    cnpj: "05.842.110/0001-14",
  };

  const benefits = [
    "Pagar o aluguel do abrigo",
    "Cobrir as contas de luz e água",
    "Comprar ração para os animais",
    "Pagar os ajudantes do abrigo",
    "Garantir remédios e cuidados veterinários",
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      if (label === "PIX") {
        setCopiedPix(true);
        setTimeout(() => setCopiedPix(false), 2000);
      } else {
        setCopiedField(label);
        setTimeout(() => setCopiedField(null), 2000);
      }
      toast({
        title: "Copiado!",
        description: `${label} copiado para a área de transferência.`,
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar. Tente novamente.",
        variant: "destructive",
      });
    }
  };

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
            O apadrinhamento é essencial para ajudar a pagar as contas do abrigo, incluindo aluguel, contas de luz e água, ração para os animais, salário dos ajudantes e remédios. <span className="font-semibold text-foreground">Sua doação mensal de R$ 50 pode ser a diferença entre a vida e a morte</span> para esses animais inocentes.
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

            <div className="border-t border-primary/10 pt-6 space-y-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Card className="group relative p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                          <Heart className="h-6 w-6 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">Doe Aqui</h3>
                          <p className="text-sm text-muted-foreground">Clique para ver os dados bancários</p>
                        </div>
                      </div>
                      <Building className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl">Dados para Doação</DialogTitle>
                    <DialogDescription>
                      Escolha entre PIX ou transferência bancária
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Heart className="h-4 w-4 text-primary" />
                        PIX (CNPJ)
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 p-3 bg-muted rounded-md border border-border">
                          <p className="text-sm font-mono text-foreground">{pixKey}</p>
                        </div>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => copyToClipboard(pixKey, "PIX")}
                          data-testid="button-copy-pix"
                        >
                          {copiedPix ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Building className="h-4 w-4 text-primary" />
                        Dados Bancários
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="text-xs text-muted-foreground">Banco</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.banco}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.banco, "Banco")}
                            data-testid="button-copy-banco"
                          >
                            {copiedField === "Banco" ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="text-xs text-muted-foreground">Agência</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.agencia}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.agencia, "Agência")}
                            data-testid="button-copy-agencia"
                          >
                            {copiedField === "Agência" ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="text-xs text-muted-foreground">Conta Corrente</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.conta}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.conta, "Conta Corrente")}
                            data-testid="button-copy-conta"
                          >
                            {copiedField === "Conta Corrente" ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div>
                            <p className="text-xs text-muted-foreground">CNPJ</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.cnpj}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.cnpj, "CNPJ")}
                            data-testid="button-copy-cnpj"
                          >
                            {copiedField === "CNPJ" ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

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
