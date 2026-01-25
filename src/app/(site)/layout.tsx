"use client";

import { ThemeProvider } from "next-themes";
import { PackageManagerProvider } from "@/providers/package-manager-provider";
import { WebsiteProvider } from "@/providers/website-provider";
import { WebSite, WithContext } from "schema-dts";
import { Navbar } from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd: WithContext<WebSite> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Shadcn Space",
        url: `https://${process.env.NEXT_PUBLIC_APP_URL}`,
    };

    return (
        <WebsiteProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <ThemeProvider attribute="class">
                <PackageManagerProvider>
                    <ScrollToTop />
                    <Navbar />
                    {children}
                    <Footer />
                </PackageManagerProvider>
            </ThemeProvider>
        </WebsiteProvider>
    );
}
