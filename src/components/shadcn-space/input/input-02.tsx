"use client";

import { Clock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Time Input";

const InputTimeDemo = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="time-input">Launching Time</Label>
    <div className="relative">
      <Clock className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="bg-background pl-9" id="time-input" type="time" />
    </div>
  </div>
);

export default InputTimeDemo;
