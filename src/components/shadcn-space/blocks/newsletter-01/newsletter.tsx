import { Icon } from "@iconify/react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"


export default function Newsletter() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:py-20 py-8">
                <div className="bg-teal-400/20 py-24 relative overflow-hidden">
                    <img src="https://images.shadcnspace.com/assets/svgs/newsletter-flake.svg" alt="newsletter-flake" className="absolute animate-spin [animation-duration:1500ms] w-80 h-80 -top-2/4 right-0 -z-1" />
                    <div className="flex flex-col gap-10 relative z-0">
                        <div className="flex flex-col gap-6 text-center">
                            <h2 className="sm:text-5xl text-3xl font-semibold animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                                Subscribe to Newsletter
                            </h2>
                            <p className="text-base text-muted-foreground max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200 ease-in-out fill-mode-both">
                                Join 1,000,000+ subscribers receiving expert tips on earning more, investing
                                smarter and living better, all in our free newsletter.
                            </p>
                        </div>
                        <InputGroup className="bg-background! rounded-full overflow-hidden max-w-xl mx-auto flex items-center gap-6 w-full h-auto animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 ease-in-out fill-mode-both">
                            <InputGroupInput type="email" placeholder="Email address" className="ps-8" />
                            <InputGroupAddon align="inline-end" className="py-2 pe-2.5">
                                <InputGroupButton variant="secondary" className="bg-primary flex gap-2 lg:gap-3 justify-between items-center rounded-full w-fit ps-5 h-auto border-0 text-primary-foreground text-sm font-medium py-3.5 px-6 me-1 hover:bg-primary/80 [&>svg:not([class*='size-'])]:size-4">
                                    Subscribe
                                    <Icon
                                        icon="lucide:arrow-right"
                                        width={16}
                                        height={16}
                                    /></InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <img src="https://images.shadcnspace.com/assets/svgs/newsletter-flake.svg" alt="newsletter-flake" className="absolute animate-spin [animation-duration:2500ms] top-1/3 -z-1" />
                </div>
            </div>
        </section>
    );
}