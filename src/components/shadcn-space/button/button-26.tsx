"use client";

import * as React from "react";
import { motion, type HTMLMotionProps, AnimatePresence } from "motion/react";
import { Lock, Unlock, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_TEXT = "Encrypt Data";
const CYCLES_PER_CHAR = 4;
const SHUFFLE_SPEED = 30;
const SCRAMBLE_CHARS = "010101_!@#$%^&*()<>{}[]░▒▓█";

interface EncryptButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  text?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

const EncryptButton = React.forwardRef<HTMLButtonElement, EncryptButtonProps>(
  (
    {
      text,
      className,
      children,
      icon,
      showIcon = true,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const labelText =
      (typeof children === "string" ? children : text) || DEFAULT_TEXT;

    const [displayText, setDisplayText] = React.useState(labelText);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isDecrypted, setIsDecrypted] = React.useState(false);
    const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

    const stopScramble = React.useCallback(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayText(labelText);
      setIsDecrypted(false);
    }, [labelText]);

    const startScramble = React.useCallback(() => {
      stopScramble();
      let step = 0;
      const totalSteps = labelText.length * CYCLES_PER_CHAR;

      intervalRef.current = setInterval(() => {
        setDisplayText(() => {
          const scrambled = labelText
            .split("")
            .map((char, index) => {
              if (step / CYCLES_PER_CHAR > index) return char;
              if (char === " ") return " ";
              return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
              ];
            })
            .join("");
          return scrambled;
        });

        step++;
        if (step > totalSteps) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setDisplayText(labelText);
          setIsDecrypted(true);
        }
      }, SHUFFLE_SPEED);
    }, [labelText, stopScramble]);

    React.useEffect(() => {
      setDisplayText(labelText);
    }, [labelText]);

    React.useEffect(() => {
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, []);

    return (
      <motion.button
        ref={ref}
        onMouseEnter={(e) => {
          setIsHovered(true);
          startScramble();
          if (onMouseEnter) onMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          stopScramble();
          if (onMouseLeave) onMouseLeave(e);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 select-none cursor-pointer outline-none",
          "bg-background text-foreground border border-border",
          "hover:border-primary/60 hover:text-primary hover:shadow-sm",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        {...props}
      >
        {/* HUD Tech Corner Brackets */}
        <span className="absolute top-1 left-1 size-1.5 border-t border-l border-border transition-colors duration-300 group-hover:border-primary group-hover:size-2" />
        <span className="absolute top-1 right-1 size-1.5 border-t border-r border-border transition-colors duration-300 group-hover:border-primary group-hover:size-2" />
        <span className="absolute bottom-1 left-1 size-1.5 border-b border-l border-border transition-colors duration-300 group-hover:border-primary group-hover:size-2" />
        <span className="absolute bottom-1 right-1 size-1.5 border-b border-r border-border transition-colors duration-300 group-hover:border-primary group-hover:size-2" />

        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Laser Sweep Scan Beam */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              exit={{ opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-primary/20 to-transparent -skew-x-12 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* High-Tech Icon Indicator */}
        {showIcon && (
          <span className="relative z-10 flex items-center justify-center">
            {icon ? (
              icon
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                {isDecrypted ? (
                  <motion.span
                    key="unlocked"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Unlock className="size-4 text-primary" />
                  </motion.span>
                ) : isHovered ? (
                  <motion.span
                    key="terminal"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Terminal className="size-4 text-primary animate-pulse" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="locked"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Lock className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </motion.span>
                )}
              </AnimatePresence>
            )}
          </span>
        )}

        {/* Text Container with invisible reference element for width stability */}
        <span className="relative z-10 inline-flex items-center justify-center">
          <span className="opacity-0" aria-hidden={true}>
            {children || labelText}
          </span>
          <span className="absolute inset-0 flex items-center justify-center font-mono">
            {displayText}
          </span>
        </span>
      </motion.button>
    );
  },
);

EncryptButton.displayName = "EncryptButton";

export { EncryptButton, type EncryptButtonProps };

const EncryptButtonDemo = () => {
  return <EncryptButton text="Encrypt Data" />;
};

export default EncryptButtonDemo;


