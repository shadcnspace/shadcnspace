"use client";

import { memo, useId } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface ClockRingProps extends HTMLMotionProps<"div"> {
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    container: "size-6",
    strokeWidth: 1.0,
    innerRadius: 11.0,
    glowStdDev: 0.5,
  },
  md: {
    container: "size-12",
    strokeWidth: 1.6,
    innerRadius: 10.4,
    glowStdDev: 0.8,
  },
  lg: {
    container: "size-24",
    strokeWidth: 2.2,
    innerRadius: 9.8,
    glowStdDev: 1.2,
  },
} as const;

const ClockRing = memo(({
  size = "md",
  className,
  ...props
}: ClockRingProps) => {
  const config = sizeConfig[size as keyof typeof sizeConfig] || sizeConfig.md;
  const maskId = useId();
  const glowId = useId();

  return (
    <motion.div
      className={cn(
        "relative flex items-center justify-center text-foreground",
        config.container,
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full"
        >
          <defs>
            <mask id={maskId}>
              <circle cx="12" cy="12" r="12" fill="white" />
              <circle cx="12" cy="12" r={config.innerRadius} fill="black" />
            </mask>
            <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation={config.glowStdDev} result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <foreignObject x="0" y="0" width="24" height="24" mask={`url(#${maskId})`}>
            <div
              className="w-full h-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 60deg, currentColor 360deg)",
              }}
            />
          </foreignObject>

          <circle
            cx="12"
            cy="12"
            r={config.strokeWidth * 0.8}
            fill="currentColor"
          />

          <line
            x1="12"
            y1="12"
            x2="12"
            y2="0.6"
            stroke="currentColor"
            strokeWidth={config.strokeWidth * 1.5}
            strokeLinecap="round"
            filter={`url(#${glowId})`}
            className="opacity-40"
          />

          <line
            x1="12"
            y1="12"
            x2="12"
            y2="0.6"
            stroke="currentColor"
            strokeWidth={config.strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
});

ClockRing.displayName = "ClockRing";

export default ClockRing;
