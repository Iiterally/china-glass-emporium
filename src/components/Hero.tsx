import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Gem, UserPlus, TrendingUp, Globe, Search, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 md:py-32">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Premium AllChinaBuy Spreadsheet</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Flexing<span className="text-accent">.my</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-foreground/90">
                Your Gateway to Smart Shopping
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Access curated finds from AllChinaBuy's extensive catalog. Earn 30% commission on every referral while discovering premium streetwear and designer pieces.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">30%</div>
                <div className="text-sm text-muted-foreground">Commission</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="text-base px-8 py-6 bg-accent hover:bg-accent/90 text-white font-semibold"
                onClick={() => navigate("/products")}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Sign Up & Earn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-primary/20 hover:border-primary/40 font-semibold"
                onClick={() => navigate("/products")}
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Catalog
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Premium Fashion Collection" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-6 border border-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Average Delivery</div>
                    <div className="text-2xl font-bold text-accent">7-14 Days</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-lg font-bold mb-2">Verified Suppliers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every product sourced from trusted AllChinaBuy suppliers with verified quality standards
            </p>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-accent" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-lg font-bold mb-2">Global Shipping</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast worldwide delivery in 7-14 days with reliable tracking to 150+ countries
            </p>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Gem className="w-6 h-6 text-primary" style={{ filter: 'drop-shadow(0 0 8px rgb(255, 0, 0)) drop-shadow(0 0 12px rgb(0, 255, 0)) drop-shadow(0 0 16px rgb(0, 0, 255))' }} />
            </div>
            <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated selection of luxury streetwear and designer pieces with exceptional craftsmanship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
