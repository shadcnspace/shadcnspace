"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SEGMENT_MAP: number[] = [63, 6, 91, 79, 102, 109, 125, 7, 127, 111];

const SEGMENT_PATHS: string[] = [
  "M2.5 1h7",
  "M11 2.5v6.5",
  "M11 12v6.5",
  "M2.5 20h7",
  "M1 12v6.5",
  "M1 2.5v6.5",
  "M2.5 10.5h7",
];

type SegmentDigitProps = {
  digit: number;
  className?: string;
};

function SegmentDigit({ digit, className }: SegmentDigitProps) {
  const segments = SEGMENT_MAP[digit] ?? 0;

  return (
    <svg
      className={cn("h-8 w-5 sm:h-10 sm:w-6 lg:h-12 lg:w-7", className)}
      viewBox="0 0 12 21"
    >
      {SEGMENT_PATHS.map((path, i) => (
        <path
          key={i}
          d={path}
          fill="none"
          strokeLinecap="round"
          strokeWidth="1.7"
          className={(segments >> i) & 1 ? "stroke-foreground" : "stroke-muted"}
        />
      ))}
    </svg>
  );
}

type NumberTickerProps = {
  end: number;
  start?: number;
  duration?: number;
  className?: string;
};

function NumberTicker({
  end,
  start = 0,
  duration = 2,
  className,
}: NumberTickerProps) {
  const [value, setValue] = useState(start);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const progress = timestamp - startTimeRef.current;
      const percent = Math.min(progress / (duration * 1000), 1);

      const eased = 1 - Math.pow(1 - percent, 3);

      const current = start + (end - start) * eased;
      setValue(current);

      if (percent < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  const digits = Math.floor(value)
    .toLocaleString("en-US")
    .split("")
    .filter((ch) => /\d/.test(ch))
    .map(Number);

  return (
    <div className={cn("inline-flex items-center", className)}>
      {digits.map((digit, i) => (
        <SegmentDigit key={`${i}-${digit}`} digit={digit} />
      ))}
    </div>
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(4825);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => v + Math.floor(Math.random() * 200) + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <NumberTicker end={val} duration={0.6} className="text-foreground" />
      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
        Total Users
      </span>
    </div>
  );
};

export default NumberTickerDemo;
