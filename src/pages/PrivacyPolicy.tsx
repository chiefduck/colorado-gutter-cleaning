import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Colorado Gutter Cleaning";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: October 15, 2025</p>

          <div className="space-y-8 text-card-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Colorado Gutter Cleaning ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ColoradoGutterCleaning.co or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you request a quote or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (mobile or landline)</li>
                <li>Property address</li>
                <li>Service preferences and requirements</li>
                <li>Any additional information you provide in messages or forms</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide you with free quotes for our gutter services</li>
                <li>Schedule appointments and service visits</li>
                <li>Communicate with you via phone, email, or SMS about your service requests</li>
                <li>Send appointment reminders and follow-up messages</li>
                <li>Improve our website and services</li>
                <li>Send promotional offers and seasonal service reminders (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure the security of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. SMS/Text Message Communications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your mobile phone number and submitting a quote request, you expressly consent to receive text messages from Colorado Gutter Cleaning regarding your service request, appointment confirmations, reminders, and follow-ups.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Your Consent</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Message frequency may vary</li>
                <li>Message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Consent is not a condition of purchase</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Opt-Out</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may opt out of receiving text messages at any time by:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Replying STOP to any text message we send you</li>
                <li>Calling us at (720) 917-9308 to request removal</li>
                <li>Emailing us at info@coloradoguttercleaning.co</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., scheduling software, payment processors)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>With Your Consent:</strong> We may share information for any other purpose with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us at info@coloradoguttercleaning.co or call (720) 917-9308.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-xl border-2 border-border">
                <p className="font-semibold text-card-foreground mb-2">Colorado Gutter Cleaning</p>
                <p className="text-muted-foreground">Email: info@coloradoguttercleaning.co</p>
                <p className="text-muted-foreground">Phone: (720) 917-9308</p>
                <p className="text-muted-foreground">Address: Denver, CO 80202</p>
              </div>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
