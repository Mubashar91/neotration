import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Apple, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-poppins text-xl font-bold text-foreground transition-colors hover:text-primary">
          <Apple className="h-6 w-6 text-primary" />
          <span>FitJourney USA</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/calculator" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            Calculator
          </Link>
          <Link to="/food" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            Food Guide
          </Link>
          <Link to="/blog" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            Blog
          </Link>
          <Link to="/success-stories" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            Success Stories
          </Link>
          <Link to="/about" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary">
            Contact Us
          </Link>
          <Link to="/calculator">
            <Button className="bg-gradient-hero font-lato font-semibold shadow-card transition-all hover:shadow-hover">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto flex flex-col gap-4 p-4">
            <Link
              to="/calculator"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/food"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Food Guide
            </Link>
            <Link
              to="/blog"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/success-stories"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/about"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-lato text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/calculator" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-gradient-hero font-lato font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
