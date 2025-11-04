import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Smile } from "lucide-react";

export default function AdultAdoptionCampaign() {
  const benefits = [
    {
      icon: Heart,
      title: "Personalidade Formada",
      description:
        "Animais adultos já têm personalidade definida. Você saberá exatamente o temperamento do seu novo companheiro.",
    },
    {
      icon: Clock,
      title: "Menos Trabalho",
      description:
        "Muitos já são treinados e não precisam de supervisão constante como filhotes. Adaptação mais tranquila.",
    },
    {
      icon: Smile,
      title: "Gratidão Infinita",
      description:
        "Animais adultos parecem entender que foram resgatados e retribuem com amor e lealdade incomparáveis.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Campanha Adoção de Animais Adultos
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-100">
            Dê uma chance a quem já esperou tanto por um lar. Adotar um animal adulto é transformar
            uma vida e ganhar um amigo para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <Card
              key={idx}
              className="p-6 hover-lift hover-glow transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${idx * 150}ms` }}
              data-testid={`card-benefit-${idx}`}
            >
              <benefit.icon className="h-12 w-12 text-primary mb-4 icon-bounce transition-all duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="gap-2 text-base sm:text-lg px-8 py-6 hover-lift hover-glow transition-all duration-300"
            onClick={() => scrollToSection("adocao")}
            data-testid="button-campaign-cta"
          >
            <Heart className="h-5 w-5 icon-bounce" />
            Ver Animais Adultos Disponíveis
          </Button>
        </div>
      </div>
    </section>
  );
}
