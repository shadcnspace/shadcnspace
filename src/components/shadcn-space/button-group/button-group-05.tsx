"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "INR", symbol: "₹" },
];

export default function ButtonGroupCurrencyDemo() {
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup className="shadow-lg">
        <Button 
          className="bg-background hover:bg-muted font-bold h-9 w-10 p-0 text-base border border-border text-foreground cursor-pointer"
        >
          {currency.symbol}
        </Button>
        <ButtonGroupText className="bg-background border-x-0 font-mono font-medium min-w-24 justify-center text-lg h-9">
          1,499.00
        </ButtonGroupText>
        <Select 
          value={currency.code} 
          onValueChange={(value) => {
            const selected = currencies.find(c => c.code === value);
            if (selected) setCurrency(selected);
          }}
        >
          <SelectTrigger className="rounded-l-none h-9 min-w-20 font-bold cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            {currencies.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {c.code} ({c.symbol})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ButtonGroup>

      <div className="text-xs text-muted-foreground font-medium">
        Interactive Currency Selection
      </div>
    </div>
  );
}

