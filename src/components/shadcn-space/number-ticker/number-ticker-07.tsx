"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  value: number;
  decimals?: number;
  className?: string;
};

function NumberTicker({ value, decimals = 2, className }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(value);
  const targetValueRef = useRef(value);

  useEffect(() => {
    startValueRef.current = displayValue;
    targetValueRef.current = value;
    startTimeRef.current = null;

    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress = timestamp - startTimeRef.current;
      const percent = Math.min(progress / 600, 1);

      const eased = 1 - Math.pow(1 - percent, 3);

      const current =
        startValueRef.current +
        (targetValueRef.current - startValueRef.current) * eased;
      setDisplayValue(current);

      if (percent < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className={cn("tabular-nums tracking-tight", className)}>
      ${displayValue.toFixed(decimals)}
    </span>
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(184.2);
  const historyRef = useRef<number[]>(Array.from({ length: 24 }, () => 184.2));
  const [history, setHistory] = useState<number[]>(historyRef.current);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => {
        const next = Math.max(1, v + (Math.random() - 0.48) * 3);
        historyRef.current = [...historyRef.current.slice(1), next];
        setHistory([...historyRef.current]);
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const change = ((val - history[0]) / history[0]) * 100;
  const isUp = change >= 0;

  const mn = Math.min(...history);
  const mx = Math.max(...history);
  const points = history
    .map((y, i) => `${(i * 100) / 23},${20 - ((y - mn) / (mx - mn || 1)) * 18}`)
    .join(" ");

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-55">
      <div className="flex items-center justify-between w-full text-sm">
        <span className="text-foreground font-semibold">Space</span>
        <span
          className={cn(
            "font-mono text-xs font-semibold px-2 py-0.5 rounded-full",
            isUp
              ? "bg-teal-400/10 text-teal-400"
              : "bg-red-500/10 text-red-500",
          )}
        >
          {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
        </span>
      </div>
      <NumberTicker
        value={val}
        decimals={2}
        className="text-foreground font-medium lg:text-4xl sm:text-3xl text-2xl"
      />
      <div className="w-full h-6">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 22"
          preserveAspectRatio="none"
        >
          <polyline
            points={points}
            fill="none"
            stroke={isUp ? "#2dd4bf" : "#ef4444"}
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
        <span>Vol {(1.2 + Math.random() * 0.8).toFixed(1)}M</span>
      </div>
    </div>
  );
};

export default NumberTickerDemo;
