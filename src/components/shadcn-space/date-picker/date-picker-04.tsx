"use client";

import { useState } from "react";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { differenceInYears, format, subYears } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const MIN_AGE = 18;

const DatePickerDemo = () => {
  const [open, setOpen] = useState(false);
  const [dob, setDob] = useState<Date | undefined>(undefined);

  const today = new Date();
  const age = dob ? differenceInYears(today, dob) : null;
  const tooYoung = age !== null && age < MIN_AGE;

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="dob">Date of birth</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              id="dob"
              variant="outline"
              aria-invalid={tooYoung || undefined}
              aria-describedby="dob-hint"
              className={cn(
                "w-full justify-start font-normal",
                !dob && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="text-muted-foreground" />
              {dob ? format(dob, "MMMM d, yyyy") : "Select your birthday"}
              <ChevronDown className="ml-auto text-muted-foreground" />
            </Button>
          }
        />
        <PopoverContent align="start" className="w-auto p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={dob}
            onSelect={(date) => {
              setDob(date);
              if (date) setOpen(false);
            }}
            defaultMonth={dob ?? subYears(today, 25)}
            startMonth={new Date(1920, 0)}
            endMonth={today}
            disabled={{ after: today }}
            className="p-3"
          />
        </PopoverContent>
      </Popover>
      <p
        id="dob-hint"
        aria-live="polite"
        className={cn("text-xs", tooYoung ? "text-destructive" : "text-muted-foreground")}
      >
        {age === null
          ? `You must be at least ${MIN_AGE} to sign up.`
          : tooYoung
            ? `You must be at least ${MIN_AGE}. You are ${age}.`
            : `You are ${age} years old.`}
      </p>
    </div>
  );
};

export default DatePickerDemo;
