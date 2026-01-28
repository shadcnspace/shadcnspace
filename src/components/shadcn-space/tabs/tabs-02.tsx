"use client";

import React, { useState } from "react";
import {
  AnimatePresence,
  Transition,
  Variant,
  motion,
  MotionProps,
} from "motion/react";
import { cn } from "@/lib/utils";

type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn("relative", className)}>
      <AnimatePresence
        initial={false}
        mode="popLayout"
        custom={motionProps.custom}
      >
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const ITEMS = [
  {
    title: "AI Table Builder",
    subtitle: "Transforming Data into Insights",
    content:
      "Quickly generate interactive tables powered by AI. Import data, auto-format columns, and enable features like sorting, filtering, and pagination without writing manual code. Perfect for dashboards, admin panels, and data-heavy applications.",
  },
  {
    title: "AI Form Builder",
    subtitle: "Streamlined Form Creation",
    content:
      "Design complex forms effortlessly with AI. From simple contact forms to multi-step onboarding flows, the builder handles validation, conditional logic, and responsive layouts — helping you collect accurate data faster.",
  },
  {
    title: "AI Chart Builder",
    subtitle: "Visualizing Data Intelligently",
    content:
      "Turn raw numbers into beautiful, interactive charts with AI assistance. Choose from line, bar, pie, or advanced visualizations, and let the builder suggest the best chart type for your dataset to highlight key insights instantly.",
  },
];

export default function TransitionTabMotion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="mb-4 flex space-x-2">
        {ITEMS.map(({ title }, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-primary text-background" : "text-foreground"
              )}
            >
              {title}
            </button>
          );
        })}
      </div>

      {/* Transition Content */}
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map(({ subtitle, content }, index) => (
            <div key={index} className="py-2">
              <p className="mb-2 text-base font-medium text-foreground">
                {subtitle}
              </p>
              <p className="text-sm text-muted-foreground">{content}</p>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
