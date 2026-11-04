"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const options = [
  { id: "analytics", label: "Usage analytics", description: "Help us understand which features you use." },
  { id: "crash", label: "Crash reports", description: "Send error details when the app crashes." },
  { id: "performance", label: "Performance data", description: "Share page load and response times." },
];

const SwitchDemo = () => {
  const [enabled, setEnabled] = useState(true);
  const [children, setChildren] = useState<Record<string, boolean>>({
    analytics: true,
    crash: true,
    performance: false,
  });

  const onCount = Object.values(children).filter(Boolean).length;

  const toggleParent = (next: boolean) => {
    setEnabled(next);
    // Turning the group back on with nothing selected would be a no-op, so enable everything.
    if (next && onCount === 0) {
      setChildren(Object.fromEntries(options.map((option) => [option.id, true])));
    }
  };

  const toggleChild = (id: string, next: boolean) => {
    const updated = { ...children, [id]: next };
    setChildren(updated);
    if (!Object.values(updated).some(Boolean)) setEnabled(false);
  };

  return (
    <div className="w-full max-w-sm rounded-lg border border-border bg-background">
      <div className="flex items-start justify-between gap-4 p-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="share-data">Share diagnostics</Label>
          <p className="text-sm text-muted-foreground">
            {enabled ? `${onCount} of ${options.length} enabled` : "Nothing is shared"}
          </p>
        </div>
        <Switch
          id="share-data"
          checked={enabled}
          onCheckedChange={toggleParent}
          aria-controls="diagnostics-options"
        />
      </div>
      <ul
        id="diagnostics-options"
        className={cn("flex flex-col border-t border-border transition-opacity", !enabled && "opacity-50")}
      >
        {options.map((option) => (
          <li key={option.id} className="flex items-start justify-between gap-4 py-3 pr-4 pl-8">
            <div className="flex flex-col gap-1">
              <Label htmlFor={option.id} className="font-normal">
                {option.label}
              </Label>
              <p className="text-xs text-muted-foreground">{option.description}</p>
            </div>
            <Switch
              id={option.id}
              size="sm"
              checked={enabled && children[option.id]}
              disabled={!enabled}
              onCheckedChange={(next) => toggleChild(option.id, next)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwitchDemo;
