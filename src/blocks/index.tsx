import { blocks, RegistryBlock } from "@/config/registry";

const getBlocksData = () => {
  const categories = [];
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

  // Generate categories
  for (const category in categorizedBlocks) {
    const blocks = categorizedBlocks[category];
    categories.push({ name: category, totalBlocks: blocks.length });
  }

  const alphabeticallySortedCategories = categories.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { categories: alphabeticallySortedCategories, categorizedBlocks };
};

export const { categories: blockCategories, categorizedBlocks } =
  getBlocksData();
