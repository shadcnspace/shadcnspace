import { blockCategories, categorizedBlocks } from "@/components/blocks/utils";
import BlockPreviewList from "@/components/blocks/category/block/block-preview-list";
import CategoryBlockHeader from "@/components/blocks/category/CategoryBlockHeader";
import FilterBlock from "@/components/blocks/category/block/FilterBlock";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl, capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import BlockCategoryJsonLd from "@/components/blocks/category/block/block-category-json-ld";
import { masterCategoriesArray } from "@/config/registry/blocks/masterCategories";
import { notFound } from "next/navigation";

const keywordsTemplate = [
    "{{category}} Shadcn Space",
    "Shadcn UI {{category}} examples",
    "{{category}} UI components",
    "{{category}} section code snippets",
    "{{category}} design templates",
    "Responsive {{category}} UI blocks",
    "Shadcn UI {{category}} code snippets",
    "{{category}} block preview and copy",
    "Ready-made {{category}} UI designs",
    "{{category}} section UI blocks for websites",
    "Customizable {{category}} Shadcn components",
    "Shadcn UI {{category}} templates",
    "Shadcn Space for {{category}",
    "Elegant {{category}} design examples",
    "{{category}} integration with Shadcn",
    "Minimalist {{category}} section blocks",
    "{{category}} components for modern websites",
    "Professional {{category}} UI designs",
    "{{category}} section layout ideas",
];

export const generateStaticParams = async () => {
    return blockCategories.map((category) => ({
        category: category.name,
    }));
};

export const generateMetadata = async (props: {
    params: Promise<{ master: string; category: string }>;
}): Promise<Metadata> => {
    const params = await props.params;
    const { master, category } = params;
    const blocks = categorizedBlocks[category];
    const title = `${blocks.length}+ ${capitalize(
        category
    )} section by ShadcnSpace`;
    const description = `Explore beautifully designed ${category} section blocks built with Shadcn UI. Preview, customize, and copy code snippets effortlessly to enhance your website's design and functionality.`;
    const keywords = keywordsTemplate.map((keyword) =>
        keyword.replaceAll("{{category}}", capitalize(category))
    );
    const openGraph = {
        images: [
            {
                url: generateOgImageUrl({
                    title,
                    type: "Block",
                }),
                width: 1200,
                height: 630,
                alt: "Customized Shadcn Space",
            },
        ],
    };

    return constructMetadata({
        title,
        description,
        keywords,
        openGraph,
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: absoluteUrl(`/blocks/${master}/${category}`),
        },
    });
};

const BlockCategoryPage = async (props: {
    params: Promise<{ master: string; category: string }>;
    searchParams: Promise<{ columns: string; q: string }>;
}) => {
    const params = await props.params;
    const { master, category } = params;

    //   const validMaster = masterCategoriesArray.some((c) => c.slug === master);

    //   if (!validMaster) {
    //     notFound();
    //   }

    //   const blocksForCategory = categorizedBlocks[category]?.filter(
    //     (block) => block.masterCategory.name === master
    //   );

    //   if (!blocksForCategory || blocksForCategory.length === 0) {
    //     notFound();
    //   }

    return (
        <>
            <main>
                <CategoryBlockHeader
                    title={<>Shadcn {capitalize(category.replace("-", " "))}</>}
                    description={<>Speed up your build process with production-ready, fully customizable Shadcn UI <span className="font-semibold">components</span>, <span className="font-semibold">blocks</span>, <span className="font-semibold">kits</span> and <span className="font-semibold">templates</span>.</>}
                />
                <FilterBlock masterCategory={master.split("-")[0]} />
                <section>
                    <div className="container mx-auto">
                        <Suspense fallback={null}>
                            <BlockPreviewList />
                        </Suspense>
                        <BlockCategoryJsonLd category={category} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default BlockCategoryPage;
