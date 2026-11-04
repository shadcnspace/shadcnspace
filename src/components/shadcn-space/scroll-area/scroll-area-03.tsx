import { ScrollArea } from "@/components/ui/scroll-area";

export default function VerticalImageGallery() {
  return (
    <div className="border rounded-md overflow-hidden">
      <ScrollArea className="h-72 w-48 **:data-[slot=scroll-area-viewport]:mask-[linear-gradient(to_bottom,transparent,black_20px,black_calc(100%-20px),transparent)]">
        <div className="flex w-max flex-col gap-4 p-4 overflow-hidden">
          {[
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-1.webp",
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-2.webp",
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-3.webp",
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-4.webp",
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-5.webp",
            "https://images.shadcnspace.com/assets/portfolio/portfolio-5-img-6.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-36 w-40 shrink-0 overflow-hidden rounded-md"
            >
              <img
                src={src}
                alt={`Portfolio ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
