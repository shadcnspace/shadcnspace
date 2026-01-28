import "./globals.css";
import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";

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
      url: "/images/favicon.png",
      type: "image/png",
      rel: "icon",
    },
    {
      sizes: "32x32",
      url: "/images/favicon.png",
      type: "image/png",
      rel: "icon",
    },
  ],
  metadataBase: new URL("https://shadcnspace.com"),
  openGraph: {
    title: "Craft modern UIs faster with Shadcn components, blocks & templates",
    description:
      "Craft modern UIs faster with Shadcn components, blocks & templates",
    type: "website",
    url: "https://shadcnspace.com",
    siteName: "Shadcn Space",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        height: 630,
        width: 1200,
        alt: "Effortless Shadcn UI Component Previews & Code Snippets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft modern UIs faster with Shadcn components, blocks & templates",
    description:
      "Craft modern UIs faster with Shadcn components, blocks & templates",
    images: ["/images/og-image.png"],
    creator: "@shadcnspace",
    site: "@shadcnspace",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');
        </style>
      </head>
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
