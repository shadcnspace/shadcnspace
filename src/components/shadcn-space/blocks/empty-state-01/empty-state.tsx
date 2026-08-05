"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FolderOpen, Plus } from "lucide-react";

interface EmptyStateAction {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

interface EmptyStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  primaryAction?: EmptyStateAction;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const EmptyState = ({
  icon = <FolderOpen />,
  title = "No Projects yet",
  description = "Get started by creating your first project",
  primaryAction = {
    label: "Create project",
    icon: <Plus className="size-4" />,
  },
}: EmptyStateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="flex w-full items-center justify-center px-4 py-10 sm:py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-83.75"
      >
        <div className="w-full rounded-2xl border border-border bg-card p-10 shadow">
          <Empty className="gap-5 border-none p-0">
            <EmptyHeader className="gap-4">
              <motion.div variants={itemVariants}>
                <EmptyMedia
                  variant="icon"
                  className="mb-0 size-11 rounded-xl bg-blue-500/10 text-blue-500 [&_svg:not([class*='size-'])]:size-5"
                >
                  {icon}
                </EmptyMedia>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center gap-0.5 w-full"
              >
                <EmptyTitle className="text-lg font-medium text-foreground">
                  {title}
                </EmptyTitle>
                <EmptyDescription className="text-center min-w-63.75 w-full">
                  {description}
                </EmptyDescription>
              </motion.div>
            </EmptyHeader>
            {primaryAction && (
              <motion.div variants={itemVariants}>
                <EmptyContent>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="inline-flex"
                  >
                    <Button
                      onClick={primaryAction.onClick}
                      className="cursor-pointer px-3 hover:bg-primary/80"
                    >
                      {primaryAction.icon}
                      {primaryAction.label}
                    </Button>
                  </motion.div>
                </EmptyContent>
              </motion.div>
            )}
          </Empty>
        </div>
      </motion.div>
    </div>
  );
};

export default EmptyState;
