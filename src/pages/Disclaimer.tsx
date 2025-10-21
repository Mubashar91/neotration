import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-light py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-secondary" />
              </div>
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Disclaimer
              </h1>
              <p className="font-lato text-muted-foreground">
                Important Information About Using FitJourney USA
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-2 border-secondary shadow-card bg-secondary-light/10 mb-8">
              <CardContent className="p-6 sm:p-8">
                <p className="font-lato text-lg text-foreground text-center">
                  <strong>Please Read Carefully:</strong> The information provided on FitJourney USA is for 
                  educational and informational purposes only and should not replace professional medical advice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Medical Disclaimer</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    The content on FitJourney USA, including but not limited to calorie calculations, nutrition information, 
                    meal suggestions, and fitness advice, is provided for general informational purposes only. It is not 
                    intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p className="font-lato text-muted-foreground">
                    <strong>Always seek the advice of your physician or other qualified health provider</strong> with any 
                    questions you may have regarding a medical condition, dietary changes, weight loss, or fitness program. 
                    Never disregard professional medical advice or delay in seeking it because of something you have read 
                    on this website.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Not a Medical Service</h2>
                  <p className="font-lato text-muted-foreground">
                    FitJourney USA is not a medical service, healthcare provider, or licensed nutritionist. Our calorie 
                    calculator and nutrition tools are based on general formulas and population averages. Individual 
                    nutritional needs vary based on many factors including metabolism, medical conditions, medications, 
                    and other personal circumstances that our calculators cannot account for.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Accuracy of Calculations</h2>
                  <p className="font-lato text-muted-foreground">
                    While we use scientifically-recognized formulas (such as the Mifflin-St Jeor equation) for our 
                    calorie calculations, these are estimates only. Actual calorie needs can vary significantly from 
                    person to person. The calculations provided should be used as a general guideline, not as definitive 
                    medical advice.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Health and Safety</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    Before beginning any nutrition or fitness program:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>Consult with your healthcare provider, especially if you have existing medical conditions</li>
                    <li>Discuss any planned dietary changes with a registered dietitian or nutritionist</li>
                    <li>Inform your doctor if you are pregnant, nursing, or have any chronic health conditions</li>
                    <li>Seek immediate medical attention if you experience adverse symptoms</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Food Database Information</h2>
                  <p className="font-lato text-muted-foreground">
                    Nutritional information in our food database is compiled from various sources including USDA databases 
                    and other publicly available information. While we strive for accuracy, nutritional content can vary 
                    based on preparation methods, brands, portion sizes, and other factors. Always verify nutritional 
                    information with product labels or authoritative sources.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">No Professional Relationship</h2>
                  <p className="font-lato text-muted-foreground">
                    Use of FitJourney USA does not create a healthcare provider-patient relationship, dietitian-client 
                    relationship, or any other professional relationship. We do not provide personalized medical or 
                    nutritional counseling.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Results May Vary</h2>
                  <p className="font-lato text-muted-foreground">
                    Success stories and testimonials featured on FitJourney USA represent individual experiences and 
                    results, which may not be typical. Your results may vary based on your effort, adherence to 
                    recommendations, genetics, metabolism, and other factors. We make no guarantees regarding weight 
                    loss, health outcomes, or fitness achievements.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Third-Party Content</h2>
                  <p className="font-lato text-muted-foreground">
                    Our website may contain links to third-party websites or display third-party advertisements. 
                    We are not responsible for the accuracy, completeness, or reliability of any information, data, 
                    opinions, advice, or statements made on third-party sites. Always verify information from multiple 
                    reputable sources.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="font-lato text-muted-foreground">
                    FitJourney USA and its owners, employees, and affiliates shall not be liable for any direct, indirect, 
                    incidental, consequential, or punitive damages arising from your use of this website or reliance on 
                    any information provided. This includes but is not limited to health complications, injuries, or 
                    adverse outcomes related to dietary or fitness changes.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Special Populations</h2>
                  <p className="font-lato text-muted-foreground mb-3">
                    Our tools and content are designed for healthy adults. Special caution and professional guidance 
                    are necessary for:
                  </p>
                  <ul className="list-disc list-inside font-lato text-muted-foreground space-y-2 ml-4">
                    <li>Pregnant or nursing women</li>
                    <li>Individuals under 18 years of age</li>
                    <li>People with eating disorders or history of disordered eating</li>
                    <li>Individuals with diabetes, heart disease, or other chronic conditions</li>
                    <li>People taking medications that affect metabolism or appetite</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Emergency Situations</h2>
                  <p className="font-lato text-muted-foreground">
                    If you are experiencing a medical emergency, call 911 or your local emergency number immediately. 
                    Do not rely on information from this website in emergency situations.
                  </p>
                </div>

                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Questions or Concerns</h2>
                  <p className="font-lato text-muted-foreground">
                    If you have questions about this disclaimer or concerns about the information on our website, 
                    please contact us at legal@fitjourneyusa.com
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="font-lato text-sm text-muted-foreground italic text-center">
                    By using FitJourney USA, you acknowledge that you have read, understood, and agree to this disclaimer.
                  </p>
                  <p className="font-lato text-sm text-muted-foreground text-center mt-2">
                    Last Updated: October 21, 2025
                  </p>
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

export default Disclaimer;
