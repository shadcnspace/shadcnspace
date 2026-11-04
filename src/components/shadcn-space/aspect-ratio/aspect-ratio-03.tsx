import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaptionOverlayAspectRatioDemo = () => {
  return (
    <div className="flex w-full max-w-55 items-center justify-center px-4">
      <AspectRatio
        ratio={3 / 4}
        className="relative overflow-hidden rounded-xl bg-muted"
      >
        <img
          src="https://images.shadcnspace.com/assets/gallery/destinations-3.webp"
          alt="Swiss Alps"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-sm font-semibold text-white">Swiss Alps</p>
          <p className="text-xs text-white/80">42 places to explore</p>
        </div>
      </AspectRatio>
    </div>
  );
};

export default CaptionOverlayAspectRatioDemo;
