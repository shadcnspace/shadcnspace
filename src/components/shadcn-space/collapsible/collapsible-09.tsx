"use client";

import { useState, type ReactNode } from "react";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const code = `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center justify-between">
        {question}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="pt-2 text-muted-foreground">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  );
}`;

const PREVIEW_LINES = 5;

// Tiny TSX highlighter: strings, keywords, JSX tags, attributes, and punctuation. No dependencies.
const tokenPattern =
  /("[^"]*"|'[^']*'|`[^`]*`)|\b(import|from|export|default|function|return|const|let|type|interface)\b|(<\/?)([A-Za-z][\w.]*)|([A-Za-z-]+)(?==)|([{}()[\]<>/=;:,.])/g;

function highlight(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of line.matchAll(tokenPattern)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(line.slice(last, index));
    const [full, string, keyword, tagOpen, tagName, attribute] = match;
    if (string) nodes.push(<span key={index} className="text-teal-400">{string}</span>);
    else if (keyword) nodes.push(<span key={index} className="text-blue-500">{keyword}</span>);
    else if (tagName)
      nodes.push(
        <span key={index}>
          <span className="text-muted-foreground">{tagOpen}</span>
          <span className="text-sky-400">{tagName}</span>
        </span>,
      );
    else if (attribute) nodes.push(<span key={index} className="text-orange-400">{attribute}</span>);
    else nodes.push(<span key={index} className="text-muted-foreground">{full}</span>);
    last = index + full.length;
  }
  if (last < line.length) nodes.push(line.slice(last));
  return nodes;
}

const CollapsibleDemo = () => {
  const [open, setOpen] = useState(false);
  const lines = code.split("\n");
  const preview = lines.slice(0, PREVIEW_LINES);
  const rest = lines.slice(PREVIEW_LINES);

  const renderLines = (list: string[], offset: number) =>
    list.map((line, index) => (
      <div key={index + offset} className="flex">
        <span className="w-8 shrink-0 pr-3 text-right text-muted-foreground/60 select-none">{index + offset + 1}</span>
        <span className="whitespace-pre text-foreground/90">{line ? highlight(line) : " "}</span>
      </div>
    ));

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <span className="font-mono text-xs text-muted-foreground">faq.tsx</span>
        <span className="text-xs text-muted-foreground tabular-nums">{lines.length} lines</span>
      </div>
      <div className="relative overflow-x-auto py-2 font-mono text-xs">
        {renderLines(preview, 0)}
        <CollapsibleContent>{renderLines(rest, PREVIEW_LINES)}</CollapsibleContent>
        {!open && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-background to-transparent"
          />
        )}
      </div>
      <CollapsibleTrigger className="flex w-full items-center justify-center gap-1.5 border-t border-border py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
        {open ? <ChevronsDownUp className="size-3.5" aria-hidden="true" /> : <ChevronsUpDown className="size-3.5" aria-hidden="true" />}
        {open ? "Collapse" : `Show ${rest.length} more lines`}
      </CollapsibleTrigger>
    </Collapsible>
  );
};

export default CollapsibleDemo;
