"use client";

import { useId, useState } from "react";
import { CreditCard, Landmark, Wallet } from "lucide-react";
import { motion } from "motion/react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const methods = [
  {
    value: "card",
    label: "Credit card",
    description: "Visa, Mastercard, Amex",
    icon: CreditCard,
    color: "bg-teal-400/10 text-teal-400",
  },
  {
    value: "wallet",
    label: "Digital wallet",
    description: "Apple Pay, Google Pay",
    icon: Wallet,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    value: "bank",
    label: "Bank transfer",
    description: "2-3 business days",
    icon: Landmark,
    color: "bg-orange-400/10 text-orange-400",
  },
];

const RadioGroupHopDemo = () => {
  const id = useId();
  const [value, setValue] = useState("card");

  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => setValue(value as string)}
      className="w-full max-w-sm gap-2"
    >
      {methods.map((method) => {
        const checked = value === method.value;
        const itemId = `${id}-${method.value}`;
        const Icon = method.icon;

        return (
          <Label
            key={method.value}
            htmlFor={itemId}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors",
              checked
                ? "border-primary bg-primary/5"
                : "border-input hover:bg-accent  dark:hover:bg-accent/40",
            )}
          >
            {/* docking slot: a marker hops here from whichever row was previously selected */}
            <span className="relative flex size-5 shrink-0 items-center justify-center">
              <RadioGroupItem
                id={itemId}
                value={method.value}
                className="size-5 data-checked:bg-transparent! **:data-[slot=radio-group-indicator]:hidden"
              />
              {checked && (
                <motion.span
                  layoutId={`${id}-hop`}
                  className="bg-primary pointer-events-none absolute inset-1 rounded-full"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                />
              )}
            </span>

            <motion.span
              animate={{ x: checked ? [0, 4, 0] : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-md",
                checked
                  ? method.color
                  : "bg-foreground/10 text-muted-foreground",
              )}
            >
              <Icon className="size-4" />
            </motion.span>

            <span className="grid gap-0.5">
              <span className="text-sm leading-none font-medium">
                {method.label}
              </span>
              <span className="text-muted-foreground text-xs">
                {method.description}
              </span>
            </span>
          </Label>
        );
      })}
    </RadioGroup>
  );
};

export default RadioGroupHopDemo;
