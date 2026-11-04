"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AnimationContextValue {
  animKey: number;
  reload: () => void;
  isAnimate: boolean;
}

const AnimationContext = createContext<AnimationContextValue | null>(null);

export function AnimationProvider({
  children,
  isAnimate,
}: {
  children: ReactNode;
  isAnimate: boolean;
}) {
  const [animKey, setAnimKey] = useState(0);
  return (
    <AnimationContext.Provider
      value={{ animKey, reload: () => setAnimKey((k) => k + 1), isAnimate }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function ReloadButton() {
  const ctx = useContext(AnimationContext);
  if (!ctx?.isAnimate) return null;
  return (
    <Tooltip>
      <TooltipTrigger render={<Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground"
        onClick={ctx.reload}
      />}>
        <RotateCcw />
      </TooltipTrigger>
      <TooltipContent>
        <p>Replay animation</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function AnimationWrapper({ children }: { children: ReactNode }) {
  const ctx = useContext(AnimationContext);
  return <div key={ctx?.animKey} className="contents">{children}</div>;
}
