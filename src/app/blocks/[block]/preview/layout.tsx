import { ReactNode } from "react";

const BlockPreviewLayout = ({ children }: { children: ReactNode }) => {
  return <div className="block-preview-wrapper">{children}</div>;
};

export default BlockPreviewLayout;
