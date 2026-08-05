"use client";

import { Button } from "@/components/ui/button";
import { ShieldXIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "motion/react";

const MotionButton = motion.create(Button);
const MotionShieldXIcon = motion.create(ShieldXIcon);
const MotionShieldCheckIcon = motion.create(ShieldCheckIcon);

const rejectIconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, -10, 10, -10, 10, 0],
    scale: 1.1,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const approveIconVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.15,
    y: [0, -4, 2, -1, 0],
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PermissionsButtonDemo = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <MotionButton
        variant="destructive"
        className="cursor-pointer"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          hover: { scale: 1.02 },
          tap: { scale: 0.98 },
        }}
      >
        Reject
        <MotionShieldXIcon variants={rejectIconVariants} />
      </MotionButton>
      <MotionButton
        className="cursor-pointer bg-teal-400/10 text-teal-400 hover:bg-teal-400/20 focus-visible:border-teal-400/40"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={{
          hover: { scale: 1.02 },
          tap: { scale: 0.98 },
        }}
      >
        Approve
        <MotionShieldCheckIcon variants={approveIconVariants} />
      </MotionButton>
    </div>
  );
};

export default PermissionsButtonDemo;
