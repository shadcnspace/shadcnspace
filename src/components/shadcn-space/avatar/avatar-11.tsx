"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const members = [
  { name: "Albert Flores", initials: "AF", image: "https://images.shadcnspace.com/assets/profiles/albert.webp", role: "Owner" },
  { name: "Jessica Hall", initials: "JH", image: "https://images.shadcnspace.com/assets/profiles/jessica.webp", role: "Admin" },
  { name: "Jenny Wilson", initials: "JW", image: "https://images.shadcnspace.com/assets/profiles/jenny.webp", role: "Editor" },
  { name: "Robert Fox", initials: "RF", image: "https://images.shadcnspace.com/assets/profiles/rough.webp", role: "Editor" },
  { name: "Darlene Robertson", initials: "DR", image: "https://images.shadcnspace.com/assets/profiles/user-1.jpg", role: "Viewer" },
  { name: "Cody Fisher", initials: "CF", image: "https://images.shadcnspace.com/assets/profiles/user-3.jpg", role: "Viewer" },
  { name: "Kristin Watson", initials: "KW", image: "https://images.shadcnspace.com/assets/profiles/user-4.jpg", role: "Viewer" },
];

const VISIBLE = 4;

const AvatarDemo = () => {
  const visible = members.slice(0, VISIBLE);
  const hidden = members.slice(VISIBLE);

  return (
    <TooltipProvider delay={150}>
      <div className="flex flex-col items-center gap-3">
        <AvatarGroup>
          {visible.map((member) => (
            <Tooltip key={member.name}>
              <TooltipTrigger
                render={
                  <Avatar size="lg" className="transition-transform hover:z-10 hover:-translate-y-0.5 motion-reduce:transition-none">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                }
              />
              <TooltipContent>{member.name}</TooltipContent>
            </Tooltip>
          ))}
          {hidden.length > 0 && (
            <Popover>
              <PopoverTrigger
                render={
                  <button
                    type="button"
                    aria-label={`Show ${hidden.length} more members`}
                    className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <AvatarGroupCount className="size-10 transition-colors hover:bg-muted/70 hover:text-foreground">
                      +{hidden.length}
                    </AvatarGroupCount>
                  </button>
                }
              />
              <PopoverContent align="start" className="w-60 gap-1 p-1.5">
                <p className="px-2 py-1 text-xs font-medium text-muted-foreground">
                  {members.length} members
                </p>
                <ul className="flex flex-col">
                  {hidden.map((member) => (
                    <li key={member.name} className="flex items-center gap-2.5 rounded-md px-2 py-1.5">
                      <Avatar size="sm">
                        <AvatarImage src={member.image} alt="" />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="min-w-0 flex-1 truncate text-sm text-foreground">{member.name}</span>
                      <span className="text-xs text-muted-foreground">{member.role}</span>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          )}
        </AvatarGroup>
        <p className="text-xs text-muted-foreground">Hover a face to see who it is</p>
      </div>
    </TooltipProvider>
  );
};

export default AvatarDemo;
