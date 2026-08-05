"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownIcon,
  PlayIcon,
  GitCommitIcon,
  GitPullRequestIcon,
  HistoryIcon,
} from "lucide-react";
import { motion } from "motion/react";

const menuVariants = {
  hidden: { opacity: 0, scale: 0.97, y: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 24,
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 22,
    },
  },
};

const ActionExecuteButtonGroup = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState(false);

  return (
    <ButtonGroup className="**:data-[slot=button]:border-r-0">
      <Button
        className="group relative overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.span
          animate={isHovered ? { x: 2, scale: 1.05 } : { x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 450, damping: 16 }}
          className="flex items-center justify-center mr-1"
        >
          <PlayIcon aria-hidden="true" className="fill-current size-4" />
        </motion.span>
        <span>Execute</span>
      </Button>
      <ButtonGroupSeparator className="bg-primary/72" />
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={
            <Button
              size="icon"
              className="border-primary-foreground/20 rounded-l-none border-l cursor-pointer"
              onMouseEnter={() => setIsTriggerHovered(true)}
              onMouseLeave={() => setIsTriggerHovered(false)}
            />
          }
        >
          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
            className="flex items-center justify-center"
          >
            <ChevronDownIcon aria-hidden="true" className="size-4" />
          </motion.div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={menuVariants}
            className="flex flex-col gap-0.5"
          >
            <motion.div variants={itemVariants}>
              <DropdownMenuItem className="cursor-pointer">
                <GitCommitIcon aria-hidden="true" />
                <span>Commit & Push</span>
              </DropdownMenuItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <DropdownMenuItem className="cursor-pointer">
                <GitPullRequestIcon aria-hidden="true" />
                <span>Commit & Sync</span>
              </DropdownMenuItem>
            </motion.div>
            <motion.div variants={itemVariants}>
              <DropdownMenuItem className="cursor-pointer">
                <HistoryIcon aria-hidden="true" />
                <span>Amend Last Commit</span>
              </DropdownMenuItem>
            </motion.div>
          </motion.div>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
}

export default ActionExecuteButtonGroup;
