import { getNumberOfFilesInsideDirectory } from "@/lib/file";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import AppSidebarMenuButton from "./sidebar-menu-button";

interface SidebarItem {
  icon: LucideIcon;
  url: string;
  title: string;
  blockName?: string;
  isNew?: boolean;
}

type AppSidebarMenuItemProps = React.ComponentProps<typeof SidebarMenuItem> & {
  item: SidebarItem;
};

const AppSidebarMenuItem = async ({
  item,
  ...props
}: AppSidebarMenuItemProps) => {
  const fileCount = item.blockName
    ? await getNumberOfFilesInsideDirectory(
        `src/components/customized/${item.blockName}`
      )
    : null;

  return (
    <SidebarMenuItem {...props}>
      <AppSidebarMenuButton
        asChild
        url={item.url}
        className={cn("group/menu-button gap-x-3")}
        tooltip={item.title}
      >
        <Link href={item.url}>
          <item.icon />
          <span className="font-medium">{item.title}</span>
          {item.isNew ? (
            <Badge className="ml-auto py-0 rounded-full px-1.5">New</Badge>
          ) : (
            !!fileCount && (
              <Badge
                className={cn(
                  "ml-auto py-0 px-1 min-w-[18px] inline-flex justify-center rounded-full bg-foreground/5"
                )}
                variant="outline"
              >
                {fileCount}
              </Badge>
            )
          )}
        </Link>
      </AppSidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default AppSidebarMenuItem;
