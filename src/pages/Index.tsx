import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient pattern-dots py-12 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-block">
                  <div className="bg-primary/10 border-2 border-primary rounded-full px-4 sm:px-6 py-2 text-primary text-xs sm:text-sm font-medium">
                    Accurate • Reliable • Scientific
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Modern Shelf Life Prediction with{" "}
                  <span className="text-primary">Traditional Values</span>
                </h1>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Predict product shelf life accurately with our AI-powered model, based on food type, storage, and environmental conditions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground button-shadow transition-smooth text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
                    asChild
                  >
                    <Link to="/predictor">
                      Try Predictor
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <StatsCard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Secure Food Safety with Scientific Precision
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI model leverages environmental data to provide accurate shelf life predictions.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "AI-Powered Analysis",
                  description: "Advanced machine learning models analyze food types and conditions.",
                  icon: "🤖"
                },
                {
                  title: "Environmental Factors",
                  description: "Considers temperature, humidity, and storage conditions for accuracy.",
                  icon: "🌡️"
                },
                {
                  title: "Real-time Predictions",
                  description: "Get instant shelf life estimates based on current data.",
                  icon: "⚡"
                },
                {
                  title: "Scientific Approach",
                  description: "Based on food science research and traditional preservation wisdom.",
                  icon: "🔬"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg card-shadow hover:card-shadow-hover transition-smooth border border-border/50"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
