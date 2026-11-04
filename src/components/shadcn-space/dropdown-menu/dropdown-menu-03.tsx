"use client";

import { useState } from "react";
import { ChevronDown, X, Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroupCount,
} from "@/components/ui/avatar";

interface Participant {
  id: string;
  name: string;
  avatar: string;
  isSpeaking?: boolean;
}

interface VoiceChatProps {
  participants?: Participant[];
}

const defaultParticipants: Participant[] = [
  {
    id: "1",
    name: "Jessica",
    avatar: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    isSpeaking: true,
  },
  {
    id: "2",
    name: "Linda",
    avatar: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
  {
    id: "3",
    name: "Albert",
    avatar: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    id: "4",
    name: "Robert",
    avatar: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    id: "5",
    name: "Jenny",
    avatar: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
  },
  {
    id: "6",
    name: "Ben",
    avatar: "https://images.shadcnspace.com/assets/profiles/ben.webp",
    isSpeaking: true,
  },
  {
    id: "7",
    name: "Emily",
    avatar: "https://images.shadcnspace.com/assets/profiles/emily.webp",
  },
];

const COLLAPSED_WIDTH = 268;
const EXPANDED_WIDTH = 360;
const EXPANDED_HEIGHT = 440;

const AVATAR_SIZE_COLLAPSED = 44;
const AVATAR_SIZE_EXPANDED = 56;
const AVATAR_OVERLAP = -12;

const SpeakingRing = ({ show }: { show: boolean }) => {
  return (
    <div
      className={cn(
        "absolute -inset-1 rounded-full border-2 border-teal-400",
        "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        show ? "opacity-100" : "opacity-0",
      )}
    />
  );
};

const AudioWaveIcon = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div
      className={cn(
        "absolute",
        "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        isExpanded ? "opacity-0" : "opacity-100",
      )}
      style={{
        left: 12,
        top: "50%",
        transform: `translateY(-50%) ${isExpanded ? "scale(0.75)" : "scale(1)"}`,
      }}
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-foreground">
        <div className="flex items-center justify-center gap-0.5">
          <span className="w-0.75 rounded-full bg-background animate-wave-1" />
          <span className="w-0.75 rounded-full bg-background animate-wave-2" />
          <span className="w-0.75 rounded-full bg-background animate-wave-3" />
        </div>
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-400" />
        </span>
      </div>
    </div>
  );
};

const getAvatarPosition = (
  index: number,
  isExpanded: boolean,
  totalCount: number,
) => {
  if (!isExpanded) {
    const startX = 60;
    const limit = 3;
    const isVisible = totalCount > limit ? index < limit : index < totalCount;
    return {
      x: startX + index * (AVATAR_SIZE_COLLAPSED + AVATAR_OVERLAP),
      y: 8,
      size: AVATAR_SIZE_COLLAPSED,
      opacity: isVisible ? 1 : 0,
      scale: 1,
    };
  }

  const gridStartX = 28;
  const gridStartY = 84;
  const colWidth = 80;
  const rowHeight = 95;

  const col = index < 4 ? index : index - 4;
  const row = index < 4 ? 0 : 1;

  return {
    x: gridStartX + col * colWidth,
    y: gridStartY + row * rowHeight,
    size: AVATAR_SIZE_EXPANDED,
    opacity: 1,
    scale: 1,
  };
};

