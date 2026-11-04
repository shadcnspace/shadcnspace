"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface SelectableAvatarProps extends HTMLMotionProps<"button"> {
  name: string;
  src?: string;
  isSelected?: boolean;
  badge?: React.ReactNode;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const SelectableAvatar = React.forwardRef<
  HTMLButtonElement,
  SelectableAvatarProps
>(({ name, src, isSelected = false, badge, className, ...props }, ref) => (
  <motion.button
    ref={ref}
    type="button"
    aria-label={name}
    aria-pressed={isSelected}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className={cn(
      "group relative inline-flex flex-col items-center gap-1.5 outline-none",
      className
    )}
    {...props}
  >
    <Avatar
      className={cn(
        "w-12 h-12 transition-all duration-200",
        "group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2",
        !isSelected
        && "opacity-50 group-hover:opacity-75"
      )}
    >
      <AvatarImage
        src={src}
        alt={name}
        className={cn(!isSelected && "grayscale")}
      />
      <AvatarFallback
        className={cn(
          isSelected
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"
        )}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>

    {badge && !isSelected && (
      <div className="absolute bottom-6 right-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center shadow-sm">
        {badge}
      </div>
    )}

    <span
      className={cn(
        "text-xs font-medium truncate max-w-15",
        isSelected ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {name.trim().split(/\s+/)[0]}
    </span>
  </motion.button>
));

SelectableAvatar.displayName = "SelectableAvatar";

export default function AvatarDemo() {
  const [selected, setSelected] = React.useState(false);

  return (
    <SelectableAvatar
      name="Daniel Park"
      src="https://images.shadcnspace.com/assets/profiles/albert.webp"
      isSelected={selected}
      onClick={() => setSelected((prev) => !prev)}
      badge={<Plus className="w-2.5 h-2.5 text-primary-foreground" />}
    />
  );
}
