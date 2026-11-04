
import { FC, ReactNode } from "react"
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BlockToolbar from "./block-toolbar";
import BlockPreview from "./block-preview";
import { BlockCodeExplorer } from "./block-code-explorer";
import { BlockProvider } from "@/providers/block-provider";
import TopBlockInfo from "../category/block/ComponentTopBlockInfo";

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
  componentPath?: string;
}

const ComponentBlock: FC<BlockProps> = async ({
  title,
  type,
  description,
  name,
  credit,
  className,
  componentPath,
}) => {




  return (
    <div
      className={cn(
        "bg-background rounded-lg flex flex-col",
        className
      )}
    >
      <BlockProvider key={name} name={name}>
        <TopBlockInfo title={title} />
        <Tabs defaultValue="preview" className="mt-6 gap-0 border border-border rounded-lg">
          <div className="flex flex-col md:flex-row flex-wrap md:items-end gap-2 justify-between p-3 border-b border-border">
              <BlockToolbar />
          </div>
          <TabsContent value="preview">
            <BlockPreview isComponent={true} />
          </TabsContent>
          <TabsContent value="code" className="max-md:hidden">
            <BlockCodeExplorer />
          </TabsContent>
        </Tabs>
      </BlockProvider>
    </div>
  );
};

const BlockNotFound = () => <p>Block not found</p>;

export default ComponentBlock;
