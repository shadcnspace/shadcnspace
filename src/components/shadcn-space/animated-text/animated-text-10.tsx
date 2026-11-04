"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextScannerProps {
  text?: string;
  className?: string;
  inkColor?: string;
  accentColor?: string;
  duration?: number;
}

export function TextScanner({
  text = "SCANNER",
  className,
  inkColor,
  accentColor,
  duration = 2.6,
}: TextScannerProps) {
  const reducedMotion = useReducedMotion();

  const ink = inkColor ?? "var(--foreground)";
  const accent = accentColor ?? "var(--primary)";

  const baseClass = cn(
    "relative inline-block font-semibold tracking-wide whitespace-pre",
    className,
  );

  if (reducedMotion) {
    return (
      <span className={baseClass} style={{ color: ink }}>
        {text}
      </span>
    );
  }

  return (
    <motion.span
      className={baseClass}
      style={{
        backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${ink} 25%, transparent) 0 40%, ${ink} 50%, color-mix(in srgb, ${ink} 25%, transparent) 60% 100%)`,
        backgroundSize: "240% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
      animate={{ backgroundPosition: ["100% 0", "0% 0"] }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -top-1.5 -bottom-1.5 w-0.5"
        style={{
          background: accent,
          boxShadow: `0 0 14px ${accent}`,
        }}
        animate={{ left: ["0%", "100%"], x: ["0%", "-100%"] }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.span>
  );
}

const TextScannerDemo = () => {
  return (
    <TextScanner
      text="SHADCNSPACE"
      className="text-2xl sm:text-3xl"
      accentColor="var(--color-blue-500)"
    />
  );
};

export default TextScannerDemo;
