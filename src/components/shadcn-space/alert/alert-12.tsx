"use client";

import { useState } from "react";
import { CheckIcon, TriangleAlertIcon } from "lucide-react";
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
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const REPO_NAME = "acme/dashboard";

export default function Alert12() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const matches = value === REPO_NAME;

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setValue("");
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        Delete Repository
      </AlertDialogTrigger>
      <AlertDialogContent className="gap-0 overflow-hidden border border-border p-0 ring-0 duration-200 data-open:zoom-in-95">
        <div className="flex flex-col gap-5 p-6">
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <TriangleAlertIcon className="size-5" />
            </span>
            <div className="flex flex-col gap-1 text-left">
              <AlertDialogTitle className="text-base font-semibold">
                Delete repository
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Please make sure this is the
                right repository.
              </AlertDialogDescription>
            </div>
          </div>

          <p className="rounded-lg bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
            <span className="font-semibold">{REPO_NAME}</span>, 248 issues and
            1,024 commits will be permanently deleted.
          </p>

          <Field>
            <FieldLabel htmlFor="alert-12-confirm" className="flex-wrap gap-1">
              Type
              <code className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                {REPO_NAME}
              </code>
              to confirm
            </FieldLabel>
            <div className="relative">
              <Input
                id="alert-12-confirm"
                value={value}
                autoComplete="off"
                spellCheck={false}
                className="pe-9 font-mono"
                aria-describedby="alert-12-status"
                onChange={(event) => setValue(event.target.value)}
              />
              <CheckIcon
                aria-hidden="true"
                className={cn(
                  "absolute top-1/2 right-3 size-4 -translate-y-1/2 text-teal-400 transition-all duration-200",
                  matches ? "scale-100 opacity-100" : "scale-50 opacity-0"
                )}
              />
            </div>
            <span id="alert-12-status" aria-live="polite" className="sr-only">
              {matches ? "Name matches, delete is enabled" : ""}
            </span>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            disabled={!matches}
            className={cn(
              "cursor-pointer transition-colors",
              matches &&
                "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive dark:hover:bg-destructive/90"
            )}
            onClick={() => handleOpenChange(false)}
          >
            Delete Repository
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
