"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lasso } from "lucide-react";
import { cn } from "@/lib/utils";

/* MarchingDashesBorder */

type MarchingDashesBorderProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  color?: string;
};

const MarchingDashesBorder = ({
  children,
  className,
  duration = 1,
  color = "var(--color-blue-500)",
}: MarchingDashesBorderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes march-dashes {
          to { stroke-dashoffset: -10; }
        }
        .animate-march {
          animation: march-dashes var(--duration, 1s) linear infinite;
        }
      `}</style>
      <div ref={containerRef} className={cn("relative rounded-2xl", className)}>
        {size.width > 0 && size.height > 0 && (
          <svg
            className="absolute inset-0 z-20 h-full w-full pointer-events-none"
            viewBox={`0 0 ${size.width} ${size.height}`}
          >
            <rect
              x={1}
              y={1}
              width={size.width - 2}
              height={size.height - 2}
              rx={16}
              ry={16}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeDasharray="6 4"
              strokeLinecap="round"
              className="animate-march"
              style={{ "--duration": `${duration}s` } as React.CSSProperties}
            />
          </svg>
        )}

        {/* Content Layer */}
        <div className="relative z-10 rounded-2xl bg-card border border-border/80 overflow-hidden h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* Simple Centered Card */

const MarchingCard = () => {
  return (
    <Card className="relative h-full rounded-[inherit] border-0 ring-0 bg-transparent p-0 gap-0!">
      <CardContent className="p-10 flex flex-col items-center text-center gap-3">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Lasso className="size-6 text-primary" />
        </div>
        <Badge variant="secondary">Marching Dashes</Badge>
        <h3 className="text-lg font-semibold text-foreground">
          A border that keeps moving
        </h3>
        <p className="text-sm text-muted-foreground max-w-60">
          Crisp dashes march continuously around the edge, like a selection
          outline.
        </p>
      </CardContent>
    </Card>
  );
};

/* Demo */

export default function ShineBorderDemo() {
  return (
    <MarchingDashesBorder
      duration={1}
      color="var(--color-blue-500)"
      className="w-full max-w-sm"
    >
      <MarchingCard />
    </MarchingDashesBorder>
  );
}
