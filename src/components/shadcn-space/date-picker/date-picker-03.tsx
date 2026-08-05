"use client";

import { useRef } from "react";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Clock8Icon } from "lucide-react";

const TimePickerWithIconDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleShowPicker = () => {
    if (inputRef.current && "showPicker" in inputRef.current) {
      try {
        inputRef.current.showPicker();
      } catch (error) {
        console.error("Failed to open native picker:", error);
      }
    }
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="time-picker">Select Slot</Label>
      <InputGroup>
        <InputGroupAddon
          align="inline-start"
          className="cursor-pointer hover:text-foreground transition-colors"
          onClick={handleShowPicker}
          title="Open time picker"
        >
          <Clock8Icon className="size-4" />
        </InputGroupAddon>
        <InputGroupInput
          ref={inputRef}
          type="time"
          id="time-picker"
          step="1"
          defaultValue="08:30:00"
          className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </InputGroup>
    </div>
  );
};

export default TimePickerWithIconDemo;
