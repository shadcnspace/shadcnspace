"use client";

import { useState } from "react";
import { LogOutIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

const user = {
  name: "Jessica Hart",
  email: "jessica@acme.com",
  image: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  initials: "JH",
};

export default function Alert14() {
  const [open, setOpen] = useState(false);
  const [allDevices, setAllDevices] = useState(false);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setAllDevices(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger
        render={<Button variant="outline" className="cursor-pointer ps-1.5" />}
      >
        <Avatar size="sm">
          <AvatarImage src={user.image} alt="" />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>
        Log Out
      </AlertDialogTrigger>
      <AlertDialogContent
        size="sm"
        className="gap-0 overflow-hidden border border-border p-0 ring-0 duration-200 data-open:zoom-in-95"
      >
        <div className="flex flex-col items-center gap-4 px-5 pt-7 pb-5 text-center">
          <div className="relative">
            <Avatar className="size-16">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <span
              aria-hidden="true"
              className="absolute right-0.5 bottom-0.5 size-3.5 rounded-full bg-teal-400 ring-2 ring-background"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">
              {user.name}
            </span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <AlertDialogTitle className="text-base font-semibold">
              Log out of ShadcnSpace?
            </AlertDialogTitle>
            <AlertDialogDescription>
              You will need to sign in again to access your workspace.
            </AlertDialogDescription>
          </div>
          <Field
            orientation="horizontal"
            className="w-full rounded-lg border border-border px-3 py-2.5"
          >
            <Checkbox
              id="alert-14-all-devices"
              checked={allDevices}
              onCheckedChange={(checked) => setAllDevices(checked === true)}
            />
            <FieldLabel
              htmlFor="alert-14-all-devices"
              className="cursor-pointer font-normal"
            >
              Log out of all devices
            </FieldLabel>
          </Field>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2 border-t border-border p-4">
          <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={() => handleOpenChange(false)}
          >
            <LogOutIcon />
            {allDevices ? "Log Out Everywhere" : "Log Out"}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
