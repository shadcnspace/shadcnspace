"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ToggleDemo = () => {
  const [saved, setSaved] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <Toggle
      variant="outline"
      size="lg"
      pressed={saved}
      onPressedChange={setSaved}
      aria-label={saved ? "Remove from saved" : "Save for later"}
      className="gap-2 px-3 aria-pressed:border-foreground/20"
    >
      <motion.span
        key={String(saved)}
        initial={reduceMotion || !saved ? false : { scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className="flex"
      >
        <Bookmark
          className={cn(
            "transition-colors",
            saved ? "fill-amber-300 text-amber-300" : "text-muted-foreground",
          )}
        />
      </motion.span>
      <span className="min-w-10 text-left">{saved ? "Saved" : "Save"}</span>
    </Toggle>
  );
};

export default ToggleDemo;
