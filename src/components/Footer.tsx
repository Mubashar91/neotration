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
              <a href="https://www.facebook.com/fitjourneyusa" target="_blank" rel="nofollow noopener" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/fitjourneyusa" target="_blank" rel="nofollow noopener" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/fitjourneyusa" target="_blank" rel="nofollow noopener" className="text-muted-foreground hover:text-primary transition-colors">
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
            <h4 className="font-poppins text-base font-semibold text-foreground">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-poppins text-base font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:mmubasharshahzad40@gamil.com" className="flex items-center gap-2 font-lato text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                mmubasharshahzad40@gamil.com
              </a>
              <p className="font-lato text-sm text-muted-foreground">
                Have questions? We're here to help you on your fitness journey!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-lato text-center text-sm text-muted-foreground">
              © 2025 FitJourney USA. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link to="/privacy" className="font-lato text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="font-lato text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/disclaimer" className="font-lato text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
