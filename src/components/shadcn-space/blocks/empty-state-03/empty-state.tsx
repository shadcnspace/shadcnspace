"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useInView, type Variants } from "motion/react";
import { Plug, ChartNoAxesColumn } from "lucide-react";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  secondaryAction?: EmptyStateAction;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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
  icon = <ChartNoAxesColumn />,
  title = "No chart data available",
  description = "Connect a data source to start visualizing your metrics here.",
  primaryAction = {
    label: "Connect data source",
    icon: <Plug className="size-3.5" />,
  },
  secondaryAction,
}: EmptyStateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="w-full py-10 sm:py-16 px-4 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="w-full max-w-md animate-in fade-in-0 duration-300"
      >
        <Card className="w-full bg-background ring-0 border-2 border-dashed">
          <CardContent className="p-6">
            <Empty>
              <EmptyHeader>
                <motion.div variants={itemVariants}>
                  <EmptyMedia variant="icon">
                    {icon}
                  </EmptyMedia>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-1.5"
                >
                  <EmptyTitle className="text-base font-semibold text-card-foreground">
                    {title}
                  </EmptyTitle>
                  <EmptyDescription className="text-sm">
                    {description}
                  </EmptyDescription>
                </motion.div>
              </EmptyHeader>

              <motion.div variants={itemVariants} className="w-full">
                <EmptyContent>
                  <div className="flex items-center gap-2">
                    {secondaryAction && (
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Button
                          variant="outline"
                          onClick={secondaryAction.onClick}
                          className="gap-1.5 cursor-pointer"
                        >
                          {secondaryAction.icon}
                          {secondaryAction.label}
                        </Button>
                      </motion.div>
                    )}
                    {primaryAction && (
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: EASE }}
                        className="inline-flex"
                      >
                        <Button
                          onClick={primaryAction.onClick}
                          className="cursor-pointer gap-1.5 hover:bg-primary/80"
                        >
                          {primaryAction.icon}
                          {primaryAction.label}
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </EmptyContent>
              </motion.div>
            </Empty>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EmptyState;
