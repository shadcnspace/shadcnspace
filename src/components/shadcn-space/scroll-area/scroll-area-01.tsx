"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  FileImage,
  FileCode,
  FileArchive,
  File,
  Folder,
  MoreHorizontal,
} from "lucide-react";

type FileType = "folder" | "code" | "image" | "text" | "archive" | "other";

interface FileEntry {
  id: number;
  name: string;
  type: FileType;
  size: string | null;
  modified: string;
  author: string;
}

const files: FileEntry[] = [
  { id: 1, name: "src", type: "folder", size: null, modified: "Just now", author: "you" },
  { id: 2, name: "public", type: "folder", size: null, modified: "2 hrs ago", author: "Emma D." },
  { id: 3, name: "package.json", type: "code", size: "3.1 KB", modified: "Today", author: "you" },
  { id: 4, name: "tailwind.config.ts", type: "code", size: "1.4 KB", modified: "Today", author: "Alex M." },
  { id: 5, name: "next.config.mjs", type: "code", size: "0.8 KB", modified: "Yesterday", author: "you" },
  { id: 6, name: "README.md", type: "text", size: "5.2 KB", modified: "Yesterday", author: "James W." },
  { id: 7, name: "tsconfig.json", type: "code", size: "0.6 KB", modified: "2 days ago", author: "you" },
  { id: 8, name: "banner.png", type: "image", size: "184 KB", modified: "3 days ago", author: "Sarah C." },
  { id: 9, name: "avatar.svg", type: "image", size: "12 KB", modified: "3 days ago", author: "Sarah C." },
  { id: 10, name: "globals.css", type: "code", size: "2.3 KB", modified: "4 days ago", author: "you" },
  { id: 11, name: "components.json", type: "code", size: "0.9 KB", modified: "1 week ago", author: "Alex M." },
  { id: 12, name: "dist.zip", type: "archive", size: "2.1 MB", modified: "1 week ago", author: "CI/CD" },
  { id: 13, name: "CHANGELOG.md", type: "text", size: "8.7 KB", modified: "2 weeks ago", author: "James W." },
  { id: 14, name: "LICENSE", type: "text", size: "1.1 KB", modified: "1 month ago", author: "you" },
  { id: 15, name: "backup.tar.gz", type: "archive", size: "14.3 MB", modified: "1 month ago", author: "CI/CD" },
];

const iconConfig: Record<FileType, { icon: React.ElementType; className: string }> = {
  folder:  { icon: Folder,      className: "text-amber-300" },
  code:    { icon: FileCode,    className: "text-primary" },
  image:   { icon: FileImage,   className: "text-teal-400" },
  text:    { icon: FileText,    className: "text-muted-foreground" },
  archive: { icon: FileArchive, className: "text-orange-400" },
  other:   { icon: File,        className: "text-muted-foreground" },
};

const badgeVariant: Record<FileType, "default" | "secondary" | "outline" | "destructive"> = {
  folder:  "default",
  code:    "secondary",
  image:   "outline",
  text:    "outline",
  archive: "destructive",
  other:   "outline",
};

export default function CustomFileExplorer() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border shadow-sm">
      {/* Header */}
      <div className="bg-muted/40 flex items-center justify-between border-b px-4 py-3">
        <div>
          <p className="text-sm font-semibold">Project Files</p>
          <p className="text-muted-foreground text-xs">{files.length} items</p>
        </div>
        <Button variant="ghost" size="icon" className="size-8 cursor-pointer">
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      {/* Column labels — sticky inside the scroll area */}
      <ScrollArea className="h-80">
        <div className="bg-background/90 text-muted-foreground sticky top-0 z-10 grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
          <span>Name</span>
          <span className="w-16 text-center">Size</span>
          <span className="w-24 text-right">Modified</span>
        </div>

        <div className="px-2 py-1">
          {files.map((file, index) => {
            const { icon: Icon, className: iconClass } = iconConfig[file.type];
            return (
              <div key={file.id}>
                <div className="hover:bg-muted group grid cursor-pointer grid-cols-[1fr_auto_auto] items-center gap-2 rounded-lg px-2 py-2 transition-colors">
                  {/* Name + icon */}
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Icon className={`size-4 shrink-0 ${iconClass}`} />
                    <span className="min-w-0 truncate text-sm font-medium">
                      {file.name}
                    </span>
                    {file.author === "you" && (
                      <Badge variant="outline" className="text-primary border-primary/30 hidden shrink-0 text-[10px] group-hover:inline-flex">
                        you
                      </Badge>
                    )}
                  </div>

                  {/* Size */}
                  <div className="w-16 text-center">
                    {file.size ? (
                      <Badge
                        variant={badgeVariant[file.type]}
                        className="text-[10px]">
                        {file.size}
                      </Badge>
                    ) : (
                      <span className="text-muted-foreground text-xs">—</span>
                    )}
                  </div>

                  {/* Modified */}
                  <span className="text-muted-foreground w-24 shrink-0 text-right text-xs">
                    {file.modified}
                  </span>
                </div>
                {index < files.length - 1 && (
                  <div className="bg-border/50 mx-2 h-px" />
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="bg-muted/40 text-muted-foreground flex items-center justify-between border-t px-4 py-2 text-xs">
        <span>Last synced just now</span>
        <span>↑ 3 pending uploads</span>
      </div>
    </div>
  );
}
