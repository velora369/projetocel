import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdultAdoptionCampaign from "@/components/AdultAdoptionCampaign";
import AnimalsGallery from "@/components/AnimalsGallery";
import SponsorshipSection from "@/components/SponsorshipSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import logoUrl from "@assets/images/logo.webp";
import heroImage from "@assets/images/foto7.webp";
import foto2 from "@assets/images/foto2.webp";
import foto4 from "@assets/images/foto4.webp";
import foto5 from "@assets/images/foto5.webp";
import foto6 from "@assets/images/foto6.webp";
import foto8 from "@assets/images/foto8.webp";
import foto9 from "@assets/images/foto9.webp";
import foto10 from "@assets/images/foto10.webp";

export default function Home() {
  const aboutImages = [foto2, foto4, foto8, foto9];

  const animals = [
    { id: 1, name: "Thor", age: "5 anos", type: "Cachorro", image: foto5, isAdult: true },
    { id: 2, name: "Luna", age: "3 anos", type: "Cachorro", image: foto6, isAdult: true },
    { id: 3, name: "Bob", age: "4 anos", type: "Cachorro", image: foto9, isAdult: true },
    { id: 4, name: "Nina", age: "6 anos", type: "Gato", image: foto10, isAdult: true },
    { id: 5, name: "Max", age: "1 ano", type: "Cachorro", image: foto5, isAdult: false },
    { id: 6, name: "Mel", age: "2 anos", type: "Gato", image: foto6, isAdult: false },
  ];

  return (
    <div className="min-h-screen">
      <Header logoSrc={logoUrl} />
      <main className="pt-16 md:pt-20">
        <HeroSection backgroundImage={heroImage} />
        <AboutSection images={aboutImages} />
        <AdultAdoptionCampaign />
        <AnimalsGallery animals={animals} />
        <SponsorshipSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer logoSrc={logoUrl} />
      <FloatingWhatsApp />
    </div>
  );
}
