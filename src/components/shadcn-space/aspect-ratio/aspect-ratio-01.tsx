import { AspectRatio } from "@/components/ui/aspect-ratio";

const DefaultAspectRatioDemo = () => {
  return (
    <div className="flex w-full max-w-sm items-center justify-center px-4">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-lg bg-muted"
      >
        <img
          src="https://images.shadcnspace.com/assets/gallery/destinations-1.webp"
          alt="Landscape photo"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
};

export default DefaultAspectRatioDemo;