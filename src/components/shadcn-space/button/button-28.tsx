"use client";

import * as React from "react";
import { motion, AnimatePresence, type HTMLMotionProps } from "motion/react";
import { AlertTriangle, Check, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface HoldToChargeButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children" | "onAnimationStart"
> {
  label?: string;
  holdingLabel?: string;
  completedLabel?: string;
  holdDuration?: number;
  autoResetDelay?: number;
  onComplete?: () => void;
  variant?: "destructive" | "default";
}

const HoldToChargeButton = React.forwardRef<
  HTMLButtonElement,
  HoldToChargeButtonProps
>(
  (
    {
      label = "Hold to Delete",
      holdingLabel = "Holding...",
      completedLabel = "Deleted Successfully!",
      holdDuration = 1500,
      autoResetDelay = 3000,
      onComplete,
      variant = "destructive",
      className,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      ...props
    },
    ref,
  ) => {
    const [progress, setProgress] = React.useState(0);
    const [isHolding, setIsHolding] = React.useState(false);
    const [isCompleted, setIsCompleted] = React.useState(false);

    const animationFrameRef = React.useRef<number | null>(null);
    const startTimeRef = React.useRef<number | null>(null);

    const isDestructive = variant === "destructive";

    const stopHolding = React.useCallback(() => {
      setIsHolding(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      startTimeRef.current = null;
      if (!isCompleted) {
        setProgress(0);
      }
    }, [isCompleted]);

    const startHolding = React.useCallback(() => {
      if (isCompleted) return;
      setIsHolding(true);
      startTimeRef.current = performance.now();

      const updateProgress = (now: number) => {
        if (!startTimeRef.current) return;
        const elapsed = now - startTimeRef.current;
        const currentProgress = Math.min((elapsed / holdDuration) * 100, 100);

        setProgress(currentProgress);

        if (currentProgress >= 100) {
          setIsCompleted(true);
          setIsHolding(false);
          if (onComplete) onComplete();

          if (autoResetDelay > 0) {
            setTimeout(() => {
              setIsCompleted(false);
              setProgress(0);
            }, autoResetDelay);
          }
        } else {
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }, [holdDuration, isCompleted, onComplete, autoResetDelay]);

    React.useEffect(() => {
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, []);

    return (
      <motion.button
        ref={ref}
        onMouseDown={(e) => {
          startHolding();
          if (onMouseDown) onMouseDown(e);
        }}
        onMouseUp={(e) => {
          stopHolding();
          if (onMouseUp) onMouseUp(e);
        }}
        onMouseLeave={(e) => {
          stopHolding();
          if (onMouseLeave) onMouseLeave(e);
        }}
        onTouchStart={(e) => {
          startHolding();
          if (onTouchStart) onTouchStart(e);
        }}
        onTouchEnd={(e) => {
          stopHolding();
          if (onTouchEnd) onTouchEnd(e);
        }}
        whileHover={{ scale: isCompleted ? 1 : 1.02 }}
        whileTap={{ scale: isCompleted ? 1 : 0.97 }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-5 py-2.5 font-medium text-sm transition-all duration-300 select-none cursor-pointer outline-none min-h-10 border hover:bg-muted dark:hover:bg-input/50",
          isHolding || isCompleted
            ? isDestructive
              ? "border-destructive"
              : "border-primary"
            : isDestructive
              ? "border-border focus-visible:ring-destructive/30"
              : "border-border hover:border-primary/60 focus-visible:ring-primary/30",
          "bg-background text-foreground focus-visible:ring-2 focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        {/* Dynamic Progress Fill Bar */}
        <motion.span
          style={{ width: `${progress}%` }}
          className={cn(
            "absolute left-0 top-0 bottom-0 z-0 pointer-events-none transition-all duration-75",
            isDestructive ? "bg-destructive/15" : "bg-primary/15",
          )}
        />

        <AnimatePresence mode="wait">
          {isCompleted ? (
            <motion.span
              key="completed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={cn(
                "relative z-10 flex items-center gap-2 font-medium",
                isDestructive ? "text-destructive" : "text-primary",
              )}
            >
              <Check className="size-4 stroke-[2.5]" />
              <span>{completedLabel}</span>
            </motion.span>
          ) : (
            <motion.span
              key="active"
              className="relative z-10 flex items-center gap-2.5"
            >
              {isHolding ? (
                <AlertTriangle className="size-4 animate-pulse text-foreground" />
              ) : (
                <ShieldAlert className="size-4 text-foreground transition-colors" />
              )}

              {/* Label */}
              <span className="font-medium tracking-wide transition-colors text-foreground">
                {isHolding ? holdingLabel : label}
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    );
  },
);

HoldToChargeButton.displayName = "HoldToChargeButton";

export { HoldToChargeButton, type HoldToChargeButtonProps };

const HoldToChargeButtonDemo = () => {
  return (
    <HoldToChargeButton
      holdDuration={2000}
      label="Hold to Delete"
      holdingLabel="Holding..."
      completedLabel="Deleted Successfully!"
      variant="destructive"
    />
  );
};

export default HoldToChargeButtonDemo;
