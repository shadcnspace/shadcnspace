"use client";

import { useState, useSyncExternalStore } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (callback: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getReducedMotion = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;

const getServerReducedMotion = () => false;

const LiquidMetalButton = () => {
  const [isActive, setIsActive] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion
  );

  // Metal flows faster on hover / focus, and stays still for reduced motion
  const speed = reduceMotion ? 0 : isActive ? 3 : 1.5;

  return (
    <Button
      variant="ghost"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      className="group relative h-auto overflow-hidden rounded-full border-0 p-1 shadow-lg transition-transform hover:bg-transparent active:scale-95 dark:hover:bg-transparent cursor-pointer"
    >
      {/* Liquid metal border layer, oversized so the faded shader edges stay clipped */}
      <span className="absolute -inset-6 z-0" aria-hidden="true">
        <LiquidMetal
          colorBack="#8a8a8f"
          colorTint="#ffffff"
          speed={speed}
          repetition={4}
          distortion={0.15}
          softness={0.1}
          shiftRed={0.3}
          shiftBlue={-0.3}
          angle={45}
          shape="none"
          fit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </span>

      {/* Inner button body */}
      <span className="relative z-10 flex items-center gap-3 rounded-full bg-background py-1.5 ps-1.5 pe-6 text-sm font-medium text-foreground transition-colors duration-300 group-hover:bg-muted">
        <span className="flex size-8 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-background group-hover:text-foreground">
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:-rotate-45" />
        </span>
        Get Started
      </span>
    </Button>
  );
};

export default LiquidMetalButton;
