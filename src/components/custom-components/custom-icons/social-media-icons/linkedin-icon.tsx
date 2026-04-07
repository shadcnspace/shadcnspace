"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function LinkedInIcon({
  size = 24,
  color = "currentColor",
  fill = "none",
  className,
}: IconProps) {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        fill={fill}
        color={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        style={{
          cursor: "pointer",
        }}
      >
        {/* invisible base */}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        {/* Sequential animated paths */}

        <motion.path d="M8 11v5" variants={outlineVariants(0)} />

        <motion.path d="M8 8v.01" variants={outlineVariants(0.1)} />

        <motion.path d="M12 16v-5" variants={outlineVariants(0.2)} />

        <motion.path
          d="M16 16v-3a2 2 0 1 0 -4 0"
          variants={outlineVariants(0.3)}
        />

        {/* Outer box last */}
        <motion.path
          d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10"
          variants={outlineVariants(0.4)}
        />
      </motion.svg>
    </>
  );
}
