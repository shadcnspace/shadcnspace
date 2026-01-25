import { blocks, RegistryBlock } from "@/config/registry/blocks";
import { categories } from "@/config/registry/blocks/categories";

export function getSubcategoriesForMaster(masterCat: string) {
    type CategoryKey = keyof typeof categories;

    const filtered = blocks.filter(
        (block) => block.masterCategory.name === masterCat
    ).filter((block) => !block.isPro);

    const grouped: Record<
        string,
        { title: string; image: any; blocks: any[]; name: string }
    > = {};

    filtered.forEach((block) => {
        block.categories.forEach((cat) => {
            // Find the category key by matching the name property
            const categoryEntry = Object.entries(categories).find(
                ([_, category]) => category.name === cat.name
            );

            if (!categoryEntry) return;

            const [key, category] = categoryEntry;

            if (!grouped[key]) {
                grouped[key] = {
                    title: category.title,
                    image: category.image,
                    blocks: [],
                    name: category.name,
                };
            }

            grouped[key].blocks.push(block);
        });
    });

    const categoryOrder = Object.keys(categories);

    return Object.entries(grouped)
        .sort(([keyA], [keyB]) => categoryOrder.indexOf(keyA) - categoryOrder.indexOf(keyB))
        .map(([key, value]) => ({
            subcategory: key,
            title: value.title,
            name: value.name,
            image: value.image,
            count: value.blocks.length,
            blocks: value.blocks,
        }));
}

const getBlocksData = () => {
    const processedCategories = [];
    const categorizedBlocks: Record<string, RegistryBlock[]> = {};

    // Group blocks by category
    blocks.forEach((block) => {
        // Categorize blocks
        block.categories.forEach((category) => {
            if (!categorizedBlocks[category.name]) {
                categorizedBlocks[category.name] = [];
            }
            categorizedBlocks[category.name].push(block);
        });
    });

    // Generate categories with master category information
    for (const categoryName in categorizedBlocks) {
        const blocksList = categorizedBlocks[categoryName];
        
        // Find the category in the registry to get its title
        const registryCategory = Object.values(categories).find(
            (cat) => cat.name === categoryName
        );
        
        // Get the master category from the first block (all blocks in same category should have consistent master)
        const masterCategory = blocksList[0]?.masterCategory?.name || 'marketing';
        processedCategories.push({ 
            name: categoryName, 
            title: registryCategory?.title || categoryName,
            isHome: (registryCategory as any)?.isHome || false,
            totalBlocks: blocksList.length,
            masterCategory 
        });
    }

    const alphabeticallySortedCategories = processedCategories.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return { categories: alphabeticallySortedCategories, categorizedBlocks };
};

export const { categories: blockCategories, categorizedBlocks } =
    getBlocksData();