import { Card } from "@/components/ui/card";
import { Heart, Home, Calendar, Sparkles } from "lucide-react";

interface AboutSectionProps {
  images: string[];
}

export default function AboutSection({ images }: AboutSectionProps) {
  const stats = [
    { icon: Home, value: "180", label: "Animais Sob Cuidado" },
    { icon: Calendar, value: "22", label: "Anos de História" },
    { icon: Heart, value: "∞", label: "Amor Compartilhado" },
  ];

  return (
    <section id="quem-somos" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossa Missão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Quem <span className="gradient-text">Somos</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            ONG de Proteção Animal dedicada a dar um final feliz para cada animal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <div className="flex flex-col gap-6 animate-slide-in-left">
            <div className="relative group flex-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 flex items-center">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Desde <span className="font-bold text-primary">2003</span>, a ProjetoCel tem
                  como missão resgatar animais das ruas e oferecer a eles cuidados, amor e a esperança
                  de encontrar uma família.
                </p>
              </div>
            </div>

            <div className="relative group flex-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 flex items-center">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Atualmente, temos sob nossa guarda{" "}
                  <span className="font-bold text-accent">180 animais</span>, cada um com sua
                  história única e esperando por um lar cheio de carinho.
                </p>
              </div>
            </div>

            <div className="relative group flex-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 flex items-center">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Dependemos da generosidade da sociedade para manter nosso abrigo funcionando. Cada
                  contribuição nos ajuda a pagar aluguel, contas de luz e água, além de cuidados
                  veterinários essenciais.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            {images.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                data-testid={`img-about-${idx}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 rounded-xl transition-all duration-500" />
                <img
                  src={img}
                  alt={`Trabalho ProjetoCel ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
              data-testid={`card-stat-${idx}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <Card className="relative p-8 text-center bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-500 hover-lift">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
                <stat.icon className="relative h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-500 icon-bounce" />
                <div className="relative text-4xl sm:text-5xl font-bold text-foreground mb-3">
                  <span className="gradient-text">{stat.value}</span>
                </div>
                <div className="relative text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
