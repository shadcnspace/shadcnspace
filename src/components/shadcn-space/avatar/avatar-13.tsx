"use client";

import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const palette = [
  "bg-orange-400 text-gray-950",
  "bg-amber-300 text-gray-950",
  "bg-teal-400 text-gray-950",
  "bg-blue-500 text-white",
  "bg-sky-400 text-gray-950",
];

// The same name always maps to the same color.
function colorFor(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return palette[hash % palette.length];
}

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const team = ["Olivia Martin", "Jackson Lee", "Isabella Nguyen", "William Kim", "Sofia Davis"];

const AvatarDemo = () => {
  const [name, setName] = useState("Ada Lovelace");

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <div className="flex items-end gap-3">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="avatar-name">Name</Label>
          <Input id="avatar-name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="flex items-end gap-2" aria-hidden="true">
          {(["sm", "default", "lg"] as const).map((size) => (
            <Avatar key={size} size={size}>
              <AvatarFallback className={cn("font-medium", colorFor(name))}>{initialsOf(name)}</AvatarFallback>
            </Avatar>
          ))}
          <Avatar size="lg" className="rounded-md after:rounded-md">
            <AvatarFallback className={cn("rounded-md font-medium", colorFor(name))}>{initialsOf(name)}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <ul className="grid grid-cols-5 gap-2">
        {team.map((member) => (
          <li key={member} className="flex flex-col items-center gap-1.5 text-center">
            <Avatar size="lg">
              <AvatarFallback className={cn("font-medium", colorFor(member))}>{initialsOf(member)}</AvatarFallback>
            </Avatar>
            <span className="w-full truncate text-xs text-muted-foreground">{member.split(" ")[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvatarDemo;
