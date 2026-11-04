"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const CopyToClipboardButton = ({
  content,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { content: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Button {...props} onClick={() => copyToClipboard(content)}>
      {isCopied ? <Check className="text-green-600" /> : children}
    </Button>
  );
};
