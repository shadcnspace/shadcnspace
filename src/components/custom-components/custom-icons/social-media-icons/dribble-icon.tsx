"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function DribbleIcon({
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
        color={color}
        className={className}
        stroke="currentColor"
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
          d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
        />
        <motion.path
          variants={outlineVariants(0.1)}
          d="M9 3.6c5 6 7 10.5 7.5 16.2"
        />
        <motion.path
          variants={outlineVariants(0.2)}
          d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"
        />
        <motion.path
          variants={outlineVariants(0.3)}
          d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"
        />
      </motion.svg>
    </>
  );
}
