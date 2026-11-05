"use client";

import { useState } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

const sample = [
  "Good design is as little design as possible.",
  "Less, but better, because it concentrates on the essential aspects,",
  "and the products are not burdened with non-essentials.",
];

const ContextMenuDemo = () => {
  const [lineNumbers, setLineNumbers] = useState(true);
  const [wrap, setWrap] = useState(true);
  const [highlight, setHighlight] = useState(false);
  const [zoom, setZoom] = useState("100");
  const [theme, setTheme] = useState("paper");

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={cn(
          "flex w-full max-w-md flex-col gap-1 rounded-lg border border-dashed border-border p-4 font-mono transition-colors",
          theme === "paper" ? "bg-background" : "bg-gray-950 text-white",
          zoom === "90" && "text-xs",
          zoom === "100" && "text-sm",
          zoom === "125" && "text-base",
        )}
      >
        {sample.map((line, index) => (
          <span
            key={index}
            className={cn(
              "flex gap-3 rounded-sm",
              !wrap && "truncate",
              highlight && index === 1 && (theme === "paper" ? "bg-amber-300/30" : "bg-amber-300/20"),
            )}
          >
            {lineNumbers && <span className="w-4 shrink-0 text-right opacity-40 select-none">{index + 1}</span>}
            <span className={cn(!wrap && "truncate")}>{line}</span>
          </span>
        ))}
        <span className="mt-3 font-sans text-xs opacity-50">Right click to change view options</span>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuGroup>
          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={lineNumbers} onCheckedChange={setLineNumbers}>
            Line numbers
            <ContextMenuShortcut>Ctrl L</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={wrap} onCheckedChange={setWrap}>
            Word wrap
            <ContextMenuShortcut>Alt Z</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={highlight} onCheckedChange={setHighlight}>
            Highlight current line
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Zoom</ContextMenuLabel>
          <ContextMenuRadioGroup value={zoom} onValueChange={(value) => setZoom(value as string)}>
            <ContextMenuRadioItem value="90">90%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="125">125%</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Theme</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as string)}>
            <ContextMenuRadioItem value="paper">Paper</ContextMenuRadioItem>
            <ContextMenuRadioItem value="ink">Ink</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ContextMenuDemo;
