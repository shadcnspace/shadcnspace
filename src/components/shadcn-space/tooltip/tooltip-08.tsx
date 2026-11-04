"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
  type LucideIcon,
} from "lucide-react";

export type ToolbarItem = {
  icon: LucideIcon;
  label: string;
  shortcut: string;
};

const DEFAULT_ITEMS: ToolbarItem[] = [
  { icon: Bold, label: "Bold", shortcut: "Ctrl+B" },
  { icon: Italic, label: "Italic", shortcut: "Ctrl+I" },
  { icon: Underline, label: "Underline", shortcut: "Ctrl+U" },
  { icon: Strikethrough, label: "Strikethrough", shortcut: "Ctrl+Shift+S" },
];

export interface EditorToolbarTooltipProps {
  /**
   * The toolbar buttons to render, each paired with the tooltip label/shortcut shown on hover
   * @default Bold, Italic, Underline, Strikethrough
   */
  items?: ToolbarItem[];
  /**
   * Hover delay before the tooltip appears, in milliseconds
   * @default 300
   */
  delay?: number;
  /**
   * Additional classes for the toolbar wrapper
   */
  className?: string;
}

export function EditorToolbarTooltip({
  items = DEFAULT_ITEMS,
  delay = 300,
  className,
}: EditorToolbarTooltipProps) {
  const [active, setActive] = useState<number | null>(null);
  const [coords, setCoords] = useState({ clipPath: "", x: 0 });
  const [isEntering, setIsEntering] = useState(true);

  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const calculatePosition = (index: number) => {
    const label = labelRefs.current[index];
    const icon = buttonRefs.current[index];
    if (!label || !icon) return null;

    const labelCenter = label.offsetLeft + label.offsetWidth / 2;
    const iconCenter = icon.offsetLeft + icon.offsetWidth / 2;

    const totalWidth = labelRefs.current.reduce(
      (acc, el) => acc + (el?.offsetWidth ?? 0),
      0,
    );
    const left = (label.offsetLeft / totalWidth) * 100;
    const right =
      100 - ((label.offsetLeft + label.offsetWidth) / totalWidth) * 100;

    return {
      clipPath: `inset(0 ${right}% 0 ${left}% round 6px)`,
      x: iconCenter - labelCenter,
    };
  };

  const handleEnter = (index: number) => {
    const next = calculatePosition(index);
    if (!next) return;

    if (active === null) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsEntering(true);
      timeoutRef.current = setTimeout(() => {
        setCoords(next);
        setActive(index);
      }, delay);
    } else {
      setCoords(next);
      setActive(index);
    }
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(null);
    setCoords({ clipPath: "", x: 0 });
    setIsEntering(true);
  };

  return (
    <div
      className={cn("relative inline-flex", className)}
      onMouseLeave={handleLeave}
    >
      <AnimatePresence>
        {active !== null && coords.clipPath && (
          <motion.div
            className="pointer-events-none absolute -top-10 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              data-slot="tooltip-content"
              className="flex h-7 items-center rounded-md bg-foreground"
              animate={{ clipPath: coords.clipPath, x: coords.x }}
              transition={{
                type: "spring",
                bounce: 0,
                duration: isEntering ? 0 : 0.4,
              }}
              onUpdate={() => isEntering && setIsEntering(false)}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 whitespace-nowrap px-2.5 text-xs text-background"
                >
                  {item.label}
                  <Kbd>{item.shortcut}</Kbd>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-10 flex items-center gap-1 rounded-lg border p-1">
        {items.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onMouseEnter={() => handleEnter(index)}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            aria-label={item.label}
            className="size-9 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <item.icon className="size-4" />
          </Button>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 flex h-0 overflow-hidden opacity-0">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              labelRefs.current[index] = el;
            }}
            className="flex items-center gap-1.5 whitespace-nowrap px-2.5 text-xs"
          >
            {item.label}
            <Kbd>{item.shortcut}</Kbd>
          </div>
        ))}
      </div>
    </div>
  );
}

const EditorToolbarTooltipDemo = () => {
  return <EditorToolbarTooltip />;
};

export default EditorToolbarTooltipDemo;
