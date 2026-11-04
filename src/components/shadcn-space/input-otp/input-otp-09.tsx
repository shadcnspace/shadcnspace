"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import { OTPInput, OTPInputContext } from "input-otp";

type AnimatedOTPProps = {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
};

// DRY Constants & Helper Functions for unified animations and styles
const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 450,
  damping: 28,
} as const;

const primaryColorMix = (opacityPercent: number) =>
  `color-mix(in srgb, var(--primary) ${opacityPercent}%, transparent)`;

const CustomOTPSlot = ({ index }: { index: number }) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  // Track the typed character to trigger pulse animation on change
  const [pulseKey, setPulseKey] = useState(0);
  const prevCharRef = useRef(char);

  useEffect(() => {
    if (char && char !== prevCharRef.current) {
      setPulseKey((prev) => prev + 1);
    }
    prevCharRef.current = char;
  }, [char]);

  return (
    <div
      className={cn(
        "relative flex h-12 w-10 items-center justify-center rounded-lg border border-input text-foreground transition-all duration-200",
        "bg-linear-to-br from-muted/30 to-background dark:from-muted/10 dark:to-card/50",
        "shadow-xs select-none",
        isActive && "border-primary/50",
      )}
    >
      {/* Typed character animation */}
      <AnimatePresence mode="popLayout">
        {char ? (
          <motion.span
            key={`char-${char}`}
            initial={{ opacity: 0, scale: 0.5, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: -4 }}
            transition={SPRING_TRANSITION}
            className="absolute font-mono text-lg font-bold text-foreground"
          >
            {char}
          </motion.span>
        ) : null}
      </AnimatePresence>

      {/* Pulsing ring animation when character is typed */}
      <AnimatePresence>
        {pulseKey > 0 && (
          <motion.div
            key={pulseKey}
            className="absolute inset-0 rounded-lg border border-primary pointer-events-none"
            initial={{ opacity: 0.8, scale: 0.9, filter: "blur(0px)" }}
            animate={{ opacity: 0, scale: 1.4, filter: "blur(2px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ boxShadow: `inset 0 0 12px ${primaryColorMix(50)}` }}
          />
        )}
      </AnimatePresence>

      {/* Active slot glow and line drawer sliding across slots */}
      {isActive && (
        <motion.div
          layoutId="active-glow"
          className="absolute inset-0 rounded-lg border border-primary pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={SPRING_TRANSITION}
          style={{
            boxShadow: `inset 0 0 12px ${primaryColorMix(40)}, 0 0 8px ${primaryColorMix(20)}`,
          }}
        >
          <svg
            viewBox="0 0 20 20"
            className="absolute inset-0 h-full w-full"
            strokeWidth="0.4"
          >
            <motion.path
              d="M 3 18 h 14"
              className="stroke-primary"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </svg>
        </motion.div>
      )}

      {/* Fake Caret */}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            className="bg-primary h-5 w-[2px]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </div>
      )}
    </div>
  );
};

// Reusable Animated OTP Component
export const AnimatedOTP = ({
  value,
  onChange,
  maxLength = 6,
}: AnimatedOTPProps) => {
  return (
    <OTPInput
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      containerClassName="group flex items-center justify-center gap-3"
    >
      <div className="flex items-center gap-3">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <CustomOTPSlot key={idx} index={idx} />
        ))}
      </div>
    </OTPInput>
  );
};

// Default export wrapper containing the demo code
export default function InputOTPDemo() {
  const [value, setValue] = useState("");

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-4",
        "h-36 w-full max-w-sm rounded-xl border border-border",
        "bg-card text-card-foreground p-5",
      )}
    >
      <AnimatedOTP value={value} onChange={setValue} />

      <div className="text-xs text-muted-foreground select-none">
        {value ? (
          <>
            Entered Code: <span className="font-mono font-semibold text-foreground tracking-wider">{value}</span>
          </>
        ) : (
          "Type to see the entered code"
        )}
      </div>
    </div>
  );
}
