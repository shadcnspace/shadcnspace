import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks } from "@/config/registry/blocks";
import { components } from "@/config/registry/components";

export const generateStaticParams = async () => {
  return blocks.map(({ name }) => ({
    block: name,
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ block: string }>;
}): Promise<Metadata> => {
  const { block } = await props.params;
  const blockDetails = blocks.find((b) => b.name === block);
 
  if (!blockDetails) {
    throw new Error(`Block ${block} not found`);
  }

  return constructMetadata({
    title: `${blockDetails?.title } Preview - Shadcn Space`,
    description: `Fully customized and responsive ${blockDetails?.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/block/${block}`),
    },
  });
};

const BlockPreviewPage = async (props: {
  params: Promise<{ block: string }>;
}) => {
  const params = await props.params;
  const { block } = params;

  const blockDetails = blocks.find((b) => b.name === block);
  const allCustomizedComponents = components;
  const componentDetails = allCustomizedComponents.find(
    (item) => item.name === block
  );

  if (!blockDetails && !componentDetails) notFound();

  if (blockDetails?.component) {

    return (
      <blockDetails.component />
    );
  }
}

export default BlockPreviewPage;
