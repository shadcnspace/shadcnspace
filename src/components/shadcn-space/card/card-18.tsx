import React from "react";
import { Check, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type DifferenceItem = {
  other?: string;
  our?: string;
};

export const differenceData: DifferenceItem[] = [
  {
    other: "Multiple libraries to maintain",
    our: "Complete UI ecosystem",
  },
  {
    other: "Inconsistent component styles",
    our: "Production-ready components",
  },
  {
    other: "Repetitive UI development",
    our: "Fully customizable blocks",
  },
  {
    other: "Limited customization options",
    our: "Built with shadcn/ui & Tailwind CSS",
  },
  {
    other: "Slow project delivery",
    our: "Clean, accessible code",
  },
  {
    other: "Fragmented design systems",
    our: "Regular updates & new releases",
  },
  {
    other: "Minimal developer support",
    our: "Fast support for developers",
  },
];

export interface ComparisonCardProps {
  data?: DifferenceItem[];
}

/* ============================= */
/* ShineBorder (Meteor Beam)     */
/* ============================= */

type ShineBorderProps = {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string;
  borderRadius?: string;
};

const ShineBorder = ({
  children,
  className,
  borderWidth = 3,
  duration = 4,
  color = "var(--color-primary)",
  borderRadius = "1.5rem",
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
        className={cn("relative overflow-hidden border p-(--bw)", className)}
        style={
          {
            "--bw": `${borderWidth}px`,
            borderRadius: borderRadius,
          } as React.CSSProperties
        }
      >
        {/* Animated Conic Beam (meteor effect) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute left-1/2 top-1/2 h-[200%] w-[200%] animate-rotating-beam origin-center"
            style={
              {
                background: `conic-gradient(from 90deg, transparent 0%, transparent 85%, ${color} 100%)`,
                "--duration": `${duration}s`,
              } as React.CSSProperties
            }
          />
        </div>

        {/* Subtle static border */}
        <div
          className="absolute inset-0 border border-border/50 pointer-events-none z-20"
          style={{ borderRadius: borderRadius }}
        />

        {/* Content Layer */}
        <div
          className="relative z-10 bg-card h-full"
          style={{ borderRadius: `calc(${borderRadius} - var(--bw))` }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

const ComparisonCard = ({ data = differenceData }: ComparisonCardProps) => {
  return (
    <>
      <ShineBorder
        borderWidth={2}
        duration={4}
        color="var(--color-primary)"
        borderRadius="1.5rem"
        className="mx-auto w-full max-w-239"
      >
        <Card
          className="w-full p-3 ring-0 border-0 bg-transparent"
          style={{ borderRadius: "inherit" }}
        >
          <CardContent className="p-0">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6">
              {/* Others tools */}
              <div className="flex flex-col gap-6 p-6">
                <p className="text-xl sm:text-2xl font-medium text-foreground">
                  Others tools
                </p>
                <Separator />
                <ul className="flex flex-col gap-5">
                  {data
                    .filter((item) => item.other)
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <X className="size-5 shrink-0 text-muted-foreground" />
                        <span className="text-base text-muted-foreground">
                          {item.other}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Our tools */}
              <Card className="dark relative overflow-hidden rounded-2xl bg-background p-6 ring-0 border">
                {/* Background Ellipse effect */}
                <div className="absolute -right-64 -bottom-48 size-116 rounded-full bg-white/50 opacity-50 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.shadcnspace.com/assets/logo/shadcn-white-logo.png"
                      alt="logo"
                      width={32}
                      height={32}
                    />
                    <p className="text-xl sm:text-2xl font-medium text-foreground">
                      Shadcnspace
                    </p>
                  </div>
                  <Separator className="bg-border" />
                  <ul className="flex flex-col gap-5">
                    {data
                      .filter((item) => item.our)
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Check className="size-5 shrink-0 text-foreground" />
                          <span className="text-base text-foreground">
                            {item.our}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </ShineBorder>
    </>
  );
};

export default ComparisonCard;
