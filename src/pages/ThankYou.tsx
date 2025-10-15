import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Phone } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-section">
      <div className="flex items-center justify-center flex-grow px-4 py-20">
        <div className="max-w-2xl mx-auto text-center animate-scale-in">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-secondary/20">
            <CheckCircle className="w-16 h-16 text-secondary" />
          </div>

          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Thank You!
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground">
            We've received your quote request and will contact you within 24 hours.
          </p>

          <div className="p-8 mb-8 bg-card rounded-2xl shadow-card">
            <h2 className="mb-4 text-2xl font-semibold text-card-foreground">
              What Happens Next?
            </h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  1
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">We Review Your Request</p>
                  <p className="text-sm text-muted-foreground">
                    Our team will carefully review your information and service needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  2
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">We'll Contact You</p>
                  <p className="text-sm text-muted-foreground">
                    Expect a call or email within 24 hours to discuss your quote.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  3
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">Schedule Your Service</p>
                  <p className="text-sm text-muted-foreground">
                    We'll find a convenient time for your gutter service.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 mb-8 border-2 rounded-xl border-accent/30 bg-accent/5">
            <p className="mb-2 text-lg font-semibold text-card-foreground">
              Need Immediate Assistance?
            </p>
            <p className="mb-4 text-muted-foreground">
              For urgent matters, give us a call directly:
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="tel:7205550123">
                <Phone className="w-5 h-5 mr-2" />
                (720) 555-0123
              </a>
            </Button>
          </div>

          <Button variant="outline" size="lg" asChild>
            <a href="/">
              <Home className="w-5 h-5 mr-2" />
              Return to Homepage
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
