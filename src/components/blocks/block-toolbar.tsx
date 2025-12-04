"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { blockScreens } from "@/description/blocks";
import { absoluteUrl } from "@/lib/utils";
import { useBlockContext } from "@/providers/block-provider";
import { FullscreenIcon, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { BlockInstallCommandCopyButton } from "./block-intsall-command-copy-button";
import V0Button from "./v0-button";
import { useEffect, useState } from "react";

const BlockToolbar = () => {
  const { screenSize, setScreenSize } = useBlockContext();
  const { block } = useBlockContext();

  return (
    <div className="flex items-center gap-2">
      <BlockInstallCommandCopyButton block={block.name} />
      <ThemeToggleButton />
      <Tooltip>
        <TooltipTrigger>
          <Button asChild variant="outline" size="icon-sm">
            <Link href={`/blocks/${block.name}/preview`} target="_blank">
              <FullscreenIcon />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open preview in new tab</p>
        </TooltipContent>
      </Tooltip>
      <V0Button url={absoluteUrl(`/r/${block.name}.json`)} />
      <div className="border rounded-md hidden md:flex items-center gap-1 p-1 h-8 shadow-xs">
        {blockScreens.map(({ name, icon: Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Button
                key={name}
                variant={name === screenSize ? "secondary" : "ghost"}
                className="h-6 w-6"
                onClick={() => setScreenSize(name)}
              >
                <Icon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

const ThemeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useBlockContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  if (!mounted) {
    return <Button variant="outline" size="icon-sm" />;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={handleThemeToggle}
          className="max-sm:hidden"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Toggle theme</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default BlockToolbar;
