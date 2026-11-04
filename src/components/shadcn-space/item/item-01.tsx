"use client";

import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

type MemberRole = "Admin" | "Editor" | "Viewer";

type Member = {
  name: string;
  email: string;
  role: MemberRole;
  avatar: string;
  initials: string;
};

const roleStyles: Record<MemberRole, string> = {
  Admin: "bg-violet-400/10 text-violet-400",
  Editor: "bg-sky-400/10 text-sky-400",
  Viewer: "bg-teal-400/10 text-teal-400",
};

const defaultMembers: Member[] = [
  {
    name: "Jessica Thompson",
    email: "jessica@example.com",
    role: "Admin",
    avatar: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
    initials: "JT",
  },
  {
    name: "Jenny Wilson",
    email: "jenny@example.com",
    role: "Editor",
    avatar: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    initials: "JW",
  },
  {
    name: "Linda Brown",
    email: "linda@example.com",
    role: "Viewer",
    avatar: "https://images.shadcnspace.com/assets/profiles/linda.webp",
    initials: "LB",
  },
];

type TeamMembersListProps = {
  members?: Member[];
};

const TeamMembersListDemo = ({ members = defaultMembers }: TeamMembersListProps) => {
  return (
    <ItemGroup className="w-full max-w-md rounded-xl border border-border p-2 gap-0">
      {members.map((member, index) => (
        <div key={member.email}>
          <Item>
            <ItemMedia variant="image">
              <Avatar>
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{member.name}</ItemTitle>
              <ItemDescription>{member.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge className={cn("border-0", roleStyles[member.role])}>
                {member.role}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="cursor-pointer"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Change Role</DropdownMenuItem>
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Revoke Access
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ItemActions>
          </Item>
          {index < members.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  );
};

export default TeamMembersListDemo;
