"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function SunHighIcon({
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
        fill={fill}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        style={{ cursor: "pointer" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          variants={outlineVariants(0)}
          d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M6.343 17.657l-1.414 1.414"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M6.343 6.343l-1.414 -1.414"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M17.657 6.343l1.414 -1.414"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M17.657 17.657l1.414 1.414"
        />
        <path d="M4 12h-2" />
        <path d="M12 4v-2" />
        <path d="M20 12h2" />
        <path d="M12 20v2" />
      </motion.svg>
    </>
  );
}
