"use client";

import { motion } from "motion/react";
import {
  filledVariants,
  IconProps,
  svgVariants,
} from "../custom-icon-variants";

export default function InstaFillIcon({
  size = 24,
  color = "currentColor",
  fill = "currentColor",
  className,
}: IconProps) {
  return (
    <>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        viewBox="0 0 24 24"
        fill={fill}
        color={color}
        variants={svgVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        style={{ cursor: "pointer", opacity: 1 }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <motion.path
          variants={filledVariants(0)}
          d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1"
        />
      </motion.svg>
    </>
  );
}
