import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 border border-primary/10 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3 glow-text">
                Flexing<span className="text-accent">.my</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Your gateway to AllChinaBuy referrals.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</a></li>
                <li><a href="/products" className="text-muted-foreground hover:text-accent transition-colors">Products</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-accent transition-colors">About</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Shipping</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3 text-accent">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                  <Instagram className="w-5 h-5 text-accent" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all border border-primary/20">
                  <Mail className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          © 2025 Flexing.my – Powered by AllChinaBuy – All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
