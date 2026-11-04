'use client'

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ButtonDemo = () => {
  const [copied, setCopied] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [progress, setProgress] = useState(0);
  const CODE = "SHADCN-PRO";
  const DURATION = 3500;

  useEffect(() => {
    if (copied) {
      const showTimer = setTimeout(() => {
        setShowConfirmation(true);
      }, 300);

      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / DURATION) * 100, 100);
        setProgress(newProgress);

        if (elapsed >= DURATION) {
          clearInterval(interval);
          setShowConfirmation(false);
          setTimeout(() => {
            setCopied(false);
            setProgress(0);
          }, 300);
        }
      }, 16);

      return () => {
        clearInterval(interval);
        clearTimeout(showTimer);
      };
    }
  }, [copied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CODE);
    setCopied(true);
  };

  return (
    <div className="relative overflow-hidden flex items-center justify-center bg-muted rounded-full px-6 min-w-64 h-12 border border-border">
      {/* Progress background */}
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 bg-primary/15 transition-opacity duration-500 ease-in-out",
          copied ? "opacity-100" : "opacity-0"
        )}
        style={{ width: `${progress}%` }}
      />

      {/* Original content — code and copy button */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-between pl-6 pr-2 transition-all duration-500 ease-in-out",
          copied
            ? "opacity-0 blur-md scale-95 pointer-events-none z-0"
            : "opacity-100 blur-none scale-100 pointer-events-auto z-20"
        )}
      >
        <span className="text-sm font-mono font-medium tracking-widest text-muted-foreground select-all truncate max-w-36">
          {CODE}
        </span>
        <Button
          onClick={handleCopy}
          className="gap-1.5 rounded-full cursor-pointer select-none hover:bg-primary/80"
        >
          <Copy className="w-3.5 h-3.5" />
          Copy
        </Button>
      </div>

      {/* Confirmation content */}
      <div
        className={cn(
          "relative flex items-center gap-2 transition-all duration-700 ease-in-out pointer-events-none z-10",
          showConfirmation
            ? "opacity-100 blur-none scale-100"
            : "opacity-0 blur-md scale-105"
        )}
      >
        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <Check
            className="w-3.5 h-3.5 text-primary-foreground"
            style={{
              strokeDasharray: 24,
              strokeDashoffset: showConfirmation ? 0 : 24,
              transition: "stroke-dashoffset 0.6s ease-in-out 0.3s",
            }}
          />
        </div>
        <span className="text-sm font-semibold text-foreground">
          Copied to clipboard!
        </span>
      </div>
    </div>
  );
};

export default ButtonDemo;
