
import { getSubcategoriesForMaster } from "@/components/blocks/utils";
import { masterCategoriesArray } from "@/config/registry/blocks/masterCategories";
import { notFound } from "next/navigation";
import BlockMasterClient from "@/components/blocks/master-category/BlockMasterClient";
import { Metadata } from "next";

type Params = Promise<{ master: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params;
    const category = masterCategoriesArray.find((cat) => cat.slug === params.master);
    if (!category) {
        return {
            title: "Category not found",
        };
    }
    return {
        title: `${category.title} Blocks - Shadcn UI`,
        description: `Explore our collection of ${category.title} blocks for Shadcn UI.`,
    };
}

export default async function BlockMasterPage(props: { params: Params }) {
    const params = await props.params;
    const category = masterCategoriesArray.find((cat) => cat.name === params.master);

    if (!category) {
        notFound();
    }

    const subcats = getSubcategoriesForMaster(category.name);

    return (
        <>
            <BlockMasterClient category={category} subcats={subcats} />
        </>
    );
}