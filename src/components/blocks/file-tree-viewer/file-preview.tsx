"use client"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { removeBlockPrefixFromPath } from "@/lib/blocks";
import { getFileContent } from "@/lib/file/file";
import { useBlockContext } from "@/providers/block-provider";
import { CheckIcon, CopyIcon, FileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/blocks/code-viewer/code-block";


export function FilePreview() {
  const [code, setCode] = useState<string>("");
  const { activeFile, block } = useBlockContext();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  useEffect(() => {
    const filePath = activeFile.startsWith("src/")
      ? activeFile
      : `src/blocks/${block.name}/${activeFile}`;
    getFileContent(filePath).then((code) => setCode(code));
  }, [activeFile, block.name]);

  return (
    <div className="w-full flex flex-col overflow-x-auto">
      <div className="shrink-0 h-14 pl-6 pr-4 border-b flex items-center gap-2 justify-between bg-background">
        <div className="flex items-center gap-2">
          <FileIcon className="h-4 w-4" />{" "}
          {removeBlockPrefixFromPath(activeFile)}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(code)}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </Button>
      </div>

      <CodeBlock code={code} />
    </div>
  );
}
