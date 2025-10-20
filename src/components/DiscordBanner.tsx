import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Zap, Star, ArrowRight } from "lucide-react";

const DiscordBanner = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 md:p-10 border border-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Join Our Community</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Connect with Flexers Worldwide
              </span>
            </h2>
            
            <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8">
              Get instant support, exclusive product drops, referral tips, and connect with top earners in our Discord community.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="glass-panel rounded-xl p-3 border border-primary/10">
                <Users className="w-5 h-5 text-accent mx-auto mb-1" />
                <div className="text-xl font-bold text-accent">5K+</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </div>
              <div className="glass-panel rounded-xl p-3 border border-primary/10">
                <Zap className="w-5 h-5 text-accent mx-auto mb-1" />
                <div className="text-xl font-bold text-accent">24/7</div>
                <div className="text-xs text-muted-foreground">Active Chat</div>
              </div>
              <div className="glass-panel rounded-xl p-3 border border-primary/10">
                <Star className="w-5 h-5 text-accent mx-auto mb-1" />
                <div className="text-xl font-bold text-accent">Daily</div>
                <div className="text-xs text-muted-foreground">New Drops</div>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="relative px-8 py-6 text-lg font-bold bg-accent hover:bg-accent/90 border border-accent/20 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Join Discord Server
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordBanner;
