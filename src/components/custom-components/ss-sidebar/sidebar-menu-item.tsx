import { components } from "@/config/registry/components/index";
import { categorizedBlocks } from "@/components/blocks/utils";
import { isNew } from "@/components/blocks/category/block/TopBlockInfo";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { SidebarMenuSubItem } from "@/components/ui/sidebar";
import AppSidebarMenuButton from "./sidebar-menu-button";

interface SidebarItem {
  icon?: string | LucideIcon;
  url: string;
  title: string;
  blockName?: string;
  isNew?: boolean;
}

type AppSidebarMenuItemProps = React.ComponentProps<
  typeof SidebarMenuSubItem
> & {
  item: SidebarItem;
  showFileCount?: boolean;
};

const AppSidebarMenuItem = ({
  item,
  showFileCount,
  ...props
}: AppSidebarMenuItemProps) => {
  const componentCount = item.blockName
    ? components.filter((comp) => comp.category.name === item.blockName).length
    : 0;

  const blockCount =
    item.blockName && (categorizedBlocks as any)[item.blockName]
      ? (categorizedBlocks as any)[item.blockName].length
      : 0;

  const fileCount = componentCount || blockCount;

  const categoryComponents = components.filter(
    (comp) => comp.category.name === item.blockName,
  );
  const newComponentsCount = categoryComponents.filter(
    (comp) => comp.isNew,
  ).length;

  const categoryBlocks =
    item.blockName && (categorizedBlocks as any)[item.blockName]
      ? (categorizedBlocks as any)[item.blockName]
      : [];
  const newBlocksCount = categoryBlocks.filter(
    (block: any) => block.created_at && isNew(block.created_at),
  ).length;

  const totalNewCount = newComponentsCount + newBlocksCount;

  return (
    <SidebarMenuSubItem {...props}>
      <AppSidebarMenuButton
        url={item.url}
        className={cn("group/menu-button gap-x-3")}
        tooltip={item.title}
      >
        <Link
          href={item.url}
          prefetch={false}
          className="flex items-center justify-between w-full py-2 duration-150 transform group-hover/menu-button:translate-x-1"
        >
          {/*{typeof item.icon === "string" ? (
            <Icon icon={item.icon} className="w-5 h-5" />
          ) : (
            <item.icon className="w-5 h-5" />
          )}*/}
          <div className="flex items-center gap-2">
            <span className="font-medium capitalize">{item.title}</span>

            {totalNewCount > 0 && (
              <Badge
                variant={"default"}
                className="text-xs rounded-sm font-medium px-1.5"
              >
                + {totalNewCount} New
              </Badge>
            )}
          </div>

          {showFileCount && !!fileCount && (
            <Badge
              className="py-0 px-1 min-w-[18px] inline-flex justify-center rounded-full bg-foreground/5"
              variant="outline"
            >
              {fileCount}
            </Badge>
          )}
        </Link>
      </AppSidebarMenuButton>
    </SidebarMenuSubItem>
  );
};

export default AppSidebarMenuItem;
