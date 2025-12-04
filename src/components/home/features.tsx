import {
  BadgeCheck,
  MoveRightIcon,
  PuzzleIcon,
  ShapesIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FAQ } from "./faq";

export const Features = () => {
  return (
    <section className="py-20 max-w-(--breakpoint-lg) mx-auto px-6 lg:px-0">
      <h2 className="text-5xl font-semibold text-center tracking-tight">
        Core Features
      </h2>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-1 border rounded-xl bg-muted border-border/65">
          <Card className="relative overflow-hidden bg-gradient-to-b rounded-lg from-primary/3 shadow/5 gap-3 h-full">
            <DashedTopFadeGrid />

            <CardHeader className="pb-0 gap-3 isolate">
              <div className="h-10 w-10 bg-primary/7 dark:bg-primary/15 flex items-center justify-center rounded-full">
                <ShapesIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Blocks
              </h3>
            </CardHeader>
            <CardContent className="isolate">
              <p className="text-foreground/70">
                Blocks are uniquely designed sections that make building your
                website easy. Simply preview, copy the code, and add a fresh new
                section to your site instantly.
              </p>
              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Fully responsive
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Each block is optimized for perfect display on any device.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Easily preview and copy
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Quickly view how blocks look and grab the code in one
                      click.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Absolutely Free to Use
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Use all blocks without any restrictions or fees.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto pt-1">
              <Button asChild>
                <Link href="/blocks">
                  View Blocks <MoveRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="p-1 border rounded-xl bg-muted border-border/65">
          <Card className="relative overflow-hidden bg-gradient-to-b rounded-lg from-primary/3 shadow/5 gap-3 h-full">
            <DashedTopFadeGrid />

            <CardHeader className="pb-0 gap-3 isolate">
              <div className="h-10 w-10 bg-primary/7 dark:bg-primary/15 flex items-center justify-center rounded-full">
                <PuzzleIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                Customized Components
              </h3>
            </CardHeader>
            <CardContent className="isolate">
              <p className="text-foreground/70">
                Enhance your design with our collection of customized Shadcn UI
                components, crafted to give you more flexibility and style
                options for a polished, unique look.
              </p>

              <ul className="mt-6 space-y-5 text-[15px]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Multiple Variants
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Access wide range of component styles to fit any design
                      need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Fully Customizable
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Adjust colors, sizes, and styles to match your brand.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="h-4.5 w-4.5" />
                  <div>
                    <h6 className="mb-1 leading-[1.1] font-semibold">
                      Absolutely Free to Use
                    </h6>
                    <p className="text-sm text-foreground/70">
                      Enjoy unlimited access to all components at no cost.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Button asChild>
                <Link href="/components/accordion">
                  Explore Components
                  <MoveRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <FAQ />
    </section>
  );
};

const DashedTopFadeGrid = () => (
  <div
    className="absolute inset-0 z-0 -left-px -top-px dark:opacity-80"
    style={{
      backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
);
