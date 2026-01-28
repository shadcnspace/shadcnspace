"use client";
 
import { useEffect } from "react";
import { usePathname } from "next/navigation";
 
export default function ScrollToTop() {
    const pathname = usePathname();
 
    useEffect(() => {
        if (window.location.hash) return;
 
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);
 
    return null;
}