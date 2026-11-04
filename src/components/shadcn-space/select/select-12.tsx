"use client";

import { useState } from "react";
import { Crown, Eye, MessageSquare, PenLine } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const roles = [
  {
    value: "owner",
    label: "Owner",
    description: "Full control, including billing and deletion",
    icon: Crown,
    color: "bg-blue-500",
  },
  {
    value: "editor",
    label: "Editor",
    description: "Can edit and publish content",
    icon: PenLine,
    color: "bg-teal-400",
  },
  {
    value: "commenter",
    label: "Commenter",
    description: "Can comment, no edit access",
    icon: MessageSquare,
    color: "bg-orange-400",
  },
  {
    value: "viewer",
    label: "Viewer",
    description: "Can only view, no changes",
    icon: Eye,
    color: "bg-sky-400",
  },
] as const;

type Role = (typeof roles)[number];

const SelectWorkspaceRoleDemo = () => {
  const [value, setValue] = useState<Role["value"]>("editor");
  const role = roles.find((r) => r.value === value) ?? roles[1];

  return (
    <div className="w-full max-w-xs">
      <Select value={value} onValueChange={(val) => val && setValue(val)}>
        <SelectTrigger className="w-full">
          <SelectValue>
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-full text-white",
                  role.color,
                )}
              >
                <role.icon className="size-3" />
              </span>
              {role.label}
            </span>
          </SelectValue>
        </SelectTrigger>

        <SelectContent
          alignItemWithTrigger={false}
          className="min-w-72 data-[state=open]:slide-in-from-bottom-8 data-[state=open]:zoom-in-100 duration-400"
        >
          <SelectGroup>
            {roles.map((r) => (
              <SelectItem key={r.value} value={r.value}>
                <div className="flex w-full items-center gap-2.5 py-0.5">
                  <span
                    className={cn(
                      "flex size-7 shrink-0 items-center justify-center rounded-full text-white",
                      r.color,
                    )}
                  >
                    <r.icon className="size-3.5" />
                  </span>
                  <span className="flex flex-col items-start gap-0.5">
                    <span className="font-medium">{r.label}</span>
                    <span className="text-xs text-muted-foreground">{r.description}</span>
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWorkspaceRoleDemo;