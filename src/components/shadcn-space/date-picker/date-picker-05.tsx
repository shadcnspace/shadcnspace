"use client";

import { useState } from "react";
import { CalendarClock, CalendarOff, Check } from "lucide-react";
import {
  addDays,
  differenceInCalendarDays,
  format,
  isSameDay,
  nextMonday,
  nextSaturday,
  startOfDay,
} from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const quickOptions = (base: Date) => [
  { label: "Today", date: base },
  { label: "Tomorrow", date: addDays(base, 1) },
  { label: "This weekend", date: nextSaturday(base) },
  { label: "Next week", date: nextMonday(base) },
];

function describe(date: Date, base: Date) {
  const diff = differenceInCalendarDays(date, base);
  if (diff < -1) return { text: `Overdue by ${-diff} days`, tone: "overdue" as const };
  if (diff === -1) return { text: "Due yesterday", tone: "overdue" as const };
  if (diff === 0) return { text: "Due today", tone: "soon" as const };
  if (diff === 1) return { text: "Due tomorrow", tone: "soon" as const };
  if (diff < 7) return { text: `Due ${format(date, "EEEE")}`, tone: "later" as const };
  return { text: `Due ${format(date, "MMM d")}`, tone: "later" as const };
}

const DatePickerDemo = () => {
  const today = startOfDay(new Date());
  const [open, setOpen] = useState(false);
  const [due, setDue] = useState<Date | undefined>(() => addDays(startOfDay(new Date()), -2));

  const status = due ? describe(due, today) : null;

  const choose = (date: Date | undefined) => {
    setDue(date);
    setOpen(false);
  };

  return (
    <div className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-background p-3">
      <span className="size-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
      <p className="min-w-0 flex-1 truncate text-sm text-foreground">
        Write release notes for v2.4
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              aria-label={status ? `${status.text}. Change due date` : "Set due date"}
              className={cn(
                "shrink-0 font-normal",
                status?.tone === "overdue" && "border-orange-400/40 bg-orange-400/10 hover:bg-orange-400/20",
                status?.tone === "soon" && "border-amber-300/50 bg-amber-300/15 hover:bg-amber-300/25",
                !status && "text-muted-foreground",
              )}
            >
              <CalendarClock
                className={cn(
                  status?.tone === "overdue" && "text-orange-400",
                  status?.tone === "soon" && "text-amber-300",
                  (!status || status.tone === "later") && "text-muted-foreground",
                )}
              />
              {status ? status.text : "Due date"}
            </Button>
          }
        />
        <PopoverContent align="end" className="w-auto gap-0 p-0">
          <div className="flex flex-col p-1">
            {quickOptions(today).map((option) => {
              const selected = !!due && isSameDay(due, option.date);
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => choose(option.date)}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                >
                  <Check className={cn("size-4", selected ? "opacity-100" : "opacity-0")} aria-hidden="true" />
                  <span className="flex-1">{option.label}</span>
                  <span className="text-xs text-muted-foreground">{format(option.date, "EEE, MMM d")}</span>
                </button>
              );
            })}
            {due && (
              <button
                type="button"
                onClick={() => choose(undefined)}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:outline-none"
              >
                <CalendarOff className="size-4" aria-hidden="true" />
                Remove due date
              </button>
            )}
          </div>
          <Separator />
          <Calendar
            mode="single"
            selected={due}
            defaultMonth={due ?? today}
            onSelect={(date) => date && choose(date)}
            className="p-3"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerDemo;
