import { blockCategories } from "@/blocks";
import { components } from "@/description/app-sidebar";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const componentsSitemap: MetadataRoute.Sitemap = components.map(
    ({ url }) => ({
      url: `https://www.shadcnui-blocks.com${url}`,
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    })
  );
  const blocksCategorySitemap: MetadataRoute.Sitemap = blockCategories.map(
    ({ name }) => ({
      url: `https://www.shadcnui-blocks.com/blocks/categories/${name}`,
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    })
  );

  return [
    {
      url: "https://www.shadcnui-blocks.com",
      changeFrequency: "monthly",
      priority: 1,
      lastModified,
    },
    {
      url: "https://www.shadcnui-blocks.com/components/introduction",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified,
    },
    {
      url: "https://www.shadcnui-blocks.com/blocks",
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    },
    {
      url: "https://www.shadcnui-blocks.com/templates",
      changeFrequency: "daily",
      priority: 1,
      lastModified,
    },
    ...componentsSitemap,
    ...blocksCategorySitemap,
  ];
}
