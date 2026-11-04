"use client";

import { useRef, useState } from "react";
import { FlameIcon, SnowflakeIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const min = 16;
const max = 30;
const step = 0.5;

function getTempMeta(temp: number) {
  const pct = (temp - min) / (max - min);
  if (pct < 0.33) return { label: "Cool", color: "text-blue-500", bar: "bg-blue-500/40" };
  if (pct < 0.66) return { label: "Comfortable", color: "text-amber-300", bar: "bg-amber-300/40" };
  return { label: "Warm", color: "text-red-500", bar: "bg-red-500/40" };
}

export default function TemperatureSlider() {
  const [value, setValue] = useState(22);
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
  const { label, color, bar } = getTempMeta(value);

  return (
    <div className="w-full max-w-xs space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Temperature</p>
          <p className={cn("text-2xl font-medium tabular-nums leading-none", color)}>
            {value}°C
          </p>
        </div>
        <span className={cn("text-sm font-medium mb-0.5", color)}>{label}</span>
      </div>

      <div className="flex items-center gap-3">
        <SnowflakeIcon className="size-4 shrink-0 text-blue-500" />
        <div
          ref={rootRef}
          className="relative w-full"
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
              className={cn(
                "pointer-events-none absolute top-1/2 h-2 z-1 -translate-y-1/2 rounded-full transition-[left,width] duration-75",
                bar,
              )}
              style={{
                left: `${Math.min(valuePct, previewPct)}%`,
                width: `${Math.abs(previewPct - valuePct)}%`,
              }}
            />
          )}
        </div>
        <FlameIcon className="size-4 shrink-0 text-red-500" />
      </div>

      <div className="flex items-center gap-3">
        <span className="size-4 shrink-0" />
        <div className="flex justify-between w-full text-xs text-muted-foreground">
          {[16, 18, 20, 22, 24, 26, 28, 30].map((t) => (
            <span key={t}>{t}°</span>
          ))}
        </div>
        <span className="size-4 shrink-0" />
      </div>
    </div>
  );
}
