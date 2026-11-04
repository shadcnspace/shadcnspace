"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface TextLightLeakProps {
  text?: string;
  className?: string;
  inkColor?: string;
  accentColor?: string;
  secondaryColor?: string;
}

export function TextLightLeak({
  text = "SPACE",
  className,
  inkColor,
  accentColor = "var(--color-fuchsia-500)",
  secondaryColor = "var(--color-cyan-400)",
}: TextLightLeakProps) {
  const reducedMotion = useReducedMotion();

  const ink = inkColor ?? "var(--foreground)";

  const baseClass = cn(
    "relative inline-block font-medium tracking-widest",
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
    <span className={baseClass} style={{ color: ink }}>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply dark:mix-blend-screen"
      >
        <motion.span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(118deg, transparent 12%, var(--color-orange-500) 34%, var(--color-amber-300) 44%, var(--color-white) 48%, transparent 62%)",
            backgroundSize: "240% 100%",
            filter: "blur(0.35px)",
          }}
          animate={{
            backgroundPosition: ["130% 0", "-30% 0", "130% 0"],
            opacity: [0.12, 1, 0.12],
          }}
          transition={{
            duration: 4.4,
            times: [0, 0.42, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.span
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(248deg, transparent 18%, ${secondaryColor} 38%, ${accentColor} 48%, transparent 68%)`,
            backgroundSize: "240% 100%",
          }}
          animate={{
            backgroundPosition: ["-30% 0", "130% 0", "-30% 0"],
            opacity: [0.1, 0.95, 0.1],
          }}
          transition={{
            duration: 5.6,
            times: [0, 0.55, 1],
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </span>
      <span className="relative z-10">{text}</span>
    </span>
  );
}

const TextLightLeakDemo = () => {
  return <TextLightLeak text="SPACE" className="text-3xl sm:text-4xl" />;
};

export default TextLightLeakDemo;
