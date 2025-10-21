import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";
import { successStories } from "@/data/successStories";

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4 animate-fade-in">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Real People.{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Real Change.
              </span>
            </h1>
            <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Join thousands of Americans who transformed their health with FitJourney USA
            </p>
          </div>

          {/* Success Stories Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-12 md:mb-16">
            {successStories.map((story, index) => (
              <Link key={index} to={`/success-stories/${story.id}`} className="group">
                <Card className="h-full border-2 border-border shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary animate-scale-in">
                  <CardContent className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                    {/* Rating Stars */}
                    <div className="flex gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="font-lato text-base text-muted-foreground italic line-clamp-3">
                      "{story.quote}"
                    </p>

                    {/* Result Badge */}
                    <div className="bg-primary-light rounded-lg p-3 text-center">
                      <p className="font-poppins text-lg font-bold text-primary">
                        {story.result}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="pt-4 border-t border-border">
                      <p className="font-poppins text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {story.name}
                      </p>
                      <p className="font-lato text-sm text-muted-foreground">
                        {story.location}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 font-lato text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Read Full Story
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="border-2 border-primary shadow-hover bg-gradient-to-br from-primary-light to-background">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-6">
              <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
                Ready to Write Your Success Story?
              </h2>
              <p className="font-lato text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Start your transformation today with our free calorie calculator and personalized nutrition recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
                <a href="/calculator" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-hero text-primary-foreground font-lato text-base sm:text-lg font-semibold rounded-lg shadow-card transition-all hover:shadow-hover">
                    Start My Journey
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
