import { Link } from "react-router-dom";
import { Apple, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-2 font-poppins text-xl font-bold text-foreground">
              <Apple className="h-6 w-6 text-primary" />
              <span>FitJourney USA</span>
            </Link>
            <p className="font-lato text-sm text-muted-foreground max-w-xs">
              Your trusted partner for personalized nutrition and healthy living. Empowering Americans to reach their health goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-poppins text-base font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/calculator" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Calorie Calculator
              </Link>
              <Link to="/food" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Food Guide
              </Link>
              <Link to="/blog" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Health Blog
              </Link>
              <Link to="/success-stories" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Success Stories
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-poppins text-base font-semibold text-foreground">Resources</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-poppins text-base font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@fitjourneyusa.com" className="flex items-center gap-2 font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                hello@fitjourneyusa.com
              </a>
              <p className="font-lato text-sm text-muted-foreground">
                Have questions? We're here to help you on your fitness journey!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <p className="font-lato text-center text-sm text-muted-foreground">
            © 2025 FitJourney USA. All rights reserved. Made with ❤️ for a healthier America.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
