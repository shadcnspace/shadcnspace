"use client";

import { motion } from "motion/react";
import {
  IconProps,
  outlineVariants,
  svgVariants,
} from "../custom-icon-variants";

export default function SunLowIcon({
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
        style={{ cursor:"pointer"}}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
        variants={outlineVariants(0)}
        d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M4 12h.01" />
        <path d="M12 4v.01" />
        <path d="M20 12h.01" />
        <path d="M12 20v.01" />
        <motion.path 
        variants={outlineVariants(0.1)}
        d="M6.31 6.31l-.01 -.01" />
        <motion.path
        variants={outlineVariants(0.1)}
        d="M17.71 6.31l-.01 -.01" />
        <motion.path 
        variants={outlineVariants(0.1)}
        d="M17.7 17.7l.01 .01" />
        <motion.path
        variants={outlineVariants(0.1)}
        d="M6.3 17.7l.01 .01" />
      </motion.svg>
    </>
  );
}
