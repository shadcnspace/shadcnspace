"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const COLORS = [
  "bg-red-500",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-rose-500",
  "bg-purple-500",
  "bg-blue-400",
  "bg-amber-400",
  "bg-fuchsia-500",
];

const COUNT = 12;
const CONFETTI = Array.from({ length: COUNT }, (_, i) => {
  const angle = -160 + (i / (COUNT - 1)) * 140;
  const rad = (angle * Math.PI) / 180;
  const dist = 55 + (i % 3) * 18;
  return {
    id: i,
    x: Math.cos(rad) * dist,
    y: Math.sin(rad) * dist,
    rotate: (i % 2 === 0 ? 1 : -1) * (100 + i * 18),
    color: COLORS[i % COLORS.length],
    w: i % 2 === 0 ? 8 : 6,
    h: i % 3 === 0 ? 6 : 4,
    dur: 0.68 + (i % 4) * 0.07,
  };
});

export default function AnimatedLikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(128);
  const [clickKey, setClickKey] = useState(0);

  const handleClick = () => {
    const next = !liked;
    setLiked(next);
    setCount((c) => (next ? c + 1 : c - 1));
    setClickKey((k) => k + 1);
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Confetti — outside the button so overflow-hidden doesn't clip it */}
      <AnimatePresence>
        {liked &&
          CONFETTI.map((p) => (
            <motion.span
              key={`${p.id}-${clickKey}`}
              className={cn("absolute rounded-sm pointer-events-none", p.color)}
              style={{
                width: p.w,
                height: p.h,
                left: "50%",
                top: "50%",
                marginLeft: -(p.w / 2),
                marginTop: -(p.h / 2),
              }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: p.x,
                y: [0, p.y * 0.6, p.y],
                rotate: p.rotate,
                opacity: [1, 1, 0],
                scale: 0.7,
              }}
              exit={{}}
              transition={{ duration: p.dur, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative overflow-hidden inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-background text-sm font-medium select-none cursor-pointer"
      >
        {/* Ripple */}
        <AnimatePresence initial={false}>
          <motion.span
            key={clickKey}
            className="absolute w-5 h-5 rounded-full bg-red-500/25 pointer-events-none"
            style={{ left: 33, top: "50%", marginLeft: -10, marginTop: -10 }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 15, opacity: 0 }}
            exit={{}}
            transition={{
              scale: { duration: 1.1, ease: "easeOut" },
              opacity: { duration: 1.0, ease: "easeIn", delay: 0.1 },
            }}
          />
        </AnimatePresence>

        {/* Heart */}
        <motion.div
          key={`heart-${clickKey}`}
          animate={
            liked ? { scale: [1, 1.5, 0.84, 1.1, 1] } : { scale: [1, 0.84, 1] }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Heart
            className={cn(
              "size-4 transition-colors duration-300",
              liked ? "text-red-500" : "text-muted-foreground",
            )}
            fill={liked ? "currentColor" : "none"}
            strokeWidth={liked ? 0 : 1.75}
          />
        </motion.div>

        {/* Sliding count */}
        <div className="overflow-hidden h-5 flex items-center tabular-nums w-7">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={count}
              initial={{ y: liked ? 14 : -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: liked ? -14 : 14, opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.2, 0, 0.2, 1] }}
              className="block text-muted-foreground"
            >
              {count.toLocaleString()}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}
