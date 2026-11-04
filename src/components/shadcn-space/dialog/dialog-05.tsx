"use client";

import { CheckCircle2Icon } from "lucide-react";
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

export default function Dialog05() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        Complete Payment
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-xs data-open:zoom-in-50! data-closed:zoom-out-50 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300"
        showCloseButton={false}
      >
        <div className="flex flex-col items-center text-center gap-4 py-2">
          <div className="flex items-center justify-center size-16 rounded-full bg-teal-400/10 text-teal-400">
            <CheckCircle2Icon size={32} strokeWidth={1.5} />
          </div>
          <DialogHeader className="items-center">
            <DialogTitle className="text-lg">Payment Successful</DialogTitle>
            <DialogDescription>
              Your order #ORD-2025 has been placed. A confirmation has been
              sent to your email.
            </DialogDescription>
          </DialogHeader>
          <DialogClose render={<Button className="w-full cursor-pointer hover:bg-primary/80" />}>
            Done
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
