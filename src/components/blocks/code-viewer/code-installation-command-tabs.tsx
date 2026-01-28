"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getInstallationCommand } from "@/lib/shadcn-registry";
import { Check, Copy } from "lucide-react";
import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "../../common/icons";

const tabs = [
  {
    name: "pnpm",
    value: "pnpm",
    icon: PnpmLogo,
  },
  {
    name: "npm",
    value: "npm",
    icon: NPMLogo,
  },
  {
    name: "yarn",
    value: "yarn",
    icon: YarnLogo,
  },
  {
    name: "bun",
    value: "bun",
    icon: BunLogo,
  },
];

export const CodeInstallationCommandTabs = ({
  registryUrl,
}: {
  registryUrl: string;
}) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            <code className="text-[13px] flex items-center gap-2">
              <tab.icon className="h-4 w-4" /> {tab.name}
            </code>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="mt-0! border rounded-lg"
        >
          <div className="h-10 flex items-center justify-between gap-2 rounded-md pl-3 pr-1.5">
            <code className="text-[13px] grow line-clamp-1">
              {getInstallationCommand(tab.value, registryUrl)}
            </code>
            <Button
              size="icon"
              variant="secondary"
              className="shrink-0 h-7 w-7"
              onClick={() => {
                copyToClipboard(getInstallationCommand(tab.value, registryUrl));
              }}
            >
              {isCopied ? (
                <Check className="h-3.5! w-3.5! text-green-600" />
              ) : (
                <Copy className="h-3.5! w-3.5!" />
              )}
            </Button>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
