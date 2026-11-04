"use client";

import React, { useId, useRef, useState } from "react";
import { motion } from "motion/react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

interface Slider08Props {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  label?: string;
  unit?: string;
  size?: number;
  id?: string;
  onValueChange?: (value: number) => void;
  className?: string;
}

const STROKE_WIDTH = 14;

export function Slider08({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 53,
  label = "degrees",
  unit = "°",
  size = 220,
  id,
  onValueChange,
  className,
}: Slider08Props) {
  const generatedId = useId();
  const sliderId = id ?? generatedId;
  const gradientId = `${sliderId}-gradient`;

  const svgRef = useRef<SVGSVGElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;

  const commitValue = (nextValue: number) => {
    if (!isControlled) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };

  const clampValue = (v: number) => Math.max(min, Math.min(max, v));

  const radius = size / 2 - STROKE_WIDTH;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;

  const pct = (clampValue(currentValue) - min) / (max - min);
  const sweep = pct * 360;

  const pointOnCircle = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: center + radius * Math.sin(rad),
      y: center - radius * Math.cos(rad),
    };
  };

  const thumb = pointOnCircle(sweep);

  const angleFromPointer = (clientX: number, clientY: number) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return 0;
    const scale = size / rect.width;
    const dx = (clientX - rect.left) * scale - center;
    const dy = (clientY - rect.top) * scale - center;
    const deg = (Math.atan2(dx, -dy) * 180) / Math.PI;
    return (deg + 360) % 360;
  };

  const angleToValue = (angleDeg: number) => {
    const raw = min + (angleDeg / 360) * (max - min);
    return clampValue(Math.round(raw / step) * step);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    commitValue(angleToValue(angleFromPointer(e.clientX, e.clientY)));
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    commitValue(angleToValue(angleFromPointer(e.clientX, e.clientY)));
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const bigStep = step * 10;
    let next: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowUp") next = currentValue + step;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = currentValue - step;
    else if (e.key === "PageUp") next = currentValue + bigStep;
    else if (e.key === "PageDown") next = currentValue - bigStep;
    else if (e.key === "Home") next = min;
    else if (e.key === "End") next = max;

    if (next === null) return;
    e.preventDefault();
    commitValue(clampValue(next));
  };

  return (
    <div className={cn("inline-flex", className)}>
      <div
        role="slider"
        tabIndex={0}
        id={sliderId}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-valuetext={`${currentValue}${unit}`}
        aria-label={label}
        className="relative select-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        style={{ width: size, height: size }}
        onKeyDown={handleKeyDown}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 size-full -rotate-90"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={STROKE_WIDTH}
            className="stroke-muted"
          />

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct)}
            stroke={`url(#${gradientId})`}
            style={{
              transition: isDragging ? "none" : "stroke-dashoffset 0.2s ease-out",
            }}
          />
        </svg>

        <motion.div
          className={cn(
            "absolute flex -translate-x-1/2 -translate-y-1/2 touch-none select-none items-center justify-center rounded-full p-2",
            isDragging ? "cursor-grabbing" : "cursor-grab",
          )}
          style={{ left: thumb.x, top: thumb.y }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div
            className={cn(
              "rounded-full bg-blue-500 ring-2 ring-background",
              isDragging ? "size-5" : "size-4",
            )}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-medium tabular-nums text-foreground">
            <NumberFlow value={currentValue} />
            {unit}
          </span>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      </div>
    </div>
  );
}


export default function Slider08Demo() {
  return (
    <Slider08 min={0} max={100} step={1} defaultValue={75} label="volume" unit="%" />
  );
}
