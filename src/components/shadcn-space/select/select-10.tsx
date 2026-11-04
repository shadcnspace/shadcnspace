"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HOURS = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const MINUTES = Array.from({ length: 12 }, (_, i) =>
  String(i * 5).padStart(2, "0"),
);
const PERIODS = ["AM", "PM"] as const;

const PRESETS = [
  { label: "Sunrise", hour: "06", minute: "00", period: "AM" },
  { label: "Midday", hour: "12", minute: "00", period: "PM" },
  { label: "Sunset", hour: "06", minute: "00", period: "PM" },
  { label: "Midnight", hour: "12", minute: "00", period: "AM" },
] as const;

function Digit({ value }: { value: string }) {
  return (
    <span className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          className="absolute"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const SelectTimePickerDemo = () => {
  const hourId = useId();
  const minuteId = useId();
  const periodId = useId();

  const [hour, setHour] = useState("04");
  const [minute, setMinute] = useState("15");
  const [period, setPeriod] = useState<(typeof PERIODS)[number]>("PM");
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const isDay =
    period === "AM" ? Number(hour) >= 6 && Number(hour) < 12 : Number(hour) < 6;

  const greeting = useMemo(() => {
    const h24 = period === "AM" ? Number(hour) % 12 : (Number(hour) % 12) + 12;
    if (h24 < 6 || h24 >= 21) return "Quiet hours";
    if (h24 < 12) return "Morning slot";
    if (h24 < 17) return "Afternoon slot";
    return "Evening slot";
  }, [hour, period]);

  const applyPreset = (preset: (typeof PRESETS)[number]) => {
    setHour(preset.hour);
    setMinute(preset.minute);
    setPeriod(preset.period);
    setActivePreset(preset.label);
  };

  return (
    <div className="w-full max-w-xs space-y-4">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5">
        <motion.div
          animate={{
            boxShadow: isDay
              ? "0 0 0 1px color-mix(in srgb, var(--color-amber-300) 25%, transparent), 0 0 24px -4px color-mix(in srgb, var(--color-amber-300) 35%, transparent)"
              : "0 0 0 1px color-mix(in srgb, var(--color-blue-500) 25%, transparent), 0 0 24px -4px color-mix(in srgb, var(--color-blue-500) 35%, transparent)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5"
        >
          <Select value={hour} onValueChange={(val) => val && setHour(val)}>
            <SelectTrigger
              id={hourId}
              size="sm"
              className="w-auto gap-1 rounded-full border-none bg-transparent dark:bg-transparent dark:hover:bg-transparent px-1.5 py-0 shadow-none focus-visible:ring-0 [&_svg]:size-3"
            >
              <SelectValue>
                <Digit value={hour} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="min-w-16" align="center">
              {HOURS.map((h) => (
                <SelectItem
                  key={h}
                  value={h}
                  className="justify-center pr-1.5 text-center"
                >
                  {h}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm font-semibold text-muted-foreground"
          >
            :
          </motion.span>

          <Select value={minute} onValueChange={(val) => val && setMinute(val)}>
            <SelectTrigger
              id={minuteId}
              size="sm"
              className="w-auto gap-1 rounded-full border-none bg-transparent dark:bg-transparent dark:hover:bg-transparent px-1.5 py-0 shadow-none focus-visible:ring-0 [&_svg]:size-3"
            >
              <SelectValue>
                <Digit value={minute} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="min-w-16" align="center">
              {MINUTES.map((m) => (
                <SelectItem
                  key={m}
                  value={m}
                  className="justify-center pr-1.5 text-center"
                >
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={period}
            onValueChange={(val) =>
              val && setPeriod(val as (typeof PERIODS)[number])
            }
          >
            <SelectTrigger
              id={periodId}
              size="sm"
              className="w-auto gap-1 rounded-full border-none bg-transparent dark:bg-transparent dark:hover:bg-transparent px-1.5 py-0 shadow-none focus-visible:ring-0 [&_svg]:size-3"
            >
              <SelectValue>
                <span className="relative inline-flex h-5 w-7 items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={period}
                      initial={{ y: 14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -14, opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute font-medium"
                    >
                      {period}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="min-w-16" align="center">
              {PERIODS.map((p) => (
                <SelectItem
                  key={p}
                  value={p}
                  className="justify-center pr-1.5 text-center"
                >
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={greeting}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-xs text-muted-foreground"
          >
            {greeting}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5">
        {PRESETS.map((preset) => (
          <Button
            key={preset.label}
            type="button"
            size="xs"
            variant="outline"
            onClick={() => applyPreset(preset)}
            className={cn(
              "rounded-full text-xs",
              activePreset === preset.label
                ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/15"
                : "text-muted-foreground",
            )}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SelectTimePickerDemo;
