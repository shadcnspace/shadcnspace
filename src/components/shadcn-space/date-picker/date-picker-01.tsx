"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DateAndTimePickerDemo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const handleBooking = () => {
    setBookingStatus("loading");
    setTimeout(() => setBookingStatus("success"), 1500);
  };

  return (
    <>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="date" className="text-sm font-semibold">
            Select Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              onPointerDown={() => setBookingStatus("idle")}
              render={
                <Button
                  variant="outline"
                  id="date"
                  className={cn(
                    "w-full justify-start text-left font-normal h-10 transition-all hover:bg-muted/50 cursor-pointer",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                  {date ? format(date, "PPP") : <span>Select a date</span>}
                  <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              }
            />
            <PopoverContent
              className="w-auto p-0 border-muted-foreground/10 shadow-2xl"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setOpen(false);
                }}
                className="rounded-md border-none"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label
              htmlFor="time-from"
              className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5"
            >
              <Clock className="size-3.5" /> Start Time
            </Label>
            <Input
              type="time"
              id="time-from"
              defaultValue="09:00"
              className="h-10 bg-background appearance-none transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="time-to"
              className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5"
            >
              <Clock className="size-3.5" /> End Time
            </Label>
            <Input
              type="time"
              id="time-to"
              defaultValue="10:00"
              className="h-10 bg-background appearance-none transition-all focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <Button
          className="w-full h-11 font-semibold transition-all group overflow-hidden relative cursor-pointer"
          onClick={handleBooking}
          disabled={!date || bookingStatus !== "idle"}
        >
          {bookingStatus === "idle" && (
            <span className="flex items-center gap-2">Confirm Meet</span>
          )}
          {bookingStatus === "loading" && (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Processing...
            </div>
          )}
          {bookingStatus === "success" && (
            <span className="flex items-center gap-2 animate-in zoom-in-50 duration-300">
              <Check className="h-4 w-4" />
              Meet Scheduled!
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default DateAndTimePickerDemo;
