"use client";

import { useRouter, useSearchParams } from "next/navigation";
import BlockCard from "../block-card";

export default function MasterCategoryBlocks({ subcats, title, subtitle, id, masterCategory }: { subcats: any, title: string, subtitle: string, id: string, masterCategory: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSelect = (value: string) => {
    router.push(`/blocks/${masterCategory}/${value}?${searchParams.toString()}`);
  };
  function getNewBlocksCount(blocks: any) {
    const now = new Date();
    return blocks.filter((block: any) => {
      const createdDate = new Date(block.created_at);
      const diffMs = now.getTime() - createdDate.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      return diffDays <= 14;
    }).length;
  }
  return (
    <div className="w-full scroll-mt-48" id={id}>
      <div className="xl:max-w-1/2 lg:max-w-3/4 flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title} Blocks
        </h2>
        <p className="text-lg">
          {subtitle}
        </p>
      </div>
      <div className="max-w-full mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {subcats?.map((item: any, index: number) => {
          const count = getNewBlocksCount(item.blocks);
          return (
            <BlockCard
              key={index}
              item={item}
              index={index}
              handleSelect={handleSelect}
              masterCategory={masterCategory}
              count={count}
              isMasterCategory={false}
            />
          )
        })}
      </div>
    </div>
  );
}
