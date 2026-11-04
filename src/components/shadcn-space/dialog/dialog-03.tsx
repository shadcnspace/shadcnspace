"use client";

import { MailIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Dialog03() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        Subscribe
      </DialogTrigger>
      <DialogContent className="data-open:slide-in-from-left-8 data-closed:slide-out-to-left-8 data-open:zoom-in-100 data-closed:zoom-out-100 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300">
        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary mb-1">
          <MailIcon size={18} />
        </div>
        <DialogHeader>
          <DialogTitle>Stay in the loop</DialogTitle>
          <DialogDescription>
            Get the latest updates, articles, and resources delivered straight
            to your inbox.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="h-9"
          />
          <DialogClose render={<Button className="w-full cursor-pointer hover:bg-primary/80" />}>
            Subscribe Now
          </DialogClose>
          <p className="text-xs text-muted-foreground text-center">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
