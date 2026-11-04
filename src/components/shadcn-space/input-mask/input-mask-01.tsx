"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Card Number Input Mask";

const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.match(/.{1,4}/g)?.join(" ") || digits;
};

const CardNumberInputMask = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatCardNumber(e.target.value));
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="card-input">Card Number</Label>
      <div className="relative">
        <CreditCard className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="card-input"
          className="bg-background pl-9"
          placeholder="0000 0000 0000 0000"
          value={value}
          onChange={handleChange}
          inputMode="numeric"
          maxLength={19}
        />
      </div>
    </div>
  );
};

export default CardNumberInputMask;

