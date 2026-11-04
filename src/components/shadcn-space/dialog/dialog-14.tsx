"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { MonitorIcon, SmartphoneIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DESKTOP_QUERY = "(min-width: 768px)";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => true,
  );
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

function ProjectForm({ className, onSubmit }: { className?: string; onSubmit: () => void }) {
  const [name, setName] = useState("");
  const id = useId();
  const slug = toSlug(name) || "my-project";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (name.trim()) onSubmit();
      }}
      className={cn("grid gap-4", className)}
      id={`${id}-form`}
    >
      <div className="grid gap-2">
        <Label htmlFor={`${id}-name`}>Project name</Label>
        <Input
          id={`${id}-name`}
          placeholder="Marketing site"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-describedby={`${id}-url`}
          autoComplete="off"
          required
        />
        <p id={`${id}-url`} className="truncate text-xs text-muted-foreground">
          Your project will be available at{" "}
          <span className="font-mono text-foreground">{slug}.shadcnspace.app</span>
        </p>
      </div>
      <Button type="submit" disabled={!name.trim()} className="w-full cursor-pointer">
        Create project
      </Button>
    </form>
  );
}

export default function Dialog14() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  const title = "New project";
  const description = "Give your project a name. You can change it later in settings.";

  return (
    <div className="flex flex-col items-center gap-3">
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button className="cursor-pointer" />}>New project</DialogTrigger>
          <DialogContent className="gap-5 p-6 sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <ProjectForm onSubmit={() => setOpen(false)} />
            <DialogFooter className="-mx-6 -mb-6 px-6">
              <DialogClose render={<Button variant="outline" className="w-full cursor-pointer" />}>
                Cancel
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen} showSwipeHandle>
          <DrawerTrigger render={<Button className="cursor-pointer" />}>New project</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="text-lg font-semibold">{title}</DrawerTitle>
              <DrawerDescription>{description}</DrawerDescription>
            </DrawerHeader>
            <ProjectForm className="p-4" onSubmit={() => setOpen(false)} />
            <DrawerFooter>
              <DrawerClose render={<Button variant="outline" className="cursor-pointer" />}>
                Cancel
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}

      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {isDesktop ? (
          <MonitorIcon aria-hidden="true" className="size-3.5" />
        ) : (
          <SmartphoneIcon aria-hidden="true" className="size-3.5" />
        )}
        {isDesktop ? "Dialog on desktop. Resize below 768px for a drawer." : "Drawer on mobile. Widen past 768px for a dialog."}
      </p>
    </div>
  );
}
