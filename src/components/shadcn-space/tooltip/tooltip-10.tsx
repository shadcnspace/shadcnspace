"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Check,
  ExternalLink,
  MapPin,
  MessageSquare,
  Sparkles,
  UserPlus,
} from "lucide-react";

interface UserProfileData {
  name: string;
  handle: string;
  role: string;
  avatar: string;
  status: "online" | "busy" | "offline";
  statusText: string;
  bio: string;
  location: string;
  joined: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const defaultUser: UserProfileData = {
  name: "Elena Rostova",
  handle: "@elena_ui",
  role: "Design Engineer",
  avatar: "https://images.shadcnspace.com/assets/profiles/user-2.jpg",
  status: "online",
  statusText: "Working on Shadcn v4 tokens",
  bio: "Crafting fluid micro-interactions, accessible primitives, and design systems for modern React.",
  location: "San Francisco, CA",
  joined: "Joined Jan 2023",
  stats: [
    { label: "Components", value: "64" },
    { label: "Stars", value: "1.8k" },
    { label: "Followers", value: "3.2k" },
  ],
};

const TooltipProfilePresence = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">Hover over the user chip below</p>
      </div>

      <TooltipProvider delay={150}>
        <Tooltip>
          <TooltipTrigger>
            <div className="group inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 shadow-xs backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-accent/40 cursor-pointer">
              <div className="relative">
                <Avatar className="size-6">
                  <AvatarImage src={defaultUser.avatar} alt={defaultUser.name} />
                  <AvatarFallback className="text-[10px]">ER</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-0.5 -right-0.5 flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full border-2 border-background bg-emerald-500" />
                </span>
              </div>
              <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                {defaultUser.name}
              </span>
              <Badge variant="secondary" className="h-4 px-1.5 text-[10px] font-normal">
                {defaultUser.role}
              </Badge>
            </div>
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            sideOffset={8}
            className="w-80 p-0 rounded-2xl border border-border/80 bg-card text-card-foreground shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header Banner */}
            <div className="h-16 w-full bg-gradient-to-r from-primary/20 via-primary/10 to-accent relative px-4 pt-3 flex items-start justify-end">
              <Badge variant="outline" className="gap-1 bg-background/80 text-[10px] backdrop-blur-md border-border/60">
                <Sparkles className="size-2.5 text-primary" />
                Pro Contributor
              </Badge>
            </div>

            <div className="px-4 pb-4 -mt-7">
              {/* Avatar + Follow Action */}
              <div className="flex items-end justify-between gap-3 mb-3">
                <div className="relative">
                  <Avatar className="size-14 border-3 border-background ring-2 ring-primary/20 shadow-md">
                    <AvatarImage src={defaultUser.avatar} alt={defaultUser.name} />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 flex size-3.5">
                    <span className="relative inline-flex size-3.5 rounded-full border-2 border-background bg-emerald-500" />
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pb-1">
                  <Button
                    size="sm"
                    variant={isFollowing ? "outline" : "default"}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsFollowing(!isFollowing);
                    }}
                    className="h-7 px-3 text-xs gap-1.5 rounded-full transition-all"
                  >
                    {isFollowing ? (
                      <>
                        <Check className="size-3 text-emerald-500" />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus className="size-3" />
                        Follow
                      </>
                    )}
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="size-7 rounded-full text-muted-foreground hover:text-foreground"
                    title="Send message"
                  >
                    <MessageSquare className="size-3.5" />
                  </Button>
                </div>
              </div>

              {/* User Identity */}
              <div className="space-y-1 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-semibold tracking-tight text-foreground leading-none">
                    {defaultUser.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">{defaultUser.handle}</span>
                </div>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {defaultUser.bio}
                </p>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-1.5 rounded-lg bg-muted/50 px-2.5 py-1.5 text-[11px] text-muted-foreground mb-3">
                <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">{defaultUser.statusText}</span>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 py-2 border-y border-border/60 text-center mb-3">
                {defaultUser.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">{stat.value}</span>
                    <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Meta details */}
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {defaultUser.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {defaultUser.joined}
                </span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipProfilePresence;
