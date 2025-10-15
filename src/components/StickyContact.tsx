import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
      <Button
        variant="hero"
        size="lg"
        onClick={scrollToForm}
        className="shadow-2xl hover:scale-105 transition-transform"
      >
        <MessageSquare className="w-5 h-5 mr-2" />
        Get Quote
      </Button>
      
      <Button
        variant="secondary"
        size="lg"
        asChild
        className="shadow-2xl hover:scale-105 transition-transform"
      >
        <a href="tel:7205550123">
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
      </Button>
    </div>
  );
};

export default StickyContact;
