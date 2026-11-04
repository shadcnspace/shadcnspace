"use client";

import * as React from "react";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

const DateRangePickerDemo = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <div className="grid gap-3 max-w-sm mx-auto">
      <Label htmlFor="date-range" className="text-sm font-medium px-1">
        Select Travel Dates
      </Label>
      <div className={cn("grid gap-2")}>
        <Popover>
          <PopoverTrigger
            render={
              <Button
                id="date-range"
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal h-11 transition-all hover:bg-muted/50 focus:ring-2 focus:ring-primary/20 cursor-pointer",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a range</span>
                )}
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            }
          />
          <PopoverContent
            className="w-auto p-0 border-muted/20 shadow-xl"
            align="start"
          >
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              className="p-3"
            />
          </PopoverContent>
        </Popover>
      </div>
      <p className="text-xs text-muted-foreground px-1">
        {date?.from && date?.to
          ? `Stay duration: ${Math.round((date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24))} nights`
          : "Please select a valid date range."}
      </p>
    </div>
  );
};

export default DateRangePickerDemo;
