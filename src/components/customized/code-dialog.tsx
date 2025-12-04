import { codeToHtml } from "@/lib/shiki";
import { VisuallyHidden as VisuallyHiddenPrimitive } from "radix-ui";
import { Code } from "lucide-react";
import { CodeInstallationCommandTabs } from "../code-installation-command-tabs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <VisuallyHiddenPrimitive.VisuallyHidden>
        <DialogTitle>Code Dialog</DialogTitle>
      </VisuallyHiddenPrimitive.VisuallyHidden>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 text-muted-foreground"
        >
          <Code />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl w-full p-0 border-none rounded-lg overflow-hidden gap-0">
        {registryUrl && (
          <div className="pt-6 pb-8 px-8 border-b">
            <h2 className="mb-2.5 font-semibold text-lg">
              Installation Command
            </h2>
            <CodeInstallationCommandTabs registryUrl={registryUrl} />
          </div>
        )}

        <ScrollArea className="max-h-120" type="auto">
          <ScrollArea orientation="horizontal" className="grid" type="auto">
            <div
              dangerouslySetInnerHTML={{ __html: codeHtml }}
              className="h-full overflow-auto text-sm [&_.line]:leading-[1.7] [&>pre]:h-full [&>pre]:overflow-x-auto [&>pre]:pt-4"
            />
          </ScrollArea>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
