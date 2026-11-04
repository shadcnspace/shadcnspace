"use client";

import { useState } from "react";
import { ArchiveIcon, CheckIcon, RotateCcwIcon } from "lucide-react";
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
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "done";

export default function Alert13() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const done = status === "done";

  const handleOpenChange = (next: boolean) => {
    // Keep the dialog open while the action is running
    if (status === "loading") return;
    if (next) setStatus("idle");
    setOpen(next);
  };

  const handleArchive = () => {
    setStatus("loading");
    // Replace with your API call
    setTimeout(() => setStatus("done"), 1500);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        <ArchiveIcon />
        Archive Workspace
      </AlertDialogTrigger>
      <AlertDialogContent className="gap-0 overflow-hidden border border-border p-0 ring-0 duration-200 data-open:zoom-in-95">
        <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-6 text-center">
          <span
            className={cn(
              "flex size-14 items-center justify-center rounded-full transition-colors duration-300",
              done ? "bg-teal-400/15 text-teal-400" : "bg-sky-400/15 text-sky-400"
            )}
          >
            {done ? (
              <CheckIcon className="size-6 animate-in zoom-in-50 duration-300" />
            ) : (
              <ArchiveIcon className="size-6" />
            )}
          </span>
          <div className="flex flex-col gap-1.5" aria-live="polite">
            <AlertDialogTitle className="text-lg font-semibold">
              {done ? "Workspace archived" : "Archive this workspace?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {done
                ? "Members no longer have access. You can restore it from settings."
                : "Members will lose access to all projects and files in this workspace."}
            </AlertDialogDescription>
          </div>
          {!done && (
            <div className="flex w-full items-center gap-2.5 rounded-lg border border-border px-3 py-2 text-left text-sm">
              <RotateCcwIcon
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground"
              />
              <span className="text-muted-foreground">
                Restore it anytime within 30 days
              </span>
            </div>
          )}
        </div>
        <div className="border-t border-border p-4">
          {done ? (
            <AlertDialogAction
              className="w-full cursor-pointer"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </AlertDialogAction>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <AlertDialogCancel
                className="cursor-pointer"
                disabled={status === "loading"}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className="cursor-pointer"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
                onClick={handleArchive}
              >
                {status === "loading" && <Spinner />}
                {status === "loading" ? "Archiving" : "Archive"}
              </AlertDialogAction>
            </div>
          )}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
