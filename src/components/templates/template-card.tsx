"use client"
import { Template } from "@/components/templates/data/templates";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

type TemplateItem = Template['items'][number];

const TemplateCard = ({ template }: { template: TemplateItem }) => {
  const slug = template.slug.replace(/\s+/g, '').toLowerCase();
  return (
    <div className="rounded-xl overflow-hidden group bg-card hover:shadow-sm flex flex-col">
      <div className="overflow-hidden">
        <Link href={`templates/${slug}`}>
          <Image
            src={template.coverImage}
            alt={template.name}
            width={352}
            height={272}
            className="w-full h-full group-hover:scale-[1.01] transition-all duration-300"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between items-start flex-1">
        <div className="flex items-center justify-between w-full gap-3 py-5 px-6">
          <h3 className="text-xl font-medium max-w-10/12">
            {template.name}
          </h3>
          <div>
            {template.price === 0 ? (
              <p className="text-muted-foreground text-sm">Free</p>
            ) : (
              <div className="py-0.5 px-2.5 rounded-md bg-violet-700/10">
                <p className="text-violet-800 font-medium text-sm">Pro</p>
              </div>
            )}
          </div>
        </div>
        <Link className="flex items-center w-full justify-between gap-2 py-5 px-6 border-t border-muted text-foreground font-medium text-base hover:bg-accent hover:text-accent-foreground transition-all duration-300" href={`templates/${slug}`}>
          Preview
          <ArrowRight width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};

export default TemplateCard;