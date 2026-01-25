import BrandSlider, { BrandList } from "@/components/shadcn-space/blocks/testimonial-02/brand-slider";
import Testimonial01Inner, { Testimonial } from "@/components/shadcn-space/blocks/testimonial-02/testimonial";

const brandList: BrandList[] = [
    {
        image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-1.svg",
        lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-1.svg",
        name: "Brand 1",
    },
    {
        image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-2.svg",
        lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-2.svg",
        name: "Brand 2",
    },
    {
        image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-3.svg",
        lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-3.svg",
        name: "Brand 3",
    },
    {
        image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-4.svg",
        lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-4.svg",
        name: "Brand 4",
    },
    {
        image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-5.svg",
        lightimg: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-muted-white-5.svg",
        name: "Brand 5",
    },
];

const defaultTestimonials: Testimonial[] = [
    {
        quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
        author: "Walter Dutcher",
        role: "CEO",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
    },
    {
        quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
        author: "Errica Mcdowell",
        role: "Marketing Head",
        image: "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
    },
];

export default function Testimonial01() {
    return (
        <main>
            <div className="min-h-screen flex flex-col justify-center">
                <Testimonial01Inner testimonials={defaultTestimonials} />
                <BrandSlider brandList={brandList} />
            </div>
        </main>
    );
}