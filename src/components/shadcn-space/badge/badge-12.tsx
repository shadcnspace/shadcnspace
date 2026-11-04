"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionButton = motion.create(Button);

type FilterChipProps = {
  label: string;
  onRemove: () => void;
  className?: string;
};

function FilterChip({ label, onRemove, className }: FilterChipProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.15 } }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Badge
        variant="outline"
        className={cn(
          "h-auto gap-1.5 rounded-full py-1 pr-1.5 pl-3 text-sm font-normal",
          className,
        )}
      >
        {label}
        <MotionButton
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={onRemove}
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.85 }}
          className="text-muted-foreground hover:text-foreground dark:hover:bg-muted size-4 rounded-full transition-colors active:translate-y-0"
          aria-label={`Remove ${label} filter`}
        >
          <X className="size-3" />
        </MotionButton>
      </Badge>
    </motion.div>
  );
}

const INITIAL_FILTERS = ["In Stock", "Free Shipping", "4★ & up"];

const RemovableFilterChipDemo = () => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((f) => f !== filter));
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <AnimatePresence initial={false}>
        {filters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            onRemove={() => removeFilter(filter)}
          />
        ))}
      </AnimatePresence>
      {filters.length === 0 && (
        <span className="text-muted-foreground text-sm">
          No filters applied
        </span>
      )}
    </div>
  );
};

export default RemovableFilterChipDemo;
