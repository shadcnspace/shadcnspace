"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { UserPlusIcon, UserCheckIcon, UserMinusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Pattern() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const baseFollowers = 2418;
  const followersCount = isFollowing ? baseFollowers + 1 : baseFollowers;

  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant={isFollowing ? "secondary" : "outline"}
        className={cn(
          "h-9 px-3 gap-2 transition-all duration-300 border-border cursor-pointer select-none",
          isFollowing && isHovered && "bg-destructive/10 hover:bg-destructive/20! text-destructive! border-destructive/50!"
        )}
        onClick={() => setIsFollowing(!isFollowing)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isFollowing ? (
            isHovered ? (
              <motion.span
                key="unfollow"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2"
              >
                <UserMinusIcon className="size-4 shrink-0" />
                <span>Unfollow</span>
              </motion.span>
            ) : (
              <motion.span
                key="following"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2"
              >
                <UserCheckIcon className="size-4 shrink-0 text-green-500" />
                <span>Following</span>
              </motion.span>
            )
          ) : (
            <motion.span
              key="follow"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2"
            >
              <UserPlusIcon className="size-4 shrink-0" />
              <span>Follow</span>
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <ButtonGroupText className="text-muted-foreground h-9 px-3 flex items-center gap-2">
        <AvatarGroup className="-space-x-1.5 mr-0.5">
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=60" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=60" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar className="size-5 border border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=60" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </AvatarGroup>

        <div className="overflow-hidden h-5 flex items-center tabular-nums">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={followersCount}
              initial={{ y: isFollowing ? 12 : -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: isFollowing ? -12 : 12, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="font-semibold text-foreground"
            >
              {followersCount.toLocaleString()}
            </motion.span>
          </AnimatePresence>
        </div>

        <span>followers</span>
      </ButtonGroupText>
    </ButtonGroup>
  );
}