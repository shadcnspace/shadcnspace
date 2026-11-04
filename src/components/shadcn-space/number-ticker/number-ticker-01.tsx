"use client";

import { useEffect, useRef, useState } from "react";

type NumberTickerProps = {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number
  prefix?: string;
  suffix?: string;
  className?: string;
};

function NumberTicker({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
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

      // ease-out cubic for smooth animation
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

  return (
    <span className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const NumberTickerDemo = () => {
  return (
    <div>
      <NumberTicker end={100} duration={4} className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl" />
    </div>
  );
};

export default NumberTickerDemo;