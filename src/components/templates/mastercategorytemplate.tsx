import TemplateCard from "./template-card";
import { Template } from "@/components/templates/data/templates";

interface MasterCategoryTemplateProps {
    id: string;
    title: string;
    subtitle: string;
    template: Template['items'];
}

export default function MasterCategoryTemplate({ title, subtitle, template, id }: MasterCategoryTemplateProps) {
    return (
        <section className="scroll-mt-24 py-20 bg-muted dark:bg-muted/20">
            <div id={id} className="container mx-auto">
                <div className="pb-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            {title}
                        </h2>
                        <p className="lg:max-w-1/2">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {template.map((item: any, index: number) => (
                        <TemplateCard key={index} template={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}