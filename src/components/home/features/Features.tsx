import { Badge } from "@/components/ui/badge";

export default function Features() {
    return (
        <div className="grid grid-cols-12 lg:gap-0 gap-6">
            <div className="lg:col-span-6 col-span-12 flex flex-col gap-7.5">
                <Badge className="rounded-[5px]!" >Why choose us?</Badge>
                <h2 className="relative z-2 text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold max-w-lg">
                    Multiple world class products by one dedicated team
                </h2>
            </div>
            <div className="lg:col-span-6 col-span-12 flex items-center gap-8 lg:flex-nowrap flex-wrap">
                <span className="flex relative items-center justify-center size-65 bg-foreground text-background rounded-full text-[110px] font-semibold shrink-0">
                    15 <span className="text-[64px] font-semibold relative -top-7 start-2" >+</span>
                </span>
                <div className="flex flex-col gap-3 items-start">
                    <p className="text-lg font-semibold">15+ years of excellence</p>
                    <p className="text-lg">We are making awesome digital products <span className="font-medium text-foreground">since 2011</span> with one goal to produce top notch quality designs and developer friendly code.</p>
                </div>
            </div>
        </div>
    )
}