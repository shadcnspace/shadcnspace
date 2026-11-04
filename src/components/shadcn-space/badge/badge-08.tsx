'use client'

import { motion, type Variants } from "motion/react";
import { Loader } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const LETTER_VARIANTS: Variants = {
  hidden: { y: -14, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.038,
      duration: 0.35,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const MotionBadge = motion.create(Badge);

const PendingBadgeDemo = () => {
  const label = "Pending";

  return (
    <MotionBadge
      variant="outline"
      className={cn(
        "relative h-auto cursor-default overflow-visible rounded-full",
        "gap-2 px-3 py-2",
        "bg-background backdrop-blur-md",
        "text-foreground text-sm font-medium leading-none",
        "border-amber-300/25",
      )}
    >
      {/* Top glow */}
      <motion.span
        aria-hidden
        animate={{ opacity: 0.55 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute -top-2 left-[10%] right-[10%] h-4 blur bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(252,211,77,0.95)_0%,transparent_70%)]"
      />
      <motion.span
        aria-hidden
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute -top-1 left-[22%] right-[22%] h-2 blur-sm bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(252,211,77,0.85)_0%,transparent_70%)]"
      />
      <motion.span
        aria-hidden
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute top-0 left-[28%] right-[28%] h-px bg-[radial-gradient(ellipse_40%_50%_at_50%_50%,rgba(252,211,77,0.95)_0%,transparent_100%)]"
      />

      {/* Spinning loader icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        className="flex h-4 w-4 shrink-0 items-center justify-center text-amber-300"
      >
        <Loader size={16} strokeWidth={2.5} />
      </motion.div>

      {/* Animated label */}
      <span className="inline-flex overflow-hidden leading-none">
        {label.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={LETTER_VARIANTS}
            initial="hidden"
            animate="visible"
            className="inline-block whitespace-pre leading-normal"
          >
            {char}
          </motion.span>
        ))}
      </span>
    </MotionBadge>
  );
};

export default PendingBadgeDemo;
