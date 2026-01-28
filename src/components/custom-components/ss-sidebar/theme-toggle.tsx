"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const ThemeToggle = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isBlockPreviewPage =
    pathname?.startsWith("/blocks") &&
    pathname?.endsWith("/preview");


  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isBlockPreviewPage) return null;

  // To avoid flickering
  if (!mounted) {
    return (
      <Button onClick={toggleTheme} variant="ghost" size="icon" {...props} />
    );
  }

  return (
    <Button onClick={toggleTheme} variant="ghost" {...props} className="cursor-pointer w-auto! h-auto! p-3 text-lg">
      <Icon icon={resolvedTheme === "light" ? "solar:moon-linear" : "solar:sun-linear"} width={20} height={20} className="w-5! h-5!" />
    </Button>
  );
};
