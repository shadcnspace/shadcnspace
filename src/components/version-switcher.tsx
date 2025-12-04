"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useVersion } from "@/hooks/use-version";
import { ChevronDown, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VersionSwitcherProps {
  className?: string;
  variant?: "default" | "compact";
}

export function VersionSwitcher({
  className,
  variant = "default",
}: VersionSwitcherProps) {
  const { currentVersion, allVersions, isLoading } = useVersion();

  const handleVersionSwitch = (url: string) => {
    // Open in same tab for better UX
    window.location.href = url;
  };

  if (isLoading || !currentVersion) {
    return (
      <Button
        variant="outline"
        size={variant === "compact" ? "sm" : "default"}
        className={cn("gap-2 font-medium", className)}
        disabled
      >
        <Loader2 className="h-3 w-3 animate-spin" />
        {variant === "compact" ? "..." : "Loading..."}
      </Button>
    );
  }

  if (variant === "compact") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className={cn("gap-1 text-xs font-medium", className)}
          >
            {currentVersion.version}
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          {allVersions.map((version) => (
            <DropdownMenuItem
              key={version.version}
              className="flex flex-col items-start gap-1 p-3 cursor-pointer"
              onClick={() => handleVersionSwitch(version.url)}
            >
              <div className="flex items-center gap-2 w-full">
                <span className="font-medium">{version.label}</span>
                {version.isCurrentVersion && (
                  <Badge variant="secondary" className="text-xs">
                    Current
                  </Badge>
                )}
                {!version.isCurrentVersion && (
                  <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto" />
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {version.description}
              </p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn("gap-2 font-medium", className)}
        >
          {currentVersion.label}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <div className="p-2">
          <p className="text-sm font-medium mb-2">Switch Version</p>
          {allVersions.map((version) => (
            <DropdownMenuItem
              key={version.version}
              className="flex flex-col items-start gap-2 p-3 cursor-pointer rounded-md"
              onClick={() => handleVersionSwitch(version.url)}
            >
              <div className="flex items-center gap-2 w-full">
                <span className="font-medium">{version.label}</span>
                {version.isCurrentVersion && (
                  <Badge variant="secondary" className="text-xs">
                    Current
                  </Badge>
                )}
                {!version.isCurrentVersion && (
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-1" />
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                {version.description}
              </p>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
