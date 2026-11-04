"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  KeyRoundIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ShieldCheckIcon,
  TrashIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const title = "API Keys Manager";

const maskKey = (key: string) => {
  if (key.length <= 12) return key;
  return `${key.slice(0, 8)}${"..".repeat(4)}${key.slice(-4)}`;
};

type ApiKey = {
  id: string;
  name: string;
  key: string;
  env: "production" | "development" | "staging";
};

const initialKeys: ApiKey[] = [
  {
    id: "1",
    name: "Production",
    key: "sk_live_AUDO230454x242SDIFPPL",
    env: "production",
  },
  {
    id: "2",
    name: "Development",
    key: "sk_dev_DUILO30454x242SDIFUIP",
    env: "development",
  },
  {
    id: "3",
    name: "Staging",
    key: "sk_stg_IPPODAS230454x242SDI",
    env: "staging",
  },
];

const envConfig: Record<ApiKey["env"], { label: string; className: string }> = {
  production: {
    label: "Prod",
    className: "bg-teal-400/10 text-teal-400 border-teal-400/20",
  },
  development: {
    label: "Dev",
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  staging: {
    label: "Stage",
    className: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
};

export default function Pattern() {
  const [keys, setKeys] = useState(initialKeys);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full max-w-sm">
      <Card className="overflow-hidden p-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger
            nativeButton={false}
            render={
              <CardHeader
                className={cn(
                  "flex w-full cursor-pointer flex-row items-center gap-2 px-4 py-3 hover:bg-muted/50 transition-colors",
                  isOpen && "border-b",
                )}
              />
            }
          >
            <div className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <KeyRoundIcon aria-hidden="true" className="size-3.5" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold leading-none">
                API Keys
              </span>
              <span className="text-xs text-muted-foreground mt-0.5">
                {keys.length} keys active
              </span>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <Button
                variant="ghost"
                size="icon"
                className="size-7 text-muted-foreground hover:text-foreground cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                <PlusIcon aria-hidden="true" />
              </Button>
              <ChevronRightIcon
                aria-hidden="true"
                className={cn(
                  "size-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-90",
                )}
              />
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <CardContent className="flex flex-col divide-y divide-border p-0">
              {keys.length === 0 ? (
                <div className="flex flex-col items-center gap-2 px-4 py-6 text-center text-muted-foreground">
                  <ShieldCheckIcon className="size-8 opacity-30" />
                  <p className="text-xs">
                    No API keys yet. Click + to add one.
                  </p>
                </div>
              ) : (
                keys.map((item) => (
                  <ApiKeyItem
                    key={item.id}
                    item={item}
                    onDelete={(id) =>
                      setKeys((k) => k.filter((i) => i.id !== id))
                    }
                  />
                ))
              )}
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}

function ApiKeyItem({
  item,
  onDelete,
}: {
  item: ApiKey;
  onDelete: (id: string) => void;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const env = envConfig[item.env];

  const handleCopy = () => {
    navigator.clipboard.writeText(item.key);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/40 transition-colors">
      {/* Env badge */}
      <Badge
        variant="outline"
        className={cn(
          "shrink-0 text-[10px] font-semibold px-1.5 py-0",
          env.className,
        )}
      >
        {env.label}
      </Badge>

      {/* Key value - masked for display, full key copied */}
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <code className="truncate rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground/80 tracking-wide">
          {maskKey(item.key)}
        </code>
      </div>

      {/* Actions */}
      <DropdownMenu>
        <DropdownMenuTrigger className="size-7 shrink-0 text-muted-foreground hover:text-foreground">
          <MoreHorizontalIcon aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-36">
          <DropdownMenuItem onClick={handleCopy}>
            {isCopied ? (
              <CheckIcon aria-hidden="true" className="text-teal-400" />
            ) : (
              <CopyIcon aria-hidden="true" />
            )}
            <span>{isCopied ? "Copied!" : "Copy key"}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => onDelete(item.id)}
          >
            <TrashIcon aria-hidden="true" />
            <span>Delete key</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
