"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function GmailIcon({
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
        className={className}
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
          d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1"
        />
        <motion.path variants={outlineVariants(0.2)} d="M16 4l-4 4l-4 -4" />
        <motion.path variants={outlineVariants(0.3)} d="M4 6.5l8 7.5l8 -7.5" />
      </motion.svg>
    </>
  );
}
