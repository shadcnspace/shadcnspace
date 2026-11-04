"use client"

import { useState, useMemo } from "react"
import { ChevronRight, Search } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar"
import Link from "next/link"
import { useWebContext } from "@/providers/website-provider"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"
import { getSubcategoriesForMaster } from "../../utils"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"
import { Icon } from "@iconify/react"

export function NavMain({
  items,
}: {
  items: any[]
}) {
  const { setIsBlockSidebarOpen } = useWebContext();
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const filteredItems = useMemo(() => {
    // First, get all items with their subcategories
    const allItemsWithSubs = items.map(item => ({
      ...item,
      subItems: getSubcategoriesForMaster(item.slug) || []
    }));

    if (!searchQuery.trim()) {
      return allItemsWithSubs;
    }

    const query = searchQuery.toLowerCase();
    return allItemsWithSubs.map((item) => {
      const isMasterMatch = item.title.toLowerCase().includes(query);
      const filteredSubItems = item.subItems.filter((subItem: any) =>
        subItem.title.toLowerCase().includes(query)
      );

      return {
        ...item,
        subItems: isMasterMatch ? item.subItems : filteredSubItems,
      };
    }).filter((item) => item.subItems.length > 0);
  }, [items, searchQuery]);

  return (
    <SidebarGroup className="p-3" >
      <div className="flex flex-col gap-6 pt-3">
        <div className="flex items-center justify-between">
          <SidebarGroupLabel className="text-xl font-medium text-black dark:text-white" >All Blocks</SidebarGroupLabel>
        </div>
        <div className="px-2 pb-5">
          <div className="relative">
            <InputGroup>
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupInput
                type="text"
                placeholder="Search blocks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-10 placeholder:text-[15px] placeholder:font-medium text-base!"
              />

            </InputGroup>
          </div>
        </div>
      </div>
      <SidebarMenu >
        {filteredItems.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={pathname.includes(item.slug) || searchQuery.trim() !== ""}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger className="w-full">
                <SidebarMenuButton tooltip={item.title} className="text-base font-medium [&_svg:not([class*='size-'])]:size-5!" >
                  {item.icon && typeof item.icon === 'string' ? <Icon icon={item.icon} /> : item.icon && <item.icon />}
                  <span className="max-w-full truncate">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="pe-0! me-0!">
                  {item.subItems?.map((subItem: any) => {
                    const href = `/blocks/${item.slug}/${subItem.name}`;
                    const isActive = pathname === href;
                    return (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          onClick={() => setIsBlockSidebarOpen(false)}
                          className={`font-medium ${isActive ? 'text-sidebar-foreground bg-sidebar-accent' : 'text-sidebar-foreground/70'}`}
                        >
                          <Link href={href} className="flex items-center justify-between w-full py-2" >
                            <span className="max-w-full truncate" >{subItem.title}</span>
                            <Badge variant={"outline"}>{subItem.blocks.length}</Badge>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
