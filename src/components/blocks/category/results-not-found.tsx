"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const ResultsNotFound = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchParamsString = searchParams.toString();
  const query = searchParams.get("q") || "";

  const resetSearch = () => {
    const searchParams = new URLSearchParams(searchParamsString);
    searchParams.delete("q");
    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-center mt-16 text-center">
      <div>
        <span className="text-7xl font-bold">404</span>
        <p className="mt-6 text-lg max-w-md">
          Could not find any result for query &quot;{query}&quot;. <br />
          Please try searching for something else.
        </p>
        <Button className="mt-8" onClick={resetSearch}>
          Reset your search query
        </Button>
      </div>
    </div>
  );
};
