import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function BlockCard({ item, index, masterCategory, count, isMasterCategory = false }: {
    item: any,
    index: number,
    handleSelect: (value: string) => void,
    masterCategory: string,
    count: number,
    isMasterCategory?: boolean
}) {
    const linkHref = isMasterCategory
        ? `/blocks#${item.name}`
        : `/blocks/${masterCategory}/${item.name}`;
    return (
        <div
            key={index}
            className="rounded-lg flex flex-col hover:shadow-sm transition overflow-hidden group bg-card">
            <Link href={linkHref} className="bg-muted overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={484}
                    height={290}
                    className="group-hover:scale-105 transition-all w-full"
                />
            </Link>
            <div className="flex flex-col justify-between items-start w-full flex-1">
                <div className="py-7 px-6 flex flex-col gap-4 w-full">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <div className="flex items-center gap-2">
                            <p className="text-base text-muted-foreground font-normal">{item.blocks.length} blocks</p>
                            {count > 0 && (
                                <Badge variant={"default"} className="text-xs rounded-sm font-medium px-1.5">
                                    +{count} New
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>
                <Link href={linkHref} className="py-6 px-7.5 border-t font-semibold border-muted flex items-center justify-between text-dark dark:text-white/50 group hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-base transition-all w-full">
                    View All <Icon icon="line-md:arrow-right" width={20} height={20} />
                </Link>
            </div>
        </div>
    )
}