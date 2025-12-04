import { Logo } from "@/components/logo";
import TemplateCard from "@/components/templates/template-card";
import { Button } from "@/components/ui/button";
import { NextLogo, ShadcnLogo, TailwindLogo } from "@/components/ui/icons";
import { categories, categorizedTemplates } from "@/description/templates";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";
import { Layers } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Beautifully Designed Shadcn UI Templates",
  description:
    "Discover a collection of premium Shadcn UI templates designed to make your project shine. With modern designs and smooth functionality, these templates help you build stunning UIs with ease!",
  keywords: [
    "Shadcn UI",
    "Shadcn UI templates",
    "Tailwind CSS templates",
    "Beautiful Shadcn UI templates",
    "Beautifully designed Shadcn UI templates",
    "Beautiful Tailwind CSS templates",
    "Premium Shadcn UI templates",
    "Premium Tailwind CSS templates",
    "Free Shadcn UI templates",
    "Free Tailwind CSS templates",
    "Shadcn UI landing page templates",
    "Landing page templates",
    "Shadcn UI portfolio templates",
    "Portfolio templates",
  ],
  alternates: {
    canonical: absoluteUrl(`/templates`),
  },
});

export default function TemplatesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="relative z-1 max-w-4xl mx-auto text-center space-y-8 px-6">
          <div className="relative overflow-hidden inline-flex items-center justify-center bg-accent gap-4 py-1.5 pl-4 pr-2 rounded-full">
            <span className="text-sm">Built using</span>
            <div className="flex items-center justify-center gap-3">
              <NextLogo className="h-6 w-6" />
              <TailwindLogo className="h-6 w-6 text-sky-400" />
              <ShadcnLogo className="h-5 w-5" />
              <Logo className="h-6 w-6 [&_svg]:h-4 [&_svg]:w-4" />
            </div>
          </div>
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-semibold leading-[1.15]! tracking-[-0.035em]">
            <span className="text-blue-500">Beautifully Designed</span> Shadcn
            UI Templates for Every Project
          </h1>
          <p className="sm:text-xl">
            Discover a collection of premium Shadcn UI templates designed to
            make your project shine. With modern designs and smooth
            functionality, these templates help you build stunning UIs with
            ease!
          </p>
          <Button size="lg" className="h-13 !px-6 text-lg" asChild>
            <Link href="#templates">
              <Layers className="w-5! h-5! mr-2" /> Browse Templates
            </Link>
          </Button>
        </div>
      </div>

      {/* Main */}
      <section
        id="templates"
        className="container max-w-(--breakpoint-lg) py-20 mx-auto px-6"
      >
        <div className="space-y-14">
          {categories.map((category) => {
            const templates = categorizedTemplates[category.slug];

            return (
              <div key={category.slug}>
                <h2 className="mb-5 text-3xl sm:text-4xl font-bold tracking-tight">
                  {category.name} Templates
                </h2>
                {templates?.length ? (
                  <div className="grid md:grid-cols-2 gap-8">
                    {categorizedTemplates[category.slug].map((template) => (
                      <TemplateCard key={template.slug} template={template} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-accent p-6 rounded-xl">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold">Coming Soon!</p>
                    </div>
                    <p className="mt-2">
                      We&apos;re currently working on crafting high-quality
                      templates for this category. Our team is dedicated to
                      designing beautiful, functional, and modern templates to
                      help you create stunning websites effortlessly. Stay tuned
                      as we bring you fresh and innovative designs soon!
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
