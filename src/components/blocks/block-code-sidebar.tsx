import { ChevronRight, File, Folder, Loader2 } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const BlockCodeSidebar = () => {
  const { fileTree } = useBlockContext();

  if (!fileTree) return null;

  return (
    <SidebarProvider
      className="w-full"
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <Sidebar
        variant="inset"
        className="w-full data-[slot='sidebar-container']:relative"
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
  const { activeFile, selectFile, isLoadingCode } = useBlockContext();

  // File
  if ("filename" in item) {
    const nodeItem = item as NodeItem<unknown>;
    const isActive = activeFile === nodeItem.path;

    return (
      <Tooltip delayDuration={1000}>
        <TooltipTrigger asChild>
          <SidebarMenuButton
            isActive={isActive}
            className="text-foreground/80 data-[state=active]:bg-accent relative text-base font-medium"
            onClick={() => selectFile(item.path)}
          >
            {isLoadingCode && isActive ? (
              <Loader2 className="animate-spin" />
            ) : (
              <File className="text-muted-foreground" />
            )}
            <span className="truncate">{nodeItem.file}</span>
          </SidebarMenuButton>
        </TooltipTrigger>
        <TooltipContent side="right">{nodeItem.file}</TooltipContent>
      </Tooltip>
    );
  }

  // Directory
  return (
    <SidebarMenuItem>
      <Collapsible
        defaultOpen={`/${activeFile}`.startsWith(item.path)}
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="text-foreground/80 text-base font-medium">
            <ChevronRight className="transition-transform" />
            <Folder className="fill-muted-foreground stroke-muted-foreground" />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="max-w-(--radix-collapsible-content-width) overflow-hidden">
          <SidebarMenuSub>
            <Tree tree={item} />
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
