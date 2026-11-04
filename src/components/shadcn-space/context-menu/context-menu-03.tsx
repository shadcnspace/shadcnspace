"use client";

import { useState } from "react";
import {
  Copy,
  Download,
  FileImage,
  FileText,
  FolderOpen,
  Link2,
  Mail,
  Pencil,
  Share2,
  Star,
  Trash2,
} from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";

type FileItem = { id: number; name: string; icon: typeof FileText; color: string; starred: boolean };

const initialFiles: FileItem[] = [
  { id: 1, name: "Brand guidelines.pdf", icon: FileText, color: "bg-orange-400/15 text-orange-400", starred: true },
  { id: 2, name: "Hero banner.png", icon: FileImage, color: "bg-sky-400/15 text-sky-400", starred: false },
  { id: 3, name: "Q4 roadmap.docx", icon: FileText, color: "bg-blue-500/15 text-blue-500", starred: false },
  { id: 4, name: "Team photo.jpg", icon: FileImage, color: "bg-teal-400/15 text-teal-400", starred: false },
];

const ContextMenuDemo = () => {
  const [files, setFiles] = useState(initialFiles);
  const [status, setStatus] = useState("Right click a file to see its actions");

  const update = (id: number, patch: Partial<FileItem>) =>
    setFiles((current) => current.map((file) => (file.id === id ? { ...file, ...patch } : file)));

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ul className="grid grid-cols-2 gap-3">
        {files.map((file) => (
          <li key={file.id}>
            <ContextMenu>
              <ContextMenuTrigger className="flex flex-col gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:bg-muted/40 data-popup-open:border-foreground/30 data-popup-open:bg-muted/40">
                <span className={cn("flex size-10 items-center justify-center rounded-md", file.color)}>
                  <file.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="truncate text-sm text-foreground">{file.name}</span>
                  {file.starred && <Star className="size-3.5 shrink-0 fill-amber-300 text-amber-300" aria-label="Starred" />}
                </span>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuItem onClick={() => setStatus(`Opened ${file.name}`)}>
                  <FolderOpen />
                  Open
                  <ContextMenuShortcut>Enter</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setStatus(`Renaming ${file.name}`)}>
                  <Pencil />
                  Rename
                  <ContextMenuShortcut>F2</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => {
                    update(file.id, { starred: !file.starred });
                    setStatus(file.starred ? `Removed ${file.name} from starred` : `Starred ${file.name}`);
                  }}
                >
                  <Star />
                  {file.starred ? "Remove star" : "Add star"}
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>
                    <Share2 />
                    Share
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-44">
                    <ContextMenuItem onClick={() => setStatus(`Copied link to ${file.name}`)}>
                      <Link2 />
                      Copy link
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => setStatus(`Emailing ${file.name}`)}>
                      <Mail />
                      Send by email
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem onClick={() => setStatus(`Duplicated ${file.name}`)}>
                  <Copy />
                  Duplicate
                  <ContextMenuShortcut>Ctrl D</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setStatus(`Downloading ${file.name}`)}>
                  <Download />
                  Download
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem
                  variant="destructive"
                  onClick={() => {
                    setFiles((current) => current.filter((item) => item.id !== file.id));
                    setStatus(`Moved ${file.name} to trash`);
                  }}
                >
                  <Trash2 />
                  Move to trash
                  <ContextMenuShortcut>Del</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <p aria-live="polite">{status}</p>
        {files.length < initialFiles.length && (
          <button
            type="button"
            onClick={() => setFiles(initialFiles)}
            className="shrink-0 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Restore files
          </button>
        )}
      </div>
    </div>
  );
};

export default ContextMenuDemo;
