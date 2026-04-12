import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, Award } from "lucide-react";

const About = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About FitJourney USA',
    description: 'Learn about our mission to empower Americans to achieve their health and fitness goals',
  };     

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About FitJourney USA - Free Nutrition & Calorie Tools for Americans"
        description="FitJourney USA helps 50,000+ Americans calculate daily calories, track macros, and reach their weight loss goals with free, science-backed nutrition tools."
        keywords="about FitJourney USA, free calorie calculator USA, nutrition tools for Americans, weight loss help USA, healthy eating America, calorie tracker USA, free diet tools USA"
        canonicalUrl="/about"
        structuredData={[aboutSchema]}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-primary-light py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                About <span className="bg-gradient-hero bg-clip-text text-transparent">FitJourney USA</span>
              </h1>
              <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
                Empowering Americans to achieve their health and fitness goals through personalized nutrition guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-poppins text-2xl font-bold text-foreground mb-4">Our Story</h2>
                  <p className="font-lato text-muted-foreground mb-4">
                    FitJourney USA was founded in 2024 with a simple mission: to make personalized nutrition accessible 
                    to everyone. We recognized that many Americans struggle with understanding their calorie needs and 
                    making informed dietary choices. Our platform was born from the belief that everyone deserves 
                    access to accurate, science-based nutrition information.
                  </p>
                  <p className="font-lato text-muted-foreground">
                    Today, we serve over 50,000 active users across the United States, helping them calculate their 
                    daily calorie needs, track their meals, and make healthier food choices. Our commitment to 
                    evidence-based nutrition and user-friendly tools has made us a trusted partner in thousands 
                    of health journeys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="font-lato text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at FitJourney USA
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-foreground">Accuracy</h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    We provide scientifically-backed calorie calculations and nutrition information you can trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-secondary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-foreground">Accessibility</h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    Health tools should be free and available to everyone, regardless of background or income.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-primary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-foreground">Compassion</h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    We understand that every health journey is unique and deserves personalized support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 bg-secondary-light rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-foreground">Excellence</h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    We continuously improve our platform to deliver the best user experience possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="border-2 border-primary shadow-card bg-primary-light/20">
              <CardContent className="p-6 sm:p-8">
                <h2 className="font-poppins text-2xl font-bold text-foreground mb-4 text-center">Our Mission</h2>
                <p className="font-lato text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                  To empower every American with the knowledge, tools, and support they need to make informed 
                  nutritional decisions and achieve lasting health transformation. We believe that when people 
                  understand their bodies and have access to personalized guidance, they can accomplish 
                  incredible things.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              What We Offer
            </h2>
            <Card className="border-2 border-border shadow-card">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-foreground mb-2">Personalized Calorie Calculator</h3>
                    <p className="font-lato text-muted-foreground">
                      Get accurate daily calorie recommendations based on your age, gender, weight, height, 
                      activity level, and fitness goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-foreground mb-2">Comprehensive Food Database</h3>
                    <p className="font-lato text-muted-foreground">
                      Access detailed nutritional information for hundreds of foods, organized by categories 
                      to help you make better choices.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-foreground mb-2">Meal Tracking Tools</h3>
                    <p className="font-lato text-muted-foreground">
                      Log your daily meals and monitor your calorie intake with our easy-to-use tracking system.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-foreground mb-2">Educational Resources</h3>
                    <p className="font-lato text-muted-foreground">
                      Learn from our blog featuring evidence-based nutrition tips, success stories, and expert advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Join Our Community
            </h2>
            <p className="font-lato text-lg text-muted-foreground mb-6">
              Ready to start your health journey? We're here to support you every step of the way.
            </p>
            <a href="/calculator" className="inline-block">
              <button className="px-8 py-4 bg-gradient-hero text-primary-foreground font-lato text-lg font-semibold rounded-lg shadow-card transition-all hover:shadow-hover">
                Get Started Today
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
