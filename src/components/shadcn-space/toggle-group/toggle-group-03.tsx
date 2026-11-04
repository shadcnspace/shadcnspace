"use client";

import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const alignments = [
  { value: "left", label: "Align left", icon: AlignLeft },
  { value: "center", label: "Align center", icon: AlignCenter },
  { value: "right", label: "Align right", icon: AlignRight },
  { value: "justify", label: "Justify", icon: AlignJustify },
];

const ToggleGroupDemo = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-muted-foreground">Single, outline, attached</p>
        <ToggleGroup variant="outline" spacing={0} defaultValue={["left"]} aria-label="Text alignment">
          {alignments.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value} aria-label={item.label}>
              <item.icon />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-muted-foreground">Multiple, default, spaced</p>
        <ToggleGroup multiple defaultValue={["bold"]} aria-label="Text formatting">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex flex-wrap items-end gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-muted-foreground">Small</p>
          <ToggleGroup variant="outline" size="sm" spacing={0} defaultValue={["week"]} aria-label="Period, small">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-muted-foreground">Large</p>
          <ToggleGroup variant="outline" size="lg" spacing={0} defaultValue={["week"]} aria-label="Period, large">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-muted-foreground">Vertical</p>
          <ToggleGroup variant="outline" orientation="vertical" spacing={0} defaultValue={["center"]} aria-label="Text alignment, vertical">
            {alignments.slice(0, 3).map((item) => (
              <ToggleGroupItem key={item.value} value={item.value} aria-label={item.label}>
                <item.icon />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default ToggleGroupDemo;
