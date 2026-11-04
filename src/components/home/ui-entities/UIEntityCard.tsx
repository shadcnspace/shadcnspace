"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';



export const UIEntityCard = ({ uientity }: { uientity: any }) => {
    return (
        <div className="rounded-xl overflow-hidden group bg-card hover:shadow-sm flex flex-col">
            <div className="overflow-hidden">
                <Link href={uientity.link}>
                    <Image
                        src={uientity.image}
                        alt={uientity.title}
                        width={352}
                        height={272}
                        className="w-full h-full group-hover:scale-[1.01] transition-all duration-300"
                    />
                </Link>
            </div>
            <div className="flex flex-col justify-between items-start flex-1">
                <div className="flex items-center justify-between w-full gap-3 py-5 px-6">
                    <h3 className="text-xl font-medium max-w-10/12">
                        {uientity.title}
                    </h3>
                </div>
                <Link className="flex items-center w-full justify-between gap-2 py-5 px-6 border-t border-muted text-foreground font-medium text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300" href={uientity.link}>
                    Preview
                    <ArrowRight width={20} height={20} />
                </Link>
            </div>
        </div>
    );
};

