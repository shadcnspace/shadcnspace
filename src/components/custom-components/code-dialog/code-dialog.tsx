import { codeToHtml } from "@/lib/shiki";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Code, Copy } from "lucide-react";
import { CodeInstallationCommandTabs } from "../../blocks/code-viewer/code-installation-command-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopyToClipboardButton } from "../../common/copy/copy-to-clipboard-button";

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
      <DialogTrigger >
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-muted-foreground"
        >
          <Code />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full p-0 border-none rounded-lg overflow-hidden gap-0 ">
        <div className="dark:border! border-border rounded-lg">
          {registryUrl && (
            <div className="pt-6 pb-8 px-8 border-b">
              <h4 className="mb-2.5 font-semibold text-lg">
                CLI Command
              </h4>
              <CodeInstallationCommandTabs registryUrl={registryUrl} />
            </div>
          )}
          <div className="px-8 border-b py-2.5 flex items-center justify-between">
            <h4 className="font-semibold text-lg">
              Copy Code
            </h4>
            <CopyToClipboardButton
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-muted-foreground"
              content={code}
            >
              <Copy />
            </CopyToClipboardButton>
          </div>
          <ScrollArea className="max-h-120 overflow-auto">
            <ScrollArea className="grid overflow-auto">
              <div
                dangerouslySetInnerHTML={{ __html: codeHtml }}
                className="h-full overflow-auto text-sm [&_.line]:leading-[1.7] [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:pt-4"
              />
            </ScrollArea>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
