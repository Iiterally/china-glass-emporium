import { Button } from "@/components/ui/button";
import { ArrowRight, PackageCheck, Rocket, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="glass-panel rounded-3xl p-8 md:p-16 mb-12 animate-float">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 glow-text leading-tight">
            Discover. Import. Elevate.
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-accent">
            Buy Luxury Streetwear Directly from China.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            AllChina BUY connects you to verified sellers and luxury product sources across Asia — from Chrome Hearts to Balenciaga, SP5DER, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 glow-border-hover bg-primary hover:bg-primary/90"
              onClick={scrollToProducts}
            >
              Shop Now <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 glow-border-hover border-primary text-primary hover:bg-primary/10"
              onClick={scrollToProducts}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 hover:scale-105 transition-transform duration-300 glow-border-hover">
            <PackageCheck className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Verified Suppliers</h3>
            <p className="text-muted-foreground">
              All sellers thoroughly vetted for authenticity and quality
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 hover:scale-105 transition-transform duration-300 glow-border-hover">
            <Rocket className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Worldwide Shipping</h3>
            <p className="text-muted-foreground">
              Express delivery options to anywhere in the world
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 hover:scale-105 transition-transform duration-300 glow-border-hover">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Luxury-Grade Quality</h3>
            <p className="text-muted-foreground">
              Premium products at unbeatable direct-source prices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
