"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockProvider } from "@/providers/block-provider";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";
import { BlockCodeExplorer } from "./block-code-explorer";
import { RegistryBlock } from "@/config/registry/blocks";
import TopBlockInfo from "../category/block/TopBlockInfo";

export function Block({ block }: { block: RegistryBlock }) {
  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="w-full mx-auto py-8">
        <TopBlockInfo title={block.title} description={block.description} isPro={block.isPro!} created_at={block.created_at!} />
        <Tabs defaultValue="preview" className="mt-6 gap-0 border border-border rounded-lg ">
          <div className="flex flex-col md:flex-row flex-wrap md:items-end gap-2 justify-between p-3 border-b border-border">
            
            {/* <div className="flex items-end gap-3"> */}
              <BlockToolbar />
            {/* </div> */}
          </div>
          <TabsContent value="preview">
            <BlockPreview height={block.iframeHeight}/>
          </TabsContent>
          <TabsContent value="code" className="max-md:hidden">
            <BlockCodeExplorer />
          </TabsContent>
        </Tabs>
      </div>
    </BlockProvider>
  );
}
