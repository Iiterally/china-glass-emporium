import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Zap, Star, ArrowRight } from "lucide-react";

const DiscordBanner = () => {
  return (
    <section className="relative py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#2C2F33]/5" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#5865F2]/10 flex items-center justify-center border border-[#5865F2]/30">
                <MessageSquare className="w-7 h-7 text-[#5865F2]" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <span>Join Our Discord Community</span>
                  <span className="px-2 py-0.5 text-xs rounded bg-[#5865F2]/10 text-[#5865F2] border border-[#5865F2]/20 font-mono">
                    LIVE
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Connect with 5K+ members · Get instant support · Exclusive drops
                </p>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="px-6 py-5 font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white border border-[#5865F2]/20 group shrink-0"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Server
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordBanner;
