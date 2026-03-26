"use client";

import { useRef } from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";

const ButtonDemo = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the spotlight movement to give it a premium, fluid feel
  const springConfig = { damping: 25, stiffness: 200 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <ButtonPrimitive
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "relative overflow-hidden group px-8 py-4 h-auto rounded-full cursor-pointer border border-border/80 transition-all duration-300 hover:border-primary/50"
      )}
    >
      {/* Interactive Spotlight Glow */}
      <motion.span
        className="absolute w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Radial Scaling Reveal */}
      <motion.span
        className="absolute w-12 h-12 rounded-full bg-primary scale-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[18] pointer-events-none"
        style={{
          left: spotlightX,
          top: spotlightY,
          x: "-50%",
          y: "-50%",
        }}
      />

      <span className="relative z-10 transition-colors duration-500 pointer-events-none group-hover:text-primary-foreground font-semibold tracking-tight">
        Get Started
      </span>
    </ButtonPrimitive>
  );
};

export default ButtonDemo;
