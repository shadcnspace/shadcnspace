"use client";

import { Trash2Icon } from "lucide-react";
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

export default function Dialog02() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        Delete Item
      </DialogTrigger>
      <DialogContent
        className="data-open:slide-in-from-bottom-8 data-closed:slide-out-to-bottom-8 data-open:zoom-in-100 data-closed:zoom-out-100 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center justify-center size-12 rounded-full bg-destructive/10 text-destructive">
            <Trash2Icon size={20} />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be
              undone and the data will be permanently removed.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 w-full">
            <DialogClose
              render={<Button variant="outline" className="flex-1 cursor-pointer" />}
            >
              Cancel
            </DialogClose>
            <DialogClose
              render={<Button variant="destructive" className="flex-1 cursor-pointer" />}
            >
              Delete
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
