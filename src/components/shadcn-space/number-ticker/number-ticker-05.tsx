"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value } from "@number-flow/react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  value: Value;
  label?: string;
  decimals?: number;
  className?: string;
};

/**
 * NumberTicker 05 - Stats Counter
 * High-fidelity statistics tracker.
 */
function NumberTicker({
  value,
  label,
  decimals = 0,
  className,
}: NumberTickerProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <NumberFlow
        value={value}
        format={{
          notation: "standard",
          compactDisplay: "short",
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        className={className}
      />
      {label && (
        <span className="text-muted-foreground text-sm font-medium">
          {label}
        </span>
      )}
    </div>
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(48250);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => Number(v) + Math.floor(Math.random() * 50));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <NumberTicker
        value={val}
        label="active users"
        className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl tabular-nums"
      />
    </div>
  );
};

export default NumberTickerDemo;
