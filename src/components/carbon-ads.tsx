"use client";

import { refreshCarbonAd } from "@/lib/carbon-ad";
import { usePathname } from "next/navigation";
import { HTMLAttributes, useEffect, useRef } from "react";

export default function CarbonAd({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const mounted = useRef(false);
  const reference = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!reference.current) return;

    reference.current.innerHTML = "";
    const s = document.createElement("script");
    s.id = "_carbonads_js";
    s.src = `//cdn.carbonads.com/carbon.js?serve=CW7ILKQL&placement=wwwshadcnui-blockscom`;
    reference.current.appendChild(s);

    if (mounted.current) {
      refreshCarbonAd();
    }

    mounted.current = true;
  }, [pathname]);

  return <div className={className} ref={reference} {...props} />;
}
