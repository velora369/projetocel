import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Dê a Um Animal Adulto a Chance de Ter Um Lar
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Desde 2003 resgatando vidas e oferecendo segundas chances
        </p>
        <p className="text-base sm:text-lg text-white/80 mb-8 animate-fade-in-up delay-300">
          300 animais sob nossos cuidados aguardam por uma família
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
          <Button
            size="lg"
            className="gap-2 text-base sm:text-lg px-8 py-6 glass-effect hover-lift hover-glow transition-all duration-300"
            onClick={() => scrollToSection("adocao")}
            data-testid="button-hero-adopt"
          >
            <Heart className="h-5 w-5 icon-bounce" />
            Conheça Nossos Animais
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-base sm:text-lg px-8 py-6 glass-effect border-white/40 text-white hover:bg-white/20 hover-lift transition-all duration-300"
            onClick={() => scrollToSection("apadrinhamento")}
            data-testid="button-hero-sponsor"
          >
            <Users className="h-5 w-5 icon-bounce" />
            Seja um Padrinho
          </Button>
        </div>
      </div>
    </section>
  );
}
