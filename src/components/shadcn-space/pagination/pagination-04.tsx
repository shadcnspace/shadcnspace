"use client";

import { useState, type MouseEvent } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const TOTAL_PAGES = 20;

// Always show the first and last page, plus one page on each side of the current one.
function getPageRange(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  if (current <= 3) [2, 3, 4].forEach((page) => pages.add(page));
  if (current >= total - 2) [total - 3, total - 2, total - 1].forEach((page) => pages.add(page));
  const sorted = [...pages].filter((page) => page >= 1 && page <= total).sort((a, b) => a - b);

  return sorted.flatMap((page, index) =>
    index > 0 && page - sorted[index - 1] > 1 ? (["ellipsis", page] as const) : [page],
  );
}

const PaginationDemo = () => {
  const [page, setPage] = useState(6);

  const go = (next: number) => (event: MouseEvent) => {
    event.preventDefault();
    setPage(Math.min(Math.max(next, 1), TOTAL_PAGES));
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={go(page - 1)}
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
            />
          </PaginationItem>
          {getPageRange(page, TOTAL_PAGES).map((item, index) =>
            item === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={item}>
                <PaginationLink href="#" isActive={item === page} onClick={go(item)} className="tabular-nums">
                  {item}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={go(page + 1)}
              aria-disabled={page === TOTAL_PAGES}
              className={cn(page === TOTAL_PAGES && "pointer-events-none opacity-50")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <p className="text-xs text-muted-foreground tabular-nums" aria-live="polite">
        Page {page} of {TOTAL_PAGES}
      </p>
    </div>
  );
};

export default PaginationDemo;
