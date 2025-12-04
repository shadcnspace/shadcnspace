"use client";
import { codeToHtml } from "@/lib/shiki";
import { Loader2Icon } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [codeHtml, setCodeHtml] = useState<string | null>(null);

  useLayoutEffect(() => {
    codeToHtml(code).then(setCodeHtml);
  }, [code]);

  return codeHtml ? (
    <div dangerouslySetInnerHTML={{ __html: codeHtml }} />
  ) : (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2Icon className="animate-spin h-8 w-8" />
    </div>
  );
}
