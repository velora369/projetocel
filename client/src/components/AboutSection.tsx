import { Card } from "@/components/ui/card";
import { Heart, Home, Calendar } from "lucide-react";

interface AboutSectionProps {
  images: string[];
}

export default function AboutSection({ images }: AboutSectionProps) {
  const stats = [
    { icon: Home, value: "300", label: "Animais Sob Cuidado" },
    { icon: Calendar, value: "21", label: "Anos de História" },
    { icon: Heart, value: "∞", label: "Amor Compartilhado" },
  ];

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ONG de Proteção Animal dedicada a dar um final feliz para cada animal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Desde <span className="font-semibold text-primary">2003</span>, a ProjetoCel tem
              como missão resgatar animais das ruas e oferecer a eles cuidados, amor e a esperança
              de encontrar uma família.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Atualmente, temos sob nossa guarda{" "}
              <span className="font-semibold text-primary">300 animais</span>, cada um com sua
              história única e esperando por um lar cheio de carinho.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Dependemos da generosidade da sociedade para manter nosso abrigo funcionando. Cada
              contribuição nos ajuda a pagar aluguel, contas de luz e água, além de cuidados
              veterinários essenciais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden hover-elevate"
                data-testid={`img-about-${idx}`}
              >
                <img
                  src={img}
                  alt={`Trabalho ProjetoCel ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 text-center hover-elevate"
              data-testid={`card-stat-${idx}`}
            >
              <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
