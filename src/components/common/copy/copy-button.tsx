"use client";

import { Check, Clipboard } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const CopyButton = ({ content }: { content: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <TooltipProvider delay={1000}>
      <Tooltip>
        <TooltipTrigger>
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
    </TooltipProvider>
  );
};
