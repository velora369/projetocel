import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiWhatsapp } from "react-icons/si";

interface Animal {
  id: number;
  name: string;
  age: string;
  type: string;
  image: string;
  isAdult: boolean;
}

interface AnimalsGalleryProps {
  animals: Animal[];
}

export default function AnimalsGallery({ animals }: AnimalsGalleryProps) {
  const [filter, setFilter] = useState<"all" | "adult">("all");

  const filteredAnimals = filter === "adult" ? animals.filter((a) => a.isAdult) : animals;

  const handleAdoptionInterest = (animalName: string) => {
    const message = `Olá! Tenho interesse em adotar o(a) ${animalName}. Gostaria de mais informações.`;
    window.open(
      `https://wa.me/5511991233124?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="adocao" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(2,102,201,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(2,178,255,0.06),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Animais para <span className="gradient-text">Adoção</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
            Conheça nossos animais que estão esperando por uma família cheia de amor
          </p>

          <div className="flex justify-center gap-3 animate-fade-in-up delay-200">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              data-testid="button-filter-all"
              className={`transition-all duration-300 ${filter === "all" ? "hover-lift" : "hover-elevate"}`}
            >
              Todos os Animais
            </Button>
            <Button
              variant={filter === "adult" ? "default" : "outline"}
              onClick={() => setFilter("adult")}
              data-testid="button-filter-adult"
              className={`transition-all duration-300 ${filter === "adult" ? "hover-lift" : "hover-elevate"}`}
            >
              Somente Adultos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal, idx) => (
            <div
              key={animal.id}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${idx * 100}ms` }}
              data-testid={`card-animal-${animal.id}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {animal.isAdult && (
                    <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground border border-primary/30">
                      Adulto
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{animal.name}</h3>
                  <p className="text-muted-foreground mb-1">
                    <span className="font-medium">Idade:</span> {animal.age}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <span className="font-medium">Tipo:</span> {animal.type}
                  </p>
                  <Button
                    className="w-full gap-2 hover-lift transition-all duration-300"
                    onClick={() => handleAdoptionInterest(animal.name)}
                    data-testid={`button-adopt-${animal.id}`}
                  >
                    <SiWhatsapp className="h-4 w-4 icon-bounce" />
                    Quero Adotar
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
