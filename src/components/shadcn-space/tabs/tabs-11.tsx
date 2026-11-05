"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileCode, FileJson, FileText, Palette, RotateCcw, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EditorFile = {
  id: string;
  name: string;
  lines: string[];
};

const fileIcons = {
  tsx: { icon: FileCode, color: "text-sky-400" },
  css: { icon: Palette, color: "text-teal-400" },
  json: { icon: FileJson, color: "text-amber-300" },
  md: { icon: FileText, color: "text-orange-400" },
};

const getFileIcon = (name: string) => {
  const extension = name.split(".").pop() as keyof typeof fileIcons;
  return fileIcons[extension] ?? fileIcons.tsx;
};

const initialFiles: EditorFile[] = [
  {
    id: "page",
    name: "page.tsx",
    lines: [
      'import { Button } from "@/components/ui/button";',
      "",
      "export default function Page() {",
      "  return <Button>Get started</Button>;",
      "}",
    ],
  },
  {
    id: "globals",
    name: "globals.css",
    lines: [
      '@import "tailwindcss";',
      "",
      ":root {",
      "  --radius: 0.625rem;",
      "}",
    ],
  },
  {
    id: "package",
    name: "package.json",
    lines: [
      "{",
      '  "name": "my-app",',
      '  "private": true,',
      '  "scripts": { "dev": "next dev" }',
      "}",
    ],
  },
  {
    id: "readme",
    name: "README.md",
    lines: ["# My App", "", "Built with shadcn/ui and Tailwind CSS."],
  },
];

const BrowserTabsDemo = () => {
  const [files, setFiles] = useState<EditorFile[]>(initialFiles);
  const [active, setActive] = useState<string | null>(initialFiles[0].id);
  const reduceMotion = useReducedMotion();

  const reopenFiles = () => {
    setFiles(initialFiles);
    setActive(initialFiles[0].id);
  };

  const closeFile = (id: string) => {
    const index = files.findIndex((file) => file.id === id);
    const remaining = files.filter((file) => file.id !== id);
    setFiles(remaining);
    if (active === id) {
      const next = remaining[index] ?? remaining[index - 1];
      setActive(next ? next.id : null);
    }
  };

  const tabMotion = reduceMotion
    ? {}
    : {
        layout: true,
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 6 },
        transition: { type: "spring" as const, stiffness: 500, damping: 40 },
      };

  return (
    <div className="w-full max-w-xl">
      <Tabs
        value={active}
        onValueChange={(value) => setActive(value as string)}
        className="gap-0 overflow-hidden rounded-xl border border-border bg-background"
      >
        <div className="flex items-center border-b border-border bg-muted/50">
          <TabsList
            variant="line"
            className="w-full justify-start gap-0 overflow-x-auto p-0 group-data-horizontal/tabs:h-10"
          >
            <AnimatePresence initial={false}>
              {files.map((file) => {
                const { icon: Icon, color } = getFileIcon(file.name);
                const isActive = active === file.id;

                return (
                  <motion.div
                    key={file.id}
                    className="group/file relative flex h-full shrink-0 border-r border-border"
                    {...tabMotion}
                  >
                    <TabsTrigger
                      value={file.id}
                      className="h-full flex-none rounded-none border-0 pr-8 pl-3 font-mono text-xs after:hidden data-active:bg-background!"
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-0.5 bg-blue-500"
                        />
                      )}
                      <Icon aria-hidden="true" className={cn("size-3.5", color)} />
                      {file.name}
                    </TabsTrigger>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={() => closeFile(file.id)}
                      aria-label={`Close ${file.name}`}
                      className={cn(
                        "absolute top-1/2 right-1.5 size-5 -translate-y-1/2 text-muted-foreground opacity-0 transition-opacity group-hover/file:opacity-100 focus-visible:opacity-100",
                        isActive && "opacity-100",
                      )}
                    >
                      <X className="size-3" />
                    </Button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </TabsList>
        </div>

        {files.length === 0 ? (
          <div className="flex h-48 flex-col items-center justify-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">No open files</p>
            <Button variant="outline" size="sm" onClick={reopenFiles}>
              <RotateCcw />
              Reopen files
            </Button>
          </div>
        ) : (
          files.map((file) => (
            <TabsContent key={file.id} value={file.id}>
              <pre className="h-48 overflow-auto py-3 font-mono text-xs leading-6">
                <code>
                  {file.lines.map((line, index) => (
                    <span key={index} className="flex">
                      <span
                        aria-hidden="true"
                        className="w-10 shrink-0 pr-4 text-right text-muted-foreground/60 select-none"
                      >
                        {index + 1}
                      </span>
                      <span className="text-foreground/90">{line || " "}</span>
                    </span>
                  ))}
                </code>
              </pre>
            </TabsContent>
          ))
        )}
      </Tabs>
    </div>
  );
};

export default BrowserTabsDemo;
