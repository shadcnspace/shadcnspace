"use client";

import { blockCategories } from "@/blocks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/config/registry/categories";
import { TagIcon } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
  const { category = "all" } = useParams<{ category: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSelect = (value: string) => {
    if (value === "all") {
      router.push(`/blocks?${searchParams.toString()}`);
      return;
    }

    router.push(`/blocks/categories/${value}?${searchParams.toString()}`);
  };

  return (
    <Select value={category} onValueChange={handleSelect}>
      <SelectTrigger className="w-[180px] bg-background">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">
            <div className="flex items-center gap-3">
              <TagIcon className="h-4 w-4" />
              <span>All</span>
            </div>
          </SelectItem>
          {blockCategories.map((category) => (
            <SelectItem key={category.name} value={category.name}>
              <div className="flex items-center gap-3">
                <TagIcon className="h-4 w-4" />
                <span className="capitalize">
                  {categories[category.name as keyof typeof categories].title}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
