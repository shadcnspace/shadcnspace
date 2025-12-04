import { ArrowUpRight, PuzzleIcon, Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex items-center min-h-screen justify-center px-4 sm:px-6 xl:px-0">
      <div className="max-w-(--breakpoint-xl)">
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[1.2] lg:leading-[1.2]">
          Craft modern UIs faster with Shadcn components, blocks & templates
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl  mx-auto text-foreground/80">
          Speed up your build process with production-ready, fully customizable Shadcn UI components, blocks, kits and templates.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button
            size="xl"
            className="group z-10 w-full sm:w-auto gap-3"
            asChild
          >
            <Link href="/blocks">
              <Shapes className="group-hover:-rotate-12 transition-transform" />
              Explore Blocks{" "}

            </Link>
          </Button>

        </div>
      </div>
    </div>

  );
};
