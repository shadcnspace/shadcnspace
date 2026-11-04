import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const statusStyles = {
  online: { label: "Online", className: "bg-teal-400" },
  away: { label: "Away", className: "bg-amber-300" },
  busy: { label: "Do not disturb", className: "bg-orange-400" },
  offline: { label: "Offline", className: "bg-muted-foreground" },
} as const;

const people = [
  { name: "Albert Flores", initials: "AF", image: "https://images.shadcnspace.com/assets/profiles/albert.webp", status: "online" as const },
  { name: "Jessica Hall", initials: "JH", image: "https://images.shadcnspace.com/assets/profiles/jessica.webp", status: "away" as const },
  { name: "Jenny Wilson", initials: "JW", image: "https://images.shadcnspace.com/assets/profiles/jenny.webp", status: "busy" as const },
  { name: "Robert Fox", initials: "RF", image: "https://images.shadcnspace.com/assets/profiles/rough.webp", status: "offline" as const },
];

const AvatarDemo = () => {
  return (
    <ul className="flex w-full max-w-xs flex-col gap-3">
      {people.map((person) => {
        const status = statusStyles[person.status];
        return (
          <li key={person.name} className="flex items-center gap-3">
            <Avatar size="lg">
              <AvatarImage
                src={person.image}
                alt={person.name}
                className={cn(person.status === "offline" && "grayscale")}
              />
              <AvatarFallback>{person.initials}</AvatarFallback>
              <AvatarBadge className={status.className}>
                <span className="sr-only">{status.label}</span>
              </AvatarBadge>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-foreground">{person.name}</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={cn("size-1.5 rounded-full", status.className)} aria-hidden="true" />
                {status.label}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AvatarDemo;
