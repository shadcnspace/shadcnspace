import { getFileContent } from "@/lib/file/file";
import { FC, ReactNode } from "react";
import { CodeDialog } from "@/components/blocks/code-viewer/component/code-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { config } from "@/config";
import { BlockProvider } from "@/providers/block-provider";
import dynamic from "next/dynamic";
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
  category: {
    name: string;
    title: string;
  };
  height?: string;
}

const ComponentBlock: FC<BlockProps> = async ({
  title,
  type,
  description,
  name,
  credit,
  className,
  category,
  height,
}) => {
  const flatPath = `src/components/shadcn-space/${category.name}/${name}.tsx`;
  // const nestedPath = `src/components/shadcn-space/${category.name}/${name}/${category.name}.tsx`;

  // let src = flatPath;
  // let DynamicComponent = BlockNotFound;

  // // Check if nested path exists
  // if (fs.existsSync(path.join(process.cwd(), nestedPath))) {
  //   src = nestedPath;
  //   try {
  //     const mod = await import(`@/components/shadcn-space/${category.name}/${name}/${category.name}.tsx`);
  //     DynamicComponent = mod.default || BlockNotFound;
  //   } catch (error) {
  //     console.error(`Failed to load nested component: ${nestedPath}`, error);
  //   }
  // } else {
  //   // Fallback to flat path
  //   src = flatPath;
  //   try {
  //     const mod = await import(`@/components/shadcn-space/${category.name}/${name}.tsx`);
  //     DynamicComponent = mod.default || BlockNotFound;
  //   } catch (error) {
  //     // console.error(`Failed to load flat component: ${flatPath}`, error);
  //   }
  // }

  const code = await getFileContent(flatPath);
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const registryUrl = `${protocol}://${config.appUrl}/r/${name}.json`;
  const DdynamicComponent = dynamic(() =>
    import(`@/components/shadcn-space/${category.name}/${name}.tsx`).catch(
      () => BlockNotFound,
    ),
  );
  return (
    <BlockProvider key={name} name={name}>
      <div
        className={cn(
          "bg-background border border-primary/8 rounded-md flex flex-col overflow-hidden",
          className,
        )}
      >
        <div className="h-10 flex items-center justify-between border-b border-muted pl-4 pr-3">
          <div className="flex items-center gap-2 text-sm">{title}</div>
          <div className="flex items-center">
            <Tooltip>
              <TooltipTrigger>
                <div className="rounded-md p-1 bg-primary/5 group">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 24"
                    fill="var(--primary)"
                    aria-label="Base UI"
                  >
                    <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z"></path>
                    <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z"></path>
                  </svg>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Built with Base UI</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <CodeDialog code={code} registryUrl={registryUrl} />
              </TooltipTrigger>
              <TooltipContent>
                <p>View Code</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex-1 min-h-48 px-4 py-5 w-full rounded flex items-center justify-center">
          <DdynamicComponent />
        </div>
      </div>
    </BlockProvider>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default ComponentBlock;
