import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  "https://images.shadcnspace.com/assets/gallery/design-excellence.webp",
  "https://images.shadcnspace.com/assets/gallery/quality.webp",
  "https://images.shadcnspace.com/assets/gallery/technology.webp",
  "https://images.shadcnspace.com/assets/gallery/growth.webp",
];

const SquareGridAspectRatioDemo = () => {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3 px-4">
      {images.map((src, index) => (
        <AspectRatio
          key={index}
          ratio={1}
          className="overflow-hidden rounded-lg bg-muted"
        >
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </AspectRatio>
      ))}
    </div>
  );
};

export default SquareGridAspectRatioDemo;
