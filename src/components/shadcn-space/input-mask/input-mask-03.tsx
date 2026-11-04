"use client";

import { useState } from "react";
import { Wifi } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "MAC Address Input Mask";

const formatMac = (value: string): string => {
  const hex = value.replace(/[^0-9a-fA-F]/g, "").slice(0, 12).toUpperCase();
  return hex.match(/.{1,2}/g)?.join(":") ?? hex;
};

const MacAddressInputMask = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatMac(e.target.value));
  };

  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="mac-input">MAC Address</Label>
      <div className="relative">
        <Wifi className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="mac-input"
          className="bg-background pl-9 font-mono"
          placeholder="00:1B:44:11:3A:B7"
          value={value}
          onChange={handleChange}
          maxLength={17}
        />
      </div>
    </div>
  );
};

export default MacAddressInputMask;
