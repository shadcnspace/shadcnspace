import { Theme } from "@/types/theme";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export const useBlockTheme = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<Theme>(resolvedTheme as Theme);

  // Reference to the block preview iframe
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Handle block theme change
  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);

    const iframe = iframeRef.current;
    if (iframe?.contentDocument?.documentElement) {
      const iframeDocument = iframe.contentDocument.documentElement;
      if (theme === "dark") {
        iframeDocument.classList.remove("light");
        iframeDocument.classList.add("dark");
      }
      if (theme === "light") {
        iframeDocument.classList.remove("dark");
        iframeDocument.classList.add("light");
      }
    }
  };

  // Keep the block theme in sync with the system theme
  useEffect(() => {
    setTheme(resolvedTheme as Theme);
  }, [resolvedTheme]);

  return { theme, setTheme: handleThemeChange, iframeRef };
};
