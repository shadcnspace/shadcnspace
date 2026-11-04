"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Flame } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StreakBadgeProps = {
  value: number;
  label?: string;
  className?: string;
};

function StreakBadge({ value, label, className }: StreakBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto gap-1.5 rounded-full border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm font-semibold text-orange-400",
        className,
      )}
    >
      <motion.span
        animate={{
          scale: [1, 1.12, 0.96, 1.06, 1],
          rotate: [0, -4, 3, -2, 0],
        }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center"
      >
        <Flame className="size-3.5 fill-orange-400 text-orange-400" />
      </motion.span>
      <NumberFlow
        value={value}
        transformTiming={{ duration: 700, easing: "ease-out" }}
        spinTiming={{ duration: 700, easing: "ease-out" }}
        opacityTiming={{ duration: 700, easing: "ease-out" }}
      />
      {label && (
        <span className="font-normal text-orange-400/70">{label}</span>
      )}
    </Badge>
  );
}

const StreakBadgeDemo = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStreak(12), 300);
    return () => clearTimeout(timer);
  }, []);

  return <StreakBadge value={streak} />;
};

export default StreakBadgeDemo;
