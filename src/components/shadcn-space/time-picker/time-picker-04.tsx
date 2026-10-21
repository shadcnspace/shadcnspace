"use client";

import { useState } from "react";
import { ArrowRightIcon, TimerIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 30 minute steps from 8:00 AM to 8:00 PM
const options = Array.from({ length: 25 }, (_, i) => {
  const total = 8 * 60 + i * 30;
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const label = `${hour12}:${String(minutes).padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
  return { label, total };
});

const toMinutes = (label: string) =>
  options.find((option) => option.label === label)?.total ?? 0;

const formatDuration = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h && m) return `${h}h ${m}m`;
  return h ? `${h}h` : `${m}m`;
};

type TimeSelectProps = {
  id: string;
  label: string;
  value: string;
  invalid?: boolean;
  onChange: (value: string) => void;
};

const TimeSelect = ({ id, label, value, invalid, onChange }: TimeSelectProps) => (
  <Field data-invalid={invalid} className="flex-1">
    <FieldLabel htmlFor={id}>{label}</FieldLabel>
    <Select value={value} onValueChange={(next) => next && onChange(next)}>
      <SelectTrigger id={id} aria-invalid={invalid} className="w-full cursor-pointer tabular-nums">
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
);

export default function TimePicker04() {
  const [start, setStart] = useState("9:00 AM");
  const [end, setEnd] = useState("11:30 AM");

  const duration = toMinutes(end) - toMinutes(start);
  const invalid = duration <= 0;

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border border-border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Working hours</span>
        <Badge
          variant={invalid ? "destructive" : "secondary"}
          className="tabular-nums"
          aria-live="polite"
        >
          <TimerIcon />
          {invalid ? "Invalid range" : formatDuration(duration)}
        </Badge>
      </div>

      <div className="flex items-end gap-2">
        <TimeSelect id="time-picker-04-start" label="Start" value={start} onChange={setStart} />
        <ArrowRightIcon aria-hidden="true" className="mb-2.5 size-4 shrink-0 text-muted-foreground" />
        <TimeSelect
          id="time-picker-04-end"
          label="End"
          value={end}
          invalid={invalid}
          onChange={setEnd}
        />
      </div>

      {invalid && <FieldError>End time must be after the start time.</FieldError>}
    </div>
  );
}
