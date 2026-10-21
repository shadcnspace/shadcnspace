"use client";

import { useEffect, useRef, useState } from "react";
import { KeyRoundIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Must match the duration-1000 class on the fill
const HOLD_DURATION = 1000;

export default function Alert11() {
  const [open, setOpen] = useState(false);
  const [holding, setHolding] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopHold = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setHolding(false);
  };

  const startHold = () => {
    if (timer.current) return;
    setHolding(true);
    timer.current = setTimeout(() => {
      stopHold();
      setOpen(false);
    }, HOLD_DURATION);
  };

  useEffect(() => () => stopHold(), []);

  return (
    <AlertDialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) stopHold();
      }}
    >
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        <KeyRoundIcon />
        Revoke Key
      </AlertDialogTrigger>
      <AlertDialogContent
        size="sm"
        className="gap-0 overflow-hidden border border-border p-0 ring-0"
      >
        <div className="flex flex-col items-center gap-4 px-5 pt-6 pb-5 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-orange-400/15 text-orange-400">
            <KeyRoundIcon className="size-5" />
          </span>
          <div className="flex flex-col gap-1.5">
            <AlertDialogTitle className="text-base font-semibold">
              Revoke API key?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Apps using this key will stop working immediately.
            </AlertDialogDescription>
          </div>
          <code className="w-full rounded-lg border border-border px-3 py-2 font-mono text-sm text-foreground">
            sk_live_••••4f2a
          </code>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            className="relative cursor-pointer overflow-hidden select-none"
            onPointerDown={startHold}
            onPointerUp={stopHold}
            onPointerLeave={stopHold}
            onPointerCancel={stopHold}
            onKeyDown={(event) => {
              if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                if (!event.repeat) startHold();
              }
            }}
            onKeyUp={(event) => {
              if (event.key === " " || event.key === "Enter") stopHold();
            }}
            onClick={(event) => event.preventDefault()}
          >
            {/* Fill that sweeps across while the button is held */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0 origin-left bg-destructive/25 transition-transform",
                holding
                  ? "scale-x-100 duration-1000 ease-linear"
                  : "scale-x-0 duration-200 ease-out"
              )}
            />
            <span className="relative">Hold to revoke</span>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
