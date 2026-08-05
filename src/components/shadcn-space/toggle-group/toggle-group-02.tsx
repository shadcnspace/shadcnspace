"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ThumbsUp, Heart, ThumbsDown } from "lucide-react";
import { motion } from "motion/react";

const ToggleGroupDemo = () => {
  const [reaction, setReaction] = useState<string[]>([]);

  const isLiked = reaction.includes("like");
  const isLoved = reaction.includes("love");
  const isDisliked = reaction.includes("dislike");

  return (
    <ToggleGroup
      value={reaction}
      onValueChange={(val) => {
        setReaction(val);
      }}
      className="border border-border bg-background p-1.5 rounded-2xl gap-2 flex items-center w-fit"
    >
        <ToggleGroupItem
          value="like"
          className="relative px-3 h-10 rounded-full text-sm font-medium transition-all hover:text-foreground text-muted-foreground cursor-pointer outline-none border-0 hover:bg-transparent aria-pressed:bg-transparent! aria-pressed:text-emerald-600! dark:aria-pressed:text-emerald-400! group"
        >
          <div className="flex items-center relative z-10">
            <motion.div
              animate={
                isLiked
                  ? { y: [0, -4, 0], scale: [1, 1.2, 1] }
                  : { y: 0, scale: 1 }
              }
              transition={{ duration: 0.4 }}
            >
              <ThumbsUp className="size-4 shrink-0" fill={isLiked ? "currentColor" : "none"} />
            </motion.div>
            <span className="max-w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-w-16 group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
              Like
            </span>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="love"
          className="relative px-3 h-10 rounded-full text-sm font-medium transition-all hover:text-foreground text-muted-foreground cursor-pointer outline-none border-0 hover:bg-transparent aria-pressed:bg-transparent! aria-pressed:text-pink-600! dark:aria-pressed:text-pink-400! group"
          style={
            isLoved ? { backgroundColor: "rgba(236, 72, 153, 0.12)" } : undefined
          }
        >
          <div className="flex items-center relative z-10">
            <motion.div
              animate={isLoved ? { scale: [1, 1.3, 0.9, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Heart className="size-4 shrink-0" fill={isLoved ? "currentColor" : "none"} />
            </motion.div>
            <span className="max-w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-w-16 group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
              Love
            </span>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dislike"
          className="relative px-3 h-10 rounded-full text-sm font-medium transition-all hover:text-foreground text-muted-foreground cursor-pointer outline-none border-0 hover:bg-transparent aria-pressed:bg-transparent! aria-pressed:text-rose-600! dark:aria-pressed:text-rose-400! group"
          style={
            isDisliked
              ? { backgroundColor: "rgba(244, 63, 94, 0.12)" }
              : undefined
          }
        >
          <div className="flex items-center relative z-10">
            <motion.div
              animate={
                isDisliked
                  ? { y: [0, 4, 0], rotate: [0, -12, 0] }
                  : { y: 0, rotate: 0 }
              }
              transition={{ duration: 0.4 }}
            >
              <ThumbsDown className="size-4 shrink-0" fill={isDisliked ? "currentColor" : "none"} />
            </motion.div>
            <span className="max-w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-w-16 group-hover:opacity-100 group-hover:ml-2 whitespace-nowrap">
              Dislike
            </span>
          </div>
        </ToggleGroupItem>
      </ToggleGroup>
  );
};

export default ToggleGroupDemo;
