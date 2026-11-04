
import { blockCategories } from "@/components/blocks/utils";
import { components } from "@/config/registry/components/sidebar-data"
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const componentsSitemap: MetadataRoute.Sitemap = components.map(
    ({ url }) => ({
      url: `https://shadcnspace.com${url}`,
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    })
  );
  const blocksCategorySitemap: MetadataRoute.Sitemap = blockCategories.map(
    ({ name }) => ({
      url: `https://shadcnspace.com/blocks/categories/${name}`,
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    })
  );

  return [
    {
      url: "https://shadcnspace.com",
      changeFrequency: "monthly",
      priority: 1,
      lastModified,
    },
    {
      url: "https://shadcnspace.com/components/introduction",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified,
    },
    {
      url: "https://shadcnspace.com/blocks",
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    },
    {
      url: "https://shadcnspace.com/templates",
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    },
    ...componentsSitemap,
    ...blocksCategorySitemap,
  ];
}
