import { Icon } from "@iconify/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useBlockContext } from "@/providers/block-provider";
import { NodeItem, pathToTree, TreeNode } from "to-path-tree";

export const BlockCodeSidebar = () => {
  const { fileTree } = useBlockContext();

  if (!fileTree) return null;

  return (
    <SidebarProvider
      className="w-full bg-background"
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <Sidebar
        variant="inset"
        className="w-full data-[slot='sidebar-container']:relative z-0 bg-background"
        collapsible="none"
      >
        <SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <Tree tree={fileTree} />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarGroupContent>
      </Sidebar>
    </SidebarProvider>
  );
};

function Tree({ tree }: { tree: ReturnType<typeof pathToTree> }) {
  return (
    <>
      {/* Directories */}
      {Object.values(tree.subDirectory ?? {}).map((item, index) => (
        <TreeItem key={index} item={item} />
      ))}

      {/* Files */}
      {tree.items.map((item, index) => (
        <TreeItem key={index} item={item} />
      ))}
    </>
  );
}

function TreeItem({ item }: { item: NodeItem<unknown> | TreeNode<unknown> }) {
  const { activeFile, selectFile, isLoadingCode, activeTreePath } = useBlockContext();

  // File
  if ("filename" in item) {
    const nodeItem = item as NodeItem<unknown>;
    const isActive = activeTreePath === nodeItem.path;

    return (
      <SidebarMenuButton
        isActive={isActive}
        className="text-foreground/80 data-[state=active]:bg-accent relative text-base font-medium cursor-pointer"
        onClick={() => selectFile(item.path)}
      >
        {isLoadingCode && isActive ? (
          <Icon icon={"solar:restart-linear"} className="animate-spin" />
        ) : (
          <Icon icon="solar:code-file-linear" className="text-muted-foreground" width={24} height={24} />
        )}
        <span className="truncate">{nodeItem.file}</span>
      </SidebarMenuButton>
    );
  }

  // Directory
  return (
    <SidebarMenuItem>
      <Collapsible
        defaultOpen={true}
        className="group/collapsible"
      >
        <CollapsibleTrigger>
          <SidebarMenuButton className="text-foreground/80 text-base font-medium cursor-pointer">
            <Icon
              icon="solar:alt-arrow-down-linear"
              className="transition-transform duration-300 ease-in-out group-data-[closed]/collapsible:-rotate-90"
            />
            <Icon icon="solar:folder-2-bold-duotone" className="text-yellow-500" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden w-full">
          <SidebarMenuSub className="me-0! pe-0!">
            <Tree tree={item} />
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}