"use client";

import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { Check, Copy, FileCode2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import type { SVGProps } from "react";

// -- Package manager icons (inlined for registry self-containment) --

const PnpmIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="76.59 44 164.01 164" width="1em" height="1em" {...p}>
    <defs>
      <path d="M237.6 95H187.6V45h50v50Z" id="a" /><path d="M182.59 95H132.59V45h50v50Z" id="b" />
      <path d="M127.59 95H77.59V45h50v50Z" id="c" /><path d="M237.6 150H187.6v-50h50v50Z" id="d" />
      <path d="M182.59 150H132.59v-50h50v50Z" id="e" /><path d="M182.59 205H132.59v-50h50v50Z" id="f" />
      <path d="M237.6 205H187.6v-50h50v50Z" id="g" /><path d="M127.59 205H77.59v-50h50v50Z" id="h" />
    </defs>
    <use xlinkHref="#a" fill="#f9ad00" /><use xlinkHref="#b" fill="#f9ad00" /><use xlinkHref="#c" fill="#f9ad00" />
    <use xlinkHref="#d" fill="#f9ad00" /><use xlinkHref="#e" fill="#4e4e4e" /><use xlinkHref="#f" fill="#4e4e4e" />
    <use xlinkHref="#g" fill="#4e4e4e" /><use xlinkHref="#h" fill="#4e4e4e" />
  </svg>
);

const NpmIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="1em" height="1em" {...p}>
    <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z" />
  </svg>
);

const YarnIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518 518" width="1em" height="1em" {...p}>
    <circle cx="259" cy="259" r="259" fill="#2c8ebb" />
    <path fill="#fff" d="M435.2 337.5c-1.8-14.2-13.8-24-29.2-23.8-23 .3-42.3 12.2-55.1 20.1-5 3.1-9.3 5.4-13 7.1.8-11.6.1-26.8-5.9-43.5-7.3-20-17.1-32.3-24.1-39.4 8.1-11.8 19.2-29 24.4-55.6 4.5-22.7 3.1-58-7.2-77.8-2.1-4-5.6-6.9-10-8.1-1.8-.5-5.2-1.5-11.9.4C293.1 96 289.6 93.8 286.9 92c-5.6-3.6-12.2-4.4-18.4-2.1-8.3 3-15.4 11-22.1 25.2-1 2.1-1.9 4.1-2.7 6.1-12.7.9-32.7 5.5-49.6 23.8-2.1 2.3-6.2 4-10.5 5.6h.1c-8.8 3.1-12.8 10.3-17.7 23.3-6.8 18.2.2 36.1 7.1 47.7-9.4 8.4-21.9 21.8-28.5 37.5-8.2 19.4-9.1 38.4-8.8 48.7-7 7.4-17.8 21.3-19 36.9-1.6 21.8 6.3 36.6 9.8 42 1 1.6 2.1 2.9 3.3 4.2-.4 2.7-.5 5.6.1 8.6 1.3 7 5.7 12.7 12.4 16.3 13.2 7 31.6 10 45.8 2.9 5.1 5.4 14.4 10.6 31.3 10.6h1c4.3 0 58.9-2.9 74.8-6.8 7.1-1.7 12-4.7 15.2-7.4 10.2-3.2 38.4-12.8 65-30 18.8-12.2 25.3-14.8 39.3-18.2 13.6-3.3 22.1-15.7 20.4-29.4z" />
  </svg>
);

const BunIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70" width="1em" height="1em" {...p}>
    <path d="M71.09 20.74c-.16-.17-.33-.34-.5-.5s-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5-.33-.34-.5-.5A26.46 26.46 0 0 1 75.5 35.7c0 16.57-16.82 30.05-37.5 30.05-11.58 0-21.94-4.23-28.83-10.86l.5.5.5.5.5.5.5.5.5.5.5.5.5.5C19.55 65.3 30.14 69.75 42 69.75c20.68 0 37.5-13.48 37.5-30 0-7.06-3.04-13.75-8.41-19.01Z"/>
    <path fill="#fbf0df" d="M73 35.7c0 15.21-15.67 27.54-35 27.54S3 50.91 3 35.7C3 26.27 9 17.94 18.22 13S33.18 3 38 3s8.94 4.13 19.78 10C67 17.94 73 26.27 73 35.7Z"/>
    <path fill="#f6dece" d="M73 35.7a21.67 21.67 0 0 0-.8-5.78c-2.73 33.3-43.35 34.9-59.32 24.94A40 40 0 0 0 38 63.24c19.3 0 35-12.35 35-27.54Z"/>
    <ellipse cx="53.22" cy="40.18" rx="5.85" ry="3.44" fill="#febbd0"/>
    <ellipse cx="22.95" cy="40.18" rx="5.85" ry="3.44" fill="#febbd0"/>
    <path fillRule="evenodd" d="M25.7 38.8a5.51 5.51 0 1 0-5.5-5.51 5.51 5.51 0 0 0 5.5 5.51Zm24.77 0A5.51 5.51 0 1 0 45 33.29a5.5 5.5 0 0 0 5.47 5.51Z"/>
    <path fill="#fff" fillRule="evenodd" d="M24 33.64a2.07 2.07 0 1 0-2.06-2.07A2.07 2.07 0 0 0 24 33.64Zm24.77 0a2.07 2.07 0 1 0-2.06-2.07 2.07 2.07 0 0 0 2.04 2.07Z"/>
    <path fill="#b71422" d="M45.05 43a8.93 8.93 0 0 1-2.92 4.71 6.81 6.81 0 0 1-4 1.88A6.84 6.84 0 0 1 34 47.71 8.93 8.93 0 0 1 31.12 43a.72.72 0 0 1 .8-.81h12.34a.72.72 0 0 1 .79.81Z"/>
    <path fill="#ff6164" d="M34 47.79a6.91 6.91 0 0 0 4.12 1.9 6.91 6.91 0 0 0 4.11-1.9 10.63 10.63 0 0 0 1-1.07 6.83 6.83 0 0 0-4.9-2.31 6.15 6.15 0 0 0-5 2.78c.23.21.43.41.67.6Z"/>
  </svg>
);

