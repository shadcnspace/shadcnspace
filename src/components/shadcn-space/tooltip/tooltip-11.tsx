"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Check, Copy, FolderDown, Terminal } from "lucide-react";

type PackageManager = "pnpm" | "npm" | "bun" | "yarn";

const commandTemplates: Record<PackageManager, (block: string) => string> = {
  pnpm: (b) => `pnpm dlx shadcn@latest add @shadcn-space/${b}`,
  npm: (b) => `npx shadcn@latest add @shadcn-space/${b}`,
  bun: (b) => `bunx --bun shadcn@latest add @shadcn-space/${b}`,
  yarn: (b) => `yarn dlx shadcn@latest add @shadcn-space/${b}`,
};

const TooltipCliCopySnippet = () => {
  const [pkg, setPkg] = useState<PackageManager>("pnpm");
  const [copied, setCopied] = useState(false);
  const blockName = "hero-01";

  const currentCommand = commandTemplates[pkg](blockName);

  const handleCopy = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard?.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">
          Hover to inspect CLI package manager options & copy command
        </p>
      </div>

      <TooltipProvider delay={100}>
        <Tooltip>
          <TooltipTrigger>
            <div
              onClick={() => handleCopy()}
              className="group inline-flex items-center gap-3 rounded-xl border border-border/80 bg-muted/40 hover:bg-muted/70 px-4 py-2 text-xs font-mono shadow-xs backdrop-blur-sm transition-all hover:border-primary/50 cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground">
                <Terminal className="size-3.5 text-primary" />
                <span className="text-foreground/90 font-medium">
                  {currentCommand}
                </span>
              </div>

              <div className="flex items-center gap-1.5 border-l border-border/60 pl-2.5">
                {copied ? (
                  <span className="flex items-center gap-1 text-emerald-500 font-semibold text-[11px]">
                    <Check className="size-3" />
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors text-[11px]">
                    <Copy className="size-3" />
                    Copy
                  </span>
                )}
              </div>
            </div>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            sideOffset={8}
            className="w-84 p-3 rounded-xl border border-border/80 bg-card text-card-foreground shadow-2xl backdrop-blur-xl"
          >
            {/* Header: Package Manager Selector */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/50">
              <span className="text-[11px] font-semibold tracking-wide text-muted-foreground uppercase flex items-center gap-1">
                <Terminal className="size-3" />
                CLI Package Runner
              </span>

              <div className="flex items-center rounded-lg bg-muted/60 p-0.5">
                {(["pnpm", "npm", "bun", "yarn"] as PackageManager[]).map((p) => (
                  <button
                    key={p}
                    onClick={(e) => {
                      e.preventDefault();
                      setPkg(p);
                    }}
                    className={`px-2 py-0.5 text-[10px] rounded-md transition-all cursor-pointer ${
                      pkg === p
                        ? "bg-background text-foreground font-semibold shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Box */}
            <div className="rounded-lg bg-muted/80 p-2.5 font-mono text-[11px] text-foreground flex items-center justify-between gap-2 border border-border/50">
              <span className="truncate select-all font-mono text-primary/90">
                {currentCommand}
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="h-6 px-2 text-[10px] gap-1 shrink-0 hover:bg-background"
              >
                {copied ? (
                  <>
                    <Check className="size-3 text-emerald-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            {/* Footer hints */}
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <FolderDown className="size-3 text-primary/70" />
                Copies to <code className="text-foreground">src/components/shadcn-space</code>
              </span>
              <div className="flex items-center gap-1">
                <Kbd>⌘</Kbd>
                <Kbd>C</Kbd>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TooltipCliCopySnippet;
