import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - FitJourney USA"
        description="Read FitJourney USA's privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, user privacy, fitness data, health app privacy, personal information, GDPR, HIPAA"
        canonicalUrl="/privacy"
        noindex={true}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-light py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Privacy <span className="bg-gradient-hero bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="font-lato text-muted-foreground">
                Last Updated: October 21, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                  <p className="font-lato text-muted-foreground">
                    Welcome to FitJourney USA. We respect your privacy and are committed to protecting your personal data. 
                    This privacy policy will inform you about how we look after your personal data when you visit our website 
                    and tell you about your privacy rights and how the law protects you.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    We may collect, use, store and transfer different kinds of personal data about you:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li><strong>Personal Information:</strong> Name, email address, contact details</li>
                    <li><strong>Health Data:</strong> Age, weight, height, activity level, fitness goals (voluntarily provided for calculations)</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                    <li><strong>Usage Data:</strong> How you use our website and services</li>
                    <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    We use your personal data for the following purposes:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>To provide and maintain our calorie calculator and nutrition services</li>
                    <li>To personalize your experience and content recommendations</li>
                    <li>To improve our website and services</li>
                    <li>To communicate with you, including customer support</li>
                    <li>To send you newsletters and marketing communications (with your consent)</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">4. Cookies and Tracking</h2>
                  <p className="font-lato text-muted-foreground">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                    However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">5. Third-Party Services</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    We may use third-party services including:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                    <li><strong>Analytics Services:</strong> To monitor and analyze website usage</li>
                    <li><strong>Payment Processors:</strong> For processing transactions (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
                  <p className="font-lato text-muted-foreground">
                    We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
                    used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, 
                    contractors, and other third parties who have a business need to know.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    Under data protection laws, you have rights including:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate data</li>
                    <li>Right to request deletion of your data</li>
                    <li>Right to object to processing of your data</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                  <p className="font-lato text-muted-foreground">
                    Our service is not intended for children under 13 years of age. We do not knowingly collect personal information 
                    from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, 
                    please contact us.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
                  <p className="font-lato text-muted-foreground">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                    Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                  <p className="font-lato text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
