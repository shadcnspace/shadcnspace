"use client";

import React, { ReactNode, useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, BarChart3, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================= */
/* ShineBorder (Mouse Spotlight) */
/* ============================= */

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 2,
  duration,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative rounded-2xl overflow-hidden border p-(--bw)",
        className,
      )}
      style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
    >
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-300 pointer-events-none rounded-2xl bg-linear-to-r",
          gradient,
        )}
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(400px circle at ${position.x}px ${position.y}px, black 10%, transparent 60%)`,
          maskImage: `radial-gradient(400px circle at ${position.x}px ${position.y}px, black 10%, transparent 60%)`,
        }}
      />

      {/* Default border fallback when not hovered */}
      <div className="absolute inset-0 rounded-2xl border border-secondary/20 pointer-events-none -z-10" />

      {/* Content Layer */}
      <div className="relative z-10 rounded-2xl bg-card h-full">
        {children}
      </div>
    </div>
  );
};

/* ============================= */
/* Feature Highlight Card        */
/* ============================= */

const features = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for sub-100ms response times globally.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track every event and conversion as it happens.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Globe,
    title: "Edge Deployed",
    description: "Runs on 300+ PoPs across 6 continents worldwide.",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
];

const FeatureCard = () => {
  return (
    <Card className="relative h-full rounded-2xl border-0 ring-0 bg-transparent">
      <CardHeader className="p-6 pb-2">
        <Badge className="w-fit mb-2" variant="secondary">
          Platform Features
        </Badge>
        <h3 className="text-xl font-semibold text-foreground leading-snug">
          Everything you need to{" "}
          <span className="text-primary">ship faster</span>
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Hover to explore what makes our platform stand out.
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-4 flex flex-col gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/60 group"
          >
            <div
              className={cn(
                "size-9 rounded-lg flex items-center justify-center shrink-0",
                f.bg,
              )}
            >
              <f.icon className={cn("size-4", f.color)} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{f.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {f.description}
              </p>
            </div>
          </div>
        ))}

        <Button className="w-full mt-2 gap-2 h-10">
          Explore All Features
          <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

/* ============================= */
/* Demo */
/* ============================= */

export default function ShineBorderDemo() {
  return (
    <ShineBorder
      borderWidth={2}
      gradient="from-blue-500 via-red-500 to-teal-400"
      className="w-full max-w-sm"
    >
      <FeatureCard />
    </ShineBorder>
  );
}
