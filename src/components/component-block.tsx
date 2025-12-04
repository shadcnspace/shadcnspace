import { getFileContent } from "@/lib/file";
import { Copy, Info } from "lucide-react";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import { CopyToClipboardButton } from "./copy-to-clipboard-button";
import { CodeDialog } from "./customized/code-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { config } from "@/config";

interface BlockProps {
  title: string;
  children?: ReactNode;
  name: string;
  credit?: {
    label: string;
    link: string;
  };
  className?: string;
  description?: ReactNode;
  type: string;
}

const ComponentBlock: FC<BlockProps> = async ({
  title,
  type,
  description,
  name,
  credit,
  className,
}) => {
  const src = `src/components/customized/${type}/${name}.tsx`;
  const code = await getFileContent(src);
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const registryUrl = `${protocol}://${config.appUrl}/r/${name}.json`;

  // Dynamically import the component from its path
  const DynamicComponent = dynamic(() =>
    import(`@/components/customized/${type}/${name}.tsx`).catch(
      () => BlockNotFound
    )
  );

  return (
    <div
      className={cn(
        "bg-background border border-primary/8 rounded-md flex flex-col",
        className
      )}
    >
      <div className="h-10 flex items-center justify-between border-b border-muted pl-4 pr-3">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-medium">{title}</span>
          {credit && (
            <a
              href={credit.link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs hover:underline hover:text-foreground text-muted-foreground"
            >
              (Credits to {credit?.label})
            </a>
          )}
          {description ? (
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          ) : null}
        </div>
        <div className="flex items-center">
          <CopyToClipboardButton
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-muted-foreground"
            content={code}
          >
            <Copy />
          </CopyToClipboardButton>
          <CodeDialog code={code} registryUrl={registryUrl} />
        </div>
      </div>
      <div className="flex-1 min-h-32 px-4 py-5 w-full rounded flex items-center justify-center">
        <DynamicComponent />
      </div>
    </div>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default ComponentBlock;
