"use client";

import { useEffect, useState } from "react";
import NumberFlow, { type Value } from "@number-flow/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NumberTickerProps = {
  value: Value;
  decimals?: number;
  className?: string;
};

function NumberTicker({ value, decimals = 0, className }: NumberTickerProps) {
  return (
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
  );
}

const NumberTickerDemo = () => {
  const [val, setVal] = useState(12842);

  useEffect(() => {
    const interval = setInterval(() => {
      setVal((v) => Number(v) + Math.floor(Math.random() * 40) + 1);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <NumberTicker
        value={val}
        className="text-foreground font-medium lg:text-5xl sm:text-4xl text-3xl tabular-nums tracking-tight"
      />
      <div className="flex items-center gap-2">
        <div className="flex -space-x-4">
          {[
            {
              src: "https://images.shadcnspace.com/assets/profiles/albert.webp",
              name: "Albert",
            },
            {
              src: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
              name: "Jessica",
            },
            {
              src: "https://images.shadcnspace.com/assets/profiles/ben.webp",
              name: "Ben",
            },
            {
              src: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
              name: "Jenny",
            },
          ].map((user) => (
            <Avatar
              key={user.name}
              className="size-8 border-2 border-background"
            >
              <AvatarImage src={user.src} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-muted-foreground text-sm font-medium">
          people joined
        </span>
      </div>
    </div>
  );
};

export default NumberTickerDemo;
