import { Instagram, Send, MessageCircle, ShoppingBag, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-extrabold">
                AllChina <span className="text-accent">BUY</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We connect you directly to China's most trusted clothing suppliers. From streetwear to luxury brands — buy confidently, shop smarter.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>+86 138 0000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@allchinabuy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Hoodies & Sweaters
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Jackets & Coats
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Pants & Denim
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Shoes & Sneakers
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-accent transition-colors hover:translate-x-1 inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-accent rounded-full group-hover:w-2 transition-all" />
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-accent">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get special offers, exclusive drops, and the latest luxury streetwear updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-panel border-primary/30 focus:border-accent"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 glow-border-hover">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-accent" />
                </a>
                <a
                  href="#"
                  className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5 text-accent" />
                </a>
                <a
                  href="#"
                  className="glass-panel p-3 rounded-xl hover:scale-110 transition-transform glow-border-hover"
                  aria-label="Discord"
                >
                  <MessageCircle className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AllChinaBuy.com – All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Refund Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
