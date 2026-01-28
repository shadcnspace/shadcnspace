"use client";
import { cn } from "@/lib/utils";

export const Logo = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <>
      <img
        src="/images/logo/shadcnspace.svg"
        alt="logo"
        className={cn("dark:hidden", className)}
        {...props}
      />
      <img
        src="/images/logo/shadcnspace-white.svg"
        alt="logo"
        className={cn("hidden dark:block", className)}
        {...props}
      />
    </>
  );
};
