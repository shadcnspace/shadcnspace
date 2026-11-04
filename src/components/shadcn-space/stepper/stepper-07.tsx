"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "upcoming" | "active" | "complete" | "skipped";

const steps = [
  { title: "Workspace", optional: false },
  { title: "Invite team", optional: true },
  { title: "Integrations", optional: true },
];

const integrations = ["GitHub", "Slack", "Figma", "Linear"];

export default function StepperDemo() {
  const [current, setCurrent] = useState(0);
  const [skipped, setSkipped] = useState<number[]>([]);
  const [workspace, setWorkspace] = useState("");
  const [emails, setEmails] = useState("");
  const [connected, setConnected] = useState<string[]>([]);

  const finished = current === steps.length;

  const statusOf = (index: number): Status => {
    if (index === current) return "active";
    if (skipped.includes(index)) return "skipped";
    if (index < current) return "complete";
    return "upcoming";
  };

  const goNext = (skip: boolean) => {
    setSkipped((list) => (skip ? [...new Set([...list, current])] : list.filter((item) => item !== current)));
    setCurrent(current + 1);
  };

  const canContinue =
    current === 0 ? workspace.trim().length > 1 : current === 1 ? emails.trim().length > 0 : connected.length > 0;

  return (
    <div className="flex w-full max-w-md flex-col gap-6 rounded-lg border border-border bg-background p-5">
      <ol className="grid grid-cols-3 gap-2">
        {steps.map((step, index) => {
          const status = statusOf(index);
          return (
            <li key={step.title} className="flex flex-col gap-2" aria-current={status === "active" ? "step" : undefined}>
              <span
                className={cn(
                  "h-1 rounded-full transition-colors",
                  status === "complete" && "bg-teal-400",
                  status === "active" && "bg-foreground",
                  status === "skipped" && "bg-amber-300",
                  status === "upcoming" && "bg-muted",
                )}
              />
              <button
                type="button"
                disabled={index >= current && !finished}
                onClick={() => setCurrent(index)}
                className="flex items-center gap-1.5 rounded text-left text-xs outline-none enabled:hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default"
              >
                {status === "complete" && <Check className="size-3.5 shrink-0 text-teal-400" aria-hidden="true" />}
                {status === "skipped" && <Minus className="size-3.5 shrink-0 text-amber-300" aria-hidden="true" />}
                <span className={cn("truncate", status === "active" ? "font-medium text-foreground" : "text-muted-foreground")}>
                  {step.title}
                </span>
              </button>
              <span className="text-xs text-muted-foreground">
                {status === "skipped" ? "Skipped" : step.optional ? "Optional" : "Required"}
              </span>
            </li>
          );
        })}
      </ol>

      {finished ? (
        <div className="flex flex-col gap-3">
          <p className="text-base font-medium text-foreground">{workspace || "Your workspace"} is ready</p>
          {skipped.length > 0 ? (
            <p className="text-sm text-muted-foreground">
              You skipped {skipped.map((index) => steps[index].title.toLowerCase()).join(" and ")}. You can finish
              {skipped.length > 1 ? " them" : " it"} any time from settings.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">Everything is set up. Time to build.</p>
          )}
          <div className="flex gap-2">
            {skipped.length > 0 && (
              <Button variant="outline" size="sm" onClick={() => setCurrent(Math.min(...skipped))}>
                Finish skipped steps
              </Button>
            )}
            <Button size="sm">Open workspace</Button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex min-h-28 flex-col gap-2">
            {current === 0 && (
              <>
                <Label htmlFor="workspace-name">Workspace name</Label>
                <Input id="workspace-name" value={workspace} onChange={(event) => setWorkspace(event.target.value)} placeholder="Acme Inc." />
                <p className="text-xs text-muted-foreground">This is the name your team will see.</p>
              </>
            )}
            {current === 1 && (
              <>
                <Label htmlFor="invite-emails">Invite by email</Label>
                <Input id="invite-emails" value={emails} onChange={(event) => setEmails(event.target.value)} placeholder="sam@acme.com, alex@acme.com" />
                <p className="text-xs text-muted-foreground">Separate multiple emails with commas.</p>
              </>
            )}
            {current === 2 && (
              <>
                <p className="text-sm font-medium text-foreground" id="integrations-label">Connect your tools</p>
                <div className="grid grid-cols-2 gap-2" role="group" aria-labelledby="integrations-label">
                  {integrations.map((name) => {
                    const on = connected.includes(name);
                    return (
                      <button
                        key={name}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setConnected((list) => (on ? list.filter((item) => item !== name) : [...list, name]))}
                        className={cn(
                          "flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                          on ? "border-teal-400 bg-teal-400/10 text-foreground" : "border-border text-foreground hover:bg-muted",
                        )}
                      >
                        {name}
                        {on && <Check className="size-3.5 text-teal-400" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-2">
            <Button variant="ghost" size="sm" disabled={current === 0} onClick={() => setCurrent(current - 1)}>
              Back
            </Button>
            <div className="flex gap-2">
              {steps[current].optional && (
                <Button variant="outline" onClick={() => goNext(true)}>
                  Skip
                </Button>
              )}
              <Button disabled={!canContinue} onClick={() => goNext(false)}>
                Continue
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
