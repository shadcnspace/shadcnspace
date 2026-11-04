"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Card Expiry Input Mask";

const formatExpiry = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const CardExpiryInputMask = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatExpiry(e.target.value));
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="expiry-input">Expiry Date</Label>
      <div className="relative">
        <CreditCard className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="expiry-input"
          className="bg-background pl-9"
          placeholder="MM/YY"
          value={value}
          onChange={handleChange}
          inputMode="numeric"
          maxLength={5}
        />
      </div>
    </div>
  );
};

export default CardExpiryInputMask;
