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

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Como Funciona a Adoção
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Um processo simples e transparente para garantir o bem-estar dos nossos animais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className="p-6 text-center hover-lift hover-glow relative transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${idx * 150}ms` }}
              data-testid={`card-step-${idx}`}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300 group-hover:scale-110">
                {idx + 1}
              </div>
              <step.icon className="h-12 w-12 mx-auto mb-4 text-primary icon-bounce transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
