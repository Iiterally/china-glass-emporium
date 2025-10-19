import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Gem } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Floating Hero Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-30 animate-float hidden lg:block">
        <img 
          src={heroImage} 
          alt="Luxury Fashion" 
          className="w-full h-full object-contain filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background" />
      </div>
      
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
              onClick={handleShopNow}
            >
              Shop Now <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 glow-border-hover border-primary text-primary hover:bg-primary/10"
              onClick={handleShopNow}
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
              <ShieldCheck className="w-8 h-8 text-primary animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Suppliers</h3>
            <p className="text-muted-foreground">Trusted sources from across Asia</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/20">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 relative">
              <Truck className="w-8 h-8 text-accent animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Worldwide Shipping</h3>
            <p className="text-muted-foreground">Global delivery in 7-14 days</p>
          </div>

          <div className="glass-panel rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 relative">
              <Gem className="w-8 h-8 text-primary animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-xl font-bold mb-2">Luxury-Grade Quality</h3>
            <p className="text-muted-foreground">Premium materials & craftsmanship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
