import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Smile } from "lucide-react";

export default function AdultAdoptionCampaign() {
  const benefits = [
    {
      icon: Heart,
      title: "Personalidade Formada",
      description:
        "Animais adultos já têm personalidade definida. Você saberá exatamente o temperamento do seu novo companheiro.",
    },
    {
      icon: Sparkles,
      title: "Segunda Chance de Vida",
      description:
        "Animais adultos têm menos chances de adoção. Ao escolher um deles, você está literalmente salvando uma vida e oferecendo a segunda chance que eles merecem.",
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
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Campanha Adoção de <span className="gradient-text">Animais Adultos</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-100">
            Dê uma chance a quem já esperou tanto por um lar. Adotar um animal adulto é transformar
            uma vida e ganhar um amigo para sempre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 md:items-stretch">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="group relative animate-scale-in flex"
              style={{ animationDelay: `${idx * 150}ms` }}
              data-testid={`card-benefit-${idx}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift flex flex-col w-full h-full">
                <benefit.icon className="h-12 w-12 text-primary mb-4 icon-bounce transition-all duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            </div>
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
