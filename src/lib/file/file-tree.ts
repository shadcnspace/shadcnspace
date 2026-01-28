import { pathToTree } from "to-path-tree";
import { blocks as registryBlocks } from "@/config/registry/blocks";

export const getFileTree = (block: (typeof registryBlocks)[number]) => {
  const paths = block.files.map((file) => file.target);

  return pathToTree(paths as any);
};

