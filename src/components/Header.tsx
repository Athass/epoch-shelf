import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCircle, Shield } from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Shelf Life Predictor" 
              className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:scale-105"
            />
            <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:inline">
              Shelf Life Predictor
            </span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              asChild
            >
              <Link to="/admin" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </Link>
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground button-shadow transition-smooth"
              asChild
            >
              <Link to="/user" className="flex items-center gap-2">
                <UserCircle className="h-4 w-4" />
                <span className="hidden sm:inline">User</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
