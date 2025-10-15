import { Star, ThumbsUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-card-foreground md:text-5xl">
              Colorado's Trusted Gutter Experts
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-accent"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a locally owned and operated business, we understand the unique challenges Colorado weather brings to your gutters. 
              From heavy snow to spring rains, we're here to keep your home protected year-round.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12 animate-fade-in-up">
            <div className="p-8 bg-gradient-section rounded-xl border-2 border-primary/10">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Our Commitment</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-secondary">✓</span>
                  Honest, upfront pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-secondary">✓</span>
                  Meticulous attention to detail on every job
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-secondary">✓</span>
                  Respect for your property and time
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-secondary">✓</span>
                  100% customer satisfaction guarantee
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-section rounded-xl border-2 border-primary/10">
              <h3 className="mb-4 text-2xl font-bold text-card-foreground">Service Areas</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">📍</span>
                  Denver Metro Area
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">📍</span>
                  Boulder & Surrounding Areas
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">📍</span>
                  Fort Collins Region
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">📍</span>
                  Colorado Springs & Beyond
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 animate-scale-in">
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold text-card-foreground">5-Star Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full">
              <ThumbsUp className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-card-foreground">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
