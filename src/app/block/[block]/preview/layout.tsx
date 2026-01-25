import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const BlockPreviewLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="block-preview-wrapper">{children}</div>
    </ThemeProvider>
  );
};

export default BlockPreviewLayout;
