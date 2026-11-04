"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import { ChevronDownIcon } from "lucide-react";

const contentVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25, delay: 0.05 },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.15 },
    },
  },
};

export type TokenBreakdownItem = {
  label: string;
  value: string;
};

export type Collapsible05Props = {
  title?: string;
  upgradeLabel?: string;
  usageSummary?: string;
  usagePercent?: number;
  usagePercentLabel?: string;
  breakdown?: TokenBreakdownItem[];
};

const defaultBreakdown: TokenBreakdownItem[] = [
  { label: "Input Tokens", value: "820K" },
  { label: "Output Tokens", value: "310K" },
  { label: "Cached Tokens", value: "48K" },
  { label: "Image Tokens", value: "22K" },
];

const TokenUsageDemo = ({
  title = "Token Usage This Month",
  upgradeLabel = "Upgrade",
  usageSummary = "1.2M / 2M tokens",
  usagePercent = 60,
  usagePercentLabel = "60% used",
  breakdown = defaultBreakdown,
}: Collapsible05Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xs">
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="relative">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-sm">{title}</CardTitle>
            <CardAction>
              <Button variant="outline" size="xs" className="cursor-pointer">
                {upgradeLabel}
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted dark:bg-muted/50 border-border rounded-lg space-y-2 border p-3">
              <div className="flex justify-between text-sm font-medium">
                <span>{usageSummary}</span>
                <span>{usagePercentLabel}</span>
              </div>
              <Progress
                value={usagePercent}
                className="**:data-[slot=progress-track]:bg-primary/20 **:data-[slot=progress-track]:h-1.5"
              />
            </div>

            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={contentVariants}
              style={{ overflow: "hidden" }}
            >
              <div className="flex flex-col gap-2.5 pt-2">
                {breakdown.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between text-xs"
                  >
                    <span className="text-muted-foreground font-medium">
                      {item.label}
                    </span>
                    <span className="font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>

        <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2">
          <CollapsibleTrigger
            render={
              <Button
                variant="outline"
                size="icon-sm"
                className="bg-background! rounded-full shadow-sm cursor-pointer"
              />
            }
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </motion.div>
            <span className="sr-only">Toggle details</span>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  );
};

export default TokenUsageDemo;
