import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Free stock image from Unsplash
const heroImage = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-light py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Unlock Your Personalized{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Nutrition Plan
              </span>
            </h1>
            <p className="font-lato text-base sm:text-lg text-muted-foreground md:text-xl max-w-xl">
              Simple, effective tools to help you reach your health and fitness goals
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
              <Link to="/calculator" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-hero font-lato text-base sm:text-lg font-semibold shadow-card transition-all hover:shadow-hover group">
                  Start My Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/success-stories" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-lato text-base sm:text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Read Success Stories
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8 pt-4">
              <div className="text-center sm:text-left">
                <p className="font-poppins text-2xl sm:text-3xl font-bold text-foreground">50K+</p>
                <p className="font-lato text-xs sm:text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="text-center sm:text-left">
                <p className="font-poppins text-2xl sm:text-3xl font-bold text-foreground">4.9★</p>
                <p className="font-lato text-xs sm:text-sm text-muted-foreground">User Rating</p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div className="text-center sm:text-left">
                <p className="font-poppins text-2xl sm:text-3xl font-bold text-foreground">100%</p>
                <p className="font-lato text-xs sm:text-sm text-muted-foreground">Free to Use</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl" />
            <img
              src={heroImage}
              alt="Happy person with healthy smoothie bowl in outdoor park setting"
              className="relative rounded-3xl shadow-hover object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
