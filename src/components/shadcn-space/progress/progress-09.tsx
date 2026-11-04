"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";

const pages = ["Dashboard", "Projects", "Settings"];

const ProgressDemo = () => {
  const [page, setPage] = useState(pages[0]);
  const [progress, setProgress] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Mimics a top page loading bar: jump ahead, trickle while waiting, finish, then fade out.
  const navigate = (next: string) => {
    if (next === page || progress !== null) return;
    timers.current.forEach(clearTimeout);
    setProgress(15);
    timers.current = [
      setTimeout(() => setProgress(45), 200),
      setTimeout(() => setProgress(70), 600),
      setTimeout(() => setProgress(85), 1000),
      setTimeout(() => {
        setProgress(100);
        setPage(next);
      }, 1400),
      setTimeout(() => setProgress(null), 1750),
    ];
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="relative overflow-hidden rounded-lg border border-border bg-background">
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          role="progressbar"
          aria-label="Page loading"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress ?? undefined}
          hidden={progress === null}
        >
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out motion-reduce:transition-none"
            style={{ width: `${progress ?? 0}%`, opacity: progress === 100 ? 0 : 1 }}
          />
        </div>
        <nav aria-label="Demo pages" className="flex gap-1 border-b border-border p-2">
          {pages.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={item === page ? "secondary" : "ghost"}
              aria-current={item === page ? "page" : undefined}
              onClick={() => navigate(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
        <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">{page} content</div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-foreground" id="indeterminate-label">
          Preparing your export
        </p>
        <div
          role="progressbar"
          aria-labelledby="indeterminate-label"
          aria-busy="true"
          className="relative h-1.5 w-full overflow-hidden rounded-full bg-muted"
        >
          {reduceMotion ? (
            <div className="h-full w-1/3 rounded-full bg-teal-400" />
          ) : (
            <motion.div
              className="absolute inset-y-0 w-1/3 rounded-full bg-teal-400"
              initial={{ left: "-35%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
        <p className="text-xs text-muted-foreground">This can take a minute for large workspaces.</p>
      </div>
    </div>
  );
};

export default ProgressDemo;
