import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Sparkles, Phone } from "lucide-react";
import { trackExitIntentShown, trackExitIntentConverted } from "@/utils/analytics";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor is leaving from the top of the page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        trackExitIntentShown();
      }
    };

    // Add delay before activating exit intent to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const scrollToForm = () => {
    setIsOpen(false);
    trackExitIntentConverted('form');
    const formSection = document.getElementById('quote-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    trackExitIntentConverted('phone');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <DialogTitle className="text-center text-2xl">Wait! Don't Miss Out!</DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Get your <span className="font-bold text-accent">FREE quote</span> and take advantage of our{" "}
            <span className="font-bold text-accent">10% Fall Special</span> before it expires!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-4">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={scrollToForm}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Claim My Discount Now
          </Button>

          <Button
            variant="cta"
            size="lg"
            className="w-full"
            asChild
            onClick={handlePhoneClick}
          >
            <a href="tel:7205550123">
              <Phone className="w-5 h-5 mr-2" />
              Call for Instant Quote
            </a>
          </Button>

          <p className="text-xs text-center text-muted-foreground pt-2">
            ✓ Same-Day Service Available<br />
            ✓ Licensed & Insured<br />
            ✓ 100% Satisfaction Guaranteed
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
