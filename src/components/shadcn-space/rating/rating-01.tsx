"use client";

import React, {useState} from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
} as const;

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  allowHalf?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  size?: keyof typeof sizeClasses;
}

export function Rating({
  value,
  defaultValue = 0,
  onValueChange,
  max = 5,
  allowHalf = false,
  readOnly = false,
  disabled = false,
  size = "md",
  className,
  ...props
}: RatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const displayValue = hoverValue ?? currentValue;
  const isInteractive = !readOnly && !disabled;

  const commitValue = (next: number) => {
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  };

  const getValueFromPointer = (
    event: React.MouseEvent<HTMLButtonElement>,
    starIndex: number,
  ) => {
    if (!allowHalf) return starIndex + 1;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - left) / width;
    return percent <= 0.5 ? starIndex + 0.5 : starIndex + 1;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isInteractive) return;
    const step = allowHalf ? 0.5 : 1;

    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
      event.preventDefault();
      commitValue(Math.min(max, currentValue + step));
    } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
      event.preventDefault();
      commitValue(Math.max(0, currentValue - step));
    } else if (event.key === "Home") {
      event.preventDefault();
      commitValue(0);
    } else if (event.key === "End") {
      event.preventDefault();
      commitValue(max);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label={`Rating: ${currentValue} out of ${max}`}
      aria-disabled={disabled || undefined}
      className={cn(
        "inline-flex items-center gap-1",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      onMouseLeave={() => isInteractive && setHoverValue(null)}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {Array.from({ length: max }, (_, starIndex) => {
        const fillPercent =
          Math.min(Math.max(displayValue - starIndex, 0), 1) * 100;
        const isChecked = Math.ceil(currentValue) === starIndex + 1;
        const isFocusTarget =
          Math.max(Math.ceil(currentValue), 1) - 1 === starIndex;

        return (
          <button
            key={starIndex}
            type="button"
            role="radio"
            aria-checked={isChecked}
            aria-label={`${starIndex + 1} star${starIndex === 0 ? "" : "s"}`}
            tabIndex={isInteractive ? (isFocusTarget ? 0 : -1) : -1}
            disabled={disabled}
            className={cn(
              "relative rounded-sm outline-none transition-transform",
              isInteractive &&
                "cursor-pointer hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
            onMouseMove={(event) => {
              if (!isInteractive) return;
              setHoverValue(getValueFromPointer(event, starIndex));
            }}
            onClick={(event) => {
              if (!isInteractive) return;
              commitValue(getValueFromPointer(event, starIndex));
            }}
          >
            <Star
              className={cn(sizeClasses[size], "text-muted-foreground/30")}
            />
            <span
              className="absolute inset-0 top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercent}%` }}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  "fill-amber-400 text-amber-400",
                )}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}

const RatingDemo = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="flex flex-col items-center gap-3">
      <Rating value={rating} onValueChange={setRating} size="md" />
      <p className="text-sm text-muted-foreground">
        You rated{" "}
        <span className="font-medium text-foreground">{rating}</span> out of
        5
      </p>
    </div>
  );
};

export default RatingDemo;