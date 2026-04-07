"use client";

import { motion } from "motion/react";
import {
  IconProps,
  svgVariants,
  filledVariants,
} from "../custom-icon-variants";

export default function LinkedInFilledIcon({
  size = 24,
  color = "currentColor",
  fill = "currentColor",
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
      variants={svgVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      style={{ cursor: "pointer" }}
    >
      {/* base */}
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      {/* full shape animated */}
      <motion.path
        d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1"
        variants={filledVariants(0)}
      />
    </motion.svg>
  );
}
