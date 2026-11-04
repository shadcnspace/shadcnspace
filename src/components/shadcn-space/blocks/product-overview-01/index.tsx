import ProductOverview, {
    ProductOverviewData,
} from "@/components/shadcn-space/blocks/product-overview-01/product-overview";

const productData: ProductOverviewData = {
    brand: "Aurelia Skin",
    title: "Brewier glow serum",
    rating: 4.8,
    reviewCount: 24,
    description:
        "A lightweight, fast-absorbing serum designed to hydrate, brighten, and restore your skin’s natural glow. Powered by skin-loving botanicals, it helps improve texture, even out tone, and leave your skin looking fresh and radiant every day.",
    discount: 60,
    sizes: [
        { name: "100 ml", price: 100.0 },
        { name: "70 ml", price: 70.0 },
        { name: "50 ml", price: 50.0, outOfStock: true },
    ],
    images: {
        main: "https://images.shadcnspace.com/assets/ecommerce/product-overview/product-overview-04-img-1.webp",
        details: [
            "https://images.shadcnspace.com/assets/ecommerce/product-overview/product-overview-04-img-2.webp",
            "https://images.shadcnspace.com/assets/ecommerce/product-overview/product-overview-04-img-3.webp",
        ],
    },
    accordionInfo: [
        {
            title: "Product overview",
            content:
                "This serum is formulated with high-quality ingredients to provide deep hydration and a visible glow. Suitable for all skin types, it absorbs quickly without leaving a greasy residue.",
        },
        {
            title: "Full ingredient list",
            content:
                "Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Panthenol, Phenoxyethanol, Ethylhexylglycerin, Citric Acid.",
        },
        {
            title: "Shipping & returns",
            content:
                "We offer free standard shipping on all orders over $50. Returns are accepted within 30 days of purchase for a full refund.",
        },
    ],
};

export default function ProductOverviewBlock() {
    return <ProductOverview product={productData} />;
}
