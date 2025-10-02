import { FlaskConical, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StatsCard = () => {
  return (
    <Card className="card-shadow hover:card-shadow-hover transition-smooth border-border/50">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-center text-primary">
          Current Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-secondary/50 border-none">
            <CardContent className="pt-6 text-center">
              <FlaskConical className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground">0</div>
              <div className="text-sm text-muted-foreground mt-1">Predictions Made</div>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/50 border-none">
            <CardContent className="pt-6 text-center">
              <Package className="h-8 w-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground">0</div>
              <div className="text-sm text-muted-foreground mt-1">Products Analyzed</div>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-center text-sm text-muted-foreground italic pt-2">
          Join the scientific prediction revolution
        </p>
      </CardContent>
    </Card>
  );
};
