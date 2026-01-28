"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const greetings = [
  { text: "Initializing ...", color: "text-blue-500" },
  { text: "Fetching Data...", color: "text-orange-400" },
  { text: "Rendering...", color: "text-teal-400" },
  { text: "System Ready ", color: "text-sky-500" },
];

const AnimatedTextRoller = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <p className="text-xl sm:text-2xl text-foreground">
        Hello, Shadcnspace
      </p>
      <div className="overflow-hidden h-8 text-center">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${index * 2}rem)` }}
        >
          {greetings.map((g, i) => (
            <p
              key={i}
              className={cn(
                "h-8 flex items-center justify-start text-xl sm:text-2xl",
                g.color,
              )}
            >
              {g.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRoller;
