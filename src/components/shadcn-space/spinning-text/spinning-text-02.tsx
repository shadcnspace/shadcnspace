"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type SpinningTextProps = {
  text: string;
  radius?: number;
  fontSize?: number;
  speed?: number;
  direction?: "normal" | "reverse";
  className?: string;
  children?: React.ReactNode;
};

const SpinningText: React.FC<SpinningTextProps> = ({
  text,
  radius = 50,
  fontSize = 12,
  speed = 10,
  direction = "normal",
  className,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const characters = text.split("");
  const totalChars = characters.length;
  const angleStep = 360 / totalChars;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: direction === "normal" ? 360 : -360,
        }}
        transition={{
          duration: isHovered ? speed / 2 : speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 font-medium uppercase tracking-tighter"
            style={{
              height: radius,
              transform: `translateX(-50%) rotate(${i * angleStep}deg)`,
              fontSize: fontSize,
              transformOrigin: `center ${radius}px`,
            }}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <div className="absolute flex items-center justify-center">
        {children || (
          <Star className="text-primary fill-primary" size={radius / 2} />
        )}
      </div>
    </div>
  );
};

const SpinningText02 = () => {
  return (
    <div className="py-20">
      <SpinningText
        text="INTERACTIVE 2026 DYNAMIC 2026 MODERN 2026 "
        radius={100}
        fontSize={12}
        speed={20}
        direction="reverse"
        className="text-primary font-medium"
      >
        <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Star size={32} className="fill-primary text-primary animate-pulse" />
        </div>
      </SpinningText>
    </div>
  );
};

export default SpinningText02;
