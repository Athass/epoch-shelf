import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, RefreshCw, ThermometerSnowflake, Droplets } from "lucide-react";
import { toast } from "sonner";

interface PredictionResult {
  foodName: string;
  category: string;
  shelfLifeDays: number;
  confidence: number;
  tips: string;
}

const Predictor = () => {
  const [foodName, setFoodName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  // AI food category detection (placeholder logic)
  const detectCategory = (food: string): string => {
    const foodLower = food.toLowerCase();
    if (foodLower.includes("milk") || foodLower.includes("cheese") || foodLower.includes("yogurt")) return "Dairy";
    if (foodLower.includes("apple") || foodLower.includes("banana") || foodLower.includes("orange")) return "Fruit";
    if (foodLower.includes("chicken") || foodLower.includes("beef") || foodLower.includes("fish")) return "Meat";
    if (foodLower.includes("bread") || foodLower.includes("rice") || foodLower.includes("pasta")) return "Grain";
    if (foodLower.includes("lettuce") || foodLower.includes("carrot") || foodLower.includes("tomato")) return "Vegetable";
    return "General";
  };

  // Placeholder AI prediction logic
  const predictShelfLife = (category: string, temp: number, hum: number): { days: number; confidence: number; tips: string } => {
    let baseDays = 7;
    let confidence = 85;
    let tips = "Store in a cool, dry place.";

    // Adjust based on category
    switch (category) {
      case "Dairy":
        baseDays = 5;
        tips = "Keep refrigerated below 4°C to extend shelf life.";
        break;
      case "Meat":
        baseDays = 3;
        tips = "Keep frozen or refrigerated. Cook within 3 days of thawing.";
        break;
      case "Fruit":
        baseDays = 7;
        tips = "Store in a cool place. Some fruits ripen faster at room temperature.";
        break;
      case "Vegetable":
        baseDays = 10;
        tips = "Keep in crisper drawer with moderate humidity.";
        break;
      case "Grain":
        baseDays = 30;
        tips = "Store in airtight containers in a dry environment.";
        break;
    }

    // Adjust based on temperature
    if (temp > 25) {
      baseDays = Math.max(1, Math.floor(baseDays * 0.5));
      confidence -= 15;
    } else if (temp < 5) {
      baseDays = Math.floor(baseDays * 1.5);
      confidence += 5;
    }

    // Adjust based on humidity
    if (hum > 80) {
      baseDays = Math.max(1, Math.floor(baseDays * 0.7));
      confidence -= 10;
    }

    confidence = Math.min(95, Math.max(50, confidence));

    return { days: baseDays, confidence, tips };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!foodName || !temperature || !humidity) {
      toast.error("Please fill in all fields");
      return;
    }

    const temp = parseFloat(temperature);
    const hum = parseFloat(humidity);

    if (isNaN(temp) || isNaN(hum)) {
      toast.error("Please enter valid numbers for temperature and humidity");
      return;
    }

    if (hum < 0 || hum > 100) {
      toast.error("Humidity must be between 0 and 100%");
      return;
    }

    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const category = detectCategory(foodName);
      const prediction = predictShelfLife(category, temp, hum);

      setResult({
        foodName,
        category,
        shelfLifeDays: prediction.days,
        confidence: prediction.confidence,
        tips: prediction.tips
      });

      setIsLoading(false);
      toast.success("Prediction completed!");
    }, 1500);
  };

  const handleReset = () => {
    setFoodName("");
    setTemperature("");
    setHumidity("");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 hero-gradient pattern-dots py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Shelf Life Prediction Tool
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter food details and environmental conditions for accurate shelf life prediction
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="card-shadow border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <FlaskConical className="h-5 w-5" />
                  Input Parameters
                </CardTitle>
                <CardDescription>
                  Provide food information and storage conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="foodName">Food Name</Label>
                    <Input
                      id="foodName"
                      placeholder="e.g., Milk, Apple, Chicken"
                      value={foodName}
                      onChange={(e) => setFoodName(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="flex items-center gap-2">
                      <ThermometerSnowflake className="h-4 w-4 text-primary" />
                      Storage Temperature (°C)
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="e.g., 5"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="humidity" className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-primary" />
                      Humidity (%)
                    </Label>
                    <Input
                      id="humidity"
                      type="number"
                      placeholder="e.g., 70"
                      value={humidity}
                      onChange={(e) => setHumidity(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground button-shadow transition-smooth"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      "Predict Shelf Life"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results Display */}
            <Card className={`card-shadow border-border/50 ${result ? "animate-fade-in" : ""}`}>
              <CardHeader>
                <CardTitle className="text-primary">Prediction Results</CardTitle>
                <CardDescription>
                  {result ? "AI-powered shelf life estimate" : "Results will appear here"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-secondary/50 p-4 rounded-lg space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Food Item:</span>
                        <span className="font-semibold text-foreground">{result.foodName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Category:</span>
                        <span className="font-semibold text-primary">{result.category}</span>
                      </div>
                    </div>

                    <div className="text-center py-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                      <div className="text-5xl font-bold text-primary mb-2">
                        {result.shelfLifeDays}
                      </div>
                      <div className="text-sm text-muted-foreground">Days Remaining</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Confidence Level:</span>
                        <span className="font-semibold text-accent">{result.confidence}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${result.confidence}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <h4 className="font-semibold text-sm text-foreground mb-2">💡 Storage Tips</h4>
                      <p className="text-sm text-muted-foreground">{result.tips}</p>
                    </div>

                    <Button 
                      onClick={handleReset}
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Make Another Prediction
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <FlaskConical className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <p>Fill in the form and click predict to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Predictor;
