"use client";

import { useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const emojis = ["😡", "🙁", "😐", "🙂", "😍"];
const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];

const min = 1;
const max = 5;
const step = 1;

export default function ReactionSlider() {
  const [value, setValue] = useState(3);
  const [preview, setPreview] = useState<number | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const toPct = (v: number) => ((v - min) / (max - min)) * 100;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;
    const raw = ((e.clientX - rect.left) / rect.width) * (max - min) + min;
    setPreview(Math.max(min, Math.min(max, Math.round((raw - min) / step) * step + min)));
  };

  const valuePct = toPct(value);
  const previewPct = preview !== null ? toPct(preview) : null;

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Experience</span>
        <span className="font-medium">{emojis[value - 1]} {labels[value - 1]}</span>
      </div>
      <div
        ref={rootRef}
        className={cn("relative w-full")}
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
          className="**:data-[slot='slider-track']:h-2! **:data-[slot='slider-thumb']:z-2"
        />
        {previewPct !== null && (
          <div
            className="pointer-events-none absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary/30 transition-[left,width] duration-75 z-1"
            style={{
              left: `${Math.min(valuePct, previewPct)}%`,
              width: `${Math.abs(previewPct - valuePct)}%`,
            }}
          />
        )}
      </div>
    </div>
  );
}
