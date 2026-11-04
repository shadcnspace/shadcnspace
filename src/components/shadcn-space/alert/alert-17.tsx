"use client";

import { useState } from "react";
import { ArrowRight, Megaphone, XIcon } from "lucide-react";

const AlertDemo = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-border bg-background">
      {open && (
        <div
          role="region"
          aria-label="Announcement"
          className="flex items-center gap-3 bg-gray-950 px-4 py-2.5 text-sm text-white dark:bg-muted dark:text-foreground"
        >
          <Megaphone className="hidden size-4 shrink-0 text-amber-300 sm:block" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-center sm:text-left">
            <span className="font-medium">Launch week is live.</span>{" "}
            <span className="opacity-80">Five new features, one every day.</span>{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 font-medium underline-offset-4 transition-opacity hover:underline hover:opacity-90"
            >
              See what is new
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss announcement"
            className="shrink-0 rounded-sm p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-amber-300"
          >
            <XIcon className="size-4" />
          </button>
        </div>
      )}
      <div className="flex h-32 flex-col items-center justify-center gap-2 p-6 text-center">
        <p className="text-sm text-muted-foreground">Page content</p>
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Show banner again
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertDemo;
