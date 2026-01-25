import { app } from "@/config/app";
import { capitalize } from "@/lib/utils";
import { BreadcrumbList, FAQPage, Graph, WebSite } from "schema-dts";

const BlockCategoryJsonLd = ({ category }: { category: string }) => {
  const breadCrumbList: BreadcrumbList = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Shadcn Space",
        item: app.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blocks",
        item: `${app.domain}/blocks`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: capitalize(category),
        item: `${app.domain}/blocks/categories/${category}`,
      },
    ],
  };
  const website: WebSite = {
    "@type": "WebSite",
    name: "Shadcn Space",
    url: app.domain,
  };
  const faqPage: FAQPage = {
    "@type": "FAQPage",
    mainEntity: [],
  };

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [breadCrumbList, website, faqPage],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
};

export default BlockCategoryJsonLd;
