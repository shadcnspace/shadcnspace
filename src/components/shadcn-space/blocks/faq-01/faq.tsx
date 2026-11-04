import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQ_DATA = [
    {
        question: "What services does Shadcn Space offer?",
        answer: "We offer a wide range of services including web development, app development, and digital marketing.",
    },
    {
        question: "How long does a typical project take?",
        answer: "The time it takes to complete a project depends on the complexity of the project and the scope of the work.",
    },
    {
        question: "How is pricing structured at Awake Agency?",
        answer: "Pricing is based on the complexity of the project and the scope of the work.",
    },
    {
        question: "Do you offer ongoing support after project completion?",
        answer: "Absolutely! We offer comprehensive post-launch support to ensure a seamless implementation and provide ongoing maintenance packages tailored to clients who need regular updates or technical assistance. Our commitment doesn’t end at launch — we’re here to help you every step of the way.",
    },
    {
        question: "How often will I receive updates on my project?",
        answer: "We provide updates on a regular basis to ensure that your project is running smoothly and that you are aware of any changes or updates to the project.",
    }
]

export default function Faq() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
                <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                    <Badge variant="outline" className="text-sm h-auto py-1 px-3 border-0 outline outline-border">FAQs</Badge>
                    <h2 className="text-5xl font-medium text-center max-w-lg">
                        Got questions? We’ve got answers ready
                    </h2>
                </div>
                <div>
                    <Accordion className="w-full flex flex-col gap-6">
                        {FAQ_DATA.map((faq, index) => (
                            <AccordionItem
                                key={`item-${index}`}
                                value={`item-${index}`}
                                className={cn(
                                    "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                                    index === 0 && "delay-100",
                                    index === 1 && "delay-200",
                                    index === 2 && "delay-300",
                                    index === 3 && "delay-400",
                                    index === 4 && "delay-500"
                                )}
                            >
                                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline [&_svg[data-slot=accordion-trigger-icon]]:!hidden">
                                    {faq.question}
                                    <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                                </AccordionTrigger>
                                <AccordionContent className="p-0 text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}