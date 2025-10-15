import { Button } from "@/components/ui/button";
import { Droplets, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Gutter Cleaning",
    description: "Thorough removal of leaves, debris, and buildup. We ensure proper water flow and prevent costly water damage to your foundation, roof, and landscaping.",
    features: ["Hand removal of debris", "Downspout flushing", "Final inspection"],
  },
  {
    icon: Wrench,
    title: "Gutter Repair & Sealing",
    description: "Expert repairs for leaks, sagging sections, and damaged components. We restore your gutters to perfect working condition using quality materials.",
    features: ["Leak detection & sealing", "Hanger replacement", "Pitch adjustment"],
  },
  {
    icon: Shield,
    title: "Gutter Guard Installation",
    description: "Professional installation of premium gutter guards to reduce maintenance and extend the life of your gutter system. Say goodbye to constant cleaning!",
    features: ["Multiple guard options", "Custom fit installation", "Lifetime warranty available"],
  },
];

const Services = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('quote-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Our Professional Services
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-accent"></div>
          <p className="text-lg text-muted-foreground">
            Comprehensive gutter solutions to protect your Colorado home
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-8 transition-all duration-300 bg-card rounded-2xl shadow-card hover:shadow-hover hover:-translate-y-2 animate-fade-in-up border border-border"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-hero">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="mb-6 text-muted-foreground flex-grow">
                  {service.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <span className="mr-2 text-secondary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={scrollToForm}
                  className="w-full"
                  variant="default"
                >
                  Request Quote
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
