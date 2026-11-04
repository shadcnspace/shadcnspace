"use client";

import { useEffect, useState } from "react";
import { GlobeIcon, KeyRoundIcon, RocketIcon, Trash2Icon } from "lucide-react";
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

const resources = [
  { label: "Deployments", count: 12, icon: RocketIcon },
  { label: "Domains", count: 2, icon: GlobeIcon },
  { label: "Environment variables", count: 8, icon: KeyRoundIcon },
];

export default function Alert10() {
  const [open, setOpen] = useState(false);
  const [armed, setArmed] = useState(false);

  // Go back to the first step if the second click does not come within 3 seconds
  useEffect(() => {
    if (!armed) return;
    const timer = setTimeout(() => setArmed(false), 3000);
    return () => clearTimeout(timer);
  }, [armed]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setArmed(false);
  };

  const handleDelete = () => {
    if (!armed) {
      setArmed(true);
      return;
    }
    handleOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer" />}
      >
        <Trash2Icon />
        Delete Project
      </AlertDialogTrigger>
      <AlertDialogContent className="gap-0 overflow-hidden border border-border p-0 ring-0 duration-200 data-open:zoom-in-90">
        <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-6 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <Trash2Icon className="size-6" />
          </span>
          <div className="flex flex-col gap-1.5">
            <AlertDialogTitle className="text-lg font-semibold">
              Delete acme-dashboard?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This project and everything in it will be permanently removed.
              This cannot be undone.
            </AlertDialogDescription>
          </div>
          <ul className="w-full divide-y divide-border rounded-lg border border-border text-sm">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <li
                  key={resource.label}
                  className="flex items-center gap-2.5 px-3 py-2"
                >
                  <Icon aria-hidden="true" className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{resource.label}</span>
                  <span className="ms-auto font-medium text-foreground">
                    {resource.count}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-2 border-t border-border p-4">
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={handleDelete}
            className={cn(
              "cursor-pointer transition-colors",
              armed &&
                "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive dark:hover:bg-destructive/90"
            )}
          >
            {armed ? "Click again to delete" : "Delete"}
          </AlertDialogAction>
        </div>
        <span aria-live="polite" className="sr-only">
          {armed ? "Press delete again to confirm" : ""}
        </span>
      </AlertDialogContent>
    </AlertDialog>
  );
}
