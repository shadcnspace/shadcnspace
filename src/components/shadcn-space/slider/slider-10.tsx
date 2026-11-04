"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const MIN = 0;
const MAX = 2;
const STEP = 0.1;

// Matches the slider's edge-aligned thumb so the label sits right above it.
const thumbLeft = (value: number) => `calc(6px + (100% - 12px) * ${(value - MIN) / (MAX - MIN)})`;

const describe = (value: number) => {
  if (value < 0.4) return "Precise";
  if (value < 1.2) return "Balanced";
  return "Creative";
};

const SliderDemo = () => {
  const [value, setValue] = useState(0.7);
  const [active, setActive] = useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label id="temperature-label">Temperature</Label>
        <span className="text-xs text-muted-foreground">{describe(value)}</span>
      </div>
      <div className="relative pt-8">
        <span
          aria-hidden="true"
          style={{ left: thumbLeft(value) }}
          className={cn(
            "pointer-events-none absolute top-0 -translate-x-1/2 rounded-md bg-foreground px-1.5 py-0.5 text-xs font-medium text-background tabular-nums transition-transform motion-reduce:transition-none",
            active ? "scale-110" : "scale-100",
          )}
        >
          {value.toFixed(1)}
        </span>
        <Slider
          aria-labelledby="temperature-label"
          min={MIN}
          max={MAX}
          step={STEP}
          value={[value]}
          onValueChange={(next) => setValue(Array.isArray(next) ? next[0] : (next as number))}
          onPointerDown={() => setActive(true)}
          onPointerUp={() => setActive(false)}
          onPointerLeave={() => setActive(false)}
        />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums" aria-hidden="true">
        <span>{MIN.toFixed(1)}</span>
        <span>{MAX.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default SliderDemo;
