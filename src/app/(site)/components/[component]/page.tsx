import ComponentBlock from "@/components/blocks/code-viewer/component/component-block";
import { DescriptionText, MainHeading } from "@/components/common/typography";
import { components } from "@/config/registry/components";
import { componentsMap } from "@/config/registry/components/sidebar-data";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl, cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return Object.keys(componentsMap).map((component) => ({
    component,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ component: string }>;
}) => {
  const params = await props.params;
  const details = componentsMap[params.component as keyof typeof componentsMap];
  const allComponents =
    components.filter((comp: any) => comp.category.name === params.component) || [];

  const title = `${allComponents.length}+ customized Shadcn UI ${details.title} components`;
  const description = `Explore a curated collection of ${allComponents.length}+ customized Shacn UI ${details.title} components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow.`;

  return constructMetadata({
    title,
    description,
    openGraph: {
      images: [
        {
          url: generateOgImageUrl({
            title,
            type: "Component",
          }),
          width: 1200,
          height: 630,
          alt: "Customized Shadcn UI Components",
        },
      ],
    },
    alternates: {
      canonical: absoluteUrl(`/docs/components/${params.component}`),
    },
  });
};


export default async function ComponentPage(props: {
  params: Promise<{ component: string }>;
}) {
  const params = await props.params;
  const { component } = params;

  const details = componentsMap[component as keyof typeof componentsMap];
  const allComponents = components.filter((comp: any) => comp.category.name === component) || [];

  if (!details) return notFound();

  return (
    <>
      <div className="pb-6">
        <div className="lg:hidden block fixed left-0 border border-border rounded-e-md">
          <SidebarTrigger />
        </div>
        <MainHeading className="text-4xl font-semibold tracking-tight">
          {details.headingTitle}
        </MainHeading>
        <DescriptionText className="mt-2">{details.description}</DescriptionText>
      </div>
      <div
        className={cn(
          "grid gap-5",
          {
            "lg:grid-cols-2": details.columns === 2,
            "sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3":
              details.columns === 3,
          },
          details.className
        )}
      >
        {allComponents.map((component, index) => (
          <ComponentBlock key={`${component.title}-${index}`} {...component} />
        ))}
      </div>
      <div className="mt-12">
        <details.component />
      </div>
    </>
  );
}