import { Instagram, MessageCircle, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="glass-panel rounded-2xl p-10 border border-primary/20 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand with Logo */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/30">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-black">
                  Flexing<span className="text-accent">.my</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your gateway to AllChinaBuy referrals and luxury imports.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="/products" className="text-muted-foreground hover:text-accent transition-colors">Products</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-4 text-foreground">Support</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Flexing.my – Powered by AllChinaBuy – All Rights Reserved
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-all border border-primary/20 hover:border-accent/30">
                  <Instagram className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-all border border-primary/20 hover:border-accent/30">
                  <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
                <a href="mailto:contact@flexing.my"
                   className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-all border border-primary/20 hover:border-accent/30">
                  <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
