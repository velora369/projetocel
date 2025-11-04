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
    <section id="adocao" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Animais para Adoção
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conheça nossos animais que estão esperando por uma família cheia de amor
          </p>

          <div className="flex justify-center gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              data-testid="button-filter-all"
              className={filter === "all" ? "" : "hover-elevate"}
            >
              Todos os Animais
            </Button>
            <Button
              variant={filter === "adult" ? "default" : "outline"}
              onClick={() => setFilter("adult")}
              data-testid="button-filter-adult"
              className={filter === "adult" ? "" : "hover-elevate"}
            >
              Somente Adultos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <Card
              key={animal.id}
              className="overflow-hidden hover-elevate group"
              data-testid={`card-animal-${animal.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                />
                {animal.isAdult && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
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
                  className="w-full gap-2"
                  onClick={() => handleAdoptionInterest(animal.name)}
                  data-testid={`button-adopt-${animal.id}`}
                >
                  <SiWhatsapp className="h-4 w-4" />
                  Quero Adotar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
