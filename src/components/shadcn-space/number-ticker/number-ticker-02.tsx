"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value } from "@number-flow/react";

type NumberTickerProps = {
  value: Value;
  currency?: string;
  decimals?: number;
  className?: string;
};

/**
 * NumberTicker 02 - Money Flow
 * Premium currency display with smooth high-fidelity rolls.
 */
function NumberTicker({
  value,
  currency = "USD",
  decimals = 2,
  className,
}: NumberTickerProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <NumberFlow
        value={value}
        format={{
          style: "currency",
          currency: currency,
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }}
        className={className}
      />
    </div>
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(1284.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((prev) => prev + (Math.random() * 50 - 20));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <NumberTicker
        value={val}
        className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl tracking-tight"
      />
    </div>
  );
};

export default NumberTickerDemo;
