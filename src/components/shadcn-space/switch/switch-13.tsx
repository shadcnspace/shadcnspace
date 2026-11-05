"use client";

import { useState } from "react";
import { TriangleAlert } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const SwitchDemo = () => {
  const [maintenance, setMaintenance] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Turning maintenance on takes the site offline, so ask first. Turning it off is safe.
  const handleChange = (next: boolean) => {
    if (next) setConfirmOpen(true);
    else setMaintenance(false);
  };

  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border bg-background p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="maintenance">Maintenance mode</Label>
            <p className="text-sm text-muted-foreground">
              Show a maintenance page to all visitors.
            </p>
          </div>
          <Switch
            id="maintenance"
            checked={maintenance}
            onCheckedChange={handleChange}
            className="data-checked:bg-orange-400"
          />
        </div>
        {maintenance && (
          <p className="flex items-center gap-2 rounded-md border border-orange-400/40 bg-orange-400/10 px-3 py-2 text-xs text-foreground">
            <span className="size-2 shrink-0 animate-pulse rounded-full bg-orange-400 motion-reduce:animate-none" aria-hidden="true" />
            Your site is offline for visitors
          </p>
        )}
      </div>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-orange-400/15 text-orange-400">
              <TriangleAlert />
            </AlertDialogMedia>
            <AlertDialogTitle>Turn on maintenance mode?</AlertDialogTitle>
            <AlertDialogDescription>
              Visitors will see a maintenance page until you turn it off. Signed in admins can still access the site.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setMaintenance(true);
                setConfirmOpen(false);
              }}
            >
              Turn on
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SwitchDemo;
