"use client";

import { templates } from "@/components/templates/data/templates";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
export default function CategoryPart() {
    const [active, setActive] = useState("#landingpage");
    const tabs = Object.values(templates);

    return (
        <div className="w-full sticky top-[74px] z-50 bg-background py-5 border-y border-border overflow-x-auto">
            <div className="flex items-center justify-between container mx-auto flex-nowrap gap-1 ">
                <div className="flex items-center gap-1 flex-nowrap">
                    {tabs.map((tab, index) => {
                        const tagLink = `#${tab.slug.replace(/\s+/g, '').toLowerCase()}`;
                        const isActive = tagLink === active;
                        return (
                            <Button key={index} variant={isActive ? "default" : "ghost"} className="py-2.5 px-4 h-auto">
                                <Link
                                    href={tagLink}
                                    onClick={() => setActive(tagLink)}
                                    className="text-base! font-medium flex items-center gap-2"
                                >
                                    <Icon icon={tab.icon} width={20} height={20} className="w-5! h-5!" />
                                    {tab.slug}
                                </Link>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}