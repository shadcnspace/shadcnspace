"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const TOTAL_STEPS = 4;

export default function OnboardingStepper() {
  const [current, setCurrent] = useState(1);
  const progressPct = ((current - 1) / (TOTAL_STEPS - 1)) * 100;

  return (
    <div className="w-full max-w-md rounded-xl border bg-background p-6 space-y-6">
      {/* progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Step {current} of {TOTAL_STEPS}
          </span>
          <span>{Math.round(progressPct)}% complete</span>
        </div>
        <Progress
          value={progressPct}
          className="**:data-[slot='progress-track']:h-1.5!"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => setCurrent((c) => Math.max(1, c - 1))}
          disabled={current === 1}
        >
          Back
        </Button>
        <Button
          size="sm"
          className="cursor-pointer hover:bg-primary/80"
          onClick={() => setCurrent((c) => Math.min(TOTAL_STEPS, c + 1))}
          disabled={current === TOTAL_STEPS}
        >
          {current === TOTAL_STEPS - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
}
