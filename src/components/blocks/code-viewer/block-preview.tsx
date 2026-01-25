"use client";

import { useBlockContext } from "@/providers/block-provider";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { blockScreens } from "@/components/blocks/code-viewer/blocks-screen-width";
import { useEffect, useRef } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

const BlockPreview = ({ isComponent = false, height }: { isComponent?: boolean, height?: string | number }) => {
  const resizablePanelRef = useRef<ImperativePanelHandle>(null);
  const {
    block,
    screenSize: selectedScreenSize,
    iframeRef,
  } = useBlockContext();
  const blockScreen = blockScreens.find(
    ({ name }) => name === selectedScreenSize
  );

  useEffect(() => {
    if (resizablePanelRef.current) {
      resizablePanelRef.current.resize(blockScreen?.size || 100);
    }
  }, [selectedScreenSize]);

  return (
    <ResizablePanelGroup direction="horizontal" className="bg-muted">
      <ResizablePanel ref={resizablePanelRef} defaultSize={120} minSize={30}>
        <div
          className={`w-full rounded-b-lg ${
            !height ? (isComponent ? "h-[400px]" : "h-[700px]") : ""
          } overflow-auto`}
          style={
            height
              ? { height: typeof height === "number" ? `${height}px` : height }
              : undefined
          }
        >
          <iframe
            ref={iframeRef}
            src={`/block/${block.name}/preview`}
            height="100%"
            width="100%"
            loading="lazy"
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle className="w-0" />
      <ResizablePanel defaultSize={0} />
    </ResizablePanelGroup>
  );
};

export default BlockPreview;
