"use client";

import { blocks } from "@/config/registry";
import { useBlockTheme } from "@/hooks/use-block-theme";
import { getFileContent } from "@/lib/file";
import { getFileTree } from "@/lib/file-tree";
import { codeToHtml } from "@/lib/shiki";
import { BlockScreenSize, BlockScreenSizeUnion } from "@/types/blocks";
import { Theme } from "@/types/theme";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { pathToTree } from "to-path-tree";

const BlockContext = createContext<{
  codeHtml: string | null;
  code: string | null;
  isLoadingCode: boolean;
  fileTree: ReturnType<typeof pathToTree>;
  activeFile: string;
  screenSize: BlockScreenSizeUnion;
  selectFile: (file: string) => void;
  setScreenSize: (screenSize: BlockScreenSize) => void;
  block: (typeof blocks)[number];
  theme: Theme;
  setTheme: (theme: Theme) => void;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}>({
  codeHtml: null,
  code: null,
  isLoadingCode: false,
  fileTree: {} as ReturnType<typeof pathToTree>,
  activeFile: "",
  screenSize: "desktop",
  selectFile: () => {},
  setScreenSize: () => {},
  block: {} as (typeof blocks)[number],
  theme: "light",
  setTheme: () => {},
  iframeRef: { current: null },
});

const transformCode = (code: string) => {
  let transformedCode = code;

  // Replace `@/registry/.../components` with `@/components`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/components/g,
    "@/components"
  );

  // Replace `@/registry/.../hooks` with `@/hooks`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/hooks/g,
    "@/hooks"
  );

  // Replace `@/registry/.../config` with `@/config`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/config/g,
    "@/config"
  );

  // Replace `@/registry/.../ui` with `@/components/ui`
  transformedCode = transformedCode.replace(
    /@\/registry\/(.+)\/ui/g,
    "@/components/ui"
  );

  return transformedCode;
};

export const BlockProvider = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const block = blocks.find((block) => block.name === name);

  if (!block) {
    throw new Error("Block not found");
  }

  const fileTree = getFileTree(block as (typeof blocks)[number]);

  const [activeFile, setActiveFile] = useState(block?.files[0].path);
  const [screenSize, setScreenSize] = useState<BlockScreenSizeUnion>("desktop");
  const [code, setCode] = useState<string | null>(null);
  const [codeHtml, setCodeHtml] = useState<string | null>(null);
  const [isLoadingCode, setIsLoadingCode] = useState(false);

  const { theme, setTheme, iframeRef } = useBlockTheme();

  const updateCodeContent = async () => {
    setIsLoadingCode(true);

    try {
      const code = await getFileContent(
        `src/registry/blocks/${block.name}/${activeFile}`
      );
      const transformedCode = transformCode(code);
      setCode(transformedCode);

      const formattedCode = await codeToHtml(transformedCode ?? "");
      setCodeHtml(formattedCode);
    } finally {
      setIsLoadingCode(false);
    }
  };

  // Update the code content when the active file changes
  useEffect(() => {
    updateCodeContent();
  }, [activeFile]);

  return (
    <BlockContext.Provider
      value={{
        codeHtml,
        code,
        isLoadingCode,
        fileTree,
        activeFile,
        screenSize,
        setScreenSize,
        selectFile: setActiveFile,
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
  const context = useContext(BlockContext);
  if (!context) {
    throw new Error("useBlockContext must be used within a BlockProvider.");
  }

  return context;
};
