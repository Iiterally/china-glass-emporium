import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Sparkles } from "lucide-react";

const DiscordBanner = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="relative glass-panel rounded-3xl p-8 md:p-16 overflow-hidden border border-primary/10">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Icon and Title */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 mb-6">
              <MessageCircle className="w-10 h-10 text-[#5865F2]" strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-[#5865F2] via-primary to-accent bg-clip-text text-transparent">
                Join Our Community
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of fashion enthusiasts and get exclusive access to the latest luxury streetwear trends.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="glass-panel rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <Users className="w-8 h-8 text-[#5865F2] mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">10K+</p>
              <p className="text-sm text-muted-foreground">Members</p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-sm text-muted-foreground">Active Chat</p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Daily Messages</p>
            </div>
            <div className="glass-panel rounded-2xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-[#5865F2] mx-auto mb-3" />
              <p className="text-3xl font-bold mb-1">100+</p>
              <p className="text-sm text-muted-foreground">Exclusive Drops</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="text-lg px-10 py-7 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl shadow-lg hover:shadow-[#5865F2]/50 transition-all duration-300 hover:scale-105 group"
          >
            <MessageCircle className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
            Join Discord Server
          </Button>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/10 hover:border-primary/30 transition-all duration-300">
              💎 Exclusive Drops
            </span>
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/10 hover:border-primary/30 transition-all duration-300">
              🔥 Early Access
            </span>
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/10 hover:border-primary/30 transition-all duration-300">
              ⚡ Flash Sales
            </span>
            <span className="glass-panel px-5 py-2.5 rounded-full text-sm font-semibold border border-primary/10 hover:border-primary/30 transition-all duration-300">
              🎯 Insider Tips
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordBanner;
