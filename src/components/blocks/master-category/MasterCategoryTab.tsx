"use client";

import { masterCategoriesArray } from "@/config/registry/blocks/masterCategories";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import MasterCategoryBlocks from "../category/MasterCategoryBlocks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getSubcategoriesForMaster } from "../utils";
import { usePathname } from "next/navigation";

export default function MasterCategoryTab() {
    const [active, setActive] = useState("marketing");
    const tabs = masterCategoriesArray;
    const pathname = usePathname();
    useEffect(() => {
        if (window.location.hash) {
            const hashedText = window.location.hash;
            setActive(hashedText.replace("#", "").toLocaleLowerCase());
        }
    }, [pathname]);

    return (
        <section>
            <div className="w-full sticky top-[74px] z-1 bg-background py-5 border-y border-border overflow-x-auto">
                <div className="flex items-center justify-between container mx-auto flex-nowrap gap-1 ">
                    <div className="flex items-center gap-1 flex-nowrap">
                        {tabs.map((tab) => {
                            const isActive = tab.title.toLocaleLowerCase() === active;
                            return (
                                <Button key={tab.slug} variant={isActive ? "default" : "ghost"} className="py-2.5 px-4 h-auto rounded-lg border-0">
                                    <Link
                                        href={`#${tab.slug}`}
                                        onClick={() => setActive(tab.title.toLocaleLowerCase())}
                                    >
                                        <span className="flex items-center gap-2 text-base! font-medium">
                                            <Icon icon={tab.icon} width={20} height={20} className="w-5! h-5!" />
                                            {tab.title}
                                        </span>
                                    </Link>
                                </Button>
                            );
                        })}
                    </div>
                    <Link href="https://www.figma.com/design/xN0ICHXEd4moz5sfE5no4r/shadcnspace-figma-uikit-free?node-id=1-12&t=DygDgU5rcJ7MaYR9-1" target="_blank" className="py-2.5 px-4 border border-border rounded-lg flex items-center gap-2.5 text-base font-medium hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary text-nowrap">
                        <Icon icon="logos:figma" width={20} height={20} /> Preview in Figma
                    </Link>
                </div>
            </div>
            <div className="bg-muted dark:bg-muted/20">
                <div className="mx-auto container space-y-20 py-20">
                    {tabs.map((block) => (
                        <MasterCategoryBlocks key={block.slug} subcats={getSubcategoriesForMaster(block.slug)} title={block.title} subtitle={block.subtitle} id={block.slug} masterCategory={block.slug} />
                    ))}
                </div>
            </div>
        </section>
    );
}