"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepItem {
  id: string;
  title: string;
}

export interface SetupStepsProps {
  duration?: number;
  steps?: StepItem[];
  step1?: string;
  step2?: string;
  step3?: string;
  className?: string;
}

const defaultSteps: StepItem[] = [
  { id: "1", title: "Welcome Aboard" },
  { id: "2", title: "Verifying Details" },
  { id: "3", title: "Account Created" },
  { id: "4", title: "Configuring Workspace" },
  { id: "5", title: "Finalizing Setup" },
];

export const SetupSteps = ({
  duration = 3000,
  steps,
  step1 = "Welcome Aboard",
  step2 = "Verifying Details",
  step3 = "Account Created",
  className,
}: SetupStepsProps) => {
  const stepsList = useMemo(() => {
    if (steps && steps.length > 0) return steps;
    return [
      { id: "1", title: step1 },
      { id: "2", title: step2 },
      { id: "3", title: step3 },
      { id: "4", title: "Configuring Workspace" },
      { id: "5", title: "Finalizing Setup" },
    ];
  }, [steps, step1, step2, step3]);

  const [pointer, setPointer] = useState(1);

  const visible = [
    stepsList[(pointer - 1 + stepsList.length) % stepsList.length],
    stepsList[pointer],
    stepsList[(pointer + 1) % stepsList.length],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPointer((prev) => (prev + 1) % stepsList.length);
    }, duration);
    return () => clearInterval(timer);
  }, [duration, stepsList.length]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden h-85 w-full max-w-90 py-2",
        className,
      )}
    >
      <div className="relative w-full h-55 overflow-hidden">
        <AnimatePresence initial={false}>
          {visible.map((item, i) => {
            const isCompleted = i === 0;
            const isActive = i === 1;
            const status = isCompleted ? "completed" : isActive ? "active" : "pending";

            return (
              <motion.div
                key={item.id}
                initial={{ y: 220, opacity: 0, scale: 0.9 }}
                animate={{
                  y: i * 72 + 6,
                  scale: isActive ? 1 : 0.92,
                  opacity: isActive ? 1 : 0.45,
                }}
                exit={{ y: -80, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "absolute left-0 right-0 mx-auto w-full flex flex-col justify-center gap-2 rounded-xl border p-3.5 transition-colors duration-500",
                  isActive
                    ? "bg-card text-card-foreground border-border shadow-xs"
                    : "bg-card/50 text-card-foreground/40 border-border",
                )}
              >
                <div className="flex items-center justify-start gap-2.5">
                  <div className="relative size-5 shrink-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={status}
                        initial={{ scale: status === "completed" ? 0 : 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: status === "pending" ? 0.4 : 1 }}
                        exit={{ scale: status === "completed" ? 0 : 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          status === "completed" && "flex size-5 items-center justify-center rounded-full bg-teal-400 text-white",
                          status === "active" && "animate-spin text-teal-400",
                          status === "pending" && "text-muted-foreground",
                        )}
                      >
                        {status === "completed" ? (
                          <Check className="size-3" />
                        ) : (
                          <Loader2 className="size-4" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <span
                    className={cn(
                      "text-sm font-semibold tracking-tight transition-colors duration-500",
                      isActive ? "text-foreground" : "text-muted-foreground/60",
                    )}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="ml-7.5 h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full bg-teal-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{
                      width: status === "pending" ? "0%" : "100%",
                    }}
                    transition={{
                      width: isActive
                        ? { duration: duration / 1000, ease: "linear" }
                        : { duration: 0.5, ease: "easeInOut" },
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Top and Bottom Fades for smooth transition */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-linear-to-b from-background to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-background to-transparent z-10" />
    </div>
  );
};

export default function SetupStepsDemo() {
  return (
    <SetupSteps steps={defaultSteps} />
  );
}
