"use client";

import { useWebContext } from "@/providers/website-provider";
import { Separator } from "@/components/ui/separator";
import { CategorySidebarSheet } from "../sidebar/CategorySidebarSheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";

export default function FilterBlock({ masterCategory }: { masterCategory: string }) {
  const { isBlockSidebarOpen, setIsBlockSidebarOpen, setFilterByPrice, setFilterBySort } = useWebContext();
  return (
    <>
      <div className="w-full sticky top-[70px] z-1 bg-background py-5 border-y border-border ">
        <div className="container flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center flex-wrap gap-4">
            <button
              onClick={() => setIsBlockSidebarOpen(!isBlockSidebarOpen)}
              className={`py-2.5 ps-3 pe-5 text-base font-medium relative rounded-lg bg-black text-white dark:bg-white dark:text-black cursor-pointer`}
            >
              <span className="flex items-center gap-2">
                <Icon icon="solar:hamburger-menu-broken" width={24} height={24} /> View All Blocks
              </span>
            </button>
            <Separator orientation="vertical" className="h-7! self-center! md:block hidden" />
            <div className="px-2 py-1.5 border border-border rounded-lg sm:flex hidden items-center gap-2.5 ps-4 overflow-hidden">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
              <p className="text-base font-medium">We've released 50+ new UI blocks this week. Check the Changelog</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <p className="text-base font-normal">Sort by</p>
              <Select defaultValue="id" onValueChange={(value) => value && setFilterBySort(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="id">ID</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  {/* <SelectItem value="popular">Popularity</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
            <div className="hidden">
              <Separator orientation="vertical" className="h-7! self-center! md:block hidden" />
              <div className="flex items-center gap-3">
                <p className="text-base font-normal">Price</p>
                <Select defaultValue="all" onValueChange={(value) => value && setFilterByPrice(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    {/* <SelectItem value="paid">Paid</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategorySidebarSheet />
    </>
  );
}   