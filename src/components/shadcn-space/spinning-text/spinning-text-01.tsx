"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SpinningTextProps = {
  text: string;
  radius?: number;
  textClassName?: string;
  speed?: number;
  direction?: "normal" | "reverse";
  className?: string;
};

const SpinningText: React.FC<SpinningTextProps> = ({
  text,
  radius = 37,
  textClassName = "text-[8px]",
  speed = 10,
  direction = "normal",
  className,
}) => {
  // Generate a unique ID for the path to allow multiple instances
  const pathId = `circlePath-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g
          className="origin-center animate-spin"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction,
          }}
        >
          <path
            id={pathId}
            d={`
              M 50,50
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="none"
          />
          <text
            className={cn(
              `uppercase font-normal fill-muted-foreground tracking-widest`,
              textClassName,
            )}
          >
            <textPath xlinkHref={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

const SpinningTextDemo = () => {
  return (
    <>
      <SpinningText
        text="JOIN CRYPTO TRENDS • EXPLORE • JOIN CRYPTO TRENDS • EXPLORE •"
        radius={25}
        textClassName="text-[4px]"
        speed={12}
        direction="normal"
      />
    </>
  );
};

export default SpinningTextDemo;
