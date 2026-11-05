"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// The shadcn Progress always renders a primary indicator, so these bars are
// composed from the primitive root with the exported track and indicator.
const goals = [
  { label: "Weekly sales goal", value: 82, color: "bg-teal-400" },
  { label: "New signups", value: 54, color: "bg-blue-500" },
  { label: "Support tickets closed", value: 67, color: "bg-sky-400" },
  { label: "Churn budget used", value: 91, color: "bg-orange-400" },
];

const ProgressDemo = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      {goals.map((goal) => (
        <ProgressPrimitive.Root key={goal.label} value={goal.value} className="flex flex-wrap gap-2">
          <ProgressLabel className="font-normal text-foreground">{goal.label}</ProgressLabel>
          <ProgressValue />
          <ProgressTrack className="h-2">
            <ProgressIndicator className={cn("rounded-full", goal.color)} />
          </ProgressTrack>
        </ProgressPrimitive.Root>
      ))}
    </div>
  );
};

export default ProgressDemo;
