"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCw } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDemo = () => {
  const [loading, setLoading] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const load = () => {
    setLoading(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setLoading(false), 1600);
  };

  useEffect(() => {
    load();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <article
        aria-busy={loading}
        className="overflow-hidden rounded-lg border border-border bg-background"
      >
        {loading ? (
          <>
            <Skeleton className="aspect-video w-full rounded-none motion-reduce:animate-none" />
            <div className="flex flex-col gap-3 p-4">
              <Skeleton className="h-5 w-16 rounded-full motion-reduce:animate-none" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-full motion-reduce:animate-none" />
                <Skeleton className="h-5 w-2/3 motion-reduce:animate-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-3 w-full motion-reduce:animate-none" />
                <Skeleton className="h-3 w-5/6 motion-reduce:animate-none" />
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Skeleton className="size-7 rounded-full motion-reduce:animate-none" />
                <Skeleton className="h-3 w-24 motion-reduce:animate-none" />
              </div>
            </div>
            <span className="sr-only">Loading article...</span>
          </>
        ) : (
          <div className="animate-in fade-in-0 motion-reduce:animate-none">
            <div className="aspect-video w-full bg-linear-to-br from-sky-400/40 via-blue-500/30 to-teal-400/40" />
            <div className="flex flex-col gap-3 p-4">
              <Badge variant="secondary" className="w-fit">Engineering</Badge>
              <h3 className="text-base font-medium text-foreground">
                How we cut our build times in half with incremental caching
              </h3>
              <p className="text-sm text-muted-foreground">
                A look at the cache layers, the mistakes we made, and the numbers after six months.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Avatar className="size-7">
                  <AvatarFallback className="bg-orange-400/20 text-xs text-foreground">AP</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground">Ava Patel, 6 min read</p>
              </div>
            </div>
          </div>
        )}
      </article>
      <Button variant="outline" size="sm" onClick={load} disabled={loading} className="self-start">
        <RotateCw className={loading ? "animate-spin motion-reduce:animate-none" : undefined} />
        Reload
      </Button>
    </div>
  );
};

export default SkeletonDemo;
