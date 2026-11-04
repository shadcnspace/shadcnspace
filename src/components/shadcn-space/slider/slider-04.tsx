"use client";

import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { Slider } from "@/components/ui/slider";

function SliderDemo() {
  const [value, setValue] = useState<number[]>([28.1]);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xl font-semibold tracking-tight text-foreground">
          Volume
        </p>
        <div className="text-xl font-medium text-foreground">
          <NumberFlow
            value={value[0]}
            format={{ minimumFractionDigits: 1, maximumFractionDigits: 1 }}
          />
          <span className="ml-0.5">%</span>
        </div>
      </div>

      <Slider
        className="h-10 **:data-[slot=slider-track]:h-10 **:data-[slot=slider-track]:rounded-xl **:data-[slot=slider-track]:border **:data-[slot=slider-track]:border-border **:data-[slot=slider-track]:bg-muted **:data-[slot=slider-track]:shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)] **:data-[slot=slider-track]:ring-1 **:data-[slot=slider-track]:ring-background **:data-[slot=slider-track]:ring-inset **:data-[slot=slider-range]:h-full **:data-[slot=slider-range]:ml-0.5 **:data-[slot=slider-range]:mr-0.5 **:data-[slot=slider-range]:overflow-hidden **:data-[slot=slider-range]:rounded-lg **:data-[slot=slider-range]:border **:data-[slot=slider-range]:border-border **:data-[slot=slider-range]:bg-foreground **:data-[slot=slider-range]:shadow-xs **:data-[slot=slider-thumb]:h-7 **:data-[slot=slider-thumb]:w-[3px] **:data-[slot=slider-thumb]:rounded-xl **:data-[slot=slider-thumb]:border-0 **:data-[slot=slider-thumb]:bg-muted **:data-[slot=slider-thumb]:shadow-none **:data-[slot=slider-thumb]:cursor-ew-resize **:data-[slot=slider-thumb]:transform-[translateX(-8px)] **:data-[slot=slider-thumb]:ring-0 **:data-[slot=slider-thumb]:hover:ring-0 **:data-[slot=slider-thumb]:focus-visible:ring-0"
        value={value}
        onValueChange={(val) => setValue(Array.isArray(val) ? val : [val])}
        min={0}
        max={100}
        step={0.1}
        aria-label="Volume"
      />
    </div>
  );
}

export default SliderDemo;
