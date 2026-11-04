"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Rocket, Wrench, Zap, Bug } from "lucide-react";
import { cn } from "@/lib/utils";

export const title = "Collapsible Changelog";

type ChangeType = "feature" | "improvement" | "fix" | "breaking";

type Release = {
  version: string;
  date: string;
  changes: { type: ChangeType; description: string }[];
};

const releases: Release[] = [
  {
    version: "v3.2.0",
    date: "April 2025",
    changes: [
      {
        type: "feature",
        description: "Added dark mode support across all components.",
      },
      {
        type: "feature",
        description: "Introduced new Chart component with 6 chart types.",
      },
      {
        type: "improvement",
        description: "Improved keyboard navigation for Dialog and Popover.",
      },
    ],
  },
  {
    version: "v3.1.0",
    date: "March 2025",
    changes: [
      {
        type: "feature",
        description: "Released Collapsible and Accordion components.",
      },
      {
        type: "improvement",
        description: "Reduced bundle size by 18% via tree-shaking.",
      },
      {
        type: "fix",
        description: "Fixed scroll position reset on modal close.",
      },
    ],
  },
  {
    version: "v3.0.0",
    date: "February 2025",
    changes: [
      {
        type: "breaking",
        description: "Migrated to Tailwind CSS v4 — config file removed.",
      },
      {
        type: "feature",
        description: "New design system with CSS custom properties.",
      },
      {
        type: "fix",
        description: "Resolved hydration mismatch on Select component.",
      },
    ],
  },
];

const changeConfig: Record<
  ChangeType,
  { label: string; icon: React.ElementType; className: string }
> = {
  feature: {
    label: "Feature",
    icon: Rocket,
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  improvement: {
    label: "Improvement",
    icon: Zap,
    className: "bg-teal-400/10 text-teal-400 border-teal-400/20",
  },
  fix: {
    label: "Fix",
    icon: Bug,
    className: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
  breaking: {
    label: "Breaking",
    icon: Wrench,
    className: "bg-red-500/10 text-red-500 border-red-500/20",
  },
};

export default function CollapsibleChangelog() {
  const [openVersions, setOpenVersions] = useState<Set<string>>(
    new Set([releases[0].version]),
  );

  const toggle = (version: string) => {
    setOpenVersions((prev) => {
      const next = new Set(prev);
      next.has(version) ? next.delete(version) : next.add(version);
      return next;
    });
  };

  return (
    <div className="w-full max-w-lg space-y-2">
      {releases.map((release) => {
        const isOpen = openVersions.has(release.version);
        return (
          <Collapsible
            key={release.version}
            open={isOpen}
            onOpenChange={() => toggle(release.version)}
          >
            <div className="rounded-xl outline bg-background overflow-hidden">
              <CollapsibleTrigger className="w-full flex justify-between px-4 py-3 h-auto rounded-none hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-foreground">
                    {release.version}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {release.date}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                <div className="border-t px-4 py-3 space-y-2.5">
                  {release.changes.map((change, idx) => {
                    const config = changeConfig[change.type];
                    const Icon = config.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row items-start gap-1 sm:gap-3"
                      >
                        <Badge
                          variant="outline"
                          className={cn(
                            "mt-0.5 shrink-0 gap-1 text-xs px-2 py-0.5",
                            config.className,
                          )}
                        >
                          <Icon className="size-3" />
                          {config.label}
                        </Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {change.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>
        );
      })}
    </div>
  );
}
