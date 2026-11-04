"use client";

import * as React from "react";
import { motion } from "motion/react";
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

export default function PremiumRibbon() {
  const [activePage, setActivePage] = React.useState(3);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setActivePage(Math.max(1, Math.min(totalPages, page)));
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisible = 5;

    let start = Math.max(1, activePage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) {
      buttons.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
            className="w-10 h-10 rounded-xl"
          >
            1
          </PaginationLink>
        </PaginationItem>,
      );
      if (start > 2) {
        buttons.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }

    for (let i = start; i <= end; i++) {
      const isActive = activePage === i;
      buttons.push(
        <PaginationItem key={i} className="relative">
          <PaginationLink
            href="#"
            isActive={isActive}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            className={cn(
              "w-10 h-10 rounded-xl border-0 transition-all font-bold text-sm",
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {i}
          </PaginationLink>
          {isActive && (
            <motion.div
              layoutId="ribbon-active"
              className="absolute inset-x-1.5 bottom-0.5 h-0.5 bg-primary rounded-full"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            />
          )}
        </PaginationItem>,
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        buttons.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
      buttons.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
            className="w-10 h-10 rounded-xl"
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Pagination>
        <PaginationContent className="bg-background/80 p-2 rounded-2xl border gap-1">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(activePage - 1);
              }}
              text=""
              className="rounded-xl w-10 h-10 hover:bg-muted group p-0 flex justify-center"
            />
          </PaginationItem>

          <div className="flex items-center gap-1.5 mx-2">
            {renderPageButtons()}
          </div>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(activePage + 1);
              }}
              text=""
              className="rounded-xl w-10 h-10 hover:bg-muted group p-0 flex justify-center"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div className="w-full max-w-50 h-px bg-linear-to-r from-transparent via-border to-transparent opacity-50" />

      <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-muted-foreground uppercase opacity-70">
        <span
          className={activePage === 1 ? "text-primary transition-colors" : ""}
        >
          First
        </span>
        <div className="w-1 h-1 rounded-full bg-border" />
        <span
          className={
            activePage === totalPages ? "text-primary transition-colors" : ""
          }
        >
          Last
        </span>
      </div>
    </div>
  );
}
