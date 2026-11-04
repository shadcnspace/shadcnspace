"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Triangle } from "lucide-react";

const ToggleDemo = () => {
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(42);

  const handleToggle = () => {
    setUpvoted((prev) => !prev);
    setCount((prev) => (upvoted ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleToggle}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        upvoted
          ? "border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-500"
          : "border-input bg-background/50 hover:bg-muted text-foreground"
      }`}
      type="button"
    >
      {/* Arrow Container */}
      <motion.div
        animate={
          upvoted
            ? {
                y: [-4, 2, -1, 0],
                scale: [1, 1.25, 0.95, 1],
              }
            : {
                y: [4, -2, 1, 0],
                scale: [1, 0.9, 1.05, 1],
              }
        }
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        <Triangle
          className={`size-4 fill-current transition-colors duration-300 ${
            upvoted ? "text-orange-500" : "text-muted-foreground group-hover:text-foreground"
          }`}
        />
      </motion.div>

      {/* Upvote Label */}
      <span className="font-medium tracking-wide">
        {upvoted ? "Upvoted" : "Upvote"}
      </span>

      {/* Vertical Divider */}
      <span className={`h-4 w-px transition-colors duration-300 ${
        upvoted ? "bg-orange-500/30" : "bg-border"
      }`} />

      {/* Counter with sliding animation */}
      <div className="relative overflow-hidden h-5 w-6 flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={count}
            initial={{ y: upvoted ? 16 : -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: upvoted ? -16 : 16, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="absolute font-mono tabular-nums text-sm font-bold"
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ToggleDemo;
