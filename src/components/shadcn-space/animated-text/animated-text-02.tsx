"use client";

import { motion } from "motion/react";

const AnimatedTextGradientMotion = () => {
  return (
    <>
      <motion.p
        className="text-xl sm:text-2xl font-bold text-start bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent"
        animate={{
          backgroundImage: [
            "linear-gradient(to right, hsl(172 66% 50%), hsl(27 96% 61%))",
            "linear-gradient(to right, hsl(27 96% 61%), hsl(172 66% 50%))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        Animated Gradient Text
      </motion.p>
    </>
  );
};

export default AnimatedTextGradientMotion;
