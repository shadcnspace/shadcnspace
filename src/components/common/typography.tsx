import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const MainHeading = ({ className, ...props }: ComponentProps<"h1">) => (
  <h1
    className={cn("", className)}
    {...props}
  />
);

export const SubHeading = ({ className, ...props }: ComponentProps<"h2">) => (
  <h2
    className={cn("text-2xl font-bold tracking-tight", className)}
    {...props}
  />
);

export const DescriptionText = ({
  className,
  ...props
}: ComponentProps<"p">) => (
  <p
    className={cn("text-muted-foreground text-base", className)}
    {...props}
  />
);
