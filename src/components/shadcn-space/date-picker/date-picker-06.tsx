"use client";

import { useState } from "react";
import { CalendarIcon, ChevronDown, X } from "lucide-react";
import { compareAsc, format, isSameDay, startOfDay } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const ALLOWANCE = 5;

const DatePickerDemo = () => {
  const [days, setDays] = useState<Date[]>([]);
  const today = startOfDay(new Date());
  const sorted = [...days].sort(compareAsc);
  const remaining = ALLOWANCE - days.length;

  const remove = (day: Date) => setDays((current) => current.filter((item) => !isSameDay(item, day)));

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="time-off">Time off</Label>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              id="time-off"
              variant="outline"
              className={cn("w-full justify-start font-normal", !days.length && "text-muted-foreground")}
            >
              <CalendarIcon className="text-muted-foreground" />
              {days.length
                ? `${days.length} ${days.length === 1 ? "day" : "days"} selected`
                : "Select days off"}
              <ChevronDown className="ml-auto text-muted-foreground" />
            </Button>
          }
        />
        <PopoverContent align="start" className="w-auto gap-0 p-0">
          <Calendar
            mode="multiple"
            selected={days}
            onSelect={(next) => setDays(next ?? [])}
            max={ALLOWANCE}
            disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
            className="p-3"
          />
          <p className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
            Weekends are excluded. {remaining} of {ALLOWANCE} days left.
          </p>
        </PopoverContent>
      </Popover>

      {sorted.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5" aria-label="Selected days">
          {sorted.map((day) => (
            <li
              key={day.toISOString()}
              className="flex items-center gap-1 rounded-md border border-border bg-muted/40 py-0.5 pr-0.5 pl-2 text-xs text-foreground"
            >
              {format(day, "EEE, MMM d")}
              <button
                type="button"
                onClick={() => remove(day)}
                aria-label={`Remove ${format(day, "MMMM d")}`}
                className="rounded p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              >
                <X className="size-3" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-muted-foreground">
          You have {ALLOWANCE} days of leave available.
        </p>
      )}
    </div>
  );
};

export default DatePickerDemo;
