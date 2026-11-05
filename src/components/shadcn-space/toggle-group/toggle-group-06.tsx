"use client";

import { useState } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

const ranges = {
  "24h": { label: "Last 24 hours", total: "1,284", change: 4.2, bars: [30, 42, 38, 55, 48, 62, 58, 70, 66, 74, 60, 68] },
  "7d": { label: "Last 7 days", total: "9,812", change: 12.6, bars: [40, 52, 48, 65, 72, 60, 84] },
  "30d": { label: "Last 30 days", total: "38,450", change: -3.1, bars: [70, 66, 72, 64, 58, 62, 55, 60, 52, 57, 50, 54] },
  "90d": { label: "Last 90 days", total: "121,906", change: 18.9, bars: [30, 36, 42, 40, 48, 55, 52, 61, 68, 72, 79, 88] },
} as const;

type Range = keyof typeof ranges;

const ToggleGroupDemo = () => {
  const [range, setRange] = useState<Range>("7d");
  const data = ranges[range];
  const up = data.change >= 0;

  return (
    <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-border bg-background p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Page views</p>
          <p className="text-2xl font-semibold text-foreground tabular-nums">{data.total}</p>
          <p className={cn("mt-0.5 flex items-center gap-1 text-xs", up ? "text-teal-400" : "text-orange-400")}>
            {up ? <TrendingUp className="size-3.5" aria-hidden="true" /> : <TrendingDown className="size-3.5" aria-hidden="true" />}
            <span className="tabular-nums">
              {up ? "+" : ""}
              {data.change}%
            </span>
            <span className="text-muted-foreground">vs previous period</span>
          </p>
        </div>
        <ToggleGroup
          variant="outline"
          size="sm"
          spacing={0}
          value={[range]}
          onValueChange={(value) => value[0] && setRange(value[0] as Range)}
          aria-label="Time range"
        >
          {(Object.keys(ranges) as Range[]).map((key) => (
            <ToggleGroupItem key={key} value={key} aria-label={ranges[key].label} className="tabular-nums">
              {key}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="flex h-28 items-end gap-1.5" role="img" aria-label={`${data.label} page views chart`}>
        {data.bars.map((height, index) => (
          <div
            key={`${range}-${index}`}
            className="flex-1 rounded-t-sm bg-blue-500/80 transition-all duration-300 hover:bg-blue-500 motion-reduce:transition-none"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{data.label}</p>
    </div>
  );
};

export default ToggleGroupDemo;
