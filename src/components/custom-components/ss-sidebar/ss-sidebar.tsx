"use client"

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { groups as defaultGroups } from "@/config/registry/components/sidebar-data";
import AppSidebarMenuItem from "./sidebar-menu-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";

interface SSidebarProps {
  groups?: {
    label: string;
    items: any[];
  }[];
  collapsible?: "icon" | "none" | "offExamples";
  sort?: boolean;
  showFileCount?: boolean;
}

export function SSidebar({
  groups = defaultGroups,
  collapsible = "icon",
  sort = true,
  showFileCount = false,
}: SSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return groups;

    const query = searchQuery.toLowerCase();
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [searchQuery, groups]);

  return (
    <Sidebar
      collapsible={collapsible}
      className="sticky top-18 h-[calc(100vh-5rem)] border-x border-border bg-background [&_[data-slot=sidebar-inner]]:bg-background w-full"
    >
      <div className="px-3.5 pt-4 pb-2">
        <InputGroup className="h-10">
          <InputGroupAddon>
            <Search className="size-4 text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 placeholder:text-[15px] placeholder:font-medium text-base!"
          />
        </InputGroup>
      </div>
      <ScrollArea className="h-[calc(100vh-9rem)] overflow-y-auto">
        <SidebarContent className="overflow-visible">
          {filteredGroups.map(({ label, items }) => (
            <SidebarGroup key={label} className="px-3.5 py-2.5">
              <SidebarGroupLabel className="font-medium">
                {label}
              </SidebarGroupLabel>
              <SidebarGroupContent className="">
                <SidebarMenu>
                  {(sort
                    ? [...items].sort((a, b) => a.title.localeCompare(b.title))
                    : items
                  ).map((item) => (
                    <AppSidebarMenuItem key={item.title} item={item} showFileCount={showFileCount} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  );
}
