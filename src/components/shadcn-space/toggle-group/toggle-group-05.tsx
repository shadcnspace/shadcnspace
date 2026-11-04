"use client";

import { useState } from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const days = [
  { value: "mon", short: "M", label: "Monday" },
  { value: "tue", short: "T", label: "Tuesday" },
  { value: "wed", short: "W", label: "Wednesday" },
  { value: "thu", short: "T", label: "Thursday" },
  { value: "fri", short: "F", label: "Friday" },
  { value: "sat", short: "S", label: "Saturday" },
  { value: "sun", short: "S", label: "Sunday" },
];

const weekdays = ["mon", "tue", "wed", "thu", "fri"];
const weekend = ["sat", "sun"];

function summarize(selected: string[]) {
  const sorted = days.filter((day) => selected.includes(day.value));
  if (sorted.length === 0) return "Pick at least one day";
  if (sorted.length === 7) return "Every day";
  if (sorted.length === 5 && weekdays.every((day) => selected.includes(day))) return "Every weekday";
  if (sorted.length === 2 && weekend.every((day) => selected.includes(day))) return "Every weekend";
  const names = sorted.map((day) => day.label);
  return `Every ${names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names.at(-1)}` : names[0]}`;
}

const ToggleGroupDemo = () => {
  const [selected, setSelected] = useState<string[]>(weekdays);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border bg-background p-4">
      <div>
        <p className="text-sm font-medium text-foreground" id="repeat-label">
          Repeat on
        </p>
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {summarize(selected)} at 9:00 AM
        </p>
      </div>
      <ToggleGroup multiple variant="outline" value={selected} onValueChange={setSelected} aria-labelledby="repeat-label" className="w-full justify-between">
        {days.map((day) => (
          <ToggleGroupItem
            key={day.value}
            value={day.value}
            aria-label={day.label}
            className="size-9 rounded-full aria-pressed:border-blue-500 aria-pressed:bg-blue-500 aria-pressed:text-white"
          >
            {day.short}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex gap-2 text-xs">
        {[
          { label: "Weekdays", value: weekdays },
          { label: "Weekends", value: weekend },
          { label: "Every day", value: days.map((day) => day.value) },
        ].map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => setSelected(preset.value)}
            className="rounded-md px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToggleGroupDemo;
