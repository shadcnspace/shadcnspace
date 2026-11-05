"use client";

import { useState } from "react";
import { Highlighter, ListOrdered, WrapText } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const lines = [
  "import { Toggle } from \"@/components/ui/toggle\";",
  "",
  "export function WrapToggle({ wrap, onWrapChange }) {",
  "  return <Toggle pressed={wrap} onPressedChange={onWrapChange}>Word wrap</Toggle>;",
  "}",
];

const ACTIVE_LINE = 3;

const ToggleDemo = () => {
  const [wrap, setWrap] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [highlight, setHighlight] = useState(true);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <span className="text-xs font-medium text-muted-foreground">
          wrap-toggle.tsx
        </span>
        <div className="flex items-center gap-1">
          <Toggle
            size="sm"
            pressed={wrap}
            onPressedChange={setWrap}
            aria-label="Word wrap"
          >
            <WrapText />
          </Toggle>
          <Toggle
            size="sm"
            pressed={numbers}
            onPressedChange={setNumbers}
            aria-label="Line numbers"
          >
            <ListOrdered />
          </Toggle>
          <Toggle
            size="sm"
            pressed={highlight}
            onPressedChange={setHighlight}
            aria-label="Highlight active line"
          >
            <Highlighter />
          </Toggle>
        </div>
      </div>
      <div className={cn("py-2 font-mono text-xs", !wrap && "overflow-x-auto")}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={cn(
              "flex min-w-max",
              wrap && "min-w-0",
              highlight && index === ACTIVE_LINE && "bg-sky-400/10",
            )}
          >
            {numbers && (
              <span className="w-8 shrink-0 select-none pr-3 text-right text-muted-foreground/60">
                {index + 1}
              </span>
            )}
            <span
              className={cn(
                "pr-3 text-foreground/90",
                !numbers && "pl-3",
                wrap ? "whitespace-pre-wrap break-all" : "whitespace-pre",
              )}
            >
              {line || " "}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleDemo;
