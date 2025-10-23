import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
// import AdSense from "@/components/AdSense"; // Uncomment when AdSense is approved
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Smart Grocery Shopping for Better Nutrition",
    excerpt: "Master the art of selecting quality ingredients that support your wellness goals while staying within budget.",
    category: "Shopping Guide",
    readTime: "6 min read"
  },
  {
    title: "Building Sustainable Eating Habits That Last",
    excerpt: "Transform your relationship with food through simple, science-backed approaches that fit your lifestyle.",
    category: "Lifestyle",
    readTime: "8 min read"
  },
  {
    title: "Understanding Your Body's Nutritional Needs",
    excerpt: "Decode the signals your body sends and learn how to respond with the right nutritional choices.",
    category: "Health Science",
    readTime: "7 min read"
  }
];

const Index = () => {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FitJourney USA Calorie Calculator',
    description: 'Free calorie calculator and personalized nutrition planner for Americans',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="min-h-screen bg-background font-lato">
      <SEO
        title="FitJourney USA - Your Personal Nutrition & Calorie Calculator"
        description="Unlock your personalized wellness journey with our intelligent nutrition calculator and custom meal guidance. Authentic transformation stories from real users."
        keywords="calorie calculator USA, healthy meal plan, weight loss calculator, nutrition calculator, American diet plan 2025, free calorie tracker"
        canonicalUrl="/"
        structuredData={[homePageSchema]}
      />
      <Navbar />
      <main>
        <Hero />
        
        {/* Main Features - Calculator, Food Guide, Success Stories */}
        <Features />
        
        {/* AdSense Ad - Top of Page (uncomment after AdSense approval) */}
        {/* <section className="py-6 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <AdSense adSlot="1234567890" adFormat="auto" />
          </div>
        </section> */}
        
        {/* Blog Preview Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
              <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Latest from Our{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Health Blog
                </span>
              </h2>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Expert advice, nutrition tips, and the latest health trends
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="group overflow-hidden border-2 border-border bg-card shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                  <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-poppins text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="font-lato text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-poppins text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-lato text-sm sm:text-base text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link to="/blog" className="inline-flex items-center gap-2 font-lato text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 font-lato text-sm sm:text-base font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View All Articles
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 sm:p-8">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <p className="font-poppins text-3xl sm:text-4xl font-bold text-foreground mb-2">50,000+</p>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">Active Users</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 sm:p-8">
                  <Award className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mx-auto mb-3 sm:mb-4" />
                  <p className="font-poppins text-3xl sm:text-4xl font-bold text-foreground mb-2">98%</p>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 sm:p-8">
                  <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <p className="font-poppins text-3xl sm:text-4xl font-bold text-foreground mb-2">2M+</p>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">Meals Tracked</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-border shadow-card text-center">
                <CardContent className="p-6 sm:p-8">
                  <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-secondary mx-auto mb-3 sm:mb-4" />
                  <p className="font-poppins text-3xl sm:text-4xl font-bold text-foreground mb-2">24/7</p>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
              <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                How It{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Works
                </span>
              </h2>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Get started with your personalized nutrition plan in three simple steps
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-2 border-primary shadow-card relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-poppins text-xl sm:text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                  <h3 className="font-poppins text-xl sm:text-2xl font-bold text-foreground">
                    Define Your Profile
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">
                    Share your basic details and wellness aspirations to receive nutrition recommendations tailored specifically for your journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary shadow-card relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-poppins text-xl sm:text-2xl font-bold text-secondary-foreground">2</span>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-secondary" />
                  <h3 className="font-poppins text-xl sm:text-2xl font-bold text-foreground">
                    Monitor Your Progress
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">
                    Record your food choices and observe how they align with your wellness targets through our intuitive tracking system.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-card relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-poppins text-xl sm:text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardContent className="p-6 sm:p-8 space-y-3 sm:space-y-4">
                  <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                  <h3 className="font-poppins text-xl sm:text-2xl font-bold text-foreground">
                    Access Your Blueprint
                  </h3>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground">
                    Receive your custom nutrition blueprint in a convenient format that travels with you wherever life takes you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* AdSense Ad - Mid Page (uncomment after AdSense approval) */}
        {/* <section className="py-6 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <AdSense adSlot="9876543210" adFormat="auto" />
          </div>
        </section> */}
        
        {/* Testimonials Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-primary-light/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-3 sm:space-y-4">
              <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                What Our{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Users Say
                </span>
              </h2>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Real feedback from people who transformed their health
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="border-2 border-border shadow-card">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground italic">
                    "I never thought tracking my nutrition could be this straightforward. The daily meal guidance helped me build confidence in my food choices. My doctor is thrilled with my health improvements!"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-poppins text-base font-bold text-foreground">Rachel H.</p>
                    <p className="font-lato text-sm text-muted-foreground">Seattle, WA</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-card">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground italic">
                    "As a working parent, I needed something quick and reliable. This tool transformed how I approach family meals while keeping everyone healthy and satisfied. Game changer for our household!"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-poppins text-base font-bold text-foreground">Carlos M.</p>
                    <p className="font-lato text-sm text-muted-foreground">Miami, FL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-card">
                <CardContent className="p-6 sm:p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-secondary text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground italic">
                    "The step-by-step approach made everything feel manageable. Instead of overwhelming diet rules, I got practical guidance that fits my lifestyle. My confidence around food has completely transformed!"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-poppins text-base font-bold text-foreground">Jennifer W.</p>
                    <p className="font-lato text-sm text-muted-foreground">Nashville, TN</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <Link to="/success-stories">
                <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-hero text-primary-foreground font-lato text-base sm:text-lg font-semibold rounded-lg shadow-card transition-all hover:shadow-hover">
                  Read More Success Stories
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
