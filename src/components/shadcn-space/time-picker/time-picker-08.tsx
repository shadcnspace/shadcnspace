"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent, type ReactNode } from "react";
import { AlarmClockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type Mode = "hour" | "minute";
type Time = { hour: number; minute: number; period: string };

// Ring geometry in a 240 x 240 viewBox
const CENTER = 120;
const RADIUS = 100;
const TRACK = 8;
const LABEL_RADIUS = 74;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const pad = (value: number) => String(value).padStart(2, "0");
const formatTime = (time: Time) => `${pad(time.hour)}:${pad(time.minute)} ${time.period}`;

// Point on a circle for a 0 to 1 fraction, starting at 12 o'clock and going clockwise
const pointAt = (fraction: number, radius: number) => {
  const angle = fraction * 2 * Math.PI;
  return {
    x: CENTER + radius * Math.sin(angle),
    y: CENTER - radius * Math.cos(angle),
  };
};

type AnalogClockProps = {
  initial: Time;
  title: ReactNode;
  onCancel: () => void;
  onSet: (time: Time) => void;
};

const AnalogClock = ({ initial, title, onCancel, onSet }: AnalogClockProps) => {
  const [mode, setMode] = useState<Mode>("hour");
  const [hour, setHour] = useState(initial.hour);
  const [minute, setMinute] = useState(initial.minute);
  const [period, setPeriod] = useState<string[]>([initial.period]);
  const [dragging, setDragging] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);

  // Hour 12 fills the whole ring, minute 0 leaves it empty
  const fraction = mode === "hour" ? hour / 12 : minute / 60;

  const setFromSteps = (steps: number) => {
    if (mode === "hour") {
      const next = ((steps % 12) + 12) % 12;
      setHour(next === 0 ? 12 : next);
    } else {
      setMinute(((steps % 60) + 60) % 60);
    }
  };

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = ringRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const degrees = ((Math.atan2(dx, -dy) * 180) / Math.PI + 360) % 360;
    setFromSteps(Math.round(degrees / (mode === "hour" ? 30 : 6)));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromPointer(event);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging) updateFromPointer(event);
  };

  const handlePointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (mode === "hour") setMode("minute");
  };

  const handleKnobKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = mode === "hour" ? hour : minute;
    const steps: Record<string, number> = {
      ArrowUp: 1,
      ArrowRight: 1,
      ArrowDown: -1,
      ArrowLeft: -1,
      PageUp: 5,
      PageDown: -5,
    };
    if (!(event.key in steps)) return;
    event.preventDefault();
    setFromSteps(current + steps[event.key]);
  };

  const labels = Array.from({ length: 12 }, (_, index) => {
    const value = mode === "hour" ? (index === 0 ? 12 : index) : index * 5;
    const active = mode === "hour" ? value === hour : value === minute;
    return { index, text: mode === "hour" ? String(value) : pad(value), active, ...pointAt(index / 12, LABEL_RADIUS) };
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-4 p-5">
        <div className="self-start text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {title}
        </div>

        <div
          ref={ringRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative size-60 cursor-pointer touch-none select-none"
        >
          <svg aria-hidden="true" viewBox="0 0 240 240" className="absolute inset-0 size-full">
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" strokeWidth={TRACK} className="stroke-muted" />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              strokeWidth={TRACK}
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={CIRCUMFERENCE * (1 - fraction)}
              transform={`rotate(-90 ${CENTER} ${CENTER})`}
              className={cn(
                "stroke-primary",
                !dragging && "transition-all duration-300 ease-out motion-reduce:transition-none"
              )}
            />
            {labels.map((label) => (
              <text
                key={label.index}
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={cn(
                  "text-xs tabular-nums transition-colors",
                  label.active ? "fill-foreground font-semibold" : "fill-muted-foreground"
                )}
              >
                {label.text}
              </text>
            ))}
          </svg>

          {/* Knob rides on a rotating layer so it always travels along the ring */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0",
              !dragging && "transition-transform duration-300 ease-out motion-reduce:transition-none"
            )}
            style={{ transform: `rotate(${fraction * 360}deg)` }}
          >
            <div
              role="slider"
              tabIndex={0}
              aria-label={mode === "hour" ? "Hour" : "Minute"}
              aria-valuemin={mode === "hour" ? 1 : 0}
              aria-valuemax={mode === "hour" ? 12 : 59}
              aria-valuenow={mode === "hour" ? hour : minute}
              aria-valuetext={`${pad(hour)}:${pad(minute)} ${period[0]}`}
              onKeyDown={handleKnobKeyDown}
              className="absolute top-1/12 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary bg-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>

          {/* Center readout, taps here edit the mode instead of moving the knob */}
          <div
            onPointerDown={(event) => event.stopPropagation()}
            className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-default flex-col items-center gap-2"
          >
            <div className="flex items-center">
              {(["hour", "minute"] as const).map((segment, index) => (
                <div key={segment} className="flex items-center">
                  {index === 1 && (
                    <span aria-hidden="true" className="text-2xl font-semibold text-muted-foreground">
                      :
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    aria-label={segment === "hour" ? `Edit hour, ${hour}` : `Edit minute, ${pad(minute)}`}
                    aria-pressed={mode === segment}
                    onClick={() => setMode(segment)}
                    className={cn(
                      "h-9 cursor-pointer px-1 text-2xl font-semibold tabular-nums hover:bg-transparent",
                      mode === segment ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {pad(segment === "hour" ? hour : minute)}
                  </Button>
                </div>
              ))}
            </div>
            <ToggleGroup
              aria-label="AM or PM"
              value={period}
              onValueChange={(value) => {
                if (value && value.length > 0) setPeriod(value);
              }}
              className="gap-0 overflow-hidden rounded-md border border-border"
            >
              {["AM", "PM"].map((value) => (
                <ToggleGroupItem
                  key={value}
                  value={value}
                  className="h-5 cursor-pointer rounded-none px-2 text-xs font-medium aria-pressed:bg-primary aria-pressed:text-primary-foreground"
                >
                  {value}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        <p aria-live="polite" className="text-sm text-muted-foreground">
          {mode === "hour" ? "Drag the ring to pick the hour" : "Now drag to pick the minutes"}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
        <Button variant="outline" className="cursor-pointer" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          className="cursor-pointer tabular-nums"
          onClick={() => onSet({ hour, minute, period: period[0] })}
        >
          Set {pad(hour)}:{pad(minute)} {period[0]}
        </Button>
      </div>
    </div>
  );
};

export default function TimePicker08() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<Time>({ hour: 7, minute: 30, period: "AM" });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="h-auto w-full max-w-xs cursor-pointer justify-start gap-4 rounded-xl p-4 text-left"
          />
        }
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
          <AlarmClockIcon className="size-5" />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-xs font-normal text-muted-foreground">Wake up alarm</span>
          <span className="text-2xl font-semibold tabular-nums text-foreground">
            {formatTime(time)}
          </span>
        </span>
        <span className="ms-auto text-xs font-normal text-muted-foreground">Edit</span>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="w-auto gap-0 overflow-hidden p-0 sm:max-w-none">
        <AnalogClock
          initial={time}
          title={<DialogTitle className="text-xs font-medium">Set alarm</DialogTitle>}
          onCancel={() => setOpen(false)}
          onSet={(next) => {
            setTime(next);
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
