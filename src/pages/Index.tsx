import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiscordBanner from "@/components/DiscordBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 glow-text">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start earning with AllChinaBuy in three simple steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <span className="text-3xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Sign Up Free</h3>
              <p className="text-muted-foreground">
                Create your Flexing.my account and get your unique referral link instantly. No fees, no hidden costs.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <span className="text-3xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Share Products</h3>
              <p className="text-muted-foreground">
                Browse 500+ luxury products and share your referral link with buyers looking for authentic Chinese imports.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Earn Commission</h3>
              <p className="text-muted-foreground">
                Get 30% commission on every order placed through your link. Track earnings in real-time on your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AllChinaBuy Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 glow-text">
            Why AllChinaBuy?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The most trusted Chinese shipping agent for luxury goods
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-accent">Verified Authenticity</h3>
              <p className="text-muted-foreground mb-4">
                Every product is sourced directly from verified Chinese suppliers. ACBuy's expert team inspects quality before shipping.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Direct factory connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Quality control inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Authentic luxury items</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-accent">Global Shipping Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Fast, reliable worldwide delivery to 150+ countries with full tracking and insurance coverage included.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>7-14 day express delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Real-time tracking updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Full insurance protection</span>
                </li>
              </ul>
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
