import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const SpecialOffer = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-scale-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-primary-foreground">Limited Time Offer</span>
          </div>

          <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            🍂 Fall Clean-Up Special
          </h2>
          
          <p className="mb-6 text-2xl font-bold text-accent md:text-3xl">
            10% Off Through October!
          </p>
          
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Get your gutters ready for winter with our fall special. Protect your home from ice dams, 
            water damage, and costly repairs. Book now and save!
          </p>

          <Button 
            variant="hero"
            size="lg"
            onClick={scrollToForm}
            className="group shadow-xl"
          >
            Claim Your Discount
            <Sparkles className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
          </Button>

          <p className="mt-6 text-sm text-primary-foreground/70">
            *Valid for new customers. Cannot be combined with other offers. Mention code FALL10 when booking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
