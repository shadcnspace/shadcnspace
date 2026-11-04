"use client";

import { useState } from "react";
import { RefreshCw, Sparkles, XIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const AlertDemo = () => {
  const [state, setState] = useState<"visible" | "updating" | "hidden">("visible");

  if (state === "hidden") {
    return (
      <Button variant="outline" size="sm" onClick={() => setState("visible")}>
        <RefreshCw />
        Show alert again
      </Button>
    );
  }

  return (
    <Alert className="w-full max-w-md border-blue-500/30 p-4">
      <Sparkles className="text-blue-500!" />
      <AlertTitle className="pr-8">Version 2.4 is available</AlertTitle>
      <AlertDescription className="flex flex-col gap-3">
        <span>Faster builds, a new command palette, and 18 bug fixes. Updating takes about a minute.</span>
        <span className="flex gap-2">
          <Button
            size="sm"
            disabled={state === "updating"}
            onClick={() => {
              setState("updating");
              setTimeout(() => setState("hidden"), 1500);
            }}
          >
            {state === "updating" && <Spinner aria-hidden="true" />}
            {state === "updating" ? "Updating" : "Update now"}
          </Button>
          <Button size="sm" variant="ghost" disabled={state === "updating"} onClick={() => setState("hidden")}>
            Remind me later
          </Button>
        </span>
      </AlertDescription>
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setState("hidden")}
        className="absolute top-3 right-3 rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
      >
        <XIcon className="size-4" />
      </button>
    </Alert>
  );
};

export default AlertDemo;
