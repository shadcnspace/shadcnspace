import { Skeleton } from "@/components/ui/skeleton";

const bars = [42, 64, 50, 78, 58, 88, 70, 94, 62, 80, 54, 72];

const SkeletonDemo = () => {
  return (
    <div role="status" aria-label="Loading dashboard" className="flex w-full max-w-2xl flex-col gap-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="flex flex-col gap-3 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-16 motion-reduce:animate-none" />
              <Skeleton className="size-6 rounded-md motion-reduce:animate-none" />
            </div>
            <Skeleton className="h-6 w-20 motion-reduce:animate-none" />
            <Skeleton className="h-3 w-24 motion-reduce:animate-none" />
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-border bg-background p-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32 motion-reduce:animate-none" />
            <Skeleton className="h-3 w-48 motion-reduce:animate-none" />
          </div>
          <Skeleton className="h-8 w-24 motion-reduce:animate-none" />
        </div>
        <div className="flex h-40 items-end gap-2">
          {bars.map((height, index) => (
            <Skeleton
              key={index}
              className="flex-1 rounded-t-sm rounded-b-none motion-reduce:animate-none"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} className="h-2.5 w-8 motion-reduce:animate-none" />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading dashboard...</span>
    </div>
  );
};

export default SkeletonDemo;
