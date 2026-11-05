"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type Status = "idle" | "saving" | "saved" | "error";

// Stand-in for a network request. Every third save fails so the error path is visible.
let attempt = 0;
const saveSetting = (value: boolean) =>
  new Promise<boolean>((resolve, reject) => {
    attempt += 1;
    setTimeout(() => (attempt % 3 === 0 ? reject(new Error("Network error")) : resolve(value)), 900);
  });

const SwitchDemo = () => {
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleChange = async (next: boolean) => {
    const previous = enabled;
    setEnabled(next);
    setStatus("saving");
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await saveSetting(next);
      setStatus("saved");
      resetTimer.current = setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setEnabled(previous);
      setStatus("error");
    }
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="two-factor">Two-factor authentication</Label>
          <p className="text-sm text-muted-foreground">
            Ask for a code from your authenticator app when signing in.
          </p>
        </div>
        <Switch
          id="two-factor"
          checked={enabled}
          onCheckedChange={handleChange}
          disabled={status === "saving"}
          aria-describedby="two-factor-status"
        />
      </div>
      <p
        id="two-factor-status"
        aria-live="polite"
        className={cn(
          "flex min-h-4 items-center gap-1.5 text-xs",
          status === "error" ? "text-destructive" : "text-muted-foreground",
        )}
      >
        {status === "saving" && (
          <>
            <Spinner className="size-3" aria-hidden="true" />
            Saving...
          </>
        )}
        {status === "saved" && (
          <>
            <Check className="size-3 text-teal-400" aria-hidden="true" />
            {enabled ? "Two-factor authentication is on" : "Two-factor authentication is off"}
          </>
        )}
        {status === "error" && (
          <>
            <AlertCircle className="size-3" aria-hidden="true" />
            Could not save. Your setting was not changed. Try again.
          </>
        )}
      </p>
    </div>
  );
};

export default SwitchDemo;
