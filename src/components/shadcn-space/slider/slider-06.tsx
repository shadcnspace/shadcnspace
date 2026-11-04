"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "motion/react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";

interface Slider07Props {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  label?: string;
  unit?: string;
  id?: string;
  onValueChange?: (value: number) => void;
  className?: string;
}

const MIRROR_STRENGTH = 3;
const PULL_THRESHOLD = 6;
const ARC_BOW = 40;
const TRACK_DOTS = 40;

const arcControl = (
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) => ({
  x: (startX + endX) / 2,
  y: Math.min(startY, endY) - ARC_BOW,
});

const onQuadraticBezier = (
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
) => {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
};

export function Slider07({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 45,
  label = "Launch power",
  unit = "%",
  id,
  onValueChange,
  className,
}: Slider07Props) {
  const generatedId = useId();
  const sliderId = id ?? generatedId;

  const areaRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef({ x: 0, y: 0 });

  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;
  const pct = ((currentValue - min) / (max - min)) * 100;

  const [isDragging, setIsDragging] = useState(false);
  const [pull, setPull] = useState({ dx: 0, dy: 0 });
  const [targetPct, setTargetPct] = useState(pct);
  const [landed, setLanded] = useState(0);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const widthRef = useRef(0);

  const commitValue = (nextValue: number) => {
    if (!isControlled) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };

  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    widthRef.current = rect.width;
    if (!isDragging) {
      dotX.set((pct / 100) * rect.width);
      dotY.set(rect.height / 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pct, isDragging]);

  const pctToValue = (p: number) =>
    Math.round((min + (p / 100) * (max - min)) / step) * step;
  const clampPct = (p: number) => Math.max(0, Math.min(100, p));

  const displayValue = pctToValue(isDragging ? targetPct : pct);
  const pullDist = Math.hypot(pull.dx, pull.dy);
  const showFork = isDragging && pullDist > PULL_THRESHOLD;

  const handlePointerDown = (e: React.PointerEvent) => {
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    widthRef.current = rect.width;

    const anchorX = (pct / 100) * rect.width;
    const anchorY = rect.height / 2;
    anchorRef.current = { x: anchorX, y: anchorY };
    dotX.set(anchorX);
    dotY.set(anchorY);
    setTargetPct(pct);
    setPull({ dx: 0, dy: 0 });
    setIsDragging(true);
    document.body.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const rect = areaRef.current?.getBoundingClientRect();
    if (!rect) return;

    const margin = 140;
    const ballX = Math.max(
      -margin,
      Math.min(rect.width + margin, e.clientX - rect.left),
    );
    const ballY = Math.max(
      -margin,
      Math.min(rect.height + margin, e.clientY - rect.top),
    );
    dotX.set(ballX);
    dotY.set(ballY);

    const anchor = anchorRef.current;
    const dx = ballX - anchor.x;
    const dy = ballY - anchor.y;
    setPull({ dx, dy });

    const targetX = clampPct(
      ((anchor.x - dx * MIRROR_STRENGTH) / rect.width) * 100,
    );
    setTargetPct(Math.hypot(dx, dy) > PULL_THRESHOLD ? targetX : pct);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    document.body.style.cursor = "";

    const rect = areaRef.current?.getBoundingClientRect();
    const finalPct = pullDist > PULL_THRESHOLD ? targetPct : pct;
    const finalValue = pctToValue(finalPct);
    commitValue(finalValue);
    setLanded((n) => n + 1);

    if (rect) {
      const start = { x: dotX.get(), y: dotY.get() };
      const end = { x: (finalPct / 100) * rect.width, y: rect.height / 2 };
      const control = arcControl(start.x, start.y, end.x, end.y);

      animate(0, 1, {
        duration: 0.42,
        ease: [0.32, 0, 0.2, 1],
        onUpdate: (t) => {
          const p = onQuadraticBezier(t, start, control, end);
          dotX.set(p.x);
          dotY.set(p.y);
        },
        onComplete: () => {
          animate(dotY, [end.y - 5, end.y], {
            duration: 0.22,
            ease: "easeOut",
          });
        },
      });
    }
    setPull({ dx: 0, dy: 0 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const bigStep = step * 10;
    let nextValue: number | null = null;

    if (e.key === "ArrowRight" || e.key === "ArrowUp")
      nextValue = currentValue + step;
    else if (e.key === "ArrowLeft" || e.key === "ArrowDown")
      nextValue = currentValue - step;
    else if (e.key === "PageUp") nextValue = currentValue + bigStep;
    else if (e.key === "PageDown") nextValue = currentValue - bigStep;
    else if (e.key === "Home") nextValue = min;
    else if (e.key === "End") nextValue = max;

    if (nextValue === null) return;
    e.preventDefault();

    nextValue = Math.max(min, Math.min(max, nextValue));
    commitValue(nextValue);
    setTargetPct(((nextValue - min) / (max - min)) * 100);

    const rect = areaRef.current?.getBoundingClientRect();
    if (rect) {
      animate(dotX, ((nextValue - min) / (max - min)) * rect.width, {
        type: "spring",
        stiffness: 400,
        damping: 30,
      });
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-2xl border border-border bg-card p-5",
        className,
      )}
    >
      <div className="flex items-center justify-between text-xs">
        <span id={`${sliderId}-label`} className="text-muted-foreground">
          {label}
        </span>
        <span
          className={cn(
            "font-medium tabular-nums transition-colors",
            isDragging ? "text-primary" : "text-foreground",
          )}
        >
          <NumberFlow value={displayValue} />
          {unit}
        </span>
      </div>

      <div
        ref={areaRef}
        role="slider"
        tabIndex={0}
        id={sliderId}
        aria-labelledby={`${sliderId}-label`}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={displayValue}
        aria-valuetext={`${displayValue}${unit}`}
        className="relative h-14 touch-none select-none rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center gap-0.5">
          {Array.from({ length: TRACK_DOTS }).map((_, i) => {
            const isFilled = (i / TRACK_DOTS) * 100 < pct;
            return (
              <span
                key={i}
                className={cn(
                  "h-3 min-w-0 flex-1 rounded-full transition-colors",
                  isFilled ? "bg-foreground" : "bg-muted",
                )}
              />
            );
          })}
        </div>

        <AnimatePresence>
          {showFork && (
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            >
              <path
                d={(() => {
                  const ball = {
                    x: anchorRef.current.x + pull.dx,
                    y: anchorRef.current.y + pull.dy,
                  };
                  const end = {
                    x: (targetPct / 100) * widthRef.current,
                    y: anchorRef.current.y,
                  };
                  const control = arcControl(ball.x, ball.y, end.x, end.y);
                  return `M ${ball.x} ${ball.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
                })()}
                fill="none"
                className="stroke-muted-foreground/40"
                strokeWidth={1}
                strokeDasharray="3 3"
              />
              <motion.line
                x1={anchorRef.current.x - 4}
                y1={anchorRef.current.y}
                x2={dotX}
                y2={dotY}
                className="stroke-primary"
                strokeOpacity={0.6}
                strokeWidth={1}
              />
              <motion.line
                x1={anchorRef.current.x + 4}
                y1={anchorRef.current.y}
                x2={dotX}
                y2={dotY}
                className="stroke-primary"
                strokeOpacity={0.6}
                strokeWidth={1}
              />
            </motion.svg>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${targetPct}%` }}
            >
              <span className="mb-1 -translate-y-3 text-xs tabular-nums text-primary">
                {displayValue}
                {unit}
              </span>
              <span className="h-2.5 w-px bg-primary" />
            </motion.div>
          )}
        </AnimatePresence>

        {landed > 0 && (
          <motion.span
            key={landed}
            initial={{ opacity: 0.5, scale: 0.6 }}
            animate={{ opacity: 0, scale: 2.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{ left: `${pct}%` }}
          />
        )}

        <motion.div
          className={cn(
            "absolute -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-background transition-colors duration-150",
            isDragging
              ? "size-3.5 bg-primary cursor-grabbing"
              : "size-2.5 bg-foreground cursor-grab",
          )}
          style={{ left: dotX, top: dotY }}
        />
      </div>
    </div>
  );
}

export default function Slider07Demo() {
  return (
    <Slider07
      min={0}
      max={100}
      step={1}
      defaultValue={45}
      label="Launch power"
      unit="%"
    />
  );
}
