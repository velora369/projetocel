import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-40 hover-lift hover-glow animate-pulse hover:animate-none transition-all duration-300"
      onClick={() => window.open("https://wa.me/5511991233124", "_blank")}
      data-testid="button-floating-whatsapp"
    >
      <SiWhatsapp className="h-6 w-6" />
    </Button>
  );
}
