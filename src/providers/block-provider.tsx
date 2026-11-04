"use client";

import { blocks } from "@/config/registry/blocks";
import { components } from "@/config/registry/components";
import { useBlockTheme } from "@/hooks/use-block-theme";
import { getFileContent } from "@/lib/file/file";
import { getFileTree } from "@/lib/file/file-tree";
import { codeToHtml } from "@/lib/shiki";
import { BlockScreenSize, BlockScreenSizeUnion } from "@/types/blocks";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const BlockContext = createContext<any>(null);

const transformCode = (code: string) => {
  return code
    .replace(/@\/registry\/(.+)\/components/g, "@/components")
    .replace(/@\/registry\/(.+)\/hooks/g, "@/hooks")
    .replace(/@\/registry\/(.+)\/config/g, "@/config")
    .replace(/@\/registry\/(.+)\/ui/g, "@/components/ui");
};
export const allCustomizedComponents = components;

export const BlockProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {


  const component = allCustomizedComponents.find(
    (item) => item.name === name
  );
  const block = blocks.find((b) => b.name === name) || component as any;

  if (!block) throw new Error("Block not found");

  const fileTree = getFileTree(block as any);

  const fileMap = Object.fromEntries(
    block.files.map((file: any) => [file.target, file.path])
  );

  const [activeTreePath, setActiveTreePath] = useState(
    block.files[0].target
  );
  const [activeSourcePath, setActiveSourcePath] = useState(
    block.files[0].path
  );

  const [screenSize, setScreenSize] =
    useState<BlockScreenSizeUnion>("desktop");
  const [code, setCode] = useState<string | null>(null);
  const [codeHtml, setCodeHtml] = useState<string | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const { theme, setTheme, iframeRef } = useBlockTheme();

  const selectFile = (target: string) => {
    const sourcePath = fileMap[target];
    if (!sourcePath) return;

    setActiveTreePath(target);
    setActiveSourcePath(sourcePath);
  };

  const updateCodeContent = async () => {
    setIsLoadingCode(true);
    try {
      const rawCode = await getFileContent(activeSourcePath);
      const transformed = transformCode(rawCode);
      setCode(transformed);
      setCodeHtml(await codeToHtml(transformed));
    } finally {
      setIsLoadingCode(false);
    }
  };

  useEffect(() => {
    updateCodeContent();
  }, [activeSourcePath]);

  return (
    <BlockContext.Provider
      value={{
        codeHtml,
        code,
        isLoadingCode,
        fileTree,
        activeTreePath,
        screenSize,
        setScreenSize,
        selectFile,
        block,
        theme,
        setTheme,
        iframeRef,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => {
  const ctx = useContext(BlockContext);
  if (!ctx) throw new Error("useBlockContext must be used within BlockProvider");
  return ctx;
};
