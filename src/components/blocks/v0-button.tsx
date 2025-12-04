"use client";

import { Button } from "@/components/ui/button";
import { V0Logo } from "../ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const V0Button = ({ url }: { url: string }) => {
  const v0Url = `https://v0.dev/chat/api/open?url=${url}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          className="font-mono text-xs"
          asChild
        >
          <a href={v0Url} target="_blank" rel="noopener noreferrer">
            <V0Logo />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open in v0</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default V0Button;
