import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Globe, Package, DollarSign, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative flex items-center justify-center overflow-hidden px-4 py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-primary/10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 glow-text text-center leading-tight">
              About Flexing<span className="text-accent">.my</span>
            </h1>
            
            <p className="text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Flexing.my is a spreadsheet made easy. We combine the best elements of spreadsheets with a sleek, top of the line website UI to make browsing, tracking, and discovering clothing finds simple and effortless.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="glass-panel rounded-xl p-4 text-center border border-primary/10">
                <div className="text-3xl font-bold text-accent mb-1">30%</div>
                <div className="text-xs text-muted-foreground">Commission</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center border border-primary/10">
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-xs text-muted-foreground">Products</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center border border-primary/10">
                <div className="text-3xl font-bold text-accent mb-1">$2M+</div>
                <div className="text-xs text-muted-foreground">Orders Shipped</div>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center border border-primary/10">
                <div className="text-3xl font-bold text-accent mb-1">150+</div>
                <div className="text-xs text-muted-foreground">Countries</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <Globe className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-sm text-muted-foreground">
                  AllChinaBuy ships to 150+ countries with express 7-14 day delivery, full tracking, and insurance coverage on every order.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <ShieldCheck className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Verified Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Direct factory connections ensure authentic luxury items. Expert quality control team inspects every product before shipping.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <DollarSign className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Chrome Hearts, Balenciaga, SP5DER, and 500+ luxury brands. From streetwear to designer goods, all at wholesale prices.
                </p>
              </div>

              <div className="glass-panel rounded-xl p-6 border border-primary/10">
                <Package className="w-10 h-10 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">Quality Control</h3>
                <p className="text-sm text-muted-foreground">
                  Flexing.my uses AllChinaBuy as our agent of choice. Items are handled with care and delivered in 7–14 days, giving you easy access to the latest clothing and designer finds.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 border border-accent/20"
                onClick={() => navigate("/products")}
              >
                <UserPlus className="mr-2" />
                Start Earning Today <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
