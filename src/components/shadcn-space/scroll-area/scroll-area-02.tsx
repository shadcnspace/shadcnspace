"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const profiles = [
  {
    id: 1,
    name: "Ken Masters",
    avatar: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    isActive: true
  },
  {
    id: 2,
    name: "Jessica Lane",
    avatar: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    isActive: true
  },
  {
    id: 3,
    name: "Albert Shaw",
    avatar: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    isActive: false
  },
  {
    id: 4,
    name: "Jenny Wilson",
    avatar: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    isActive: false
  },
  {
    id: 5,
    name: "Linda Morris",
    avatar: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    isActive: false
  },
  {
    id: 6,
    name: "Emily Carter",
    avatar: "https://images.shadcnspace.com/assets/profiles/emily.webp",
    isActive: false
  },
  {
    id: 7,
    name: "Davis Brown",
    avatar: "https://images.shadcnspace.com/assets/profiles/davis.webp",
    isActive: false
  },
];

export default function HorizontalProfileStories() {
  return (
    <div className="flex w-full justify-center">
      <ScrollArea className="max-w-sm whitespace-nowrap rounded-md border **:data-[slot=scroll-area-viewport]:mask-[linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]">
        <div className="flex gap-4 px-4 py-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="flex flex-col items-center gap-2">
              <div
                className={`relative rounded-full p-0.5 ${
                  profile.isActive ? "bg-teal-400" : "bg-muted"
                }`}>
                <Avatar className="h-16 w-16">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback>
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs font-medium">{profile.name}</span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}