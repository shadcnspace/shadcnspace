"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function YoutubeIcon({
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
          d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8"
        />
        <motion.path variants={outlineVariants(0.3)} d="M10 9l5 3l-5 3l0 -6" />
      </motion.svg>
    </>
  );
}
