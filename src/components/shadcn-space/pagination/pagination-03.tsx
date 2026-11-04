"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hash } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InteractiveJump() {
  const [activePage, setActivePage] = React.useState(12);
  const totalPages = 48;
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(activePage.toString());

  const handlePageChange = (page: number) => {
    const newPage = Math.max(1, Math.min(totalPages, page));
    setActivePage(newPage);
    setInputValue(newPage.toString());
    setIsEditing(false);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(inputValue);
    if (!isNaN(page)) {
      handlePageChange(page);
    } else {
      setInputValue(activePage.toString());
      setIsEditing(false);
    }
  };

  return (
    <Pagination className="justify-center">
      <PaginationContent className="bg-background border p-1.5 rounded-xl gap-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(activePage - 1);
            }}
            className="hover:bg-secondary/80 rounded-lg group"
          />
        </PaginationItem>

        <div className="flex items-center px-2 min-w-[140px] justify-center">
          <AnimatePresence mode="wait">
            {!isEditing ? (
              <motion.div
                key="viewer"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 cursor-pointer hover:bg-secondary/50 px-3 py-1 rounded-md transition-colors group"
              >
                <span className="text-sm font-semibold tabular-nums">
                  {activePage}
                </span>
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  of {totalPages}
                </span>
                <Hash className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            ) : (
              <motion.form
                key="editor"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleInputSubmit}
                className="flex items-center gap-1.5"
              >
                <Input
                  autoFocus
                  className="w-12 h-7 py-0 px-1 text-center text-xs tabular-nums focus-visible:ring-1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  type="text"
                  inputMode="numeric"
                />
                <Button type="submit" variant="secondary" size="sm" className="h-7 px-2 text-[10px] font-bold uppercase tracking-tighter cursor-pointer">
                  GO
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <PaginationItem className="hidden sm:block">
           <div className="h-4 w-px bg-border mx-1" />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(activePage + 1);
            }}
            className="hover:bg-secondary/80 rounded-lg group"
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}