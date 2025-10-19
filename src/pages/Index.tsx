import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DiscordBanner from "@/components/DiscordBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <section id="about">
        <DiscordBanner />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
