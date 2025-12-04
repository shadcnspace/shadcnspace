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
    },

    // Banner Blocks
    {
      name: "banner-01",
      title: "Banner 01",
      description: "A simple banner block",
      component: React.lazy(
        () => import("@/registry/blocks/banner-01/components/banner")
      ),
      categories: [categories.banner],
      files: [{ path: "components/banner.tsx" }],
    },
    {
      name: "banner-02",
      title: "Banner 02",
      description: "A simple banner block",
      component: React.lazy(
        () => import("@/registry/blocks/banner-02/components/banner")
      ),
      categories: [categories.banner],
      files: [{ path: "components/banner.tsx" }],
    },

    // Statistics Blocks
    {
      name: "statistics-01",
      title: "Statistics 01",
      description: "A simple statistics block",
      component: React.lazy(
        () => import("@/registry/blocks/statistics-01/components/statistics")
      ),
      categories: [categories.statistics],
      files: [{ path: "components/statistics.tsx" }],
    }

  ];
