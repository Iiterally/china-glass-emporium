import { Instagram, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">About AllChina BUY</h3>
            <p className="text-muted-foreground">
              We connect you directly to China's most trusted clothing suppliers. From streetwear to luxury brands — buy confidently, shop smarter.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Policies
                </a>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-accent" />
              </a>
              <a
                href="#"
                className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6 text-accent" />
              </a>
              <a
                href="#"
                className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                aria-label="Discord"
              >
                <MessageCircle className="w-6 h-6 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2025 AllChinaBuy.com – All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
