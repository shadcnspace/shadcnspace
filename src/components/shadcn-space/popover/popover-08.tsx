"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  KeyboardIcon,
  LayoutDashboardIcon,
  SendIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const tourSteps = [
  {
    icon: KeyboardIcon,
    title: "Command Palette",
    description:
      "Press ⌘K from anywhere to jump to a page or run an action instantly.",
  },
  {
    icon: LayoutDashboardIcon,
    title: "Smart Dashboards",
    description:
      "Drag, drop, and resize widgets to build a live view of what matters.",
  },
  {
    icon: SendIcon,
    title: "Automated Reports",
    description:
      "Schedule reports to be generated and emailed on a recurring basis.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Role-Based Access",
    description:
      "Fine-tune who can view, edit, or manage each project on your team.",
  },
];

const PopoverFeatureTourDemo = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const isLast = step === tourSteps.length - 1;
  const current = tourSteps[step];
  const Icon = current.icon;

  const finish = () => setOpen(false);
  const advance = () => (isLast ? finish() : setStep((prev) => prev + 1));

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setStep(0);
      }}
    >
      <PopoverTrigger
        render={
          <Button variant="outline" size="icon" className="cursor-pointer" />
        }
      >
        <SparklesIcon />
        <span className="sr-only">Start feature tour</span>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        className="w-80 gap-6 p-4 overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex items-start gap-3"
          >
            <motion.span
              initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: 0.05,
              }}
              className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <Icon className="size-4" />
            </motion.span>
            <div className="min-w-0 flex flex-col gap-1 pt-0.5">
              <p className="text-sm font-medium">{current.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {current.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {tourSteps.map((tourStep, index) => (
              <motion.span
                key={tourStep.title}
                className="h-1.5 rounded-full bg-muted"
                animate={{
                  width: index === step ? 16 : 6,
                  backgroundColor:
                    index === step ? "var(--primary)" : "var(--muted)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            {!isLast && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={finish}
                className="h-7 cursor-pointer px-2 text-xs text-muted-foreground hover:text-foreground"
              >
                Skip
              </Button>
            )}
            <Button
              size="sm"
              className="h-7 cursor-pointer px-3 text-xs"
              onClick={advance}
            >
              {isLast ? "Get started" : "Next"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverFeatureTourDemo;
