"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ToggleDemo = () => {
  const [liked, setLiked] = useState(false);

  const sparks = [
    { angle: 0, distance: 28, delay: 0 },
    { angle: 60, distance: 24, delay: 0.04 },
    { angle: 120, distance: 30, delay: 0.02 },
    { angle: 180, distance: 26, delay: 0.06 },
    { angle: 240, distance: 28, delay: 0.01 },
    { angle: 300, distance: 25, delay: 0.05 },
  ];

  return (
    <button
      onClick={() => setLiked((prev) => !prev)}
      className="relative flex items-center justify-center size-10 rounded-lg hover:bg-muted/50 text-foreground cursor-pointer focus:outline-none transition-colors"
      aria-label="Like this post"
      type="button"
    >
      <div className="relative flex items-center justify-center">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-6 transition-colors duration-200 ${
            liked ? "text-red-500" : "text-muted-foreground"
          }`}
          animate={liked ? {
            scale: [1, 0.7, 1.35, 1.05, 1],
          } : {
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </motion.svg>

        <AnimatePresence>
          {liked && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {sparks.map((spark, i) => {
                const rad = (spark.angle * Math.PI) / 180;
                const targetX = Math.cos(rad) * spark.distance;
                const targetY = Math.sin(rad) * spark.distance;

                return (
                  <motion.div
                    key={i}
                    className="absolute size-1.5 rounded-full bg-red-500"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                    animate={{
                      x: targetX,
                      y: targetY,
                      scale: [0, 1.2, 0.8, 0],
                      opacity: [1, 1, 0.6, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: spark.delay,
                      ease: "easeOut",
                    }}
                  />
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ToggleDemo;