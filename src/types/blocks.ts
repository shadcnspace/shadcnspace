import type { JSX } from "react";
type TreeItem = {
  name: string;
  children?: TreeItem[];
} & (
  | { type: "file"; path: string; target: string }
  | { type: "folder"; children: TreeItem[] }
);

export type FileTree = TreeItem[];

export interface BlockFile {
  path: string;
  target?: string;
}

export interface Block {
  name: string;
  title: string;
  description?: string;
  category: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  files: BlockFile[];
}

export type BlockScreenSizeUnion = `${BlockScreenSize}`;

export enum BlockScreenSize {
  desktop = "desktop",
  tablet = "tablet",
  mobile = "mobile",
}
