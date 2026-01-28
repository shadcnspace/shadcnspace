"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import BlockBreadcrumb from "@/components/blocks/breadcrumb/BlockBreadcrumb";


const HeroBanner = () => {

    return (
        <section>
            <div className="relative isolate overflow-hidden py-12 sm:py-14 lg:py-16">
                <div className="container mx-auto grid grid-cols-12 gap-5">
                    <div className="xl:col-span-6 lg:col-span-8 col-span-12 flex flex-col gap-6">
                        <BlockBreadcrumb />
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            Shadcn Blocks - Free & Pro
                        </h1>
                        <p className="text-lg">
                            Speed up your build process with production-ready, fully customizable Shadcn UI <span className="font-medium">components</span>, <span className="font-medium">blocks</span>, <span className="font-medium">kits</span> and <span className="font-medium">templates</span>.
                        </p>
                    </div>
                    <div className="xl:col-span-6 md:col-span-4 lg:flex hidden justify-end ">
                        <div className="max-w-3xs w-full">
                            <div className="relative w-full rounded-2xl overflow-hidden after:absolute after:content-[''] after:top-1/2 after:-translate-y-1/2 after:start-1/2 after:-translate-x-1/2 after:z-10 after:w-full after:h-full after:bg-[linear-gradient(360deg,#222222_0%,rgba(34,34,34,0)_70%)]">
                                <Image src="/images/blocks/listing_header_bg.png" alt="" width={412} height={201} />
                                <div className="absolute bottom-0 start-0 z-20 w-full h-full p-3 flex flex-col justify-between items-start">
                                    <Link href="/blocks" className="bg-background text-dark hover:bg-primary hover:text-white dark:hover:text-gray-800 rounded-full transition-all p-3 ms-auto">
                                        <Icon icon="gravity-ui:arrow-up" className="rotate-45" width={24} height={24} />
                                    </Link>
                                    <p className="text-sm font-medium text-white z-20 mb-2 2xl:pe-24 md:pe-12 pe-0">We've released more 50 New Blocks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;