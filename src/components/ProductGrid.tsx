import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            onViewDetails={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl text-muted-foreground">No products found matching your criteria.</p>
        </div>
      )}

      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductGrid;