const VoiceChat = ({ participants = defaultParticipants }: VoiceChatProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => !isExpanded && setIsExpanded(true)}
      className={cn(
        "relative overflow-hidden border border-border bg-background",
        "transition-[width,height,border-radius] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
        !isExpanded && "cursor-pointer",
      )}
      style={{
        width: isExpanded ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
        height: isExpanded ? EXPANDED_HEIGHT : 60,
        borderRadius: isExpanded ? 24 : 999,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes wave {
          0%, 100% { height: 6px; }
          50% { height: 14px; }
        }
        .animate-wave-1 { animation: wave 0.5s ease-in-out infinite; }
        .animate-wave-2 { animation: wave 0.5s ease-in-out infinite 0.1s; }
        .animate-wave-3 { animation: wave 0.5s ease-in-out infinite 0.2s; }
      `,
        }}
      />
      <AudioWaveIcon isExpanded={isExpanded} />

      {/* Chevron down (collapsed) */}
      <div
        className={cn(
          "absolute flex items-center text-muted-foreground",
          "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isExpanded ? "pointer-events-none opacity-0" : "opacity-100",
        )}
        style={{ right: 16, top: "50%", transform: "translateY(-50%)" }}
      >
        <ChevronDown className="h-4 w-4" />
      </div>

      {/* Header (expanded) */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 flex items-center justify-between px-5 pb-2 pt-4",
          "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isExpanded ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ transitionDelay: isExpanded ? "100ms" : "0ms" }}
      >
        <div className="w-8" />
        <h2 className="text-base font-semibold text-foreground">Voice Chat</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(false);
          }}
          className="rounded-full cursor-pointer"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>

      {/* Participant count (expanded) */}
      <div
        className={cn(
          "absolute inset-x-0 flex items-center justify-center gap-1.5",
          "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isExpanded ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ top: 42, transitionDelay: isExpanded ? "120ms" : "0ms" }}
      >
        <span className="flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
        </span>
        <span className="text-sm text-muted-foreground">
          {participants.length} participants
        </span>
      </div>

      {/* Divider */}
      <div
        className={cn(
          "absolute left-4 right-4 h-px bg-border",
          "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isExpanded ? "opacity-100" : "opacity-0",
        )}
        style={{ top: 66 }}
      />

      {/* Participants */}
      {participants.map(({ id, name, avatar, isSpeaking }, index) => {
        const pos = getAvatarPosition(index, isExpanded, participants.length);
        const delay = isExpanded ? index * 30 : (6 - index) * 20;

        return (
          <div
            key={id}
            className="absolute transition-[left,top,width,height,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              left: pos.x,
              top: pos.y,
              width: pos.size,
              height: isExpanded ? pos.size + 28 : pos.size,
              opacity: pos.opacity,
              zIndex: isExpanded ? 1 : 4 - index,
              transitionDelay: `${delay}ms`,
            }}
          >
            <div className="relative flex flex-col items-center">
              <div
                className="relative"
                style={{ width: pos.size, height: pos.size }}
              >
                <Avatar
                  className="ring-1 ring-background transition-[width,height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ width: pos.size, height: pos.size }}
                >
                  <AvatarImage
                    src={avatar}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback>
                    {name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <SpeakingRing show={isExpanded && !!isSpeaking} />
              </div>

              <span
                className={cn(
                  "absolute whitespace-nowrap text-sm font-medium text-muted-foreground",
                  "transition-[opacity,top] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  isExpanded ? "opacity-100" : "opacity-0",
                )}
                style={{
                  top: pos.size + 8,
                  transitionDelay: isExpanded ? `${150 + index * 30}ms` : "0ms",
                }}
              >
                {name}
              </span>
            </div>
          </div>
        );
      })}

      {/* Dynamic Count Avatar Placeholder */}
      {participants.length > 3 && (
        <AvatarGroupCount
          className={cn(
            "absolute font-semibold text-sm",
            "ring-1 ring-background",
            "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isExpanded ? "pointer-events-none opacity-0" : "opacity-100",
          )}
          style={{
            left: 60 + 3 * (AVATAR_SIZE_COLLAPSED + AVATAR_OVERLAP),
            top: 8,
            width: AVATAR_SIZE_COLLAPSED,
            height: AVATAR_SIZE_COLLAPSED,
            zIndex: 1,
          }}
        >
          +{participants.length - 3}
        </AvatarGroupCount>
      )}

      {/* Join button */}
      <Button
        className={cn(
          "absolute left-4 right-4 flex items-center justify-center gap-2 rounded-2xl bg-foreground h-auto py-3.5 text-sm font-medium text-background cursor-pointer",
          "hover:opacity-80",
          "transition-[transform,opacity] duration-300",
          isExpanded
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
        style={{ bottom: 52, transitionDelay: isExpanded ? "200ms" : "0ms" }}
      >
        <Mic className="h-4 w-4" />
        Join Now
      </Button>

      {/* Helper text */}
      <div
        className={cn(
          "absolute inset-x-0 flex items-center justify-center gap-1.5 text-center text-[12px] text-muted-foreground",
          "transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isExpanded ? "opacity-100" : "opacity-0",
        )}
        style={{ bottom: 18, transitionDelay: isExpanded ? "250ms" : "0ms" }}
      >
        <MicOff className="h-3.5 w-3.5" />
        You&apos;ll join with mic off
      </div>
    </div>
  );
};

export default VoiceChat;
