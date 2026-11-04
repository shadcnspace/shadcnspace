"use client";

import { useState } from "react";
import { Check, UserMinus, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ToggleDemo = () => {
  const [following, setFollowing] = useState(false);
  const followers = 1284 + (following ? 1 : 0);

  return (
    <div className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-border bg-background p-3">
      <Avatar className="size-10">
        <AvatarFallback className="bg-teal-400/15 font-medium text-foreground">
          MR
        </AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-foreground">Maya Rivera</p>
        <p className="text-xs text-muted-foreground tabular-nums">
          {followers.toLocaleString("en-US")} followers
        </p>
      </div>
      <Toggle
        pressed={following}
        onPressedChange={setFollowing}
        aria-label={following ? "Unfollow Maya Rivera" : "Follow Maya Rivera"}
        className={cn(
          "w-28 gap-1.5 border",
          following
            ? "border-border bg-background aria-pressed:bg-background hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-foreground"
            : "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
        )}
      >
        {following ? (
          <>
            <span className="flex items-center gap-1.5 group-hover/toggle:hidden">
              <Check />
              Following
            </span>
            <span className="hidden items-center gap-1.5 group-hover/toggle:flex">
              <UserMinus />
              Unfollow
            </span>
          </>
        ) : (
          <>
            <UserPlus />
            Follow
          </>
        )}
      </Toggle>
    </div>
  );
};

export default ToggleDemo;
