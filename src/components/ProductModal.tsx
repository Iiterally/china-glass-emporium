import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleAddToCart = () => {
    toast.success(`${product.title} added to cart!`, {
      description: "Proceed to checkout or continue shopping"
    });
    onClose();
  };

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-panel border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{product.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Brand</p>
              <p className="text-lg font-bold text-accent">{product.brand}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-1">Your Cost</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">${product.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.retailPrice}
                </span>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-4 border border-primary/10">
              <h4 className="font-semibold mb-3 text-sm">Shipping via AllChinaBuy</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="text-foreground font-medium">7-14 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Method:</span>
                  <span className="text-foreground font-medium">Express Air</span>
                </div>
                <div className="flex justify-between">
                  <span>Tracking:</span>
                  <span className="text-accent font-medium">✓ Included</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance:</span>
                  <span className="text-accent font-medium">✓ Full Coverage</span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-4 border border-accent/20 bg-accent/5">
              <p className="text-sm text-muted-foreground mb-2">Your Referral Earnings</p>
              <p className="text-2xl font-bold text-accent">
                ${(product.price * 0.3).toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground mt-1">30% commission per sale</p>
            </div>

            <Button 
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 border border-accent/20"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Share This Product
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
