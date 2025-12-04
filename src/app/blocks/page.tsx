import BlockPreviewList from "@/components/blocks/category/block-preview-list";
import { Navbar } from "@/components/layout/navbar";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shadcn Space",
  description:
    "Shadcn Space is a collection of ready-to-use code snippets for web developers to preview, customize, and copy.",
  alternates: {
    canonical: absoluteUrl("/blocks"),
  },
};

const BlocksPage = () => (
  <>
    <Navbar />
    <div className="max-w-(--breakpoint-2xl) mx-auto py-12 sm:py-16">
      <Suspense fallback={null}>
        <BlockPreviewList />
      </Suspense>
    </div>
  </>
);

export default BlocksPage;
