"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PenTool, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface SwitchIconRoleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onLabel?: string;
  offLabel?: string;
  onIcon?: ReactNode;
  offIcon?: ReactNode;
  onTrackClassName?: string;
  offTrackClassName?: string;
  disabled?: boolean;
  className?: string;
}

const SwitchIconRole = ({
  checked: checkedProp,
  defaultChecked = false,
  onCheckedChange,
  onLabel = "On",
  offLabel = "Off",
  onIcon = <PenTool className="size-3.5 text-orange-400" strokeWidth={2.25} />,
  offIcon = <Terminal className="size-3.5 text-blue-500" strokeWidth={2.5} />,
  onTrackClassName = "bg-orange-400",
  offTrackClassName = "bg-blue-500",
  disabled,
  className,
}: SwitchIconRoleProps) => {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const checked = checkedProp ?? uncontrolled;

  const toggle = () => {
    const next = !checked;
    if (checkedProp === undefined) setUncontrolled(next);
    onCheckedChange?.(next);
  };

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "text-sm font-medium tracking-tight transition-colors duration-300",
          checked ? "text-muted-foreground/30" : "text-foreground",
        )}
      >
        {offLabel}
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "relative flex h-8 w-16 items-center rounded-full border border-transparent p-1 transition-colors disabled:pointer-events-none disabled:opacity-50",
          checked ? onTrackClassName : offTrackClassName,
          className,
        )}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          style={{ marginLeft: checked ? "auto" : 0 }}
          className="relative z-10 flex size-6 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {checked ? (
              <motion.span
                key="on"
                initial={{ scale: 0.4, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.4, opacity: 0, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {onIcon}
              </motion.span>
            ) : (
              <motion.span
                key="off"
                initial={{ scale: 0.4, opacity: 0, rotate: 45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.4, opacity: 0, rotate: -45 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {offIcon}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.span>
      </button>

      <span
        className={cn(
          "text-sm font-medium tracking-tight transition-colors duration-300",
          checked ? "text-foreground" : "text-muted-foreground/30",
        )}
      >
        {onLabel}
      </span>
    </div>
  );
};

export { SwitchIconRole };

const SwitchRoleDemo = () => {
  return <SwitchIconRole offLabel="Developer" onLabel="Designer" />;
};

export default SwitchRoleDemo;
