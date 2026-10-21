"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MINUTE_STEP = 15;

const pad = (value: number) => String(value).padStart(2, "0");

type SegmentProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  onStep: (direction: 1 | -1) => void;
};

const Segment = ({ label, value, min, max, onStep }: SegmentProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      onStep(1);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      onStep(-1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={`Increase ${label}`}
        className="cursor-pointer text-muted-foreground"
        onClick={() => onStep(1)}
      >
        <ChevronUpIcon />
      </Button>
      <div
        role="spinbutton"
        tabIndex={0}
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        onKeyDown={handleKeyDown}
        className="flex h-12 w-16 items-center justify-center rounded-lg border border-border bg-muted/40 text-3xl font-semibold tabular-nums text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {pad(value)}
      </div>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={`Decrease ${label}`}
        className="cursor-pointer text-muted-foreground"
        onClick={() => onStep(-1)}
      >
        <ChevronDownIcon />
      </Button>
    </div>
  );
};

export default function TimePicker05() {
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState<string[]>(["AM"]);

  // Wrap around: 12 goes to 1, and 45 minutes goes back to 00
  const stepHour = (direction: 1 | -1) =>
    setHour((current) => ((current - 1 + direction + 12) % 12) + 1);
  const stepMinute = (direction: 1 | -1) =>
    setMinute((current) => (current + direction * MINUTE_STEP + 60) % 60);

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 rounded-xl border border-border p-5">
      <div className="flex flex-col items-center gap-0.5 text-center">
        <span className="text-sm font-semibold text-foreground">Daily reminder</span>
        <span className="text-xs text-muted-foreground">
          Use the arrows or your arrow keys
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Segment label="Hour" value={hour} min={1} max={12} onStep={stepHour} />
        <span aria-hidden="true" className="text-3xl font-semibold text-muted-foreground">
          :
        </span>
        <Segment label="Minute" value={minute} min={0} max={45} onStep={stepMinute} />
      </div>

      <ToggleGroup
        aria-label="AM or PM"
        value={period}
        onValueChange={(value) => {
          if (value && value.length > 0) setPeriod(value);
        }}
        className="rounded-lg border border-border p-1"
      >
        {["AM", "PM"].map((value) => (
          <ToggleGroupItem
            key={value}
            value={value}
            className="h-7 cursor-pointer rounded-md px-4 text-xs font-medium aria-pressed:bg-primary aria-pressed:text-primary-foreground"
          >
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <p aria-live="polite" className="text-sm text-muted-foreground">
        Reminds you at{" "}
        <span className="font-semibold text-foreground tabular-nums">
          {pad(hour)}:{pad(minute)} {period[0]}
        </span>
      </p>
    </div>
  );
}
