import AnimalsGallery from "../AnimalsGallery";
import foto5 from "@assets/images/foto5.webp";
import foto6 from "@assets/images/foto6.webp";
import foto9 from "@assets/images/foto9.webp";
import foto10 from "@assets/images/foto10.webp";

export default function AnimalsGalleryExample() {
  const mockAnimals = [
    { id: 1, name: "Thor", age: "5 anos", type: "Cachorro", image: foto5, isAdult: true },
    { id: 2, name: "Luna", age: "3 anos", type: "Cachorro", image: foto6, isAdult: true },
    { id: 3, name: "Bob", age: "4 anos", type: "Cachorro", image: foto9, isAdult: true },
    { id: 4, name: "Nina", age: "6 anos", type: "Gato", image: foto10, isAdult: true },
    { id: 5, name: "Max", age: "1 ano", type: "Cachorro", image: foto5, isAdult: false },
    { id: 6, name: "Mel", age: "2 anos", type: "Gato", image: foto6, isAdult: false },
  ];

  return <AnimalsGallery animals={mockAnimals} />;
}
