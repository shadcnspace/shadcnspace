import React, { JSX } from "react";
// import { NavbarLayout } from "./block-layouts";
import { categories } from "./categories";

export type BlockCategory = {
  name: string;
  title: string;
};

export interface RegistryBlock {
  name: string;
  title: string;
  description: string;
  categories: BlockCategory[];
  component: React.LazyExoticComponent<() => JSX.Element>;
  files: { path: string }[];
  layout?: React.FC<{ children: React.ReactNode }>;
}



export const blocks: RegistryBlock[] =
 [
  // Hero Blocks
  {
    name: "hero-01",
    title: "Hero 01",
    description: "A simple hero block",
    component: React.lazy(
      () => import("@/registry/blocks/hero-01/components/hero")
    ),
    categories: [categories.hero],
    files: [{ path: "components/hero.tsx" }],
  }
 
];
