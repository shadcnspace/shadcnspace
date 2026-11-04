import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarStackItem {
  name: string;
  src?: string;
  fallback?: string;
}

interface AvatarStackProps {
  avatars: AvatarStackItem[];
  max?: number;
  className?: string;
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

export function AvatarStack({ avatars, max = 4, className }: AvatarStackProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <AvatarGroup className={cn(className)}>
      {visible.map((avatar, i) => (
        <Avatar key={i} className="transition-transform hover:-translate-y-0.5">
          <AvatarImage src={avatar.src} alt={avatar.name} />
          <AvatarFallback>
            {avatar.fallback ?? getInitials(avatar.name)}
          </AvatarFallback>
        </Avatar>
      ))}
      {overflow > 0 && <AvatarGroupCount className="text-foreground font-medium">+{overflow}</AvatarGroupCount>}
    </AvatarGroup>
  );
}

const avatars: AvatarStackItem[] = [
  { name: "Olivia Sparks", src: "https://images.shadcnspace.com/assets/profiles/rough.webp", fallback: "OS" },
  { name: "Hallie Richards", src: "https://images.shadcnspace.com/assets/profiles/jessica.webp", fallback: "HR" },
  { name: "Howard Lloyd", src: "https://images.shadcnspace.com/assets/profiles/albert.webp", fallback: "HL" },
  { name: "Jenny Wilson", src: "https://images.shadcnspace.com/assets/profiles/jenny.webp", fallback: "JW" },
  { name: "Daniel Park", src: "https://images.shadcnspace.com/assets/profiles/user-4.jpg", fallback: "DP" },
  { name: "Alice Morgan", src: "https://images.shadcnspace.com/assets/profiles/user-3.jpg", fallback: "AM" },
];

export default function AvatarStackDemo() {
  return (
    <div className="bg-background flex flex-wrap items-center justify-center rounded-full border p-1">
      <AvatarStack avatars={avatars} max={3} />
      <p className="text-muted-foreground px-2 text-xs">
        Loved by <strong className="text-foreground font-medium">30K+</strong> developers.
      </p>
    </div>
  );
}
