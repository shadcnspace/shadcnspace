"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, PaletteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const presetColors = [
  "#f43f5e",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#a855f7",
  "#ec4899",
  "#64748b",
  "#18181b",
];

const isValidHex = (value: string) =>
  /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value);

const PopoverColorPickerDemo = () => {
  const [color, setColor] = useState("#6366f1");
  const [hexInput, setHexInput] = useState(color);
  const [copied, setCopied] = useState(false);

  const applyHexInput = (value: string) => {
    setHexInput(value);
    if (isValidHex(value)) {
      setColor(value);
    }
  };

  const selectPreset = (preset: string) => {
    setColor(preset);
    setHexInput(preset);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Popover
      onOpenChange={(next) => {
        if (next) setHexInput(color);
      }}
    >
      <PopoverTrigger
        render={<Button variant="outline" className="cursor-pointer gap-2" />}
      >
        <span
          className="size-4 rounded-full border"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm">{color}</span>
        <PaletteIcon className="text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium">Pick a color</Label>
            <p className="text-muted-foreground text-xs">
              Choose a preset or enter a custom hex value.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {presetColors.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => selectPreset(preset)}
                aria-label={`Select color ${preset}`}
                className="relative flex size-7 items-center justify-center rounded-full ring-1 ring-inset ring-black/10 cursor-pointer transition-transform hover:scale-110 dark:ring-white/10"
                style={{ backgroundColor: preset }}
              >
                {color.toLowerCase() === preset.toLowerCase() && (
                  <CheckIcon className="size-3.5 text-white drop-shadow" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="hex-input"
              className="text-xs text-muted-foreground"
            >
              Hex value
            </Label>
            <div className="flex items-center gap-2">
              <span
                className="size-8 shrink-0 rounded-md border"
                style={{
                  backgroundColor: isValidHex(hexInput) ? hexInput : color,
                }}
              />
              <Input
                id="hex-input"
                value={hexInput}
                onChange={(e) => applyHexInput(e.target.value)}
                spellCheck={false}
                className={cn(
                  "font-mono",
                  !isValidHex(hexInput) &&
                    "border-destructive focus-visible:border-destructive",
                )}
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleCopy}
                className="shrink-0 cursor-pointer"
                aria-label="Copy hex value"
              >
                {copied ? (
                  <CheckIcon className="text-teal-400" />
                ) : (
                  <CopyIcon />
                )}
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverColorPickerDemo;
