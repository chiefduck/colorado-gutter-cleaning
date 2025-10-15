import { Clock, Heart, Shield, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast & Affordable Service",
    description: "Quick turnaround times without breaking the bank",
  },
  {
    icon: Heart,
    title: "Locally Owned & Operated",
    description: "Proudly serving Colorado communities",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified for your peace of mind",
  },
  {
    icon: Calendar,
    title: "Same-Day Appointments",
    description: "Get service when you need it most",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-gradient-section">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center transition-all duration-300 bg-card rounded-xl shadow-card hover:shadow-hover hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
