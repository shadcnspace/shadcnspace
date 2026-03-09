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

const images = [
  "https://images.shadcnspace.com/assets/gallery/destinations-1.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-2.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-3.webp",
  "https://images.shadcnspace.com/assets/gallery/destinations-4.webp",
];

const CarouselIndex = () => {
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
      <div className="mt-4 flex items-center justify-center gap-2">
        <small className="text-muted-foreground text-sm">
          {current} / {count}
        </small>
      </div>
    </div>
  );
}

export default CarouselIndex;
