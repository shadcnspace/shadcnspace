import { Variants } from "motion/react";

export type IconProps = {
  size?: number;
  color?: string;
  fill?: string;
  className?: string;
};

export const svgVariants: Variants = {
  initial: {},
  animate: {},
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const outlineVariants = (delay = 0): Variants => ({
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay,
      duration: 1,
      ease: "easeInOut",
    },
  },
  hover: {
    pathLength: [0, 1], 
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
});

export const innerVariants = (delay = 0.8): Variants => ({
  initial: {
    pathLength: 0,
    opacity: 0,
    y: 5,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

export const filledVariants = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: [1, 1.1, 1], 
    transition: {
      duration: 0.4,
    },
  },
});
