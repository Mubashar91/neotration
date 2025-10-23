import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms of Service - FitJourney USA"
        description="Read FitJourney USA's terms of service to understand the rules and guidelines for using our platform."
        keywords="terms of service, user agreement, terms and conditions"
        canonicalUrl="/terms"
        noindex={true}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-light py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Terms of <span className="bg-gradient-hero bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="font-lato text-muted-foreground">
                Last Updated: October 21, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p className="font-lato text-muted-foreground">
                    By accessing and using FitJourney USA ("the Website"), you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    Permission is granted to temporarily use FitJourney USA for personal, non-commercial purposes. 
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or public display</li>
                    <li>Attempt to reverse engineer any software on the Website</li>
                    <li>Remove any copyright or proprietary notations</li>
                    <li>Transfer the materials to another person or "mirror" the materials on another server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">3. Medical Disclaimer</h2>
                  <p className="font-lato text-muted-foreground">
                    The information provided on FitJourney USA is for educational and informational purposes only. 
                    It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
                    Always seek the advice of your physician or other qualified health provider with any questions 
                    you may have regarding a medical condition or fitness program.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    By using this website, you agree to:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>Provide accurate and truthful information when using our calculators</li>
                    <li>Not use the website for any illegal purposes</li>
                    <li>Not attempt to harm or disrupt the website's functionality</li>
                    <li>Not impersonate any person or entity</li>
                    <li>Respect the intellectual property rights of FitJourney USA and others</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">5. Accuracy of Information</h2>
                  <p className="font-lato text-muted-foreground">
                    While we strive to provide accurate calorie calculations and nutritional information, 
                    FitJourney USA makes no warranties or representations about the accuracy, reliability, 
                    completeness, or timeliness of the content, software, text, graphics, or links on this website.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">6. Third-Party Links</h2>
                  <p className="font-lato text-muted-foreground">
                    Our website may contain links to third-party websites or services that are not owned or controlled 
                    by FitJourney USA. We have no control over, and assume no responsibility for, the content, 
                    privacy policies, or practices of any third-party websites or services.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p className="font-lato text-muted-foreground">
                    In no event shall FitJourney USA or its suppliers be liable for any damages (including, without limitation, 
                    damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                    to use the materials on the website, even if FitJourney USA or an authorized representative has been 
                    notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">8. Indemnification</h2>
                  <p className="font-lato text-muted-foreground">
                    You agree to indemnify, defend, and hold harmless FitJourney USA, its officers, directors, employees, 
                    and agents from any claims, damages, losses, liabilities, and all costs and expenses of defense, 
                    including attorneys' fees, resulting directly or indirectly from your use of the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
                  <p className="font-lato text-muted-foreground">
                    FitJourney USA may revise these Terms of Service at any time without notice. By using this website, 
                    you are agreeing to be bound by the current version of these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
                  <p className="font-lato text-muted-foreground">
                    These terms and conditions are governed by and construed in accordance with the laws of the 
                    United States and the State of California, and you irrevocably submit to the exclusive 
                    jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
                  <p className="font-lato text-muted-foreground">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <ul className="list-none font-lato text-muted-foreground space-y-2 mt-3">
                    <li>Email: mmubasharshahzad40@gamil.com</li>
                    <li>Phone: +1 (800) 348-5687</li>
                    <li>Address: 123 Health Street, San Francisco, CA 94102, United States</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
