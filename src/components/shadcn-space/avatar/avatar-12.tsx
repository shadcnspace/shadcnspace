"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const stories = [
  { id: "albert", name: "Albert", image: "https://images.shadcnspace.com/assets/profiles/albert.webp" },
  { id: "jessica", name: "Jessica", image: "https://images.shadcnspace.com/assets/profiles/jessica.webp" },
  { id: "jenny", name: "Jenny", image: "https://images.shadcnspace.com/assets/profiles/jenny.webp" },
  { id: "robert", name: "Robert", image: "https://images.shadcnspace.com/assets/profiles/rough.webp" },
  { id: "darlene", name: "Darlene", image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg" },
  { id: "cody", name: "Cody", image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg" },
];

const AvatarDemo = () => {
  const [seen, setSeen] = useState<string[]>(["robert"]);

  return (
    <div className="w-full max-w-md">
      <ul className="flex gap-4 overflow-x-auto pb-2" aria-label="Stories">
        <li className="flex shrink-0 flex-col items-center gap-1.5">
          <button
            type="button"
            aria-label="Add to your story"
            className="relative flex size-16 items-center justify-center rounded-full border border-dashed border-border text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Plus className="size-5" />
          </button>
          <span className="text-xs text-muted-foreground">Your story</span>
        </li>
        {stories.map((story) => {
          const isSeen = seen.includes(story.id);
          return (
            <li key={story.id} className="flex shrink-0 flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSeen((current) => (isSeen ? current : [...current, story.id]))}
                aria-label={`${story.name}'s story${isSeen ? ", viewed" : ", new"}`}
                className={cn(
                  "rounded-full p-0.5 outline-none transition-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 motion-reduce:transition-none",
                  isSeen ? "bg-border" : "bg-linear-to-tr from-amber-300 via-orange-400 to-blue-500",
                )}
              >
                <span className="block rounded-full bg-background p-0.5">
                  <Avatar className="size-14 after:hidden">
                    <AvatarImage src={story.image} alt="" />
                    <AvatarFallback>{story.name[0]}</AvatarFallback>
                  </Avatar>
                </span>
              </button>
              <span className={cn("max-w-16 truncate text-xs", isSeen ? "text-muted-foreground" : "font-medium text-foreground")}>
                {story.name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{stories.length - seen.length} new stories</span>
        {seen.length > 0 && (
          <button
            type="button"
            onClick={() => setSeen([])}
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Mark all unseen
          </button>
        )}
      </div>
    </div>
  );
};

export default AvatarDemo;
