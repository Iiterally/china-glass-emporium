import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Sparkles } from "lucide-react";

const DiscordBanner = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative glass-panel rounded-3xl p-8 md:p-12 overflow-hidden glow-border-hover">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-12 h-12 text-accent animate-float" />
              <h2 className="text-4xl md:text-5xl font-extrabold glow-text">
                Join Our Community
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground mb-6">
              Connect with thousands of fashion enthusiasts, get exclusive drops, early access to sales, and insider tips on the latest luxury streetwear trends.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-panel rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-muted-foreground">Active Chat</p>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#5865F2] hover:bg-[#4752C4] glow-border-hover group"
            >
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
              Join Discord Server
            </Button>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="glass-panel rounded-3xl p-8 animate-float">
                <MessageCircle className="w-40 h-40 text-accent" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-accent/20 blur-3xl animate-glow" />
            </div>
          </div>
        </div>

        {/* Floating Tags */}
        <div className="hidden lg:flex absolute top-8 right-8 gap-2">
          <span className="glass-panel px-4 py-2 rounded-full text-sm font-semibold animate-float">
            💎 Exclusive Drops
          </span>
          <span className="glass-panel px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: "0.5s" }}>
            🔥 Early Access
          </span>
        </div>
      </div>
    </section>
  );
};

export default DiscordBanner;
