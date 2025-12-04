import ComponentBlock from "@/components/component-block";
import { DescriptionText, MainHeading } from "@/components/typography";
import { componentsMap } from "@/description/app-sidebar";
import { customizedComponents } from "@/description/customized-components";
import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl, cn } from "@/lib/utils";
import { notFound } from "next/navigation";

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
  const components =
    customizedComponents[
      params.component as keyof typeof customizedComponents
    ] || [];

  const title = `${components.length}+ customized Shadcn UI ${details.title} components`;
  const description = `Explore a curated collection of ${components.length}+ customized Shacn UI ${details.title} components. Preview, customize, and copy ready-to-use code snippets to streamline your web development workflow.`;

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
      canonical: absoluteUrl(`/components/${params.component}`),
    },
  });
};

const CustomizedComponentPage = async (props: {
  params: Promise<{ component: string }>;
}) => {
  const params = await props.params;
  const { component } = params;

  const details = componentsMap[component as keyof typeof componentsMap];
  const components =
    customizedComponents[component as keyof typeof customizedComponents] || [];

  if (!details) return notFound();

  return (
    <div>
      <MainHeading>{details.title}</MainHeading>
      <DescriptionText className="mt-2">{details.description}</DescriptionText>

      <div
        className={cn(
          "mt-12 grid gap-2",
          {
            "lg:grid-cols-2": details.columns === 2,
            "sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3":
              details.columns === 3,
          },
          details.className
        )}
      >
        {components.map((component, index) => (
          <ComponentBlock key={`${component.title}-${index}`} {...component} />
        ))}
      </div>
    </div>
  );
};

export default CustomizedComponentPage;
