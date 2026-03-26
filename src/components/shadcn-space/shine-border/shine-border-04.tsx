import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================= */
/* ShineBorder (Meteor Beam)     */
/* ============================= */

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 3,
  duration = 4,
  color = "var(--color-blue-500)",
}: ShineBorderProps) => {
  return (
    <>
      <style>{`
        @keyframes rotating-beam {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-rotating-beam {
          animation: rotating-beam var(--duration, 4s) linear infinite;
        }
      `}</style>
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden border p-(--bw)",
          className,
        )}
        style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
      >
        {/* Animated Conic Beam (meteor effect) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute left-1/2 top-1/2 h-[200%] w-[200%] animate-rotating-beam origin-center"
            style={
              {
                background: `conic-gradient(from 90deg, transparent 0%, transparent 60%, ${color} 100%)`,
                "--duration": `${duration}s`,
              } as React.CSSProperties
            }
          />
        </div>

        {/* Subtle static border */}
        <div className="absolute inset-0 rounded-2xl border border-border/50 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 rounded-[calc(1rem-var(--bw))] bg-card h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* ============================= */
/* Stats / Achievement Card      */
/* ============================= */

const stats = [
  {
    icon: Users,
    label: "Total Users",
    value: "48,329",
    change: "+12.4%",
    positive: true,
  },
  {
    icon: ShoppingCart,
    label: "Orders Today",
    value: "1,284",
    change: "+8.1%",
    positive: true,
  },
  {
    icon: TrendingUp,
    label: "Revenue",
    value: "$92,840",
    change: "+21.7%",
    positive: true,
  },
];

const StatsCard = () => {
  return (
    <Card className="relative h-full rounded-[inherit] border-0 ring-0 bg-transparent">
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <Badge className="mb-2 gap-1" variant="secondary">
              <Star className="size-3 fill-current" />
              Live Dashboard
            </Badge>
            <h3 className="text-xl font-semibold text-foreground">
              Business Overview
            </h3>
            <p className="text-sm text-muted-foreground mt-0.5">
              Real‑time metrics — updated every 30s
            </p>
          </div>
          <span className="size-2.5 rounded-full bg-teal-400 animate-pulse" />
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-4 flex flex-col gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-base font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "text-xs font-semibold px-2 py-1 rounded-full",
                stat.positive
                  ? "text-teal-400 bg-teal-400/10"
                  : "text-red-500 bg-red-500/10",
              )}
            >
              {stat.change}
            </span>
          </div>
        ))}

        <Button className="w-full mt-2 h-10 gap-2">
          <TrendingUp className="size-4" />
          View Full Report
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
      borderWidth={3}
      duration={3}
      color="var(--color-blue-500)"
      className="w-full max-w-sm"
    >
      <StatsCard />
    </ShineBorder>
  );
}
