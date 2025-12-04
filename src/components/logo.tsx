"use client";


export const Logo = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img
      src="/images/shadcnspace.svg"
      alt="logo"

      {...props}
    />
  );
};
