import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="ShelfWise - Smart Shelf Life Prediction" 
              className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:scale-105"
            />
            <span className="text-lg sm:text-xl font-bold text-foreground hidden sm:inline">
              ShelfWise
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
