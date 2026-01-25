"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { templates } from "@/components/templates/data/templates";
import TemplateCard from "@/components/templates/template-card";

export default function TemplateListing() {
    // Get all items from all template categories and slice the first 3
    const allTemplates = templates.flatMap((category) => category.items);
    const displayedTemplates = allTemplates.slice(0, 3);

    return (
        <section id="template-listing" className="xl:py-24 md:py-16 py-8 bg-muted dark:bg-muted/20">
            <div className="container">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="2xl:col-span-8 xl:col-span-9 col-span-12 flex flex-col gap-6">
                            <h2 className="text-2xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                                Ready-to-Use customizable Shadcn templates
                            </h2>
                            <p className="text-muted-foreground sm:text-lg text-sm">
                                Highly customizable <span className="font-medium text-foreground">Shadcn UI templates</span> built on Base UI, designed with consistent layouts and reusable patterns for real-world websites, products, and dashboards.
                            </p>
                        </div>
                        <div className="2xl:col-span-4 xl:col-span-3 col-span-12 flex xl:justify-end justify-start">
                            <div className="flex items-end gap-2">
                                <Link href="/templates" className="text-base font-medium flex items-center gap-2 bg-primary py-2.5 px-5 rounded-lg text-primary-foreground hover:bg-primary/80 duration-150">
                                    View All Templates <Icon icon="line-md:arrow-right" width={20} height={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {displayedTemplates.map((template) => (
                            <TemplateCard
                                key={template.slug}
                                template={template}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}