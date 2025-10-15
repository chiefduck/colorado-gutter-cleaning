import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | Colorado Gutter Cleaning";
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: October 15, 2025</p>

          <div className="space-y-8 text-card-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the website ColoradoGutterCleaning.co (the "Site") and requesting services from Colorado Gutter Cleaning (the "Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Colorado Gutter Cleaning provides professional gutter cleaning, repair, sealing, and guard installation services throughout Colorado. Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Residential and commercial gutter cleaning</li>
                <li>Gutter repair and sealing</li>
                <li>Gutter guard installation</li>
                <li>Downspout services</li>
                <li>Free property inspections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Quote Requests and Estimates</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit a quote request through our Site:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>All quotes are free and provided without obligation</li>
                <li>Quotes are estimates based on the information you provide</li>
                <li>Final pricing may vary based on actual property conditions discovered during service</li>
                <li>We will inform you of any additional costs before proceeding with work beyond the original quote</li>
                <li>Quotes are valid for 30 days from the date provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Scheduling and Cancellation</h2>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Appointments</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Appointments are subject to availability and weather conditions</li>
                <li>We will make reasonable efforts to provide same-day service when requested</li>
                <li>We reserve the right to reschedule appointments due to weather, equipment issues, or other unforeseen circumstances</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Cancellation Policy</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You may cancel or reschedule your appointment at any time by calling (720) 555-0123</li>
                <li>We request at least 24 hours notice for cancellations when possible</li>
                <li>No cancellation fees apply to standard service appointments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Payment is due upon completion of services unless other arrangements have been made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>You will receive an itemized invoice for all services rendered</li>
                <li>Promotional discounts must be mentioned at the time of booking to apply</li>
                <li>Late payments may be subject to additional fees as permitted by Colorado law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Service Guarantee and Warranty</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We stand behind our work with a 100% satisfaction guarantee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>If you are not completely satisfied with our service, contact us within 48 hours and we will address the issue at no additional cost</li>
                <li>Gutter guard installations carry a manufacturer's warranty as specified at time of installation</li>
                <li>Our workmanship warranty covers defects in our installation work for 1 year from service date</li>
                <li>The warranty does not cover damage caused by severe weather, neglect, or alterations made by others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Property Access and Liability</h2>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Access</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By scheduling service, you grant us access to your property to perform the requested work. You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Providing clear access to gutters and work areas</li>
                <li>Securing pets during service</li>
                <li>Informing us of any property hazards or special conditions</li>
                <li>Ensuring adequate parking for service vehicles</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Insurance and Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Colorado Gutter Cleaning maintains comprehensive general liability insurance and workers' compensation coverage. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pre-existing damage to gutters, roofing, or property</li>
                <li>Damage to landscaping that is unavoidable during normal service operations</li>
                <li>Hidden or concealed defects discovered during service</li>
                <li>Consequences of deferred maintenance or neglected gutter systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. SMS/Text Message Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By providing your mobile phone number, you expressly consent to receive transactional and promotional text messages from Colorado Gutter Cleaning. This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Quote confirmations and follow-ups</li>
                <li>Appointment reminders and confirmations</li>
                <li>Service updates and technician arrival notifications</li>
                <li>Seasonal maintenance reminders</li>
                <li>Promotional offers and discounts (with your consent)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP to any message or contacting us at (720) 555-0123. For help, reply HELP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Our total liability for any claim shall not exceed the amount paid for the specific service giving rise to the claim</li>
                <li>We are not liable for any indirect, incidental, consequential, or punitive damages</li>
                <li>We are not responsible for delays or failures due to circumstances beyond our reasonable control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Colorado Gutter Cleaning, its officers, employees, and agents from any claims, losses, damages, or expenses arising from your violation of these Terms or your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this Site, including text, graphics, logos, images, and software, is the property of Colorado Gutter Cleaning and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from our content without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these Terms or our services shall be resolved through:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>First, good faith negotiations between the parties</li>
                <li>If negotiations fail, mediation in Denver County, Colorado</li>
                <li>If mediation is unsuccessful, binding arbitration under Colorado law</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by the laws of the State of Colorado without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-card p-6 rounded-xl border-2 border-border">
                <p className="font-semibold text-card-foreground mb-2">Colorado Gutter Cleaning</p>
                <p className="text-muted-foreground">Email: info@coloradoguttercleaning.co</p>
                <p className="text-muted-foreground">Phone: (720) 555-0123</p>
                <p className="text-muted-foreground">Address: Denver, CO 80202</p>
              </div>
            </section>

            <section className="bg-accent/5 p-6 rounded-xl border-l-4 border-accent">
              <p className="text-muted-foreground leading-relaxed">
                <strong>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</strong>
              </p>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
