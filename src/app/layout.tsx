import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/app-sidebar/theme-toggle";
import { CSPostHogProvider } from "@/providers/posthog-provider";
import { WebSite, WithContext } from "schema-dts";
import { PackageManagerProvider } from "@/providers/package-manager-provider";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Craft modern UIs faster with Shadcn components, blocks & templates",
  description:
    "Craft modern UIs faster with Shadcn components, blocks & templates",
  keywords: [
    "Shadcn Space",
    "Shadcn UI components",
    "UI blocks for developers",
    "Shadcn UI code snippets",
    "Shadcn UI examples",
    "Shadcn UI customization",
    "Free Shadcn ui",

    "Custom Shadcn UI components",
  ],
  icons: [
    {
      url: "/images/apple-touch-icon.png",
      type: "image/png",
      rel: "apple-touch-icon",
    },
    {
      sizes: "16x16",
      url: "/images/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
    },
    {
      sizes: "32x32",
      url: "/images/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
    },
  ],
  openGraph: {
    title: "Craft modern UIs faster with Shadcn components, blocks & templates",
    description:
      "Craft modern UIs faster with Shadcn components, blocks & templates",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        height: 630,
        width: 1200,
        alt: "Effortless Shadcn UI Component Previews & Code Snippets",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shadcn Space",
    url: "https://${process.env.NEXT_PUBLIC_APP_URL}",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body className={cn(inter.variable, geistMono.variable, "antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <CSPostHogProvider>
          <ThemeProvider attribute="class">
            <TooltipProvider>
              <PackageManagerProvider>{children}</PackageManagerProvider>
              <div className="fixed bottom-6 right-6">
                <ThemeToggle />
              </div>
            </TooltipProvider>
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
