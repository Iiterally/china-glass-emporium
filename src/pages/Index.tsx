import { useState } from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryTabs from "@/components/CategoryTabs";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");

  const filteredProducts = products
    .filter((product: Product) => {
      const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a: Product, b: Product) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "brand":
          return a.brand.localeCompare(b.brand);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="products" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
          Featured Products
        </h2>
        
        <div className="mb-8">
          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        <CategoryTabs 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductGrid products={filteredProducts} />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
