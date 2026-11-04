"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { MessageSquare, UserPlus, CreditCard, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type StackCardItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
};

type StackRippleProps = {
  stackCardItems?: StackCardItem[];
};

// Helper function to create standard icons wrapped in styled spans to avoid repetitive JSX definitions
const createIcon = (
  IconComponent: React.ComponentType<{ className?: string }>,
  colorClass: string,
  bgClass: string
) => (
  <span className={cn("flex h-10 w-10 items-center justify-center rounded-lg", bgClass)}>
    <IconComponent className={cn("size-5", colorClass)} />
  </span>
);

const stackItems: StackCardItem[] = [
  {
    id: "item1",
    icon: createIcon(MessageSquare, "text-teal-400", "bg-teal-400/10"),
    title: "New Message",
    description: "Alex: Hey, let's catch up today!",
    time: "5m ago",
  },
  {
    id: "item2",
    icon: createIcon(UserPlus, "text-orange-400", "bg-orange-400/10"),
    title: "User Signed Up",
    description: "sarah.jones@example.com",
    time: "1h ago",
  },
  {
    id: "item3",
    icon: createIcon(CreditCard, "text-blue-500", "bg-blue-500/10"),
    title: "Payment Received",
    description: "$120.00 from Invoice #1024",
    time: "2h ago",
  },
];

// Shared spring transition configuration
const SPRING_TRANSITION = {
  type: "spring",
  damping: 15,
  stiffness: 200,
  mass: 1,
  bounce: 0.3,
  delay: 0.13,
};

// Helper function to create motion variants with less boilerplate
const createVariant = (
  openProps: Record<string, any>,
  closeProps: Record<string, any>,
  transition = SPRING_TRANSITION
): Variants => ({
  open: {
    ...openProps,
    transition,
  },
  close: {
    ...closeProps,
    transition,
  },
});

const popup1Variant = createVariant({ y: -55 }, { y: 0 });
const popup2Variant = createVariant({ y: 0, scale: 1 }, { y: 0, scale: 0.95 });
const popup3Variant = createVariant({ y: 55, scale: 1 }, { y: 0, scale: 0.9 });
const buttonVariant = createVariant({ y: 55 }, { y: 0 });
const iconVariant = createVariant(
  { rotate: 180 },
  { rotate: 0 },
  {
    ...SPRING_TRANSITION,
    damping: 12,
    stiffness: 150,
  }
);

// Map array indices to corresponding layout and animation configurations
const CARD_CONFIGS = [
  { variant: popup3Variant, top: 100 },
  { variant: popup2Variant, top: 90 },
  { variant: popup1Variant, top: 80 },
];

export const StackRipple = ({ stackCardItems = stackItems }: StackRippleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xs h-72 overflow-hidden rounded-xl px-3.5 py-2.5">
      <div className="relative h-full w-full">
        {stackCardItems.slice(0, 3).map((item, idx) => {
          const config = CARD_CONFIGS[idx] || CARD_CONFIGS[CARD_CONFIGS.length - 1];

          return (
            <motion.div
              key={item.id}
              variants={config.variant}
              animate={isOpen ? "open" : "close"}
              initial="close"
              style={{ top: config.top }}
              className={cn(
                "absolute inset-x-0 mx-auto",
                "flex h-14 w-full max-w-xs items-center justify-between",
                "bg-background rounded-xl border border-border px-2"
              )}
            >
              <div className="flex items-center gap-2.5">
                {item.icon}
                <div className="flex flex-col justify-center gap-0.5">
                  <p className="text-foreground text-sm font-semibold">{item.title}</p>
                  <p className="text-muted-foreground text-xs">{item.description}</p>
                </div>
              </div>
              <div className="text-muted-foreground text-xs">{item.time}</div>
            </motion.div>
          );
        })}

        <motion.div
          variants={buttonVariant}
          animate={isOpen ? "open" : "close"}
          initial="close"
          style={{ top: 168 }}
          className="absolute inset-x-0 mx-auto z-10 w-full max-w-24"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
            className="w-full h-8 rounded-lg flex items-center justify-between gap-1 px-2.5"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? "hide" : "show"}
                className="text-xs font-medium text-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? "Hide" : "Show All"}
              </motion.span>
            </AnimatePresence>

            <motion.span
              variants={iconVariant}
              animate={isOpen ? "open" : "close"}
              initial="close"
              className="text-foreground/80 flex items-center"
            >
              <ChevronDown className="size-4" />
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default function StackRippleDemo() {
  return <StackRipple stackCardItems={stackItems} />;
}
