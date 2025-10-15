import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Colorado Gutter Cleaning</h3>
            <p className="mb-4 text-primary-foreground/80 text-sm">
              Professional gutter services throughout Colorado. Licensed, insured, and committed to excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:7205550123" className="hover:text-accent transition-colors">
                  (720) 555-0123
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@coloradoguttercleaning.co" className="hover:text-accent transition-colors">
                  info@coloradoguttercleaning.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Denver, CO 80202</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Service Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Denver Metro</li>
              <li>Boulder County</li>
              <li>Fort Collins</li>
              <li>Colorado Springs</li>
              <li>Lakewood</li>
              <li>Aurora</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Gutter Cleaning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Gutter Repair
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Gutter Sealing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Gutter Guard Installation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Downspout Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer text-left"
                >
                  Free Inspections
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Colorado Gutter Cleaning. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/privacy" 
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link 
                to="/terms" 
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
