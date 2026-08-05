"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Bold, Italic, Underline, Link, List, ListOrdered } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pattern() {
  const [active, setActive] = useState({
    bold: false,
    italic: false,
    underline: false,
    link: false,
    ordered: false,
    bullet: false,
  });

  const checkSelectionState = () => {
    if (typeof window === "undefined") return;
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      link: !!document.getSelection()?.anchorNode?.parentElement?.closest("a"),
      ordered: document.queryCommandState("insertOrderedList"),
      bullet: document.queryCommandState("insertUnorderedList"),
    });
  };

  const handleCommand = (e: React.MouseEvent, commandId: string) => {
    e.preventDefault(); // Prevent losing focus from the selection

    if (typeof window === "undefined") return;

    if (commandId === "bold") {
      document.execCommand("bold");
    } else if (commandId === "italic") {
      document.execCommand("italic");
    } else if (commandId === "underline") {
      document.execCommand("underline");
    } else if (commandId === "link") {
      const selection = window.getSelection();
      if (!selection || selection.toString().trim() === "") {
        return;
      }
      document.execCommand("createLink", false, "#");
    } else if (commandId === "ordered") {
      document.execCommand("insertOrderedList");
    } else if (commandId === "bullet") {
      document.execCommand("insertUnorderedList");
    }

    checkSelectionState();
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (anchor) {
      const href = anchor.getAttribute("href");
      if (href) {
        window.open(href, "noopener,noreferrer");
      }
    }
  };

  const buttons = [
    { id: "bold", icon: Bold, label: "Bold" },
    { id: "italic", icon: Italic, label: "Italic" },
    { id: "underline", icon: Underline, label: "Underline" },
    { id: "link", icon: Link, label: "Link" },
    { id: "ordered", icon: ListOrdered, label: "Ordered List" },
    { id: "bullet", icon: List, label: "Bulleted List" },
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-md bg-background border border-border rounded-xl p-3 shadow-xs">
      <ButtonGroup className="w-full justify-start">
        {buttons.map(({ id, icon: Icon, label }) => {
          const isActive = active[id as keyof typeof active];
          return (
            <Button
              key={id}
              size="icon"
              variant="outline"
              onMouseDown={(e) => handleCommand(e, id)}
              className={cn(
                "h-9 w-9 bg-background border-border relative transition-all duration-200 cursor-pointer select-none",
                isActive && "bg-muted text-foreground border-border font-bold z-10"
              )}
              aria-label={label}
              aria-pressed={isActive}
            >
              <Icon className={cn("size-4 transition-transform duration-200", isActive && "scale-110")} />
            </Button>
          );
        })}
      </ButtonGroup>

      <div
        contentEditable
        suppressContentEditableWarning
        onInput={checkSelectionState}
        onKeyUp={checkSelectionState}
        onMouseUp={checkSelectionState}
        onSelect={checkSelectionState}
        onClick={handleContentClick}
        className="w-full bg-transparent border border-border rounded-lg bg-muted/20 min-h-24 p-3 focus:outline-hidden text-sm text-foreground leading-relaxed focus-visible:ring-1 focus-visible:ring-ring [&_a]:text-blue-500 [&_a]:underline [&_a]:cursor-pointer! [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
        style={{ outline: 'none' }}
      >
        Select any text in this box and click the formatting buttons above to apply styles!
      </div>
    </div>
  );
}