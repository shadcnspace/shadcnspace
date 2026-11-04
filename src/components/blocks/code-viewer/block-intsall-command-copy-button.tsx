"use client";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { absoluteUrl } from "@/lib/utils";
import { ChevronDown, Check, Terminal, ArrowBigRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  PackageManager,
  packageManagers,
} from "@/components/common/data/package-managers";
import { usePackageManager } from "@/providers/package-manager-provider";
import { ButtonGroup } from "@/components/ui/button-group";
import Link from "next/link";

export const BlockInstallCommandCopyButton = ({ block }: { block: string }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { selectedPackageManager, setPackageManager, isHydrated } =
    usePackageManager();

  const currentPackageManager = packageManagers[selectedPackageManager];

  const copyInstallCommand = () => {
    const blockUrl = `@shadcn-space/${block}`;
    const installCommand = currentPackageManager.command(blockUrl);

    copyToClipboard(installCommand);
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <ButtonGroup>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-sm rounded-md! mr-1"
        onClick={copyInstallCommand}
      >
        {isCopied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <currentPackageManager.logo className="size-4" />
        )}
        <span className="inline md:hidden font-normal">Copy Command</span>
        <span className="hidden md:inline font-normal">
          {currentPackageManager.displayCommand(block)}
        </span>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger >
          <Button variant="outline" size="icon-sm" className="px-1.5 w-7">
            <ChevronDown className="size-3.5" />
            <span className="sr-only">Select package manager</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-56">
          {Object.entries(packageManagers).map(([key, pm]) => {
            return (
              <DropdownMenuItem
                key={key}
                onClick={() => setPackageManager(key as PackageManager)}
                className="cursor-pointer gap-2"
              >
                <pm.logo className="size-4" />
                <span className="flex-1">{pm.name}</span>
                {selectedPackageManager === key && (
                  <Check className="size-4 text-green-500" />
                )}
              </DropdownMenuItem>
            );
          })}
            <DropdownMenuItem>
                <Link href="https://shadcnspace.com/docs/getting-started/how-to-use-shadcn-cli#shadcn-cli-versions" className={'flex items-center gap-2'} >
                <ArrowBigRightIcon/>
                View Cli Documentation
                </Link>
              </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  );
};
