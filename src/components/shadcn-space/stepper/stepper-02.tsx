"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    value: "personal",
    title: "User Details",
    description: "User data",
    content: "User Details Step: Please provide your first name, last name, and contact details.",
  },
  {
    id: 2,
    value: "workspace",
    title: "Workspace",
    description: "Workspace setup",
    content: "Workspace Step: Configure your organization settings and team workspace directories.",
  },
  {
    id: 3,
    value: "network",
    title: "Network",
    description: "Network setup",
    content: "Network Step: Setup access rules, database credentials, and network configuration.",
  },
];

const Stepper02 = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeTab = steps[activeStepIdx].value;

  const handleNext = () => {
    if (activeStepIdx < steps.length - 1) {
      setActiveStepIdx((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStepIdx > 0) {
      setActiveStepIdx((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setActiveStepIdx(0);
  };

  return (
    <section className="py-6 sm:py-10 w-full">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <Card className="pt-0 overflow-hidden bg-background border border-border shadow-xs">
          <CardContent className="px-0 pb-6">
            {/* Stepper Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-8 py-6 border-b border-border bg-muted/5 gap-4">
              {steps.map((step, index) => {
                const isActive = activeStepIdx === index;
                const isPast = activeStepIdx > index;

                return (
                  <div
                    key={step.value}
                    className="flex items-center gap-4 flex-1 last:flex-none"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStepIdx(index)}
                      className="flex items-center gap-4 group cursor-pointer text-left focus:outline-hidden"
                    >
                      <div
                        className={cn(
                          "size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                          isPast
                            ? "bg-teal-400 text-white"
                            : isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                        )}
                      >
                        {step.id}
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "text-sm font-bold transition-colors",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {step.title}
                        </span>
                        <span className="text-xs text-muted-foreground/60 font-medium">
                          {step.description}
                        </span>
                      </div>
                    </button>
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block mx-auto">
                        <ChevronRight className="size-4 text-muted-foreground/40" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stepper Content Area */}
            <div className="min-h-32 flex flex-col justify-center items-center py-10 px-8 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {steps[activeStepIdx].title} Configuration
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    {steps[activeStepIdx].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-3 items-center px-8 pt-4 border-t border-border">
              <Button
                type="button"
                variant={"outline"}
                className="rounded-lg cursor-pointer h-9 shadow-xs"
                onClick={handleBack}
                disabled={activeStepIdx === 0}
              >
                Back
              </Button>
              {activeStepIdx === steps.length - 1 ? (
                <Button
                  type="button"
                  variant={"outline"}
                  className="rounded-lg cursor-pointer h-9 ml-auto"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              ) : (
                <Button
                  type="button"
                  className="rounded-lg cursor-pointer h-9 ml-auto hover:bg-primary/80"
                  onClick={handleNext}
                >
                  Continue
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Stepper02;
