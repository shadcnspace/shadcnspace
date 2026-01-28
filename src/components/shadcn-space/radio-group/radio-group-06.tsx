"use client";

import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const RadioGroupListGroupDemo = () => {
  const id = useId();
  type PlanType = "1" | "2" | "3";
  const [value, setValue] = useState<PlanType>("2");

  const items = [
    { value: "1", label: "Pro", price: "$39/mo" },
    { value: "2", label: "Team", price: "$69/mo" },
    { value: "3", label: "Enterprise", price: "Custom" },
  ];

  return (
    <RadioGroup
      value={value}
      onValueChange={(value) => setValue(value as PlanType)}
      className="w-full max-w-96 gap-0 -space-y-px rounded-md shadow-xs"
    >
      {items.map((item) => (
        <div
          key={`${id}-${item.value}`}
          onClick={() => setValue(item.value as PlanType)}
          className={cn(
            "border-input relative flex cursor-pointer flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md",
            value === item.value && "bg-accent border-border z-10",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label
                htmlFor={`${id}-${item.value}`}
                className="flex items-center gap-2 cursor-pointer font-semibold"
              >
                {item.label}
                <Badge
                  id={`${id}-${item.value}-price`}
                  className="text-xs font-normal bg-blue-500/10 text-blue-500"
                >
                  {item.price}
                </Badge>
              </Label>
            </div>

            <RadioGroupItem
              id={`${id}-${item.value}`}
              value={item.value}
              className="pointer-events-none"
              aria-describedby={`${id}-${item.value}-price`}
            />
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupListGroupDemo;
