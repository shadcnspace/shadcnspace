"use client";

import { useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const ratios = [
  { label: "1:1", value: 1 },
  { label: "4:3", value: 4 / 3 },
  { label: "16:9", value: 16 / 9 },
  { label: "21:9", value: 21 / 9 },
];

const RatioSwitcherAspectRatioDemo = () => {
  const [ratio, setRatio] = useState(ratios[2].value);

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 px-4">
      <AspectRatio
        ratio={ratio}
        className="w-full overflow-hidden rounded-lg bg-muted transition-all duration-300"
      >
        <img
          src="https://images.shadcnspace.com/assets/gallery/destinations-2.webp"
          alt="Selected ratio preview"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {ratios.map((item) => (
          <Button
            key={item.label}
            type="button"
            size="sm"
            variant={ratio === item.value ? "default" : "outline"}
            className="h-7 px-3 text-xs"
            onClick={() => setRatio(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default RatioSwitcherAspectRatioDemo;
