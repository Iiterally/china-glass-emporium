import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Gem, UserPlus, TrendingUp, Globe } from "lucide-react";
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
        <div className="glass-panel rounded-3xl p-8 md:p-16 mb-12 animate-float border border-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="text-left">
              <div className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-accent font-semibold">🌍 Your Gateway to AllChinaBuy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 glow-text leading-tight">
                Flexing<span className="text-accent">.my</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold mb-4 text-accent">
                Premium  Shipping Agent Spreadsheet
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Discover and track the best clothing finds with Flexing.my, a streamlined spreadsheet service featuring luxury streetwear, designer goods, and more from AllChinaBuy.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-panel rounded-xl p-4 border border-primary/10">
                  <TrendingUp className="w-6 h-6 text-accent mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">30%</div>
                  <div className="text-sm text-muted-foreground">Commission Rate</div>
                </div>
                <div className="glass-panel rounded-xl p-4 border border-primary/10">
                  <Globe className="w-6 h-6 text-accent mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <img 
                  src={heroImage} 
                  alt="Luxury Fashion Products" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="glass-panel rounded-xl p-3 border border-primary/10">
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-xs text-muted-foreground">Active Referrals</div>
            </div>
            <div className="glass-panel rounded-xl p-3 border border-primary/10">
              <div className="text-2xl font-bold text-accent mb-1">$2M+</div>
              <div className="text-xs text-muted-foreground">Orders Shipped</div>
            </div>
            <div className="glass-panel rounded-xl p-3 border border-primary/10">
              <div className="text-2xl font-bold text-accent mb-1">7-14</div>
              <div className="text-xs text-muted-foreground">Days Delivery</div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 border border-accent/20"
            onClick={handleShopNow}
          >
            <UserPlus className="mr-2" />
            Sign Up & Earn <ArrowRight className="ml-2" />
          </Button>
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
