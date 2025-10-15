import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
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
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg animate-fade-in">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-primary-foreground hidden sm:block">
              Colorado Gutter Cleaning
            </h1>
            <h1 className="text-base font-bold text-primary-foreground sm:hidden">
              CO Gutters
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="hero"
              size="sm"
              onClick={scrollToForm}
              className="hidden sm:flex"
              data-track="sticky-header-quote"
            >
              <FileText className="w-4 h-4 mr-2" />
              Free Quote
            </Button>
            
            <Button
              variant="cta"
              size="sm"
              asChild
              data-track="sticky-header-call"
            >
              <a href="tel:7209179308">
                <Phone className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
