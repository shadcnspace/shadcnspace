"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CountBadgeProps = {
  count: number;
  max?: number;
  className?: string;
};

function CountBadge({ count, max = 99, className }: CountBadgeProps) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.span
          key={count}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [1.35, 1], opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="absolute -top-1.5 -right-1.5"
        >
          <Badge
            className={cn(
              "flex size-5.5 items-center justify-center rounded-full border-2 border-background bg-red-500 p-0.5 text-[10px] text-white",
              className,
            )}
          >
            {count > max ? `${max}+` : count}
          </Badge>
        </motion.span>
      )}
    </AnimatePresence>
  );
}

const CountPopBadgeDemo = () => {
  const [count, setCount] = useState(3);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative inline-flex">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCount((c) => c + 1)}
          className="cursor-pointer"
        >
          <ShoppingCart className="size-4" />
        </Button>
        <CountBadge count={count} />
      </div>
      <span className="text-muted-foreground text-sm">
        Click the cart to add items
      </span>
    </div>
  );
};

export default CountPopBadgeDemo;
