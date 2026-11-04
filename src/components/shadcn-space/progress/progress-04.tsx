"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const messages = [
  "one moment",
  "initializing",
  "loading assets",
  "optimizing",
  "almost ready",
];

interface ShimmerProgressProps {
  speed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function ShimmerProgress({
  speed = "medium",
  className,
}: ShimmerProgressProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Speed Configuration Mapping
  const config = useMemo(
    () =>
      ({
        slow: { divisor: 50, minDelay: 200, maxJitter: 300 },
        medium: { divisor: 25, minDelay: 100, maxJitter: 150 },
        fast: { divisor: 10, minDelay: 30, maxJitter: 70 },
      })[speed],
    [speed],
  );

  useEffect(() => {
    if (isCompleted) return;

    let timer: NodeJS.Timeout;

    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsCompleted(true);
          return 100;
        }

        const remaining = 100 - prev;
        // Jump size based on speed divisor
        const increment = Math.random() * (remaining / config.divisor) + 0.2;
        return Math.min(prev + increment, 100);
      });

      // Frequency based on speed delays
      const delay = Math.random() * config.maxJitter + config.minDelay;
      timer = setTimeout(updateProgress, delay);
    };

    timer = setTimeout(updateProgress, 500);

    return () => clearTimeout(timer);
  }, [isCompleted, config]);

  // Message rotation effect - stops when completed
  useEffect(() => {
    if (isCompleted) return;

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1800);

    return () => clearInterval(messageTimer);
  }, [isCompleted]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full max-w-sm mx-auto space-y-6 rounded-xl border bg-background p-5",
        className,
      )}
    >
      {/* Centered Animated Text */}
      <div className="relative h-8 flex items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={isCompleted ? "completed" : messageIndex}
            initial={{ opacity: 0, scale: 1.4, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 5 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 18 
            }}
            className={cn(
              "text-2xl font-medium tracking-tight",
              isCompleted
                ? "text-blue-500 font-semibold"
                : "text-muted-foreground/80",
            )}
          >
            {isCompleted ? "complete" : messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Sleek Progress Bar */}
      <div className="w-full relative px-2">
        <Progress
          value={progress}
          className={cn(
            "h-3 w-full border-none bg-muted/30 overflow-hidden rounded-full",
            // Targeting internal shadcn-ui components
            "**:data-[slot='progress-track']:h-full! **:data-[slot='progress-track']:bg-transparent!",
            "**:data-[slot='progress-indicator']:h-full! **:data-[slot='progress-indicator']:rounded-full!",
            "**:data-[slot='progress-indicator']:bg-blue-500! **:data-[slot='progress-indicator']:transition-all! **:data-[slot='progress-indicator']:duration-300!",
            "**:data-[slot='progress-indicator']:relative! **:data-[slot='progress-indicator']:overflow-hidden!",
            // Shimmer effect - only runs if not completed
            !isCompleted && [
              "**:data-[slot='progress-indicator']:after:absolute! **:data-[slot='progress-indicator']:after:inset-0!",
              "**:data-[slot='progress-indicator']:after:bg-linear-to-r! **:data-[slot='progress-indicator']:after:from-transparent! **:data-[slot='progress-indicator']:after:via-white/40! **:data-[slot='progress-indicator']:after:to-transparent!",
              "**:data-[slot='progress-indicator']:after:animate-[shimmer_2s_infinite]!",
            ],
          )}
        />

        {/* Glow tracks progress but fades on completion for a clean look */}
        <div
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 bg-blue-500 blur-md transition-all duration-700",
            isCompleted ? "opacity-0" : "opacity-50",
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
