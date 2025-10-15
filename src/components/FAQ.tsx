import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much does gutter cleaning cost in Colorado?",
    answer: "Pricing varies based on the size of your home, gutter condition, and accessibility. Most residential gutter cleaning services range from $150-$350. We provide free, no-obligation quotes so you know exactly what to expect—no hidden fees or surprises."
  },
  {
    question: "How often should I clean my gutters in Colorado?",
    answer: "We recommend cleaning gutters at least twice a year—once in late spring and once in fall. Colorado's pine needles, cottonwood seeds, and seasonal weather make regular maintenance essential to prevent ice dams in winter and water damage during spring thaw."
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We understand gutter emergencies can't wait. Subject to availability, we offer same-day service throughout the Denver metro area and surrounding communities. Call us directly at (720) 555-0123 to check availability for urgent requests."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Colorado Gutter Cleaning is fully licensed, bonded, and insured for your complete peace of mind. Our team is trained in proper safety procedures, and we carry comprehensive liability and workers' compensation insurance."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the entire Front Range including Denver Metro, Boulder County, Fort Collins, Colorado Springs, Lakewood, Aurora, and surrounding areas. If you're not sure whether we serve your location, give us a call—we're always expanding our service area!"
  },
  {
    question: "What happens if you find damage during cleaning?",
    answer: "During every cleaning, we perform a thorough inspection. If we discover any leaks, loose gutters, or damage, we'll document it with photos and provide you with repair options and pricing. You're never obligated to accept additional services—we just want you to be informed about your home's condition."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent/10">
              <HelpCircle className="w-8 h-8 text-accent" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-card-foreground md:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-accent"></div>
            <p className="text-lg text-muted-foreground">
              Got questions? We have answers. Here are the most common questions we hear from Colorado homeowners.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in-up">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 py-2 border-2 border-border rounded-xl bg-gradient-section hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
              Still have questions? We're here to help!
            </p>
            <a
              href="tel:7209179308"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-accent transition-colors"
            >
              Call us at (720) 917-9308
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
