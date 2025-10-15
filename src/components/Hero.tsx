import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Keep Your Gutters Clean — Protect Your Home from Costly Damage
          </h1>
          <p className="mb-10 text-xl text-primary-foreground/90 md:text-2xl text-balance">
            Colorado's Trusted Gutter Cleaning Pros — Free Quote!
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToForm}
              className="group"
            >
              Get My Free Quote
              <ArrowDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button 
              variant="cta" 
              size="lg"
              asChild
            >
              <a href="tel:7205550123">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (720) 555-0123
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
