import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Users, Heart, Building, Copy, Check, Calendar, Award, Send, CreditCard } from "lucide-react";
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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const goalAmount = 10000;

  const pixKey = "projetocel.animal@uol.com.br";
  const bankDetails = {
    instituicao: "403 - Cora SCFI",
    agencia: "0001",
    conta: "2494477-0",
    nomeEmpresa: "PROJETO CEL CASA , ESPERANCA E LIBERDADE PARA ANIMAIS CARENTES",
    cnpj: "05.842.110/0001-14",
  };

  const stats = [
    { icon: Users, value: "180", label: "Animais Acolhidos" },
    { icon: Calendar, value: "22", label: "Anos de Amor" },
    { icon: Award, value: "10.000+", label: "Vidas Salvas" },
    { icon: DollarSign, value: "R$ 30.000", label: "Custo Mensal" },
  ];

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

  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, preencha seu nome completo.",
        variant: "destructive",
      });
      return;
    }
    const message = `Olá! Meu nome é ${fullName} e eu apadrinhei animais do projetocel esse mês!`;
    const whatsappUrl = `https://wa.me/5511991233124?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setFullName("");
    setEmail("");
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
            Neste momento, 180 animais dependem da nossa ajuda para sobreviver. Cada um deles tem uma história, mas todos compartilham a mesma esperança: encontrar um lar.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            O apadrinhamento nos ajuda a manter o abrigo funcionando, garantindo alimentação, cuidados veterinários e um lar seguro para cada animal. <span className="font-semibold text-primary">Com apenas R$ 50 mensais, você pode fazer parte dessa transformação</span> e ajudar a mudar a história de muitos bichinhos.
          </p>
        </div>

        <div className="group relative animate-scale-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <Card className="relative p-6 sm:p-8 mb-8 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift"
                >
                  <stat.icon className="h-8 w-8 text-primary mb-2 icon-bounce transition-all duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="text-sm text-muted-foreground">
                <p className="mb-2 font-medium text-foreground">O que sua doação ajuda:</p>
                <ul className="grid md:grid-cols-2 gap-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-primary/10 pt-6 space-y-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Card className="group relative p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-primary/20 border border-primary/30">
                        <Building className="h-6 w-6 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">Doe Aqui</h3>
                        <p className="text-sm text-muted-foreground">Clique para ver os dados bancários</p>
                      </div>
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
                        PIX (Email)
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
                            <p className="text-xs text-muted-foreground">Instituição</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.instituicao}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.instituicao, "Instituição")}
                            data-testid="button-copy-instituicao"
                          >
                            {copiedField === "Instituição" ? (
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
                            <p className="text-xs text-muted-foreground">Nome da Empresa</p>
                            <p className="text-sm font-medium text-foreground">{bankDetails.nomeEmpresa}</p>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8"
                            onClick={() => copyToClipboard(bankDetails.nomeEmpresa, "Nome da Empresa")}
                            data-testid="button-copy-nome-empresa"
                          >
                            {copiedField === "Nome da Empresa" ? (
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

              <a
                href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808491b45c3b0191b4f97266006f"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid="link-mercado-pago"
              >
                <Card className="group relative p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/30 hover:border-accent/50 transition-all duration-300 hover-lift cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-accent/20 border border-accent/30">
                      <CreditCard className="h-6 w-6 text-accent icon-bounce transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">DOE diretamente pelo Mercado Pago</h3>
                      <p className="text-sm text-muted-foreground">Acesse o link, selecione como pagar e pronto!</p>
                    </div>
                  </div>
                </Card>
              </a>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Já Apadrinhei Esse Mês!
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Preencha os dados abaixo e nos avise pelo WhatsApp
                </p>
                <form onSubmit={handleSponsorSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nome Completo *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (opcional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@exemplo.com"
                      className="bg-background"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 text-base hover-lift hover-glow transition-all duration-300"
                  >
                    <Send className="h-5 w-5" />
                    Eu Apadrinhei!
                  </Button>
                </form>
              </Card>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">ou</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2 text-base hover-lift transition-all duration-300"
                onClick={() => window.open("https://wa.me/5511991233124?text=Ol%C3%A1%21%20Vim%20do%20site%20do%20ProjetoCel%20e%20gostaria%20de%20ser%20um%20padrinho%21", "_blank")}
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
