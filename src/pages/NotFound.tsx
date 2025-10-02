import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 hero-gradient pattern-dots flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground button-shadow transition-smooth"
            asChild
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
