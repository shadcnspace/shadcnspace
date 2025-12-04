"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PreviewListSearch = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [value, setValue] = useState(query);
  const pathname = usePathname();
  const searchParamsString = searchParams.toString();
  const router = useRouter();
  const debouncedQuery = useDebounce(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    const searchParams = new URLSearchParams(searchParamsString);

    if (!searchParamsString && !debouncedQuery) return;

    if (!debouncedQuery) {
      searchParams.delete("q");
      router.push(`${pathname}?${searchParams.toString()}`);
      return;
    }

    searchParams.set("q", debouncedQuery);
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    handleSearch();
  }, [debouncedQuery]);

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <div className="relative">
      <Input
        className="ps-9 max-w-60 w-full bg-background"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <SearchIcon className="h-5 w-5 absolute start-2 inset-y-0 my-auto text-muted-foreground" />
    </div>
  );
};

export default PreviewListSearch;
