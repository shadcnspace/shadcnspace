"use client";

import React, { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  max?: number;
  lowLabel?: string;
  highLabel?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export function Rating03({
  value,
  defaultValue,
  onValueChange,
  max = 10,
  lowLabel = "Extremely difficult",
  highLabel = "Extremely easy",
  readOnly = false,
  disabled = false,
  className,
  ...props
}: RatingProps) {
  const name = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const isInteractive = !readOnly && !disabled;

  const commitValue = (next: number) => {
    if (!isControlled) setInternalValue(next);
    onValueChange?.(next);
  };

  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{lowLabel}</span>
        <span>{highLabel}</span>
      </div>

      <div
        role="radiogroup"
        aria-label={`Rating: ${currentValue ?? "none"} out of ${max}`}
        aria-disabled={disabled || undefined}
        className={cn(
          "flex items-center justify-between gap-1",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {Array.from({ length: max + 1 }, (_, index) => {
          const isSelected = currentValue === index;

          return (
            <label
              key={index}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <span className="text-sm text-muted-foreground">{index}</span>
              <input
                type="radio"
                name={name}
                value={index}
                checked={isSelected}
                disabled={disabled}
                readOnly={readOnly}
                onChange={() => isInteractive && commitValue(index)}
                aria-label={`${index} out of ${max}`}
                className={cn(
                  "size-5 shrink-0 appearance-none rounded-full border-2 border-muted-foreground/40 transition-colors",
                  "checked:border-emerald-600 checked:bg-emerald-600",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isInteractive && "cursor-pointer hover:border-emerald-600/70",
                )}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}

const RatingDemo = () => {
  const [score, setScore] = useState<number | undefined>(undefined);
  const [language, setLanguage] = useState("English");

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-10">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-foreground md:text-2xl">
          Help us improve your experience
        </h2>

        <Select value={language} onValueChange={(val) => val && setLanguage(val)}>
          <SelectTrigger className="w-28 shrink-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="English">English</SelectItem>
            <SelectItem value="Spanish">Spanish</SelectItem>
            <SelectItem value="French">French</SelectItem>
            <SelectItem value="German">German</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <p className="mt-8 text-base text-foreground">
        How easy are we to do business with?
      </p>

      <Rating03 className="mt-6" value={score} onValueChange={setScore} />

      <div className="mt-10 flex justify-end">
        <Button className="rounded-lg bg-emerald-700 px-6 text-primary-foreground hover:bg-emerald-800">
          Done
        </Button>
      </div>
    </div>
  );
};

export default RatingDemo;
