"use client";

import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const statuses = [
  { id: "online", label: "Online", color: "bg-teal-400" },
  { id: "away", label: "Away", color: "bg-amber-300" },
  { id: "busy", label: "Do not disturb", color: "bg-red-500" },
  { id: "offline", label: "Offline", color: "bg-zinc-400" },
] as const;

const PopoverStatusPickerDemo = () => {
  const [statusId, setStatusId] =
    useState<(typeof statuses)[number]["id"]>("online");
  const [note, setNote] = useState("");
  const activeStatus = statuses.find((status) => status.id === statusId)!;

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="relative size-10 cursor-pointer rounded-full p-0 hover:bg-transparent dark:hover:bg-transparent"
          />
        }
      >
        <Avatar className="size-10">
          <AvatarImage
            src="https://images.shadcnspace.com/assets/profiles/jenny.webp"
            alt="Sophia Carter"
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <Badge
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 right-0 size-3 min-w-0 justify-center rounded-full border-2 border-background p-0 ring-0",
            activeStatus.color,
          )}
        />
        <span className="sr-only">Set your status</span>
      </PopoverTrigger>

      <PopoverContent className="w-64" align="start">
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium">Set status</Label>
          <p className="text-muted-foreground text-xs">
            Let your team know your availability.
          </p>
        </div>

        <div className="flex flex-col gap-0.5">
          {statuses.map((status) => (
            <Button
              key={status.id}
              type="button"
              variant="ghost"
              onClick={() => setStatusId(status.id)}
              className="w-full cursor-pointer justify-start gap-2.5 px-2 font-normal"
            >
              <span
                className={cn("size-2.5 shrink-0 rounded-full", status.color)}
              />
              <span className="flex-1 text-left">{status.label}</span>
              {status.id === statusId && (
                <CheckIcon className="size-3.5 text-muted-foreground" />
              )}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-1.5">
          <Label
            htmlFor="status-note"
            className="text-xs text-muted-foreground"
          >
            Custom message
          </Label>
          <Input
            id="status-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's your status?"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverStatusPickerDemo;
