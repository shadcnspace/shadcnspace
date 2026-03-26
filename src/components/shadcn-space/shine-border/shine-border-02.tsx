import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheck, Fingerprint, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

/* ============================= */
/* ShineBorder (Laser Scanner)   */
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
  duration = 3,
  gradient = "from-blue-500 via-red-500 to-teal-400",
}: ShineBorderProps) => {
  return (
    <>
      <style>{`
        @keyframes shine-scan {
          0% { mask-position: 0% -100%; -webkit-mask-position: 0% -100%; }
          100% { mask-position: 0% 200%; -webkit-mask-position: 0% 200%; }
        }
        .animate-shine-scan {
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 25%, transparent 40%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 25%, transparent 40%);
          mask-size: 100% 300%;
          -webkit-mask-size: 100% 300%;
          animation: shine-scan var(--duration, 3s) linear infinite;
        }
      `}</style>
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden border p-(--bw)",
          className,
        )}
        style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
      >
        {/* Animated Scanner Layer */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 rounded-2xl border border-secondary/20 pointer-events-none -z-10" />
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-b animate-shine-scan opacity-90 blur-sm",
              gradient,
            )}
            style={{ "--duration": `${duration}s` } as React.CSSProperties}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 rounded-2xl bg-card h-full">
          {children}
        </div>
      </div>
    </>
  );
};

/* ============================= */
/* Security / Scan Card          */
/* ============================= */

const SecurityCard = () => {
  return (
    <Card className="relative h-full rounded-2xl border-0 ring-0 bg-transparent overflow-hidden">
      <CardHeader className="p-6 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Fingerprint className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Identity Verified
              </p>
              <p className="text-xs text-muted-foreground">Biometric Scan</p>
            </div>
          </div>
          <Badge className="gap-1 bg-teal-400/10 text-teal-400 border-teal-400/20 hover:bg-teal-400/20">
            <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
            Secure
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Avatar className="size-14 ring-2 ring-primary/20">
            <AvatarImage src="https://images.shadcnspace.com/assets/profiles/albert.webp" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base font-semibold text-foreground">Albert</p>
            <p className="text-sm text-muted-foreground">Senior Engineer</p>
            <p className="text-xs text-muted-foreground">ID: #EMP‑00421</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Access Level", value: "Level 4" },
            { label: "Clearance", value: "Top Secret" },
            { label: "Last Scan", value: "Just now" },
            { label: "Location", value: "HQ — Floor 3" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground mt-0.5">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-teal-400/20 bg-teal-400/5 px-4 py-3">
          <ShieldCheck className="size-4 text-teal-400 shrink-0" />
          <p className="text-sm text-teal-400 font-medium">
            Scan complete — Access granted
          </p>
        </div>

        <Button variant="outline" className="w-full gap-2 h-10">
          <Lock className="size-4" />
          View Access Log
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
      duration={3}
      gradient="from-blue-500 via-red-500 to-teal-400"
      className="w-full max-w-sm"
    >
      <SecurityCard />
    </ShineBorder>
  );
}
