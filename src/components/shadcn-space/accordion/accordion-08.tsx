"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

interface MilestoneDeliverable {
  title: string;
  status: "done" | "in-progress" | "pending";
}

interface MilestoneItem {
  id: string;
  version: string;
  title: string;
  quarter: string;
  status: "completed" | "in-progress" | "planned";
  progress: number;
  description: string;
  lead: string;
  targetDate: string;
  deliverables: MilestoneDeliverable[];
}

const milestones: MilestoneItem[] = [
  {
    id: "milestone-1",
    version: "v2.1",
    title: "AI Agent Ecosystem & Workflows",
    quarter: "Q1 2025",
    status: "completed",
    progress: 100,
    description:
      "Full rollout of autonomous agent workflows, registry synchronizations, and MCP server integrations with zero-latency streaming responses.",
    lead: "Alex Chen",
    targetDate: "March 2025",
    deliverables: [
      { title: "MCP Server protocol bidirectional bindings", status: "done" },
      { title: "One-click CLI registry synchronization", status: "done" },
      { title: "Deterministic prompt evaluation pipelines", status: "done" },
    ],
  },
  {
    id: "milestone-2",
    version: "v2.2",
    title: "Dynamic Visual Canvas & Theming",
    quarter: "Q2 2025",
    status: "in-progress",
    progress: 68,
    description:
      "Interactive visual component canvas supporting live token manipulation, dynamic color harmonies, and instant Figma token synchronizations.",
    lead: "Sarah Lin",
    targetDate: "June 2025",
    deliverables: [
      { title: "Real-time CSS variable color palette generator", status: "done" },
      { title: "Framer Motion layout transition templates", status: "in-progress" },
      { title: "Base UI v1 and Radix dual-primitive playground", status: "in-progress" },
    ],
  },
  {
    id: "milestone-3",
    version: "v2.3",
    title: "Enterprise Multi-Tenant Design Hub",
    quarter: "Q3 2025",
    status: "planned",
    progress: 15,
    description:
      "Organization-level component registries, role-based access control, analytics on component reuse, and private NPM sync pipelines.",
    lead: "Marcus Vance",
    targetDate: "September 2025",
    deliverables: [
      { title: "Private team registry authentication proxy", status: "in-progress" },
      { title: "Automated breaking change linting across teams", status: "pending" },
      { title: "SOC2 compliance & audit trail export", status: "pending" },
    ],
  },
  {
    id: "milestone-4",
    version: "v2.4",
    title: "Spatial UI & 3D Interactive Primitives",
    quarter: "Q4 2025",
    status: "planned",
    progress: 0,
    description:
      "Three.js and WebGL powered micro-interactions, spatial gestures, dynamic depth cards, and responsive particle backgrounds.",
    lead: "Elena Rostova",
    targetDate: "December 2025",
    deliverables: [
      { title: "Three.js optimized shader card components", status: "pending" },
      { title: "Interactive tilt & depth parallax viewport hooks", status: "pending" },
      { title: "Performance-budgeted WebGL canvas fallback", status: "pending" },
    ],
  },
];

const statusStyles = {
  completed: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    label: "Completed",
  },
  "in-progress": {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500 animate-pulse",
    label: "In Progress",
  },
  planned: {
    badge: "border-muted-foreground/30 bg-muted/50 text-muted-foreground",
    dot: "bg-muted-foreground/50",
    label: "Planned",
  },
};

const AccordionRoadmapTimeline = () => {
  const [openItems, setOpenItems] = useState<string[]>(["milestone-2"]);

  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-4">
      <div className="mb-6 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-1.5 py-1 text-xs">
            <Sparkles className="size-3 text-primary" />
            Product Roadmap
          </Badge>
          <span className="text-xs text-muted-foreground">Updated for 2025</span>
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Release Milestones & Timeline
        </h3>
        <p className="text-xs text-muted-foreground">
          Track upcoming features, active initiatives, and completed deliverables across quarterly releases.
        </p>
      </div>

      <Accordion
        value={openItems}
        onValueChange={setOpenItems}
        className="space-y-3"
      >
        {milestones.map((item) => {
          const status = statusStyles[item.status];

          return (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm transition-colors hover:border-border overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline cursor-pointer group">
                <div className="flex flex-1 flex-col gap-2.5 text-left pr-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-muted text-foreground">
                      {item.version}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {item.quarter}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium ${status.badge}`}
                    >
                      <span className={`size-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                    <span className="ml-auto text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    {/* Mini progress track */}
                    <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-primary transition-all duration-500 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-5 pb-5 pt-1 text-sm text-muted-foreground border-t border-border/40 bg-muted/20">
                <p className="text-xs leading-relaxed text-foreground/80 mt-2">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-4 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Target className="size-3" />
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {item.deliverables.map((deliv, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between rounded-lg bg-background/60 border border-border/40 px-3 py-2 text-xs"
                      >
                        <span className="flex items-center gap-2 text-foreground/90">
                          {deliv.status === "done" ? (
                            <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                          ) : deliv.status === "in-progress" ? (
                            <Clock className="size-3.5 text-amber-500 shrink-0" />
                          ) : (
                            <span className="size-3.5 rounded-full border border-dashed border-muted-foreground shrink-0" />
                          )}
                          {deliv.title}
                        </span>
                        <span className="text-[10px] font-medium uppercase text-muted-foreground">
                          {deliv.status.replace("-", " ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Meta & Actions */}
                <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border/40 text-xs">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5" />
                      Lead: <strong className="text-foreground font-medium">{item.lead}</strong>
                    </span>
                    <span>
                      Target: <strong className="text-foreground font-medium">{item.targetDate}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5">
                      View RFC
                      <ExternalLink className="size-3" />
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionRoadmapTimeline;
