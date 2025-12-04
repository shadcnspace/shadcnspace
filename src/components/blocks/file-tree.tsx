import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronRight, FileIcon, FolderIcon } from "lucide-react";

import type { FileTree } from "@/types/blocks";
import { useBlockContext } from "@/providers/block-provider";
import { removeBlockPrefixFromPath } from "@/lib/blocks";

interface TreeProps {
  files: FileTree;
}

interface TreeItemProps {
  item: FileTree[0];
  index?: number;
}

export function FileTree({ files }: TreeProps) {
  return (
    <div className="w-full h-full overflow-y-auto">
      {files.map((item, index) => (
        <TreeItem key={index} item={item} />
      ))}
    </div>
  );
}

const TreeItem = ({ item, index = 0 }: TreeItemProps) => {
  const { activeFile, selectFile } = useBlockContext();
  const { name, type, children } = item;
  const filePaddingLeft = `${(index + 1) * 0.8 + 1.5}rem`;
  const folderPaddingLeft = `${(index + 1) * 0.8}rem`;

  const handleFileSelect = () => {
    if (item.type === "file") {
      selectFile(item.path);
    }
  };

  if (type === "file") {
    const isActive = removeBlockPrefixFromPath(activeFile) === item.path;

    return (
      <button
        className={cn(
          "flex items-center gap-2 w-full py-1.5 px-2 hover:bg-sidebar-accent truncate",
          { "bg-sidebar-accent": isActive }
        )}
        style={{ paddingLeft: filePaddingLeft }}
        onClick={handleFileSelect}
      >
        <FileIcon className="h-4 w-4 shrink-0 stroke-muted-foreground" />
        {name}
      </button>
    );
  }
  return (
    <div>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger
          className="flex items-center gap-2 w-full py-1.5 px-2 hover:bg-sidebar-accent truncate"
          style={{ paddingLeft: folderPaddingLeft }}
        >
          <ChevronRight className="transition-transform h-4 w-4" />
          <FolderIcon className="h-4 w-4 fill-muted-foreground stroke-muted-foreground" />
          {name}
        </CollapsibleTrigger>
        <CollapsibleContent className="pl-4 -ml-4">
          <div>
            {children?.map((subItem, subItemIndex) => (
              <TreeItem
                key={`subItem-${subItemIndex}`}
                item={subItem}
                index={index + 1}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
