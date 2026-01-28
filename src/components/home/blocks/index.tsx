"use client";
import BlockCard from "@/components/blocks/block-card";
import { useRouter } from "next/navigation";
import { categories } from "@/config/registry/blocks/categories";
import { blocks } from "@/config/registry/blocks";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { blocks as blocksData } from "@/config/registry/blocks";

export default function Blocks() {
    const router = useRouter();

    const handleSelect = (value: string) => {
        router.push(`/blocks/${value}`);
    };

    function getNewBlocksCount(blocks: any) {
        const now = new Date();
        return blocks.filter((block: any) => {
            const createdDate = new Date(block.created_at);
            const diffMs = now.getTime() - createdDate.getTime();
            const diffDays = diffMs / (1000 * 60 * 60 * 24);
            return diffDays <= 1;
        }).length;
    }
    const homeCategories = Object.values(categories).filter((c: any) => c.isHome);
    const categoryCards = homeCategories.map((category) => {
        const categoryBlocks = blocks.filter((block) =>
            !block.isDraft && !block.isPro && block.categories.some((c) => c.name === category.name)
        );

        const count = categoryBlocks.length;
        if (count === 0) return null;

        const newBlocksCount = getNewBlocksCount(categoryBlocks);
        const masterSlug = categoryBlocks[0]?.masterCategory?.slug || 'marketing';

        return {
            name: category.name,
            title: category.title,
            image: category.image,
            blocks: categoryBlocks,
            count: newBlocksCount,
            masterSlug: masterSlug
        };
    }).filter(Boolean);

    const freeBlocksCount = blocksData.filter((block: any) => !block.isPro && !block.isDraft).length;

    return (
        <section id="ui-blocks" className="xl:py-24 md:py-16 py-8 bg-muted dark:bg-muted/20">
            <div className="container">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="2xl:col-span-8 xl:col-span-9 col-span-12 flex flex-col gap-6">
                            <h2 className="text-2xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                                Build faster with {freeBlocksCount}+ Free Shadcn UI blocks
                            </h2>
                            <p className="text-muted-foreground sm:text-lg text-sm">
                                Browse <span className="font-medium text-foreground">free Shadcn blocks</span> covering common UI patterns and sections, from dashboard layouts to marketing sections, structured for reuse and consistent integration across React projects.
                            </p>
                        </div>
                    </div>
                    {/* Category Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {categoryCards.map((item: any, index: number) => (
                            <BlockCard
                                key={index}
                                item={item}
                                index={index}
                                handleSelect={(val) => handleSelect(`${item.masterSlug}/${val}`)}
                                masterCategory={item.masterSlug}
                                count={item.count}
                                isMasterCategory={false}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link href="/blocks" className="text-base font-medium flex items-center gap-2 bg-primary py-2.5 px-5 rounded-lg text-primary-foreground hover:bg-primary/80 duration-150">
                            View All Blocks <Icon icon="line-md:arrow-right" width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
