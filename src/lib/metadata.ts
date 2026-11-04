import { Metadata } from "next";

export const constructMetadata = (metadata: Metadata): Metadata => {
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title!,
      description: metadata.description!,
      siteName: "Shadcn Space",
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          height: 630,
          width: 1200,
          alt: "Customized Shadcn Space & Components",
        },
      ],
      locale: "en_US",
      ...metadata.openGraph,
    },
    authors: [
      {
        name: "Shadcn Space",
        url: "https://twitter.com/",
      },
    ],
    manifest: "/site.webmanifest",
    ...metadata,
  };
};
