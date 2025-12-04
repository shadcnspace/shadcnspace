"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { VisuallyHidden } from "radix-ui";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Logo } from "../logo";
import { VersionSwitcher } from "../version-switcher";

export function NavigationSheet() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <VisuallyHidden.Root>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden.Root>
      <SheetContent>
        <SheetHeader className="pb-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="font-bold" />
            <span className="font-bold">Shadcn Space</span>
          </Link>
        </SheetHeader>

        <ScrollArea className="h-full pb-20 px-4">
          <div className="space-y-4 text-base pr-2.5">
            <Link href="/" onClick={() => setOpen(false)} className="block">
              Home
            </Link>
            <Link
              href="/blocks"
              onClick={() => setOpen(false)}
              className="block"
            >
              Blocks
            </Link>
            <Link
              href="/components/accordion"
              onClick={() => setOpen(false)}
              className="block"
            >
              Components
            </Link>
            <Link
              href="/templates"
              onClick={() => setOpen(false)}
              className="block"
            >
              Templates
            </Link>

            <div className="pt-4 border-t">
              <div className="font-semibold mb-3">Version</div>
              <VersionSwitcher className="w-full" />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
