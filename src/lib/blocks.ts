import { BLOCK_SCREENSHOT_EXTENSION } from "@/components/blocks/code-viewer/blocks-screen-width";
import { BlockFile, FileTree } from "@/types/blocks";

export const getFileTree = (files: BlockFile[]) => {
  function setNestedObject({
    currentTree,
    isFile,
    path,
    target,
  }: {
    currentTree: FileTree;
    path: string;
    isFile: boolean;
    target: string;
  }) {
    const parts = (target || path).split("/");
    let current = currentTree;

    parts.forEach((part, index) => {
      // If we're at the last part, it's a file, we push it as an object with `file`
      if (index === parts.length - 1) {
        if (isFile) {
          current.push({ name: part, type: "file", path, target });
        }
      } else {
        let existingFolder = current.find((item) => item.name === part);
        if (!existingFolder) {
          existingFolder = { name: part, type: "folder", children: [] };
          current.push(existingFolder);
        }
        // If we're at the last part, it's a file, we push it as an object with `file`
        if (existingFolder?.children) {
          current = existingFolder.children;
        }
      }
    });
  }

  const fileTree: FileTree = [];

  files.forEach(({ path, target }) => {
    const source = path.replace(/^@\/blocks\//, "");
    setNestedObject({
      currentTree: fileTree,
      path: source,
      isFile: true,
      target: target || "",
    });
  });

  return fileTree;
};

export const removeBlockPrefixFromPath = (path: string) => {
  return path.replace(/^@\/blocks\//, "");
};

export const getBlockScreenshot = (blockName: string) => {
  return `/images/blocks/screenshots/${blockName}.${BLOCK_SCREENSHOT_EXTENSION}`;
};
