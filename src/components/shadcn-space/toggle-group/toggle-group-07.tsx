"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const colors = [
  { value: "sky", label: "Sky", swatch: "bg-sky-400" },
  { value: "teal", label: "Teal", swatch: "bg-teal-400" },
  { value: "sand", label: "Sand", swatch: "bg-amber-300" },
  { value: "night", label: "Night", swatch: "bg-gray-950" },
];

const sizes = [
  { value: "xs", label: "XS", stock: 0 },
  { value: "s", label: "S", stock: 4 },
  { value: "m", label: "M", stock: 12 },
  { value: "l", label: "L", stock: 2 },
  { value: "xl", label: "XL", stock: 7 },
];

const ToggleGroupDemo = () => {
  const [color, setColor] = useState("teal");
  const [size, setSize] = useState<string | null>(null);
  const selectedSize = sizes.find((item) => item.value === size);

  return (
    <div className="flex w-full max-w-sm flex-col gap-5 rounded-lg border border-border bg-background p-5">
      <div>
        <p className="text-base font-medium text-foreground">Everyday hoodie</p>
        <p className="text-sm text-muted-foreground tabular-nums">$64.00</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-foreground" id="color-label">
          Color: <span className="font-medium">{colors.find((item) => item.value === color)?.label}</span>
        </p>
        <ToggleGroup value={[color]} onValueChange={(value) => value[0] && setColor(value[0])} aria-labelledby="color-label">
          {colors.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              aria-label={item.label}
              className="size-9 rounded-full border border-border p-1 hover:bg-transparent aria-pressed:border-foreground aria-pressed:bg-transparent"
            >
              <span className={cn("flex size-full items-center justify-center rounded-full", item.swatch)}>
                {color === item.value && <Check className={cn("size-3.5", item.value === "night" ? "text-white" : "text-gray-950")} />}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground" id="size-label">
            Size
          </p>
          <a href="#" className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline">
            Size guide
          </a>
        </div>
        <ToggleGroup
          variant="outline"
          value={size ? [size] : []}
          onValueChange={(value) => setSize(value[0] ?? null)}
          aria-labelledby="size-label"
          className="grid w-full grid-cols-5"
        >
          {sizes.map((item) => (
            <ToggleGroupItem
              key={item.value}
              value={item.value}
              disabled={item.stock === 0}
              aria-label={item.stock === 0 ? `${item.label}, sold out` : item.label}
              className="w-full disabled:line-through aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background"
            >
              {item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <p className="min-h-4 text-xs text-muted-foreground" aria-live="polite">
          {selectedSize ? (selectedSize.stock <= 3 ? `Only ${selectedSize.stock} left in ${selectedSize.label}` : "In stock, ships tomorrow") : "Select a size"}
        </p>
      </div>

      <Button disabled={!size}>{size ? "Add to cart" : "Select a size"}</Button>
    </div>
  );
};

export default ToggleGroupDemo;
