import { constructMetadata } from "@/lib/metadata";
import { generateOgImageUrl } from "@/lib/og";
import { absoluteUrl } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { categorizedTemplates, getTemplate } from "@/components/templates/templateutils";
import TemplateDetails from "@/components/templates/TemplateDetails";

export const generateStaticParams = async () => {
    const params: { category: string; template: string }[] = [];

    Object.entries(categorizedTemplates).forEach(([categorySlug, categoryData]) => {
        Object.keys(categoryData.templates).forEach((templateSlug) => {
            params.push({
                category: categorySlug,
                template: templateSlug,
            });
        });
    });

    return params;
};

export const generateMetadata = async (props: {
    params: Promise<{ template: string }>;
}): Promise<Metadata> => {
    const params = await props.params;
    const { template: templateSlug } = params;

    const templateData = getTemplate(templateSlug);

    if (!templateData) {
        return {};
    }

    const title = `${templateData.name} - Shadcn Space`;
    const description = templateData.subtitle || `${templateData.name} - A beautifully designed template built with Shadcn UI.`;

    const keywords = [
        templateData.name,
        templateData.category,
        "Shadcn UI",
        "Next.js",
        "React",
        "Tailwind CSS",
        "Template",
        "UI Components",
        ...templateData.features,
    ];

    const openGraph = {
        images: [
            {
                url: templateData.images[0] || generateOgImageUrl({
                    title: templateData.name,
                    type: "Template",
                }),
                width: 1200,
                height: 630,
                alt: templateData.name,
            },
        ],
    };

    return constructMetadata({
        title,
        description,
        keywords,
        openGraph,
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: absoluteUrl(`/templates/${templateSlug}`),
        },
    });
};

const TemplatePage = async (props: {
    params: Promise<{ template: string }>;
}) => {
    const params = await props.params;
    const { template: templateSlug } = params;

    const templateData = getTemplate(templateSlug);

    if (!templateData) {
        notFound();
    }

    return (
        <TemplateDetails templateData={templateData} />
    );
};

export default TemplatePage;