import CategoryBlockHeader from "@/components/blocks/category/CategoryBlockHeader";
import ComponentCard from "@/components/custom-components/componentCard";
import { components } from "@/config/registry/components";
import { componentsMap } from "@/config/registry/components/sidebar-data";

export default function Page() {
    return (
        <>
            <CategoryBlockHeader
                title={<>Shadcn UI Components</>}
                description={<>Speed up your build process with production-ready, fully customizable Shadcn UI <span className="font-semibold">components</span>, <span className="font-semibold">blocks</span>, <span className="font-semibold">kits</span> and <span className="font-semibold">templates</span>.</>}
            />
            <section className="py-12 sm:py-14 lg:py-16 border-t border-border bg-muted dark:bg-muted/20" >
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.values(componentsMap).map((component) => {
                            const count = components.filter((comp) => comp.category.name === component.blockName).length;
                            return (
                                <ComponentCard
                                    key={component.title}
                                    title={component.title}
                                    href={component.url}
                                    image={component.image}
                                    count={count}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}