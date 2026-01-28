
import HeroBanner from "@/components/blocks/HeroBanner";
import MasterCategoryTab from "@/components/blocks/master-category/MasterCategoryTab";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Beautifully crafted, ready-to-use Shadcn UI blocks and components designed for modern web experiences.",
  description:
    "Shadcn Space is a collection of ready-to-use code snippets for web developers to preview, customize, and copy.",
  alternates: {
    canonical: absoluteUrl("/blocks"),
  },
};

const BlocksPage = () => (
  <>
    <main>
      <HeroBanner />
      <Suspense fallback={null}>
        <MasterCategoryTab />
      </Suspense>
    </main>
  </>
);

export default BlocksPage;
