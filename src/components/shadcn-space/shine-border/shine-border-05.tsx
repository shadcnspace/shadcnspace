import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/* AuroraGlowBorder */

type AuroraGlowBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  gradient?: string;
};

const AuroraGlowBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 6,
  gradient = "from-blue-500 via-orange-400 to-teal-400",
}: AuroraGlowBorderProps) => {
  return (
    <>
      <style>{`
        @keyframes aurora-hue {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes aurora-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .animate-aurora-hue {
          animation: aurora-hue var(--duration, 6s) linear infinite;
        }
        .animate-aurora-pulse {
          animation: aurora-pulse var(--duration, 6s) ease-in-out infinite;
        }
      `}</style>
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden border p-(--bw)",
          className,
        )}
        style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
      >
        {/* Soft blurred glow behind the border */}
        <div
          className={cn(
            "absolute -inset-1 rounded-2xl bg-linear-to-r blur-lg animate-aurora-pulse animate-aurora-hue",
            gradient,
          )}
          style={{ "--duration": `${duration}s` } as React.CSSProperties}
        />

        {/* Crisp gradient ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-linear-to-r animate-aurora-hue",
            gradient,
          )}
          style={{ "--duration": `${duration}s` } as React.CSSProperties}
        />

        {/* Content Layer */}
        <div className="relative z-10 rounded-[calc(1rem-var(--bw))] bg-card h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* Simple Centered Card */

const AuroraCard = () => {
  return (
    <Card className="relative h-full rounded-[inherit] border-0 ring-0 bg-transparent p-0 gap-0!">
      <CardContent className="p-10 flex flex-col items-center text-center gap-3">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="size-6 text-primary" />
        </div>
        <Badge variant="secondary">Aurora Glow</Badge>
        <h3 className="text-lg font-semibold text-foreground">
          A border that breathes color
        </h3>
        <p className="text-sm text-muted-foreground max-w-60">
          A smooth hue‑rotating gradient ring with a soft pulsing halo.
        </p>
      </CardContent>
    </Card>
  );
};

/* Demo */

export default function ShineBorderDemo() {
  return (
    <AuroraGlowBorder
      borderWidth={2}
      duration={6}
      gradient="from-blue-500 via-orange-400 to-teal-400"
      className="w-full max-w-sm"
    >
      <AuroraCard />
    </AuroraGlowBorder>
  );
}
