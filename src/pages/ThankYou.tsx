import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Phone } from "lucide-react";
import { useEffect } from "react";
import { trackPageView } from "@/utils/analytics";

const ThankYou = () => {
  useEffect(() => {
    // Track page view
    trackPageView('/thank-you');
    
    // Update meta tags
    document.title = "Thank You | Colorado Gutter Cleaning";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "We've received your quote request! Our Colorado team will be in touch soon.");
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-background">
      {/* Mountain Silhouette Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(197, 100%, 21%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(197, 100%, 21%)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <polygon points="0,800 0,400 200,500 400,350 600,450 800,300 1000,380 1200,250 1200,800" fill="url(#mountainGrad)" />
          <polygon points="0,800 0,500 150,550 350,420 550,480 750,380 950,420 1200,320 1200,800" fill="hsl(123, 46%, 34%)" fillOpacity="0.1" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

      <div className="relative z-10 flex items-center justify-center flex-grow px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Success Icon */}
          <div className="relative inline-block mb-8 animate-scale-in">
            <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20">
              <CheckCircle className="w-16 h-16 text-secondary animate-scale-in" style={{ animationDelay: '200ms' }} />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl animate-fade-in">
            Thank You for Requesting Your Free Quote!
          </h1>
          
          <p className="mb-8 text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Our Colorado team will contact you within the hour.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button variant="hero" size="lg" asChild className="shadow-xl">
              <a href="tel:7209179308">
                <Phone className="w-5 h-5 mr-2" />
                Call Now for Faster Service
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </a>
            </Button>
          </div>

          {/* What Happens Next */}
          <div className="p-8 mb-8 bg-card rounded-2xl shadow-card animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h2 className="mb-6 text-2xl font-semibold text-card-foreground">
              What Happens Next?
            </h2>
            
            <div className="mb-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="text-muted-foreground leading-relaxed">
                A local technician will reach out by phone or text within 60 minutes to confirm 
                your appointment and answer any questions you may have about our gutter services.
              </p>
            </div>

            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  1
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">We Review Your Request</p>
                  <p className="text-sm text-muted-foreground">
                    Our team carefully reviews your information and service needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  2
                </span>
                <div>
                  <p className="font-semibold text-card-foreground">Quick Response Time</p>
                  <p className="text-sm text-muted-foreground">
                    Expect a call or text within 60 minutes to discuss your free quote.
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
                    We'll find a convenient time for your gutter cleaning or repair.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="p-6 border-2 rounded-xl border-accent/30 bg-accent/5 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p className="mb-2 text-lg font-semibold text-card-foreground">
              Need Immediate Assistance?
            </p>
            <p className="text-sm text-muted-foreground">
              For urgent gutter emergencies, call us directly at <a href="tel:7209179308" className="font-semibold text-accent hover:underline">(720) 917-9308</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
