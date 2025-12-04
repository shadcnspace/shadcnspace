import { ArrowUpRight, PuzzleIcon, Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "./background-pattern";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <Link href="/blocks">
          <Badge className="border-border bg-background text-foreground py-1">
            80+ blocks available for free! 🚀
            <ArrowUpRight className="ml-2 size-5" />
          </Badge>
        </Link>
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl sm:max-w-[25ch] mx-auto font-semibold tracking-[-0.04em] leading-[1.2] lg:leading-[1.2]">
          Beautiful & Production-Ready shadcn/ui Blocks & Components
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto text-foreground/80">
          Explore a collection of shadcn/ui blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="xl"
            className="group z-10 w-full sm:w-auto gap-3"
            asChild
          >
            <Link href="/blocks">
              Explore Blocks{" "}
              <Shapes className="group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="xl"
            className="group z-10 w-full sm:w-auto gap-3"
            variant="outline"
            asChild
          >
            <Link href="/components/accordion">
              View Components
              <PuzzleIcon className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <BackgroundPattern />
    </div>
  );
};
