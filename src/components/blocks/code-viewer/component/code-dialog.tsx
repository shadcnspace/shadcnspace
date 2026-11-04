import { codeToHtml } from "@/lib/shiki";
import { Code, Copy } from "lucide-react";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BlockCodeExplorer } from "./component-code-explorer";

function rewriteImports(code: string): string {
  let codeWithRewrittenImports = code;

  codeWithRewrittenImports = codeWithRewrittenImports.replace(
    /(["'])@\/registry\/ui\//g,
    "$1@/components/ui/"
  );
  return codeWithRewrittenImports;
}

export const CodeDialog = async ({
  code,
  registryUrl,
}: {
  code: string;
  registryUrl?: string;
}) => {
  const codeHtml = await codeToHtml(rewriteImports(code));

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-muted-foreground"
        >
          <Code />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl w-full p-0 border-none rounded-lg overflow-hidden gap-0 ">
        <div className="border-border rounded-lg">
          {registryUrl && (
            <div className="pt-6 pb-6 px-8 border-b">
              <h4 className="mb-2.5 font-semibold text-lg">
                CLI Command
              </h4>
              <CodeInstallationCommandTabs registryUrl={registryUrl} />
            </div>
          )}
          
          <BlockCodeExplorer />
        </div>
      </DialogContent>
    </Dialog>
  );
};
