"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value, NumberFlowGroup } from "@number-flow/react";

type NumberTickerProps = {
  seconds: number;
  className?: string;
  showHours?: boolean;
};

/**
 * NumberTicker 03 - Time Chronometer
 * Specialized HH:MM:SS timer with per-segment rolling.
 */
function NumberTicker({
  seconds,
  className,
  showHours = true,
}: NumberTickerProps) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return (
    <div className={`${className} inline-flex items-center gap-2`}>
      <NumberFlowGroup>
        {showHours && (
          <>
            <NumberFlow value={h} format={{ minimumIntegerDigits: 2 }} />
            <span className="">:</span>
          </>
        )}
        <NumberFlow value={m} format={{ minimumIntegerDigits: 2 }} />
        <span className="">:</span>
        <NumberFlow value={s} format={{ minimumIntegerDigits: 2 }} />
      </NumberFlowGroup>
    </div>
  );
}

const NumberTickerDemo = () => {
  const [sec, setSec] = useState(3665); // 01:01:05

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <NumberTicker
        seconds={sec}
        className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl tabular-nums tracking-tighter"
      />
    </div>
  );
};

export default NumberTickerDemo;
