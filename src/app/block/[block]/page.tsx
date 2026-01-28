import { BlockCodeExplorer } from "@/components/blocks/code-viewer/block-code-explorer";
import BlockDetails from "@/components/blocks/block-details";
import BlockPreview from "@/components/blocks/code-viewer/block-preview";
import BlockToolbar from "@/components/blocks/code-viewer/block-toolbar";
import { Navbar } from "@/components/layout/navbar/navbar";
import { DescriptionText, MainHeading } from "@/components/common/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl, capitalize } from "@/lib/utils";
import { BlockProvider } from "@/providers/block-provider";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import registry from "../../../../registry.json";
import { blocks } from "@/config/registry/blocks";

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
    title: `${blockDetails.title} - ${capitalize(
      blockDetails?.categories?.[0]?.title ?? "ShadcnSpace Block"
    )} section`,
    description: `Fully customized and responsive ${blockDetails.title} Shadcn UI block. Preview, customize, and copy ready-to-use code snippets.`,
    alternates: {
      canonical: absoluteUrl(`/blocks/${block}`),
    },
  });
};

const BlockPage = async (props: { params: Promise<{ block: string }> }) => {
  const params = await props.params;
  const { block } = params;
  const blockDetails = registry.items.find((item) => item.name === block);
  if (!blockDetails) notFound();
  const { title, description } = blockDetails;
  return (
    <BlockProvider name={block}>
      <Navbar />
      <div className="max-w-(--breakpoint-2xl) mx-auto mt-14 py-8 px-4">
        <MainHeading>{title}</MainHeading>
        {description && (
          <DescriptionText className="mt-1">{description}</DescriptionText>
        )}
        <Tabs defaultValue="preview" className="mt-6">
          <div className="mb-1 flex items-center gap-2 justify-between pr-1.5">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <BlockToolbar />
          </div>
          <TabsContent value="preview">
            <BlockPreview />
          </TabsContent>
          <TabsContent value="code">
            <BlockCodeExplorer />
          </TabsContent>
        </Tabs>
        <BlockDetails />
      </div>
    </BlockProvider>
  );
};

export default BlockPage;
