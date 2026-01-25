import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import CategoryBlockHeader from "@/components/blocks/category/CategoryBlockHeader";
import CategoryPart from "@/components/templates/categorypart";
import { templates } from "@/components/templates/data/templates";
import MasterCategoryTemplate from "@/components/templates/mastercategorytemplate";

export const metadata: Metadata = constructMetadata({
  title: "Beautifully Designed Shadcn UI Templates",
  description:
    "Discover a collection of premium Shadcn UI templates designed to make your project shine. With modern designs and smooth functionality, these templates help you build stunning UIs with ease!",
  keywords: [
    "Shadcn UI",
    "Shadcn UI templates",
    "Tailwind CSS templates",
    "Beautiful Shadcn UI templates",
    "Beautifully designed Shadcn UI templates",
    "Beautiful Tailwind CSS templates",
    "Premium Shadcn UI templates",
    "Premium Tailwind CSS templates",
    "Free Shadcn UI templates",
    "Free Tailwind CSS templates",
    "Shadcn UI landing page templates",
    "Landing page templates",
    "Shadcn UI portfolio templates",
    "Portfolio templates",
  ],
  alternates: {
    canonical: absoluteUrl(`/templates`),
  },
});

export default function TemplatesPage() {
  // const id = `#${templates.slug.replace(/\s+/g, '').toLowerCase()}`;
  return (
    <>
      <main>
        <CategoryBlockHeader
          title={<>Shadcn UI Templates</>}
          description={<>Speed up your build process with production-ready, fully customizable Shadcn UI <span className="font-semibold">components</span>, <span className="font-semibold">blocks</span>, <span className="font-semibold">kits</span> and <span className="font-semibold">templates</span>.</>} />
        <CategoryPart />
        {
          templates.map((catitems, index) => (
            <MasterCategoryTemplate key={index} title={catitems.label} subtitle={catitems.description} template={catitems.items} id={catitems.slug.replace(/\s+/g, '').toLowerCase()} />
          ))
        }
      </main>
    </>
  );
}
