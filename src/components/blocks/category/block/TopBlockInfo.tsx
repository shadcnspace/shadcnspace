import { Icon } from "@iconify/react";
import Link from "next/link";

const TopBlockInfo = ({
  title,
  description,
  isPro,
  created_at,
}: {
  title: string;
  description: string;
  isPro: boolean;
  created_at: string;
}) => {
  function isNew(dateString: string): boolean {
    const inputDate = new Date(dateString);
    const today = new Date();
    const diffMs = today.getTime() - inputDate.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays <= 14;
  }

  return (
    <div className="flex flex-col gap-3 lg:col-span-7">
      <div className="flex items-center ">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
        <span className="size-1 rounded-full bg-gray-300 dark:bg-white/30 mx-3"></span>
        <div className="flex items-center gap-2">
          {!isPro && (
            <span className="py-0.5 px-2.5 rounded-md text-gray-500 bg-gray-200 dark:bg-white/20 dark:text-white/50 text-sm font-medium">
              Free
            </span>
          )}
          {isNew(created_at) && (
            <span className="py-0.5 px-2.5 rounded-md text-green-600 bg-green-200 text-sm font-medium">
              New
            </span>
          )}
        </div>
      </div>
      <p className="max-w-2xl">{description}</p>
    </div>
  );
};

export default TopBlockInfo;
