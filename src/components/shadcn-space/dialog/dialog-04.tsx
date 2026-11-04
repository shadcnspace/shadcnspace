"use client";

import { MailIcon, PhoneIcon, MessageSquareIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dialog04() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" className="cursor-pointer" />}>
        View Profile
      </DialogTrigger>
      <DialogContent className="data-open:slide-in-from-right-8 data-closed:slide-out-to-right-8 data-open:zoom-in-100 data-closed:zoom-out-100 duration-300 [[data-slot=dialog-overlay]:has(~_&)]:duration-300">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage
              src="https://images.shadcnspace.com/assets/hero-img/hero-team-img-8.jpg"
              alt="Jessica Lee"
            />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <DialogTitle className="text-sm font-semibold leading-none">
              Jessica Lee
            </DialogTitle>
            <DialogDescription className="text-xs">
              Product Manager at Notion
            </DialogDescription>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-lg bg-muted dark:bg-muted/50 p-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MailIcon size={14} />
            <span className="text-xs">jessica.lee@notion.so</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <PhoneIcon size={14} />
            <span className="text-xs">+1 (415) 867-5309</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Projects", value: "38" },
            { label: "Tasks", value: "210" },
            { label: "Reviews", value: "4.9" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-muted dark:bg-muted/50 p-2">
              <p className="font-semibold text-sm">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <DialogClose
            render={<Button variant="outline" className="flex-1 cursor-pointer" />}
          >
            Close
          </DialogClose>
          <DialogClose render={<Button className="flex-1 cursor-pointer hover:bg-primary/80" />}>
            <MessageSquareIcon size={14} />
            Message
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
