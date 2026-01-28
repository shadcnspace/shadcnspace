"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
  children,
  ...props
}: MarqueeProps) {
  // Repeat children inline for seamless scrolling
  const repeatedChildren = Array(repeat)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="flex shrink-0" style={{ gap }}>
        {children}
      </div>
    ));

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - ${gap})); }
        }
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - ${gap})); }
        }

        .marquee {
          display: flex;
          animation: marquee ${duration} linear infinite;
          animation-direction: ${reverse ? "reverse" : "normal"};
        }

        .marquee-vertical {
          display: flex;
          flex-direction: column;
          animation: marquee-vertical ${duration} linear infinite;
          animation-direction: ${reverse ? "reverse" : "normal"};
        }

        .marquee-hover:hover,
        .marquee-vertical-hover:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        {...props}
        className={cn(
          "overflow-hidden flex",
          vertical ? "flex-col" : "flex-row",
          className,
        )}
      >
        <div
          className={cn(
            vertical
              ? pauseOnHover
                ? "marquee-vertical-hover marquee-vertical"
                : "marquee-vertical"
              : pauseOnHover
                ? "marquee-hover marquee"
                : "marquee",
          )}
        >
          {repeatedChildren}
        </div>
      </div>
    </>
  );
}
