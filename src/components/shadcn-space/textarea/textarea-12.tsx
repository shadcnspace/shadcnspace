"use client";

import { useEffect, useRef, useState } from "react";
import { Check, CloudOff, Loader2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "typing" | "saving" | "saved";

const DEBOUNCE_MS = 800;

const TextareaDemo = () => {
  const [value, setValue] = useState("Meeting notes for the Q4 kickoff:\n\n");
  const [status, setStatus] = useState<Status>("idle");
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const save = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (debounce.current) clearTimeout(debounce.current);
      if (save.current) clearTimeout(save.current);
    },
    [],
  );

  // Refresh the "saved x seconds ago" label.
  useEffect(() => {
    if (!savedAt) return;
    const id = setInterval(() => setNow(Date.now()), 5000);
    return () => clearInterval(id);
  }, [savedAt]);

  const handleChange = (next: string) => {
    setValue(next);
    setStatus("typing");
    if (debounce.current) clearTimeout(debounce.current);
    if (save.current) clearTimeout(save.current);
    debounce.current = setTimeout(() => {
      setStatus("saving");
      save.current = setTimeout(() => {
        setStatus("saved");
        setSavedAt(new Date());
        setNow(Date.now());
      }, 600);
    }, DEBOUNCE_MS);
  };

  const ago = savedAt ? Math.max(0, Math.round((now - savedAt.getTime()) / 1000)) : 0;
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="notes">Notes</Label>
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-live="polite">
          {status === "typing" && (
            <>
              <CloudOff className="size-3.5" aria-hidden="true" />
              Unsaved changes
            </>
          )}
          {status === "saving" && (
            <>
              <Loader2 className="size-3.5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              Saving
            </>
          )}
          {status === "saved" && (
            <>
              <Check className="size-3.5 text-teal-400" aria-hidden="true" />
              {ago < 5 ? "Saved just now" : ago < 60 ? `Saved ${ago}s ago` : `Saved ${Math.floor(ago / 60)}m ago`}
            </>
          )}
          {status === "idle" && "Changes save automatically"}
        </p>
      </div>
      <Textarea
        id="notes"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        className="min-h-40"
      />
      <p className="text-right text-xs text-muted-foreground tabular-nums">
        {words} {words === 1 ? "word" : "words"}, about {Math.max(1, Math.ceil(words / 200))} min read
      </p>
    </div>
  );
};

export default TextareaDemo;
