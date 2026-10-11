"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Sparkles,
  X,
} from "lucide-react";

interface TourStep {
  step: number;
  total: number;
  tag: string;
  title: string;
  description: string;
  tip: string;
}

const tourSteps: TourStep[] = [
  {
    step: 1,
    total: 4,
    tag: "Visual Registry",
    title: "Dual Primitive Switching",
    description: "Toggle seamlessly between Base UI v1 and Radix UI primitives without changing your layout code.",
    tip: "Use the top header toggle to swap primitives.",
  },
  {
    step: 2,
    total: 4,
    tag: "AI Prompting",
    title: "One-Click Prompt Composer",
    description: "Export structured natural language prompts engineered specifically for Cursor, Claude Code, and Windsurf.",
    tip: "Click 'Copy Prompt' on any page template.",
  },
  {
    step: 3,
    total: 4,
    tag: "MCP Server",
    title: "Direct IDE Integration",
    description: "Connect our MCP endpoint to install blocks, inspect schemas, and run audits directly in chat.",
    tip: "Configuration snippet is in mcp.shadcnspace.com",
  },
  {
    step: 4,
    total: 4,
    tag: "Production Ready",
    title: "Zero-Slop Token System",
    description: "All blocks use semantic CSS variables with 100% Light and Dark theme parity.",
    tip: "You're all set to build amazing apps!",
  },
];

const TooltipOnboardingTour = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const current = tourSteps[currentStepIdx];

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStepIdx < tourSteps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      setCurrentStepIdx(0);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStepIdx > 0) {
      setCurrentStepIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">
          Interactive guided walkthrough beacon with multi-step progression
        </p>
      </div>

      <TooltipProvider delay={100}>
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger>
            <div className="relative inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary shadow-xs transition-all hover:bg-primary/20 cursor-pointer">
              {/* Radar pulse ping */}
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <Sparkles className="size-3.5" />
              <span>Interactive Tour Beacon</span>
              <Badge variant="default" className="h-4 px-1 text-[9px] font-semibold">
                New
              </Badge>
            </div>
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            sideOffset={10}
            className="w-80 p-0 rounded-2xl border border-border/80 bg-card text-card-foreground shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            {/* Top progress bar */}
            <div className="h-1 w-full bg-muted">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((current.step) / current.total) * 100}%` }}
              />
            </div>

            <div className="p-4 space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Compass className="size-3.5 text-primary" />
                  <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    Tour • Step {current.step} of {current.total}
                  </span>
                </div>
                <Badge variant="outline" className="text-[10px] h-4 px-1.5">
                  {current.tag}
                </Badge>
              </div>

              {/* Title & Body */}
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground tracking-tight">
                  {current.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Quick tip pill */}
              <div className="rounded-lg bg-muted/50 p-2 text-[11px] text-foreground/80 border border-border/40">
                💡 <span className="font-medium text-foreground">Pro tip:</span> {current.tip}
              </div>

              {/* Footer navigation */}
              <div className="pt-2 flex items-center justify-between border-t border-border/50">
                {/* Step dots */}
                <div className="flex items-center gap-1">
                  {tourSteps.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStepIdx(idx)}
                      className={`size-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentStepIdx
                          ? "bg-primary w-3.5"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  {currentStepIdx > 0 && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handlePrev}
                      className="h-7 px-2 text-xs gap-1 text-muted-foreground"
                    >
                      <ArrowLeft className="size-3" />
                      Back
                    </Button>
                  )}

                  <Button
                    size="sm"
                    variant="default"
                    onClick={handleNext}
                    className="h-7 px-3 text-xs gap-1 font-medium"
                  >
                    {currentStepIdx === tourSteps.length - 1 ? (
                      "Restart"
                    ) : (
                      <>
                        Next
                        <ArrowRight className="size-3" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipOnboardingTour;
