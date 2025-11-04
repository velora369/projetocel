import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-100">
            Temos animais adultos e filhotes, entre gatos e cachorros, todos esperando por uma família cheia de amor
          </p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-8 animate-fade-in-up delay-200">
            Conheça Nossos <span className="gradient-text">Animais</span>
          </h3>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-20 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-xl px-12 sm:px-16" ref={emblaRef}>
              <div className="flex">
                {animals.map((animal) => (
                  <div
                    key={animal.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3"
                    data-testid={`carousel-slide-${animal.id}`}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div 
                          className="relative group/slide overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => setSelectedImage(animal.image)}
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={animal.image}
                              alt="Animal disponível para adoção"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white font-semibold text-lg">Clique para ampliar</p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-0">
                        <div className="relative">
                          <img
                            src={animal.image}
                            alt="Animal disponível para adoção - Imagem ampliada"
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              size="icon"
              variant="outline"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-primary/30 hover:border-primary/50 shadow-lg hover-lift z-10 h-10 w-10 sm:h-12 sm:w-12"
              onClick={scrollPrev}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-sm border-primary/30 hover:border-primary/50 shadow-lg hover-lift z-10 h-10 w-10 sm:h-12 sm:w-12"
              onClick={scrollNext}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
