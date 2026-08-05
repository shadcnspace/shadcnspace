"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MotionButton = motion.create(Button);
const MotionCopyIcon = motion.create(CopyIcon);
const MotionCheckIcon = motion.create(CheckIcon);

const copyIconVariants = {
  initial: { rotate: 0, scale: 1, y: 0 },
  hover: {
    rotate: [0, -8, 8, -4, 0],
    scale: 1.1,
    y: -0.5,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const checkIconVariants = {
  initial: { scale: 0, rotate: -30 },
  animate: {
    scale: [0, 1.3, 0.95, 1],
    rotate: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const CopyButtonDemo = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("Thank you for using shadcnspace :)");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <MotionButton
      variant="outline"
      layout
      className="relative disabled:opacity-100 cursor-pointer min-w-22.5 overflow-hidden"
      onClick={handleCopy}
      disabled={copied}
      whileHover="hover"
      whileTap="tap"
      variants={{
        hover: { scale: 1.02 },
        tap: { scale: 0.98 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5 text-teal-400"
          >
            <MotionCheckIcon
              className="size-3.5 stroke-teal-400"
              variants={checkIconVariants}
              initial="initial"
              animate="animate"
            />
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="inline-flex items-center gap-1.5"
          >
            <MotionCopyIcon
              className="size-3.5"
              variants={copyIconVariants}
              initial="initial"
            />
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </MotionButton>
  );
};

export default CopyButtonDemo;
