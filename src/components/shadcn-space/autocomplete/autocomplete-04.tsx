"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
} from "@/components/ui/autocomplete";
import { cn } from "@/lib/utils";

const BASE = "https://images.shadcnspace.com/assets/profiles";

const usersData = [
  // Development Team
  {
    id: "liam-carter",
    name: "Liam Carter",
    group: "Development Team",
    position: "Frontend Architect",
    avatar: `${BASE}/ben.webp`,
    status: "Active",
  },
  {
    id: "ava-bennett",
    name: "Ava Bennett",
    group: "Development Team",
    position: "Senior Full Stack Engineer",
    avatar: `${BASE}/jenny.webp`,
    status: "Active",
  },
  {
    id: "noah-parker",
    name: "Noah Parker",
    group: "Development Team",
    position: "API Developer",
    avatar: `${BASE}/albert.webp`,
    status: "Active",
  },
  {
    id: "mia-collins",
    name: "Mia Collins",
    group: "Development Team",
    position: "Cloud Infrastructure Engineer",
    avatar: `${BASE}/jessica.webp`,
    status: "Away",
  },
  {
    id: "elijah-turner",
    name: "Elijah Turner",
    group: "Development Team",
    position: "React Native Developer",
    avatar: `${BASE}/user-1.jpg`,
    status: "Active",
  },
  {
    id: "sofia-mitchell",
    name: "Sofia Mitchell",
    group: "Development Team",
    position: "Interaction Developer",
    avatar: `${BASE}/linda.webp`,
    status: "Active",
  },
  // Design Team
  {
    id: "logan-reed",
    name: "Logan Reed",
    group: "Design Team",
    position: "Head of Product Design",
    avatar: `${BASE}/user-2.jpg`,
    status: "Active",
  },
  {
    id: "harper-flores",
    name: "Harper Flores",
    group: "Design Team",
    position: "Senior UI Designer",
    avatar: `${BASE}/user-3.jpg`,
    status: "Active",
  },
  {
    id: "ethan-price",
    name: "Ethan Price",
    group: "Design Team",
    position: "Experience Designer",
    avatar: `${BASE}/user-4.jpg`,
    status: "Active",
  },
  {
    id: "chloe-ward",
    name: "Chloe Ward",
    group: "Design Team",
    position: "Brand & Visual Designer",
    avatar: `${BASE}/user-7.jpg`,
    status: "Inactive",
  },
  // Marketing Team
  {
    id: "jackson-cole",
    name: "Jackson Cole",
    group: "Marketing Team",
    position: "Growth Marketing Lead",
    avatar: `${BASE}/rough.webp`,
    status: "Active",
  },
  {
    id: "ella-rivera",
    name: "Ella Rivera",
    group: "Marketing Team",
    position: "Content Strategist",
    avatar: `${BASE}/jessica.webp`,
    status: "Active",
  },
  {
    id: "aiden-morgan",
    name: "Aiden Morgan",
    group: "Marketing Team",
    position: "Performance Marketing Manager",
    avatar: `${BASE}/user-1.jpg`,
    status: "Active",
  },
  {
    id: "scarlett-brooks",
    name: "Scarlett Brooks",
    group: "Marketing Team",
    position: "Community & Social Lead",
    avatar: `${BASE}/jenny.webp`,
    status: "Away",
  },
];

const GROUP_ORDER = ["Development Team", "Design Team", "Marketing Team"];

const statusDot: Record<string, string> = {
  Active: "bg-emerald-500",
  Away: "bg-amber-400",
  Inactive: "bg-muted-foreground",
};

const SPRING = { type: "spring", bounce: 0.15, duration: 0.3 } as const;

const AutocompleteDemo = () => {
  const [inputValue, setInputValue] = useState("");

  const filteredGroups = GROUP_ORDER.map((group) => ({
    group,
    items: usersData.filter(
      (u) =>
        u.group === group &&
        (u.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          u.position.toLowerCase().includes(inputValue.toLowerCase())),
    ),
  })).filter((g) => g.items.length > 0);

  const totalFiltered = filteredGroups.reduce(
    (sum, g) => sum + g.items.length,
    0,
  );

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="member-input">Search Member</Label>
      <Autocomplete onInputValueChange={setInputValue}>
        <AutocompleteInput
          id="member-input"
          placeholder="Liam, Developer..."
          autoComplete="off"
          showClear
        />
        <AutocompleteContent>
          <AutocompleteList>
            {totalFiltered === 0 ? (
              <AutocompleteEmpty>No matching users found.</AutocompleteEmpty>
            ) : (
              filteredGroups.map((group, gi) => (
                <AutocompleteGroup key={group.group}>
                  {gi > 0 && <AutocompleteSeparator />}
                  <AutocompleteGroupLabel className="text-muted-foreground py-2 text-xs font-medium">
                    {group.group}
                  </AutocompleteGroupLabel>
                  {group.items.map((item, idx) => (
                    <AutocompleteItem
                      key={item.id}
                      value={item.id}
                      label={item.name}
                      className="rounded-lg py-1.5"
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...SPRING, delay: idx * 0.04 }}
                        className="flex w-full items-center gap-2.5"
                      >
                        <div className="relative shrink-0">
                          <Avatar className="size-9">
                            <AvatarImage src={item.avatar} alt={item.name} />
                            <AvatarFallback>
                              {item.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={cn(
                              "absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background",
                              statusDot[item.status],
                            )}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {item.name}
                          </p>
                          <p className="text-muted-foreground truncate text-xs">
                            {item.position}
                          </p>
                        </div>
                      </motion.div>
                    </AutocompleteItem>
                  ))}
                </AutocompleteGroup>
              ))
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </div>
  );
};

export default AutocompleteDemo;
