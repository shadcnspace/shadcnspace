"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "React / Next.js",
    value: 92,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-blue-500!",
    trackClass: "**:data-[slot='progress-track']:bg-blue-500/20!",
  },
  {
    label: "TypeScript",
    value: 85,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-orange-400!",
    trackClass: "**:data-[slot='progress-track']:bg-orange-400/20!",
  },
  {
    label: "Tailwind CSS",
    value: 78,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-sky-400!",
    trackClass: "**:data-[slot='progress-track']:bg-sky-400/20!",
  },
  {
    label: "Node.js",
    value: 70,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-teal-400!",
    trackClass: "**:data-[slot='progress-track']:bg-teal-400/20!",
  },
  {
    label: "UI / UX Design",
    value: 62,
    indicatorClass: "**:data-[slot='progress-indicator']:bg-amber-300!",
    trackClass: "**:data-[slot='progress-track']:bg-amber-300/20!",
  },
] as const;

export default function SkillsProgress() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-xl border bg-background p-5 space-y-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">
            Skill Levels
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Frontend expertise overview
          </p>
        </div>
        <Badge
          variant="outline"
          className="gap-1 border-teal-400/30 bg-teal-400/10 text-teal-400 dark:text-teal-400"
        >
          <TrendingUp className="size-3" />
          +12%
        </Badge>
      </div>

      <div className="space-y-4">
        {stats.map(({ label, value, indicatorClass, trackClass }) => (
          <div key={label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground">{label}</span>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {mounted ? value : 0}%
              </span>
            </div>
            <Progress
              value={mounted ? value : 0}
              className={cn("**:data-[slot='progress-track']:h-2! **:data-[slot='progress-indicator']:duration-1000!", indicatorClass, trackClass)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
