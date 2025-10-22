import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Gem, UserPlus, Search, Sparkles, TrendingUp, Globe, Zap } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 md:py-32">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border border-accent/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Premium AllChinaBuy Marketplace
              </span>
            </div>

            {/* Main Heading with Gradient */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-none">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  Flexing
                </span>
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
                  .my
                </span>
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-foreground/90">
                Your Gateway to{" "}
                <span className="text-accent">Smart Shopping</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Join thousands earning with AllChinaBuy's trusted shipping network. Access 500+ luxury products, earn <span className="text-accent font-bold">30% commission</span>, and build your referral empire.
              </p>
            </div>

            {/* Modern Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative glass-panel rounded-2xl p-5 border border-primary/20 hover:border-accent/40 transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">30%</div>
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Commission</div>
                </div>
              </div>
              
              <div className="relative glass-panel rounded-2xl p-5 border border-primary/20 hover:border-accent/40 transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <Gem className="w-4 h-4 text-accent" />
                    <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">500+</div>
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Products</div>
                </div>
              </div>
              
              <div className="relative glass-panel rounded-2xl p-5 border border-primary/20 hover:border-accent/40 transition-all group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe className="w-4 h-4 text-accent" />
                    <div className="text-4xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">150+</div>
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Countries</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="text-base px-10 py-7 bg-gradient-to-r from-accent via-accent to-primary hover:from-accent/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold shadow-lg shadow-accent/20 border border-accent/30"
                onClick={() => navigate("/products")}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Sign Up & Earn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-base px-10 py-7 border-2 border-primary/30 hover:border-accent/50 hover:bg-accent/5 font-bold backdrop-blur-sm"
                onClick={() => navigate("/products")}
              >
                <Search className="mr-2 h-5 w-5" />
                Browse Catalog
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image with Enhanced Design */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <img 
                src={heroImage} 
                alt="Premium Fashion Collection - Luxury Streetwear and Designer Pieces" 
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Floating Stats Card with Ambient Effect */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel rounded-2xl p-6 border border-accent/20 backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Average Delivery</div>
                      <div className="text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">7-14 Days</div>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/30">
                      <Truck className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 glass-panel rounded-2xl px-6 py-4 border border-accent/30 backdrop-blur-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Trusted by</div>
                  <div className="text-xl font-black text-accent">10K+ Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Suppliers</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every product sourced from trusted AllChinaBuy suppliers with verified quality standards and authenticity guarantees.
              </p>
            </div>
          </div>

          <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Shipping</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fast worldwide delivery in 7-14 days with reliable tracking to 150+ countries and full insurance coverage.
              </p>
            </div>
          </div>

          <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all duration-300 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                <Gem className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curated selection of luxury streetwear and designer pieces with exceptional craftsmanship and quality control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
