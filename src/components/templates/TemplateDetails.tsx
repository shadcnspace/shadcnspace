"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlockBreadcrumb from "@/components/blocks/breadcrumb/BlockBreadcrumb";
import { useState } from "react";
import { motion } from "motion/react";
import { Download } from 'lucide-react';


export default function TemplateDetails({ templateData }: { templateData: any }) {
    const [isDownloading, setIsDownloading] = useState(false);

    async function handleDownload(productUrl: string, productTitle: string) {
        try {
            setIsDownloading(true);
            const response = await fetch(`/api/template/download?productUrl=${encodeURIComponent(productUrl)}&productTitle=${encodeURIComponent(productTitle)}`);

            if (!response.ok) {
                throw new Error('Download failed');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${productTitle}.zip`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Download error:', error);
        } finally {
            setIsDownloading(false);
        }
    }

    return (
        <main>
            <section className="py-16">
                <div className="container mx-auto">
                    {/* hero section */}
                    <div className="grid grid-cols-12 gap-5">
                        <div className="flex flex-col gap-6 xl:col-span-6 lg:col-span-8 col-span-12">
                            <BlockBreadcrumb />
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-5xl font-semibold tracking-tight">
                                {templateData.name}
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-lg text-muted-foreground">
                                {templateData.subtitle}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full sticky top-[74px] z-50 bg-background py-5 border-y border-border overflow-x-auto">
                <div className="flex items-center justify-between container mx-auto flex-nowrap gap-1 ">
                    <div className="flex items-center gap-1 flex-nowrap">
                        {templateData.price === 0 ?
                            <>
                                <Button variant={"default"} className="h-auto py-2.5 px-4!" >
                                    <Link href={templateData.repo} target="_blank" className="flex items-center gap-2 text-base!">
                                        <Download width={20} height={20} className="w-4! h-4!" />
                                        Download
                                    </Link>
                                </Button>
                            </> :
                            <>
                                {
                                    true ? <Button
                                        variant={"default"}
                                        className="h-auto py-2.5 px-4!"
                                        onClick={() => handleDownload(templateData.downloadUrl, templateData.name)}
                                        disabled={isDownloading}
                                    >
                                        <div className="flex items-center gap-2 text-base!">
                                            {isDownloading ? (
                                                <Icon icon="svg-spinners:ring-resize" width={20} height={20} className="w-4! h-4!" />
                                            ) : (
                                                <Icon icon="solar:bolt-linear" width={20} height={20} className="w-4! h-4!" />
                                            )}
                                            {isDownloading ? "Downloading..." : "Download"}
                                        </div>
                                    </Button> : <Button variant={"default"} className="h-auto py-2.5 px-4!" >
                                        <Link href={'/pricing'} target="_blank" className="flex items-center gap-2 text-base!">
                                            <Icon icon="solar:lock-password-linear" width={20} height={20} className="w-4! h-4!" />
                                            Get Unlimited Access to Download
                                        </Link>
                                    </Button>
                                }
                            </>
                        }
                        <Button variant="outline" className="h-auto py-2.5 px-4!" >
                            <Link href={templateData.url} target="_blank" className="flex items-center gap-2 text-base!">
                                <Icon icon="tabler:external-link" width={20} height={20} /> Live Preview
                            </Link>
                        </Button>
                        <Button variant="outline" className="h-auto py-2.5 px-4!" >
                            <Link href={true ? templateData.figma : "./#"} target="_blank" className="flex items-center gap-2 text-base!">
                                <Icon icon="logos:figma" width={20} height={20} /> Preview
                            </Link>
                        </Button>
                    </div>
                    <div className="flex items-center gap-1 flex-nowrap">
                        {templateData.technologies.map((tech: { icon: string; name: string }, index: number) => (
                            <Badge variant="outline" key={index} className="text-sm flex items-center rounded-lg gap-1.5 h-auto [&>svg]:size-4!">
                                <Icon icon={tech.icon} width={20} height={20} className="w-4! h-4!" /> {tech.name}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
            <section className="py-12">
                <div className="container">
                    {/* Images Gallery */}
                    {templateData.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {templateData.images.map((image: string, index: number) => (
                                <div key={index} className="rounded-lg overflow-hidden border border-border">
                                    <Image
                                        src={image}
                                        alt={`${templateData.name} screenshot ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
            {/* Content */}
            <section className="md:pb-20 sm:pb-12 pb-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-8">
                            <div className="space-y-12">
                                {templateData.description}
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div>
                                <h4 className="text-2xl font-semibold mb-6">
                                    Highlights
                                </h4>
                                <ul className="space-y-3">
                                    {templateData.features.length > 0 && (
                                        templateData.features.map((feature: string, index: number) => (
                                            <li key={index} className="flex gap-2 items-center">
                                                <Icon icon="solar:check-circle-bold" width={20} height={20} />
                                                {feature}
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}