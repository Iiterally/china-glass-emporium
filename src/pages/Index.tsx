import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiscordBanner from "@/components/DiscordBanner";
import Footer from "@/components/Footer";
import { ShieldCheck, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start earning with AllChinaBuy in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Sign Up Free</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create your Flexing.my account and get your unique referral link instantly. No fees, no hidden costs.
                </p>
              </div>
            </div>

            <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Share Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse 500+ luxury products and share your referral link with buyers looking for authentic Chinese imports.
                </p>
              </div>
            </div>

            <div className="relative glass-panel rounded-2xl p-8 border border-primary/20 hover:border-accent/30 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-black bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Earn Commission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get 30% commission on every order placed through your link. Track earnings in real-time on your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AllChinaBuy Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Why AllChinaBuy?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most trusted Chinese shipping agent for luxury goods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative glass-panel rounded-2xl p-10 border border-primary/20 hover:border-accent/30 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/20">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-black">Verified Authenticity</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Every product is sourced directly from verified Chinese suppliers. ACBuy's expert team inspects quality before shipping.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>Direct factory connections</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>Quality control inspection</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>Authentic luxury items</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative glass-panel rounded-2xl p-10 border border-primary/20 hover:border-accent/30 transition-all group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center border border-accent/20">
                    <Truck className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-black">Global Shipping Excellence</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Fast, reliable worldwide delivery to 150+ countries with full tracking and insurance coverage included.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>7-14 day express delivery</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>Real-time tracking updates</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">✓</span>
                    </div>
                    <span>Full insurance protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about">
        <DiscordBanner />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
