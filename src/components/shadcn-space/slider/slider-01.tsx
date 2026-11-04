"use client";

import React, { useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Volume2Icon, VolumeOffIcon } from "lucide-react";

interface PreviewSliderProps {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export default function VolumeSlider({
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  className,
}: PreviewSliderProps) {
  const [value, setValue] = useState(defaultValue);
  const [preview, setPreview] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const toPct = (v: number) => ((v - min) / (max - min)) * 100;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    const raw = ((e.clientX - rect.left) / rect.width) * (max - min) + min;
    setPreview(
      Math.max(min, Math.min(max, Math.round((raw - min) / step) * step + min)),
    );
  };

  const valuePct = toPct(value);
  const previewPct = preview !== null ? toPct(preview) : null;

  return (
    <>
      <div className="flex items-center w-full max-w-xs gap-4 font-medium">
        <VolumeOffIcon className="text-muted-foreground size-5 shrink-0" />
        <div
          ref={rootRef}
          className={cn("relative w-full", className)}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setPreview(null)}
        >
          <Slider
            value={[value]}
            onValueChange={(v) => {
              const val = Array.isArray(v) ? v[0] : v;
              if (typeof val === "number") setValue(val);
            }}
            min={min}
            max={max}
            step={step}
            className="**:[[role=slider]]:transition-transform **:[[role=slider]]:hover:scale-125 **:data-[slot='slider-track']:h-2! **:data-[slot='slider-thumb']:z-2"
          />
          {previewPct !== null && (
            <div
              className="pointer-events-none absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary/30 transition-all duration-75 z-1"
              style={{
                left: `${Math.min(valuePct, previewPct)}%`,
                width: `${Math.abs(previewPct - valuePct)}%`,
              }}
            />
          )}
        </div>
        <Volume2Icon className="text-muted-foreground size-5 shrink-0" />
      </div>
    </>
  );
}
