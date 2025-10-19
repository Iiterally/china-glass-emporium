import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onViewDetails: () => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const handleBuyNow = () => {
    toast.success(`${product.title} added to cart!`, {
      description: "Proceed to checkout or continue shopping"
    });
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 border border-primary/10 hover:border-primary/20">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="w-full space-y-2">
            <Button 
              variant="outline"
              size="sm"
              className="w-full border-accent text-accent hover:bg-accent/10"
              onClick={onViewDetails}
            >
              <Eye className="w-4 h-4 mr-2" />
              View Item
            </Button>
            <Button 
              size="sm"
              className="w-full bg-accent hover:bg-accent/90"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm font-semibold text-accent mb-1">{product.brand}</p>
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-accent">${product.price}</span>
          <span className="text-sm text-muted-foreground line-through">
            ${product.retailPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
