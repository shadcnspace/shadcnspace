"use client";
import { UIEntityCard } from "./UIEntityCard";

export default function UiEntities() {
    const UIEntities = [
        {
            title: "Blocks",
            description: "Ready-to-use customizable Shadcn blocks built on Base UI, designed with consistent layouts and reusable patterns for real-world websites, products, and dashboards.",
            image: "https://images.shadcnspace.com/assets/blocks-images/marketing/hero-section.webp",
            link: "/blocks"
        },
        {
            title: "Components",
            description: "Ready-to-use customizable Shadcn components built on Base UI, designed with consistent layouts and reusable patterns for real-world websites, products, and dashboards.",
            image: "https://images.shadcnspace.com/assets/components/accordian.webp",
            link: "/components/accordion"
        },
        {
            title: "Templates",
            description: "Ready-to-use customizable Shadcn templates built on Base UI, designed with consistent layouts and reusable patterns for real-world websites, products, and dashboards.",
            image: "https://images.shadcnspace.com/assets/templates/crypgo-cover.webp",
            link: "https://shadcnspace.com/templates"
        }
    ]

    return (
        <section id="template-listing" className="xl:py-24 md:py-16 py-8 bg-muted dark:bg-muted/20">
            <div className="container">
                <div className="flex flex-col gap-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {UIEntities.map((template) => (
                            <UIEntityCard
                                key={template.title}
                                uientity={template}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}