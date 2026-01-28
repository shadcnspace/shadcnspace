import { components } from "@/config/registry/components/index";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { SidebarMenuSubItem } from "@/components/ui/sidebar";
import AppSidebarMenuButton from "./sidebar-menu-button";
import { Icon } from "@iconify/react";

interface SidebarItem {
  icon?: string | LucideIcon;
  url: string;
  title: string;
  blockName?: string;
  isNew?: boolean;
}

type AppSidebarMenuItemProps = React.ComponentProps<typeof SidebarMenuSubItem> & {
  item: SidebarItem;
  showFileCount?: boolean;
};

const AppSidebarMenuItem = ({
  item,
  showFileCount,
  ...props
}: AppSidebarMenuItemProps) => {
  const fileCount = item.blockName
    ? components.filter((comp) => comp.category.name === item.blockName).length
    : null;

  return (
    <SidebarMenuSubItem {...props}>
      <AppSidebarMenuButton
        url={item.url}
        className={cn("group/menu-button gap-x-3")}
        tooltip={item.title}
      >
        <Link href={item.url} className="flex items-center gap-x-2 w-full py-2 duration-150 transform group-hover/menu-button:translate-x-2">
          {/*{typeof item.icon === "string" ? (
            <Icon icon={item.icon} className="w-5 h-5" />
          ) : (
            <item.icon className="w-5 h-5" />
          )}*/}
          <span className="font-medium capitalize">{item.title}</span>

          {showFileCount && (
            item.isNew ? (
              <Badge className="ms-auto py-0 rounded-full px-1.5">
                New
              </Badge>
            ) : (
              !!fileCount && (
                <Badge
                  className="py-0 px-1 min-w-[18px] inline-flex justify-center rounded-full bg-foreground/5"
                  variant="outline"
                >
                  {fileCount}
                </Badge>
              )
            )
          )}
        </Link>
      </AppSidebarMenuButton>
    </SidebarMenuSubItem>
  );
};

export default AppSidebarMenuItem;
