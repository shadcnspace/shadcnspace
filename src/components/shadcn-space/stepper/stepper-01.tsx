"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, User, FileText, CheckCircle2, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Step {
  title: string;
  description: string;
  content: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    title: "Account",
    description: "Create your account",
    content: "Account content: Enter your email and choose a secure password.",
    icon: User,
  },
  {
    title: "Profile",
    description: "Set up your profile",
    content: "Profile content: Add your profile picture, bio, and social links.",
    icon: FileText,
  },
  {
    title: "Complete",
    description: "Review and finish",
    content: "Review content: Confirm your details and finalize registration.",
    icon: CheckCircle2,
  },
];

export default function StepperDemo() {
  const [activeStep, setActiveStep] = useState(1);
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 border border-border rounded-xl bg-background shadow-xs space-y-10">
      {/* Stepper Header */}
      <div className="relative flex items-center justify-between w-full">
        {/* Background Connector Line */}
        <div
          className="absolute h-0.5 bg-border"
          style={{ left: "16.67%", right: "16.67%", top: "18px" }}
        />

        {/* Animated Active/Completed Progress Line */}
        <motion.div
          className="absolute h-0.5 bg-primary origin-left"
          style={{ left: "16.67%", right: "16.67%", top: "18px" }}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: activeStep / (steps.length - 1),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isActive = idx === activeStep;
          return (
            <div
              key={step.title}
              className="flex flex-col items-center flex-1 relative group cursor-pointer"
              onClick={() => setActiveStep(idx)}
            >
              {/* Step Icon Box */}
              <motion.div
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors duration-300 shadow-sm relative z-10",
                  isCompleted || isActive
                    ? "bg-primary text-primary-foreground rounded-full"
                    : "bg-muted text-muted-foreground"
                )}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </motion.div>

              {/* Step Labels */}
              <div className="mt-3 text-center space-y-1 px-2 select-none">
                <p
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    isActive || isCompleted
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </p>
                <p
                  className={cn(
                    "text-xs transition-colors duration-300 hidden sm:block",
                    isActive || isCompleted
                      ? "text-muted-foreground"
                      : "text-muted-foreground/50"
                  )}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <hr className="border-border/50" />

      {/* Stepper Content Area with animations */}
      <div className="min-h-32 flex flex-col justify-center items-center py-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {steps[activeStep].title} Content
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              {steps[activeStep].content}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper Footer Controls */}
      <div className="flex justify-between items-center pt-2">
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={cn("cursor-pointer", "disabled:opacity-50 disabled:pointer-events-none")}
        >
          Back
        </Button>

        <div className="flex items-center gap-2">
          {activeStep === steps.length - 1 ? (
            <Button
              onClick={handleReset}
              variant={"outline"}
              className="cursor-pointer"
            >
              Reset
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className=" hover:bg-primary/90 cursor-pointer"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}