// -- Styles --
// Injected once at runtime — ships as a single self-contained file with no
// modifications to globals.css required.

const CB_STYLES = `
.cbln code{counter-reset:line;counter-increment:line 0}
.cbln .line::before{content:counter(line);counter-increment:line;display:inline-block;min-width:1.5rem;padding-right:.75rem;margin-right:1rem;text-align:right;font-size:.75rem;line-height:1.7;user-select:none;color:color-mix(in srgb,var(--muted-foreground,#888) 55%,transparent)}
.cbhl .line-highlighted{display:block;background-color:oklch(0.828 0.189 84.429/.12);border-left:2px solid oklch(0.769 0.188 70.08);margin:0 -1rem;padding:0 1rem}
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("ss-code-block")) return;
  const el = document.createElement("style");
  el.id = "ss-code-block";
  el.textContent = CB_STYLES;
  document.head.appendChild(el);
}

// -- Types --

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  scrollable?: boolean;
  maxHeight?: number;
  highlightLines?: number[];
  /** Tailwind class(es) applied to the code body — e.g. "bg-muted", "bg-slate-950" */
  bodyClassName?: string;
  className?: string;
}

export interface FileEntry {
  filename: string;
  code: string;
  language?: string;
}

export interface LanguageTab {
  label: string;
  filename: string;
  code: string;
  language?: string;
}

// -- Shiki renderer --

async function renderCode(
  code: string,
  language: string,
  highlightLines?: number[]
): Promise<string> {
  return codeToHtml(code, {
    lang: language as BundledLanguage,
    themes: { light: "github-light", dark: "github-dark-default" },
    tabindex: false,
    transformers: [
      {
        pre(node) {
          // Strip shiki's inline background-color so the wrapper's bodyClassName shows through
          if (node.properties?.style) {
            node.properties.style = (node.properties.style as string)
              .replace(/background-color:\s*[^;]+;?\s*/gi, "")
              .replace(/--shiki-dark-bg:\s*[^;]+;?\s*/gi, "");
          }
        },
        line(node, line) {
          if (highlightLines?.includes(line)) {
            this.addClassToHast(node, "line-highlighted");
          }
        },
      },
    ],
  });
}

// -- Copy button --

function CopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    if (typeof window === "undefined" || !navigator?.clipboard) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0" onClick={copy}>
      {copied
        ? <Check className="h-3.5 w-3.5 text-teal-400" />
        : <Copy className="h-3.5 w-3.5" />}
    </Button>
  );
}

// -- Internal code renderer --

interface RendererProps {
  code: string;
  language: string;
  showLineNumbers: boolean;
  scrollable: boolean;
  maxHeight: number;
  highlightLines?: number[];
  bodyClassName?: string;
}

function CodeRenderer({
  code, language, showLineNumbers, scrollable, maxHeight, highlightLines, bodyClassName,
}: RendererProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    injectStyles();
    renderCode(code, language, highlightLines).then(setHtml);
  }, [code, language, highlightLines]);

  return (
    <div
      className={cn(
        "overflow-x-auto",
        scrollable && "overflow-y-auto",
        bodyClassName ?? "bg-background"
      )}
      style={scrollable ? { maxHeight: `${maxHeight}px` } : undefined}
    >
      {html ? (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className={cn(
            "text-sm [&>pre]:p-4 [&_.line]:leading-[1.7]",
            showLineNumbers && "cbln",
            highlightLines?.length && "cbhl"
          )}
        />
      ) : (
        <div className="flex h-16 items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
        </div>
      )}
    </div>
  );
}

// -- CodeBlock --

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
  scrollable = false,
  maxHeight = 400,
  highlightLines,
  bodyClassName,
  className,
}: CodeBlockProps) {
  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      <div className="flex h-10 items-center justify-between gap-2 border-b bg-muted/50 px-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileCode2 className="h-4 w-4 shrink-0" />
          <span className="truncate font-mono text-xs">{filename ?? language}</span>
        </div>
        <CopyBtn code={code} />
      </div>
      <CodeRenderer
        code={code}
        language={language}
        showLineNumbers={showLineNumbers}
        scrollable={scrollable}
        maxHeight={maxHeight}
        highlightLines={highlightLines}
        bodyClassName={bodyClassName}
      />
    </div>
  );
}

// -- MultiFileCodeBlock --

interface MultiFileCodeBlockProps {
  files: FileEntry[];
  showLineNumbers?: boolean;
  scrollable?: boolean;
  maxHeight?: number;
  bodyClassName?: string;
  className?: string;
}

export function MultiFileCodeBlock({
  files,
  showLineNumbers = false,
  scrollable = false,
  maxHeight = 400,
  bodyClassName,
  className,
}: MultiFileCodeBlockProps) {
  const [active, setActive] = useState(files[0]?.filename ?? "");
  const file = files.find((f) => f.filename === active) ?? files[0];

  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b bg-muted/50">
        <div className="flex overflow-x-auto no-scrollbar pl-1">
          {files.map((f) => (
            <button
              key={f.filename}
              onClick={() => setActive(f.filename)}
              className={cn(
                "h-10 px-3 font-mono text-xs shrink-0 border-b-2 transition-colors",
                active === f.filename
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {f.filename}
            </button>
          ))}
        </div>
        {file && <div className="pr-3 shrink-0"><CopyBtn code={file.code} /></div>}
      </div>
      {file && (
        <CodeRenderer
          code={file.code}
          language={file.language ?? "tsx"}
          showLineNumbers={showLineNumbers}
          scrollable={scrollable}
          maxHeight={maxHeight}
          bodyClassName={bodyClassName}
        />
      )}
    </div>
  );
}

// -- LanguageTabsCodeBlock --

interface LanguageTabsCodeBlockProps {
  tabs: LanguageTab[];
  showLineNumbers?: boolean;
  scrollable?: boolean;
  maxHeight?: number;
  bodyClassName?: string;
  className?: string;
}

export function LanguageTabsCodeBlock({
  tabs,
  showLineNumbers = false,
  scrollable = false,
  maxHeight = 400,
  bodyClassName,
  className,
}: LanguageTabsCodeBlockProps) {
  const [active, setActive] = useState(tabs[0]?.label ?? "");
  const tab = tabs.find((t) => t.label === active) ?? tabs[0];

  return (
    <div className={cn("rounded-lg border overflow-hidden", className)}>
      {/* Language selector */}
      <div className="flex items-center border-b bg-muted/50 px-2 overflow-x-auto no-scrollbar">
        {tabs.map((t) => (
          <button
            key={t.label}
            onClick={() => setActive(t.label)}
            className={cn(
              "h-10 px-3 text-sm font-medium shrink-0 border-b-2 transition-colors",
              active === t.label
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      {/* Filename + copy */}
      {tab && (
        <>
          <div className="flex h-10 items-center justify-between gap-2 border-b bg-muted/50 px-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileCode2 className="h-4 w-4 shrink-0" />
              <span className="truncate font-mono text-xs">{tab.filename}</span>
            </div>
            <CopyBtn code={tab.code} />
          </div>
          <CodeRenderer
            code={tab.code}
            language={tab.language ?? "tsx"}
            showLineNumbers={showLineNumbers}
            scrollable={scrollable}
            maxHeight={maxHeight}
            bodyClassName={bodyClassName}
          />
        </>
      )}
    </div>
  );
}

// -- InstallCommand --

const PM_LIST = [
  { label: "pnpm", icon: PnpmIcon },
  { label: "npm",  icon: NpmIcon  },
  { label: "yarn", icon: YarnIcon },
  { label: "bun",  icon: BunIcon  },
] as const;

function buildCommand(pm: string, url: string) {
  switch (pm) {
    case "npm":  return `npx shadcn@latest add ${url}`;
    case "yarn": return `yarn dlx shadcn@latest add ${url}`;
    case "bun":  return `bunx --bun shadcn@latest add ${url}`;
    default:     return `pnpm dlx shadcn@latest add ${url}`;
  }
}

interface InstallCommandProps {
  registryUrl: string;
  className?: string;
}

export function InstallCommand({ registryUrl, className }: InstallCommandProps) {
  const [pm, setPm] = useState<string>("pnpm");
  const [copied, setCopied] = useState(false);

  const command = buildCommand(pm, registryUrl);

  const copy = () => {
    if (typeof window === "undefined" || !navigator?.clipboard) return;
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={cn("space-y-2", className)}>
      {/* Package manager tabs */}
      <div className="inline-flex items-center gap-0.5 rounded-lg bg-muted p-1">
        {PM_LIST.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setPm(label)}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
              pm === label
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </button>
        ))}
      </div>
      {/* Command row */}
      <div className="flex h-10 items-center justify-between gap-2 rounded-lg border bg-background px-3">
        <code className="grow truncate text-sm">{command}</code>
        <Button size="icon" variant="ghost" className="h-7 w-7 shrink-0" onClick={copy}>
          {copied
            ? <Check className="h-3.5 w-3.5 text-teal-400" />
            : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
    </div>
  );
}
