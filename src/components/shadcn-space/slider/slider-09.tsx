"use client";

import { useState } from "react";

import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const sizes = [
  { label: "XS", cpu: "0.5 vCPU", memory: "512 MB" },
  { label: "S", cpu: "1 vCPU", memory: "1 GB" },
  { label: "M", cpu: "2 vCPU", memory: "4 GB" },
  { label: "L", cpu: "4 vCPU", memory: "8 GB" },
  { label: "XL", cpu: "8 vCPU", memory: "16 GB" },
];

const SliderDemo = () => {
  const [index, setIndex] = useState(2);
  const size = sizes[index];

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-border bg-background p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-foreground" id="instance-label">
          Instance size
        </p>
        <p className="text-sm text-muted-foreground tabular-nums">
          {size.cpu}, {size.memory}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Slider
          aria-labelledby="instance-label"
          min={0}
          max={sizes.length - 1}
          step={1}
          value={[index]}
          onValueChange={(value) => setIndex(Array.isArray(value) ? value[0] : (value as number))}
        />
        {/* The thumb is edge aligned, so its center travels from 6px to 100% - 6px. */}
        <div className="relative h-7" aria-hidden="true">
          {sizes.map((item, itemIndex) => (
            <button
              key={item.label}
              type="button"
              tabIndex={-1}
              onClick={() => setIndex(itemIndex)}
              style={{ left: `calc(6px + (100% - 12px) * ${itemIndex / (sizes.length - 1)})` }}
              className="absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1"
            >
              <span className={cn("h-1.5 w-px", itemIndex <= index ? "bg-foreground" : "bg-border")} />
              <span
                className={cn(
                  "text-xs transition-colors",
                  itemIndex === index ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderDemo;
