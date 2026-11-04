"use client";

import { BellIcon } from "lucide-react";
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

export default function Dialog01() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        Open Notification
      </DialogTrigger>
      <DialogContent
        className="data-open:slide-in-from-top-8 data-closed:slide-out-to-top-8 data-open:zoom-in-100 data-closed:zoom-out-100 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary">
            <BellIcon size={20} />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle>New Notification</DialogTitle>
            <DialogDescription>
              You have 3 unread messages from your team. Check them out before
              your next meeting.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 w-full">
            <DialogClose
              render={<Button variant="outline" className="flex-1 cursor-pointer" />}
            >
              Dismiss
            </DialogClose>
            <DialogClose render={<Button className="flex-1 cursor-pointer hover:bg-primary/80" />}>
              View Messages
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
