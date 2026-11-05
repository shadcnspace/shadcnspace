"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const MIN = 0;
const MAX = 100;

const SliderDemo = () => {
  const [value, setValue] = useState(64);
  const [draft, setDraft] = useState("64");

  const commit = (raw: string) => {
    const parsed = Number(raw);
    const next = Number.isFinite(parsed) && raw.trim() !== "" ? Math.min(Math.max(Math.round(parsed), MIN), MAX) : value;
    setValue(next);
    setDraft(String(next));
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label id="opacity-label" htmlFor="opacity-input">
          Layer opacity
        </Label>
        <div className="flex items-center gap-1">
          <Input
            id="opacity-input"
            type="number"
            inputMode="numeric"
            min={MIN}
            max={MAX}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={(event) => commit(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && commit(event.currentTarget.value)}
            className="h-7 w-16 text-right tabular-nums"
          />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>
      <Slider
        aria-labelledby="opacity-label"
        min={MIN}
        max={MAX}
        value={[value]}
        onValueChange={(next) => {
          // Base UI returns a number (not an array) when there is one thumb.
          const number = Array.isArray(next) ? next[0] : (next as number);
          setValue(number);
          setDraft(String(number));
        }}
      />
      <div
        className="flex h-20 items-center justify-center rounded-lg border border-border bg-muted/40"
        aria-hidden="true"
      >
        <div className="size-12 rounded-md bg-blue-500" style={{ opacity: value / 100 }} />
      </div>
    </div>
  );
};

export default SliderDemo;
