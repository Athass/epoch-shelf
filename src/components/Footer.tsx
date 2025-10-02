import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Predicting shelf life with accuracy and scientific precision. Modern technology meets traditional values for food safety.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@shelflife.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Science Ave, Tech City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">FAQ</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shelf Life Predictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
