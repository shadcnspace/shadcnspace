"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockProvider } from "@/providers/block-provider";
import BlockPreview from "./block-preview";
import BlockToolbar from "./block-toolbar";
import { BlockCodeExplorer } from "./block-code-explorer";
import { RegistryBlock } from "@/config/registry";

export function Block({ block }: { block: RegistryBlock }) {
  return (
    <BlockProvider key={block.name} name={block.name}>
      <div className="max-w-(--breakpoint-2xl) w-full mx-auto py-8">
        <Tabs defaultValue="preview" className="mt-6">
          <div className="mb-1 flex flex-col md:flex-row flex-wrap md:items-end gap-2 justify-between pr-1.5">
            <div className="text-lg font-medium">{block.title}</div>
            <div className="flex items-end gap-3">
              <BlockToolbar />
              <TabsList className="h-8 max-md:ms-auto max-md:hidden">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <TabsContent value="preview">
            <BlockPreview />
          </TabsContent>
          <TabsContent value="code" className="max-md:hidden">
            <BlockCodeExplorer />
          </TabsContent>
        </Tabs>
      </div>
    </BlockProvider>
  );
}
