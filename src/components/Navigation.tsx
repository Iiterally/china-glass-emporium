import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-panel shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <ShoppingBag className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:blur-2xl transition-all" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight glow-text">
              AllChina <span className="text-accent">BUY</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="relative px-6 py-2 text-base font-bold tracking-wide overflow-hidden group hover:bg-transparent"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10 group-hover:text-accent transition-colors duration-300">
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="absolute inset-0 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("products")}
              className="relative px-6 py-3 font-bold bg-accent hover:bg-accent/90 glow-border-hover overflow-hidden group"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent animate-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass-panel p-2 rounded-xl glow-border-hover"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-accent" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel rounded-2xl mt-2 mb-4 overflow-hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => scrollToSection(link.id)}
                  className="justify-start text-lg font-bold hover:bg-accent/10 hover:text-accent transition-all"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection("products")}
                className="mt-2 font-bold bg-accent hover:bg-accent/90 glow-border-hover"
              >
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
