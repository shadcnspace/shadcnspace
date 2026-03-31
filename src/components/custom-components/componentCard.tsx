import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";

interface ComponentCardProps {
  title: string;
  href: string;
  image: string;
  count?: number;
  newCount?: number;
}

export default function ComponentCard({
  title,
  href,
  image,
  count,
  newCount,
}: ComponentCardProps) {
  return (
    <div className="rounded-lg group bg-card hover:shadow-sm overflow-hidden flex flex-col">
      <Link href={href} className="bg-muted overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={484}
          height={290}
          className="group-hover:scale-105 duration-200 transition-all"
        />
      </Link>
      <div className="flex flex-col justify-between items-start w-full flex-1">
        <div className="py-5 px-6 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg! font-semibold">{title}</h2>
            <div className="flex items-center gap-2">
              {count !== undefined && count > 0 && newCount !== count && (
                <p className="text-base text-muted-foreground">
                  {count ? `${count}` : ""}
                </p>
              )}
              {newCount !== undefined && newCount > 0 && (
                <Badge
                  variant={"default"}
                  className="text-xs rounded-sm font-medium px-1.5"
                >
                  {newCount === count ? "New" : `+${newCount} New`}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Link
          href={href}
          className="py-5 px-6 border-t font-semibold border-muted flex items-center justify-between text-dark dark:text-white/50 group hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 text-base transition-all w-full"
        >
          View All <Icon icon="line-md:arrow-right" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}
