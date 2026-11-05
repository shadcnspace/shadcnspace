"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

// A shimmer sweeps across the block instead of the default pulse.
function ShimmerBlock({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden rounded-md bg-muted", className)}>
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-transparent via-foreground/10 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay }}
        />
      )}
    </div>
  );
}

const paragraph = ["w-full", "w-full", "w-11/12", "w-full", "w-3/5"];

const SkeletonDemo = () => {
  return (
    <div role="status" aria-label="Loading article" className="flex w-full max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-3">
        <ShimmerBlock className="h-3 w-24" />
        <ShimmerBlock className="h-7 w-full" delay={0.05} />
        <ShimmerBlock className="h-7 w-3/4" delay={0.1} />
      </div>
      <div className="flex items-center gap-3">
        <ShimmerBlock className="size-10 rounded-full" delay={0.15} />
        <div className="flex flex-1 flex-col gap-2">
          <ShimmerBlock className="h-3.5 w-32" delay={0.2} />
          <ShimmerBlock className="h-3 w-20" delay={0.2} />
        </div>
      </div>
      <ShimmerBlock className="aspect-video w-full rounded-lg" delay={0.25} />
      <div className="flex flex-col gap-2.5">
        {paragraph.map((width, index) => (
          <ShimmerBlock key={index} className={cn("h-3.5", width)} delay={0.3 + index * 0.05} />
        ))}
      </div>
      <span className="sr-only">Loading article...</span>
    </div>
  );
};

export default SkeletonDemo;
