"use client"

import CategoryBlockHeader from "@/components/blocks/category/CategoryBlockHeader";
import MasterCategoryBlocks from "@/components/blocks/category/MasterCategoryBlocks";
import { masterCategoriesArray } from "@/config/registry/blocks/masterCategories";

interface BlockMasterClientProps {
    category: typeof masterCategoriesArray[0];
    subcats: any[];
}

export default function BlockMasterClient({ category, subcats }: BlockMasterClientProps) {
    return (
        <main>
            <CategoryBlockHeader
                title={<>Shadcn UI {category.title} Blocks</>}
                description={<>Speed up your build process with production-ready, fully customizable Shadcn UI <span className="font-semibold">components</span>, <span className="font-semibold">blocks</span>, <span className="font-semibold">kits</span> and <span className="font-semibold">templates</span>.</>}
            />
            <section className="py-20 border-t border-border">
                <div className="container mx-auto">
                    <MasterCategoryBlocks
                        subcats={subcats}
                        title={category.title}
                        subtitle={`${category.title} Shadcn Space is a curated collection of Shadcn UI blocks crafted to help you build beautiful, modern, and user-friendly marketing websites with ease.`}
                        id={category.name}
                        masterCategory={category.name}
                    />
                </div>
            </section>
        </main>
    );
}