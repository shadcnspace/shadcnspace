"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value } from "@number-flow/react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

type NumberTickerProps = {
  value: Value;
  decimals?: number;
  className?: string;
  showSign?: boolean;
};

/**
 * NumberTicker 04 - Growth Indicator
 * Specialized in color-shifting and dynamic icons based on value.
 */
function NumberTicker({
  value,
  decimals = 1,
  className,
  showSign = true,
}: NumberTickerProps) {
  const isPositive = Number(value) >= 0;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 transition-colors duration-500",
        isPositive ? "text-emerald-500" : "text-rose-500",
        className
      )}
    >
      {isPositive ? (
        <ArrowUpRight className="w-[1em] h-[1em]" />
      ) : (
        <ArrowDownRight className="w-[1em] h-[1em]" />
      )}
      <NumberFlow
        value={value}
        format={{
          style: "percent",
          signDisplay: showSign ? "always" : "auto",
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
      />
    </div>
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(0.184); // +18.4%

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => (prev > 0 ? -0.057 : 0.184));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <NumberTicker
        value={val}
        className="font-medium lg:text-5xl sm:text-4xl text-3xl "
      />
    </div>
  );
};

export default NumberTickerDemo;
