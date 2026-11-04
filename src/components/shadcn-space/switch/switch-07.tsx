"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SwitchLabeledProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  disabled?: boolean;
  className?: string;
}

const SwitchLabeled = ({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  onLabel = "Yes",
  offLabel = "No",
  disabled,
  className,
}: SwitchLabeledProps) => {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const checked = checkedProp ?? uncontrolled;
  const longestLabel = Math.max(onLabel.length, offLabel.length);

  const toggle = () => {
    const next = !checked;
    if (checkedProp === undefined) setUncontrolled(next);
    onCheckedChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={toggle}
      style={{ width: `calc(${longestLabel}ch + 2.75rem)` }}
      className={cn(
        "relative flex h-8 items-center rounded-full border border-transparent p-1 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        checked ? "bg-primary" : "bg-input dark:bg-input/80",
        className,
      )}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <AnimatePresence initial={false}>
          {checked && (
            <motion.span
              key="on"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ duration: 0.15 }}
              className="text-xs font-medium tracking-wide text-primary-foreground uppercase"
            >
              {onLabel}
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatePresence initial={false}>
          {!checked && (
            <motion.span
              key="off"
              initial={{ opacity: 0, x: 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 4 }}
              transition={{ duration: 0.15 }}
              className="ml-auto text-xs font-medium tracking-wide text-foreground uppercase"
            >
              {offLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <motion.span
        layout
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        style={{ marginLeft: checked ? "auto" : 0 }}
        className={cn(
          "relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-background shadow-sm",
          checked ? "dark:bg-primary-foreground" : "dark:bg-foreground",
        )}
      >
        <span className="flex items-center gap-px">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "h-2.5 w-px rounded-full transition-colors",
                checked
                  ? "bg-primary"
                  : "bg-muted-foreground/50 dark:bg-background/50",
              )}
            />
          ))}
        </span>
      </motion.span>
    </button>
  );
};

export { SwitchLabeled };

const SwitchGripDemo = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <SwitchLabeled />
    </div>
  );
};

export default SwitchGripDemo;
