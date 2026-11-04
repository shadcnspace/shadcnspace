import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDemo = () => {
  return (
    <div
      role="status"
      aria-label="Loading products"
      className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="flex flex-col gap-3 rounded-lg border border-border bg-background p-3">
          <Skeleton className="aspect-square w-full rounded-md motion-reduce:animate-none" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-4/5 motion-reduce:animate-none" />
            <Skeleton className="h-3 w-1/2 motion-reduce:animate-none" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-14 motion-reduce:animate-none" />
            <Skeleton className="size-8 rounded-full motion-reduce:animate-none" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading products...</span>
    </div>
  );
};

export default SkeletonDemo;
