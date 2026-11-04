"use client";

import { useBlockContext } from "@/providers/block-provider";
import { File } from "lucide-react";
import { BlockCodeSidebar } from "./block-code-sidebar";
import { CopyButton } from "../../common/copy/copy-button";

export const BlockCodeExplorer = () => {
  const { activeTreePath, code } = useBlockContext();

  return (
    <div className="flex divide-x overflow-hidden rounded-lg">
      <div className="w-full max-w-[20rem] shrink-0">
        <div className="bg-background flex h-12 items-center border-b pr-4 pl-7 font-medium">
          Explorer
        </div>
        <div className="w-full">
          <BlockCodeSidebar />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="bg-background flex h-12 shrink-0 items-center justify-between gap-4 border-b pe-2 ps-5">
          <div className="flex items-center gap-2">
            <File className="size-4" />
            <p className="leading-none font-medium">{activeTreePath}</p>
          </div>
          <CopyButton content={code ?? ""} />
        </div>
        <CodeBlock />
      </div>
    </div>
  );
};

const CodeBlock = () => {
  const { block, codeHtml } = useBlockContext();

  if (!block) return null;

  return (
    <div className="relative h-full">
      <div
        dangerouslySetInnerHTML={{ __html: codeHtml ?? "" }}
        className="h-full max-h-svh overflow-auto text-sm [&_.line]:leading-[1.7] [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:pt-4 [&>pre]:bg-background! dark:[--shiki-dark-bg:oklch(0.1296 0.0274 261.69);]"
      />
    </div>
  );
};
