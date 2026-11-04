"use client";

import { useState } from "react";
import { RocketIcon } from "lucide-react";
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

export default function Alert09() {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        <RocketIcon />
        Publish Changes
      </AlertDialogTrigger>
      <AlertDialogContent className="gap-0 overflow-hidden border border-border p-0 ring-0 duration-300 data-open:slide-in-from-bottom-8 data-closed:slide-out-to-bottom-8 max-sm:top-auto max-sm:bottom-6 max-sm:translate-y-0">
        <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-teal-400/15 text-teal-400">
            <RocketIcon className="size-6" />
          </span>
          <div className="flex flex-col gap-1.5">
            <AlertDialogTitle className="text-lg font-semibold">
              Publish your changes?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your site will go live for everyone. You can roll back to the
              previous version at any time.
            </AlertDialogDescription>
          </div>
          <div className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-sm">
            <span className="text-muted-foreground">Changes</span>
            <span className="font-medium text-foreground">
              3 pages, 2 components
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Publish
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
