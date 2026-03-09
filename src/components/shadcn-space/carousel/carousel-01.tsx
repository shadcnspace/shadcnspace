"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "https://images.shadcnspace.com/assets/gallery/destinations-1.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-2.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-3.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-4.webp",
];

const CarouselCustomDots = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-xs">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <figure>
                <img
                  src={src}
                  alt={`img ${index + 1}`}
                  width={800}
                  height={600}
                  className="aspect-4/3 rounded-lg object-cover"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-2 rounded-full transition-all duration-300", {
              "bg-primary w-6": index + 1 === current,
              "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50": index + 1 !== current,
            })}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselCustomDots;
