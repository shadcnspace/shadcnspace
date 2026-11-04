"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Step {
  title: string;
  content: string;
}

const steps: Step[] = [
  { title: "Account", content: "Account details are here" },
  { title: "Profile", content: "Profile settings are here" },
  { title: "Upload", content: "Upload your files here" },
  { title: "Done", content: "Everything is ready" },
];

const segmentWidth = 100 / steps.length;

export default function Stepper04() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="rounded-xl border border-border bg-background p-6 md:p-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground">Setup</h3>
            <p className="text-xs text-muted-foreground">
              Step {activeStep + 1} of {steps.length}
            </p>
          </div>

          <div className="relative h-2 w-full rounded-full bg-muted">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-teal-400/20"
              initial={false}
              animate={{ width: `${activeStep * segmentWidth}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
            />
            <motion.div
              className="absolute inset-y-0 rounded-full bg-primary"
              initial={false}
              animate={{ x: `${activeStep * 100}%`, width: `${segmentWidth}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
            />
          </div>

          <div className="flex gap-1">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-current={isActive ? "step" : undefined}
                  className={cn(
                    "flex flex-1 cursor-pointer items-center justify-center gap-1 text-center text-xs font-medium transition-colors duration-300 focus-visible:outline-none",
                    isActive
                      ? "text-foreground"
                      : isCompleted
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isCompleted && (
                    <Check className="size-3" strokeWidth={2.5} />
                  )}
                  {step.title}
                </button>
              );
            })}
          </div>

          <div className="flex min-h-20 items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1"
              >
                <h4 className="text-sm font-medium text-foreground">
                  {steps[activeStep].title} content
                </h4>
                <p className="text-sm text-muted-foreground">
                  {steps[activeStep].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={activeStep === 0}
              className="cursor-pointer"
            >
              <ChevronLeft />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className="cursor-pointer"
            >
              Continue
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
