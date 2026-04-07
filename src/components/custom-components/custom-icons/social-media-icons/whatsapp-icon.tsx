"use client";

import { motion } from "motion/react";
import {
  IconProps,
  innerVariants,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";
// import { svgVariants, outlineVariants, innerVariants } from './icon-variants';

export default function WhatsAppIcon({
  size = 24,
  color = "currentColor",
  fill = "none",
  className,
}: IconProps) {
  return (
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
      style={{ cursor: "pointer" }}
    >
      {/* invisible path */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      {/* Outer shape */}
      <motion.path
        d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
        variants={outlineVariants(0)}
      />

      {/* Inner phone/check */}
      <motion.path
        d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
        variants={innerVariants(0.6)}
      />
    </motion.svg>
  );
}
