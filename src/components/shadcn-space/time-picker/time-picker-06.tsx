"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const formatTime = (totalMinutes: number) => {
  const minutes = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutes / 60);
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes % 60).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
};

// Every 30 minutes across the day
const options = Array.from({ length: 48 }, (_, i) => ({
  label: formatTime(i * 30),
  total: i * 30,
}));

// Fixed UTC offsets in minutes, standard time for the demo
const zones = [
  { city: "London", zone: "UTC+0", offset: 0 },
  { city: "New York", zone: "UTC-5", offset: -300 },
  { city: "Bengaluru", zone: "UTC+5:30", offset: 330 },
  { city: "Tokyo", zone: "UTC+9", offset: 540 },
];

const BASE_OFFSET = zones[0].offset;

export default function TimePicker06() {
  const [time, setTime] = useState("3:00 PM");
  const base = options.find((option) => option.label === time)?.total ?? 0;

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-border p-4">
      <Field>
        <FieldLabel htmlFor="time-picker-06">Meeting time in London</FieldLabel>
        <Select value={time} onValueChange={(next) => next && setTime(next)}>
          <SelectTrigger id="time-picker-06" className="w-full cursor-pointer tabular-nums">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.label} value={option.label} className="tabular-nums">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <ul aria-live="polite" className="divide-y divide-border rounded-lg border border-border">
        {zones.map((zone) => {
          const local = base - BASE_OFFSET + zone.offset;
          const dayShift = Math.floor(local / 1440);
          const hour = Math.floor((((local % 1440) + 1440) % 1440) / 60);
          const daytime = hour >= 7 && hour < 19;
          const Icon = daytime ? SunIcon : MoonIcon;

          return (
            <li key={zone.city} className="flex items-center gap-3 px-3 py-2.5">
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full",
                  daytime ? "bg-amber-300/15 text-amber-300" : "bg-blue-500/15 text-blue-500"
                )}
              >
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{zone.city}</span>
                <span className="text-xs text-muted-foreground">{zone.zone}</span>
              </div>
              <div className="ms-auto flex items-center gap-2">
                {dayShift !== 0 && (
                  <Badge variant="secondary" className="text-xs">
                    {dayShift > 0 ? "+1 day" : "-1 day"}
                  </Badge>
                )}
                <span className="text-sm font-semibold tabular-nums text-foreground">
                  {formatTime(local)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
