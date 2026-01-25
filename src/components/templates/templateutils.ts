import { templates, Template } from "@/components/templates/data/templates";

type TemplateItem = Template['items'][number];

interface CategorizedTemplates {
    [categorySlug: string]: {
        category: Template;
        templates: {
            [templateSlug: string]: TemplateItem;
        };
    };
}

const getTemplatesData = () => {
    const categorizedTemplates: CategorizedTemplates = {};
    const allCategories: { name: string; slug: string; totalTemplates: number }[] = [];

    // Group templates by category slug
    templates.forEach((category) => {
        const categorySlug = category.slug.replace(/\s+/g, '').toLowerCase();

        if (!categorizedTemplates[categorySlug]) {
            categorizedTemplates[categorySlug] = {
                category,
                templates: {},
            };
        }

        // Add each template item to the category
        category.items.forEach((template) => {
            const templateSlug = template.slug.replace(/\s+/g, '').toLowerCase();
            categorizedTemplates[categorySlug].templates[templateSlug] = template;
        });

        // Add to categories list
        allCategories.push({
            name: category.label,
            slug: categorySlug,
            totalTemplates: category.items.length,
        });
    });

    return { categorizedTemplates, allCategories };
};

export const { categorizedTemplates, allCategories } = getTemplatesData();

// Helper function to get a specific template by slug (searches all categories)
export const getTemplate = (templateSlug: string): TemplateItem | null => {
    for (const categorySlug in categorizedTemplates) {
        const category = categorizedTemplates[categorySlug];
        if (category.templates[templateSlug]) {
            return category.templates[templateSlug];
        }
    }
    return null;
};


// Helper function to get all templates in a category
export const getTemplatesByCategory = (categorySlug: string): TemplateItem[] => {
    const category = categorizedTemplates[categorySlug];
    if (!category) return [];

    return Object.values(category.templates);
};

// Helper function to get category info
export const getCategoryInfo = (categorySlug: string) => {
    return categorizedTemplates[categorySlug]?.category || null;
};
