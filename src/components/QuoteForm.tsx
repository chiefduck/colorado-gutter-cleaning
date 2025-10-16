import { useState, useRef, useEffect } from "react";
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
import { Loader2, Check } from "lucide-react";
import { z } from "zod";
import {
  trackFormView,
  trackFormSubmit,
  trackFormError,
} from "@/utils/analytics";

const quoteFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  address: z.string().trim().min(5, "Please enter a complete address").max(200),
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(1000).optional(),
});

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validatedFields, setValidatedFields] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          trackFormView();
          setTimeout(() => nameInputRef.current?.focus(), 300);
        }
      },
      { threshold: 0.5 }
    );
    const formElement = document.getElementById("quote-form");
    if (formElement) observer.observe(formElement);
    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema =
        quoteFormSchema.shape[name as keyof typeof quoteFormSchema.shape];
      if (fieldSchema) {
        fieldSchema.parse(value);
        setValidatedFields((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setValidatedFields((prev) => ({ ...prev, [name]: false }));
        setErrors((prev) => ({
          ...prev,
          [name]: error.errors[0].message,
        }));
      }
      return false;
    }
    return true;
  };

  const handleFieldBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value) validateField(name, value);
  };

  // ✅ UPDATED handleSubmit — sends to Make webhook
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist(); // ✅ keep access to event after async calls
    setIsSubmitting(true);
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Normalize phone number: remove non-digits, add +1 if missing
      let rawPhone = (formData.get("phone") as string).replace(/\D/g, "");
      if (!rawPhone.startsWith("1")) {
        rawPhone = "1" + rawPhone;
      }
      const formattedPhone = "+" + rawPhone;

      const data = {
        name: formData.get("name") as string,
        phone: formattedPhone, // ✅ send +1 format to Make
        email: formData.get("email") as string,
        address: formData.get("address") as string,
        service: formData.get("service") as string,
        message: formData.get("message") as string,
      };

  
    try {
      quoteFormSchema.parse(data);
      trackFormSubmit(data.service);
  
      const response = await fetch(
        "https://hook.us2.make.com/147rxprnwumtirhadgr9uufejj1ggwgg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
  
      // ✅ Treat both 200 and 204 as success
      if (response.status !== 200 && response.status !== 204) {
        throw new Error(`Webhook submission failed: ${response.status}`);
      }
  
      toast({
        title: "Quote Request Received!",
        description: "We'll contact you within the hour.",
      });
  
      // ✅ Reset form safely
      form.reset();
      setValidatedFields({});
  
      // Smooth redirect
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 800);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0] as string] = err.message;
        });
        setErrors(newErrors);
        trackFormError(error.errors.map((e) => e.message).join(", "));
        toast({
          title: "Please check your form",
          description: "Some fields need your attention.",
          variant: "destructive",
        });
      } else {
        console.error("Form submission error:", error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
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
              Fill out the form below and we'll get back to you with a free,
              no-obligation quote
            </p>
          </div>

          <div className="p-8 bg-card rounded-2xl shadow-card animate-scale-in md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <Input
                      ref={nameInputRef}
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="h-12 pr-10"
                      onBlur={handleFieldBlur}
                    />
                    {validatedFields.name && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                    )}
                  </div>
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(720) 555-0123"
                      className="h-12 pr-10"
                      onBlur={handleFieldBlur}
                    />
                    {validatedFields.phone && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                    )}
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="h-12 pr-10"
                    onBlur={handleFieldBlur}
                  />
                  {validatedFields.email && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  )}
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Property Address *</Label>
                <div className="relative">
                  <Input
                    id="address"
                    name="address"
                    required
                    placeholder="123 Main St, Denver, CO 80202"
                    className="h-12 pr-10"
                    onBlur={handleFieldBlur}
                  />
                  {validatedFields.address && (
                    <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
                  )}
                </div>
                {errors.address && (
                  <p className="text-xs text-destructive">{errors.address}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Type *</Label>
                <Select name="service" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border">
                    <SelectItem value="cleaning">Gutter Cleaning</SelectItem>
                    <SelectItem value="repair">
                      Gutter Repair & Sealing
                    </SelectItem>
                    <SelectItem value="guards">
                      Gutter Guard Installation
                    </SelectItem>
                    <SelectItem value="not-sure">
                      Not Sure / Multiple Services
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Additional Details (Optional)
                </Label>
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
                By submitting this form, you agree to be contacted regarding your
                quote request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
