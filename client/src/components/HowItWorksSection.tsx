import { Card } from "@/components/ui/card";
import { MessageCircle, Users, FileCheck, Home } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Entre em Contato",
      description: "Escolha um animal e entre em contato pelo WhatsApp manifestando seu interesse.",
    },
    {
      icon: Users,
      title: "Conheça o Animal",
      description:
        "Agende uma visita ao abrigo para conhecer pessoalmente o animal e ver se há conexão.",
    },
    {
      icon: FileCheck,
      title: "Processo de Adoção",
      description:
        "Preenchimento de formulário e entrevista para garantir que o animal terá um lar adequado.",
    },
    {
      icon: Home,
      title: "Leve para Casa",
      description:
        "Após aprovação, você leva seu novo companheiro para casa e inicia uma nova história juntos!",
    },
  ];

  const backgroundImage = "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/12/cachorro.webp";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Como Funciona a <span className="gradient-text">Adoção</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Um processo simples e transparente para garantir o bem-estar dos nossos animais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${idx * 150}ms` }}
              data-testid={`card-step-${idx}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative p-6 text-center bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(2,178,255,0.4)] transition-all duration-300 group-hover:scale-110 border border-primary/30">
                  {idx + 1}
                </div>
                <step.icon className="h-12 w-12 mx-auto mb-4 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
