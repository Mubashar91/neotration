import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, Calculator, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Page Not Found - FitJourney USA"
        description="The page you're looking for could not be found. Return to FitJourney USA home page."
        keywords="404, page not found, FitJourney USA, fitness website, missing page"
        noindex={true}
      />
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-3xl text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="font-poppins text-9xl sm:text-[12rem] font-extrabold bg-gradient-hero bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="space-y-4 mb-12">
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-xl mx-auto">
              The page you're looking for seems to have taken a detour on its fitness journey. 
              Let's get you back on track!
            </p>
            <p className="font-lato text-sm text-muted-foreground/80">
              Path attempted: <code className="bg-secondary-light px-2 py-1 rounded">{location.pathname}</code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link to="/">
              <Button className="w-full h-auto flex flex-col items-center gap-2 py-4 bg-gradient-hero hover:opacity-90">
                <Home className="h-6 w-6" />
                <span className="font-poppins font-semibold">Home</span>
              </Button>
            </Link>
            <Link to="/calculator">
              <Button className="w-full h-auto flex flex-col items-center gap-2 py-4 bg-secondary hover:bg-secondary/90">
                <Calculator className="h-6 w-6" />
                <span className="font-poppins font-semibold">Calculator</span>
              </Button>
            </Link>
            <Link to="/food">
              <Button className="w-full h-auto flex flex-col items-center gap-2 py-4 bg-secondary hover:bg-secondary/90">
                <Search className="h-6 w-6" />
                <span className="font-poppins font-semibold">Food Guide</span>
              </Button>
            </Link>
            <Link to="/blog">
              <Button className="w-full h-auto flex flex-col items-center gap-2 py-4 bg-secondary hover:bg-secondary/90">
                <BookOpen className="h-6 w-6" />
                <span className="font-poppins font-semibold">Blog</span>
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="border-t border-border pt-8">
            <p className="font-lato text-sm text-muted-foreground mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/about" className="font-lato text-primary hover:text-primary/80 underline">
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/success-stories" className="font-lato text-primary hover:text-primary/80 underline">
                Success Stories
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact" className="font-lato text-primary hover:text-primary/80 underline">
                Contact
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/privacy" className="font-lato text-primary hover:text-primary/80 underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
