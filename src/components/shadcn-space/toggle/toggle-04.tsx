"use client";

import { Bold, Italic, Underline } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

const sizes = ["sm", "default", "lg"] as const;

const ToggleDemo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-muted-foreground">Default</p>
        <div className="flex items-center gap-2">
          {sizes.map((size) => (
            <Toggle key={size} size={size} aria-label={`Toggle bold, ${size}`}>
              <Bold />
            </Toggle>
          ))}
          <Toggle defaultPressed aria-label="Toggle italic">
            <Italic />
          </Toggle>
          <Toggle disabled aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-muted-foreground">Outline</p>
        <div className="flex items-center gap-2">
          {sizes.map((size) => (
            <Toggle
              key={size}
              variant="outline"
              size={size}
              aria-label={`Toggle bold, ${size}`}
            >
              <Bold />
            </Toggle>
          ))}
          <Toggle variant="outline" defaultPressed aria-label="Toggle italic">
            <Italic />
          </Toggle>
          <Toggle variant="outline" disabled aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-muted-foreground">With text</p>
        <div className="flex items-center gap-2">
          <Toggle variant="outline">
            <Bold />
            Bold
          </Toggle>
          <Toggle variant="outline" defaultPressed>
            <Italic />
            Italic
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default ToggleDemo;
