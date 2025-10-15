import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours.",
    });

    setIsSubmitting(false);
    navigate("/thank-you");
  };

  return (
    <section id="quote-form" className="py-20 bg-gradient-section">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Get Your Free Quote Today
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-accent"></div>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you with a free, no-obligation quote
            </p>
          </div>

          <div className="p-8 bg-card rounded-2xl shadow-card animate-scale-in md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(720) 555-0123"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Property Address *</Label>
                <Input
                  id="address"
                  name="address"
                  required
                  placeholder="123 Main St, Denver, CO 80202"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Type *</Label>
                <Select name="service" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border">
                    <SelectItem value="cleaning">Gutter Cleaning</SelectItem>
                    <SelectItem value="repair">Gutter Repair & Sealing</SelectItem>
                    <SelectItem value="guards">Gutter Guard Installation</SelectItem>
                    <SelectItem value="not-sure">Not Sure / Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your gutter needs..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get My Free Quote"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to be contacted regarding your quote request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
