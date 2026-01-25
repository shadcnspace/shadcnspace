"use client";

import { categorizedBlocks } from "@/components/blocks/utils";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ResultsNotFound } from "../results-not-found";
import { Block } from "../../code-viewer/block";
import { blocks as registryBlocks } from "@/config/registry/blocks";

const INITIAL_BLOCK_COUNT = 5;
const BLOCKS_PER_LOAD = 5;

const BlockPreviewList = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { category } = useParams();
  const blocks = category
    ? categorizedBlocks[category as string]
    : registryBlocks;
  const query = q ?? "";

  const filteredBlocks = blocks.filter((block) => {
    const blockTitle = block.title.toLowerCase();

    return (
      blockTitle.includes(query) ||
      block.categories.some((category) =>
        category?.name?.toLowerCase().includes(query)
      )
    );
  });

  const [visibleCount, setVisibleCount] = useState(INITIAL_BLOCK_COUNT);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_BLOCK_COUNT);
  }, [query, category]);

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && visibleCount < filteredBlocks.length) {
          setVisibleCount((prev) =>
            Math.min(prev + BLOCKS_PER_LOAD, filteredBlocks.length)
          );
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleCount, filteredBlocks.length]);

  const visibleBlocks = filteredBlocks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlocks.length;

  return (
    <div className="px-0">
      <div className="mt-3">
        {filteredBlocks.length ? (
          <div className="grid grid-cols-1 gap-6">
            {visibleBlocks.map((block) => (
              <Block key={block.name} block={block} />
            ))}
            {hasMore && (
              <div
                ref={loadMoreRef}
                className="h-20 flex items-center justify-center"
              >
                <div className="text-sm text-muted-foreground">
                  Loading more blocks...
                </div>
              </div>
            )}
          </div>
        ) : (
          <ResultsNotFound />
        )}
      </div>
    </div>
  );
};

export default BlockPreviewList;
