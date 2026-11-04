"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const options = [
  {
    value: "instant",
    title: "Instant",
    description: "Notify me the moment something happens.",
  },
  {
    value: "daily",
    title: "Daily digest",
    description: "One summary email every day.",
  },
  {
    value: "off",
    title: "Off",
    description: "Don't send me any notifications.",
  },
];

const RadioGroupRippleDemo = () => {
  const id = useId();
  const [value, setValue] = useState("daily");

  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => setValue(value as string)}
      className="w-full max-w-sm gap-2"
    >
      {options.map((option) => {
        const checked = value === option.value;
        const itemId = `${id}-${option.value}`;

        return (
          <motion.div
            key={option.value}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-lg"
          >
            <Label
              htmlFor={itemId}
              className={cn(
                "relative flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors",
                checked
                  ? "border-primary bg-primary/5"
                  : "border-input hover:bg-accent dark:hover:bg-accent/40",
              )}
            >
              <AnimatePresence>
                {checked && (
                  <motion.span
                    key="ripple"
                    className="bg-primary/40 pointer-events-none absolute top-2 left-2 size-6 rounded-full"
                    initial={{ scale: 0, opacity: 0.6 }}
                    animate={{ scale: 6, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>

              <RadioGroupItem
                value={option.value}
                id={itemId}
                className="mt-0.5"
              />

              <div className="grid gap-0.5">
                <span className="text-sm leading-none font-medium">
                  {option.title}
                </span>
                <span className="text-muted-foreground text-xs">
                  {option.description}
                </span>
              </div>
            </Label>
          </motion.div>
        );
      })}
    </RadioGroup>
  );
};

export default RadioGroupRippleDemo;
