"use client";

import { Check, Clipboard } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const CopyButton = ({ content }: { content: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => copyToClipboard(content)}
        >
          {isCopied ? <Check /> : <Clipboard />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>Copy Code</TooltipContent>
    </Tooltip>
  );
};
