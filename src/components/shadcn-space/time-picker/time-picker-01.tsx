"use client";

import { useState } from "react";
import { Clock8Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));
const periods = ["AM", "PM"];

type Column = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function TimePicker01() {
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("AM");

  const columns: Column[] = [
    { label: "Hour", options: hours, value: hour, onChange: setHour },
    { label: "Minute", options: minutes, value: minute, onChange: setMinute },
    { label: "Period", options: periods, value: period, onChange: setPeriod },
  ];

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="time-picker-01">Start time</Label>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              id="time-picker-01"
              variant="outline"
              className="w-full cursor-pointer justify-start font-normal"
            />
          }
        >
          <Clock8Icon className="text-muted-foreground" />
          <span className="tabular-nums">
            {hour}:{minute} {period}
          </span>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-auto p-0">
          <div className="flex divide-x divide-border">
            {columns.map((column) => (
              <div key={column.label} className="flex flex-col">
                <span className="border-b border-border px-3 py-2 text-center text-xs font-medium text-muted-foreground">
                  {column.label}
                </span>
                <ScrollArea className="h-56">
                  <div role="listbox" aria-label={column.label} className="flex flex-col gap-1 p-1.5">
                    {column.options.map((option) => {
                      const selected = option === column.value;
                      return (
                        <Button
                          key={option}
                          role="option"
                          aria-selected={selected}
                          variant={selected ? "default" : "ghost"}
                          size="sm"
                          className={cn(
                            "w-12 cursor-pointer tabular-nums",
                            !selected && "text-muted-foreground"
                          )}
                          onClick={() => column.onChange(option)}
                        >
                          {option}
                        </Button>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
