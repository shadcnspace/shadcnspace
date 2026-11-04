import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";

/* FocusFrameBorder */

type FocusFrameBorderProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  color?: string;
};

const corners = [
  {
    position: "top-0 left-0",
    edges: "border-t-1 border-l-1 rounded-tl-xl",
    delay: 0,
  },
  {
    position: "top-0 right-0",
    edges: "border-t-1 border-r-1 rounded-tr-xl",
    delay: 0.3,
  },
  {
    position: "bottom-0 left-0",
    edges: "border-b-1 border-l-1 rounded-bl-xl",
    delay: 0.6,
  },
  {
    position: "bottom-0 right-0",
    edges: "border-b-1 border-r-1 rounded-br-xl",
    delay: 0.9,
  },
];

const FocusFrameBorder = ({
  children,
  className,
  duration = 2.4,
  color = "var(--color-blue-500)",
}: FocusFrameBorderProps) => {
  return (
    <>
      <style>{`
        @keyframes focus-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-focus-pulse {
          animation: focus-pulse var(--duration, 2.4s) ease-in-out infinite;
        }
      `}</style>
      <div className={cn("relative rounded-2xl", className)}>
        {/* Pulsing corner brackets */}
        {corners.map((corner) => (
          <div
            key={corner.position}
            className={cn(
              "absolute z-20 size-10 pointer-events-none animate-focus-pulse",
              corner.position,
              corner.edges,
            )}
            style={
              {
                borderColor: color,
                filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 12px ${color})`,
                animationDelay: `${corner.delay}s`,
                "--duration": `${duration}s`,
              } as React.CSSProperties
            }
          />
        ))}

        {/* Content Layer */}
        <div className="relative z-10 rounded-xl bg-card border border-border/80 overflow-hidden h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* Simple Centered Card */

const FocusCard = () => {
  return (
    <Card className="relative h-full rounded-[inherit] border-0 ring-0 bg-transparent p-0 gap-0!">
      <CardContent className="p-10 flex flex-col items-center text-center gap-3">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Crosshair className="size-6 text-primary" />
        </div>
        <Badge variant="secondary">Focus Frame</Badge>
        <h3 className="text-lg font-semibold text-foreground">
          Locked into focus
        </h3>
        <p className="text-sm text-muted-foreground max-w-60">
          Corner brackets pulse in sequence like a camera locking focus.
        </p>
      </CardContent>
    </Card>
  );
};

/* Demo */

export default function ShineBorderDemo() {
  return (
    <FocusFrameBorder
      duration={2.4}
      color="var(--color-blue-500)"
      className="w-full max-w-sm"
    >
      <FocusCard />
    </FocusFrameBorder>
  );
}
