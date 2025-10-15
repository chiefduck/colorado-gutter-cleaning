import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import SpecialOffer from "@/components/SpecialOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import StickyHeader from "@/components/StickyHeader";
import { useEffect } from "react";
import { trackPageView } from "@/utils/analytics";

const Index = () => {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <About />
      <Services />
      <QuoteForm />
      <Testimonials />
      <SpecialOffer />
      <FAQ />
      <Footer />
      <StickyHeader />
      <StickyContact />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
