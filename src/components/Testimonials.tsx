import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Denver, CO",
    rating: 5,
    text: "Absolutely fantastic service! They cleaned our gutters thoroughly and even fixed a small leak we didn't know about. Very professional and reasonably priced.",
  },
  {
    name: "Michael Chen",
    location: "Boulder, CO",
    rating: 5,
    text: "Same-day service was a lifesaver before the big storm hit. The team was courteous, efficient, and left everything spotless. Highly recommend!",
  },
  {
    name: "Jennifer Rodriguez",
    location: "Fort Collins, CO",
    rating: 5,
    text: "We've used Colorado Gutter Cleaning for three years now. Always reliable, always thorough. The gutter guards they installed have been worth every penny!",
  },
  {
    name: "David Thompson",
    location: "Colorado Springs, CO",
    rating: 5,
    text: "Great experience from start to finish. They showed up on time, did an excellent job, and the price was exactly what they quoted. No surprises!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center animate-fade-in">
          <h2 className="mb-4 text-4xl font-bold text-card-foreground md:text-5xl">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-accent"></div>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — see why Colorado homeowners trust us
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 transition-all duration-300 bg-gradient-section rounded-2xl shadow-card hover:shadow-hover border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="mb-6 text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
