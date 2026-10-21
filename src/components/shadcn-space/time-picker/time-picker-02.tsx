"use client";

import { useState } from "react";
import { CalendarCheckIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const slots = [
  { time: "09:00 AM", booked: false },
  { time: "09:30 AM", booked: true },
  { time: "10:00 AM", booked: false },
  { time: "10:30 AM", booked: false },
  { time: "11:00 AM", booked: true },
  { time: "11:30 AM", booked: false },
  { time: "02:00 PM", booked: false },
  { time: "02:30 PM", booked: true },
  { time: "03:00 PM", booked: false },
];

export default function TimePicker02() {
  const [selected, setSelected] = useState<string[]>(["10:00 AM"]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-border p-4">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">
          Thursday, 16 October
        </span>
        <span className="text-xs text-muted-foreground">
          30 min call, times shown in your time zone
        </span>
      </div>

      <ToggleGroup
        aria-label="Available time slots"
        value={selected}
        onValueChange={(value) => {
          if (value && value.length > 0) setSelected(value);
        }}
        className="grid w-full grid-cols-3 gap-2"
      >
        {slots.map((slot) => (
          <ToggleGroupItem
            key={slot.time}
            value={slot.time}
            disabled={slot.booked}
            aria-label={slot.booked ? `${slot.time}, booked` : slot.time}
            className="h-9 cursor-pointer rounded-lg border border-border text-sm tabular-nums transition-colors hover:bg-muted aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:text-primary-foreground disabled:cursor-not-allowed disabled:line-through"
          >
            {slot.time}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="flex items-center gap-2 rounded-lg bg-teal-400/10 px-3 py-2 text-sm text-foreground">
        <CalendarCheckIcon aria-hidden="true" className="size-4 text-teal-400" />
        <span aria-live="polite">
          Your slot: <span className="font-semibold">{selected[0]}</span>
        </span>
      </div>
    </div>
  );
}
