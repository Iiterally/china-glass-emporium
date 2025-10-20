import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Globe, Truck, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent font-semibold">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Your Gateway to Asian Luxury
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AllChina BUY bridges the gap between you and Asia's most exclusive streetwear suppliers, 
              delivering authentic luxury at unbeatable prices.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="glass-panel rounded-2xl p-8 mb-12 border border-primary/10">
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We believe luxury fashion should be accessible to everyone. That's why we've built 
              direct relationships with verified manufacturers and suppliers across China and Asia, 
              eliminating middlemen and bringing you premium streetwear at factory-direct prices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Chrome Hearts to Balenciaga, SP5DER to Off-White — every piece is sourced 
              directly from trusted suppliers who specialize in luxury-grade craftsmanship.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-panel rounded-xl p-6 text-center border border-primary/10 hover:border-primary/20 transition-all">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center border border-primary/10 hover:border-primary/20 transition-all">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Luxury Brands</div>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center border border-primary/10 hover:border-primary/20 transition-all">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-accent">Why Choose AllChina BUY?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Suppliers</h3>
                <p className="text-muted-foreground">
                  Every supplier is thoroughly vetted and verified. We only work with manufacturers 
                  who meet our strict quality and authenticity standards.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Worldwide Shipping</h3>
                <p className="text-muted-foreground">
                  Get your luxury pieces delivered anywhere in the world within 7-14 days. 
                  We partner with the fastest international carriers.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Direct from Source</h3>
                <p className="text-muted-foreground">
                  Skip the markup. We connect you directly to the factories and suppliers, 
                  ensuring you get the best possible prices.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Luxury-Grade Quality</h3>
                <p className="text-muted-foreground">
                  Premium materials, expert craftsmanship, and attention to detail. 
                  Our products rival the quality of retail stores at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-panel rounded-2xl p-8 text-center border border-primary/10">
            <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Wardrobe?</h2>
            <p className="text-muted-foreground mb-6">
              Browse our curated collection of luxury streetwear from Asia's top suppliers.
            </p>
            <a 
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold transition-all"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
