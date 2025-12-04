import { pathToTree } from "to-path-tree";
import { blocks as registryBlocks } from "@/config/registry";

export const getFileTree = (block: (typeof registryBlocks)[number]) => {
  const paths = block.files.map((file) => file.path);

  return pathToTree(paths);
};
