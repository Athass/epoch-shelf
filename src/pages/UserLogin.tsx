import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle } from "lucide-react";

const UserLogin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 hero-gradient pattern-dots flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md card-shadow border-border/50">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <UserCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl text-foreground">User Login</CardTitle>
            <CardDescription>Access your prediction history</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user-email">Email</Label>
                <Input id="user-email" type="email" placeholder="user@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-password">Password</Label>
                <Input id="user-password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground button-shadow transition-smooth">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserLogin;
