"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Character Count";

const Example = () => {
  const [value, setValue] = useState("");
  const maxLength = 150;

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Label htmlFor="message">Message</Label>
      <Textarea
        className="bg-background"
        id="message"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Share your message here !"
        value={value}
      />
      <p className={`text-right text-sm text-muted-foreground ${value.length === maxLength ? 'text-teal-500' : ''}`}>
        {value.length}/{maxLength}
      </p>
    </div>
  );
};

export default Example;
