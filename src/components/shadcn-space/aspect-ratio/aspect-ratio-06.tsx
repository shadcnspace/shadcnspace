import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const ProductCardAspectRatioDemo = () => {
  return (
    <div className="flex w-full max-w-50 items-center justify-center px-4">
      <div className="w-full space-y-2">
        <AspectRatio
          ratio={4 / 5}
          className="relative overflow-hidden rounded-lg bg-muted"
        >
          <img
            src="https://images.shadcnspace.com/assets/gallery/technology.webp"
            alt="Wireless headphones"
            className="h-full w-full object-cover"
          />
          <Badge className="absolute top-2 left-2" variant="destructive">
            -20%
          </Badge>
        </AspectRatio>
        <div className="space-y-0.5">
          <p className="text-sm font-medium">Wireless Headphones</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">$79.99</span>
            <span className="text-xs text-muted-foreground line-through">
              $99.99
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAspectRatioDemo;