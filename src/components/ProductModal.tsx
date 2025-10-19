import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleBuyNow = () => {
    toast.success(`${product.title} added to cart!`, {
      description: "Proceed to checkout or continue shopping"
    });
    onClose();
  };

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="glass-panel border-primary/30 max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-accent">
            {product.brand}
          </DialogTitle>
          <DialogDescription className="text-xl">
            {product.title}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Price</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-accent">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.retailPrice}
                </span>
              </div>
              <p className="text-sm text-green-400 mt-2">
                Save ${product.retailPrice - product.price} ({Math.round(((product.retailPrice - product.price) / product.retailPrice) * 100)}% off)
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Category</p>
              <p className="text-lg capitalize">{product.category}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Details</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Authentic {product.brand} quality</li>
                <li>✓ Direct from verified Chinese suppliers</li>
                <li>✓ Fast worldwide shipping available</li>
                <li>✓ Quality guarantee</li>
              </ul>
            </div>

            <Button 
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 glow-border-hover text-lg py-6"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${product.price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
