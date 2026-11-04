import { Hero } from "@/components/home/hero";
import { absoluteUrl } from "@/lib/utils";
import Features from "@/components/home/features/Features";
import Achievements from "@/components/home/achievements/Achievements";
import { Brands } from "@/components/home/brands/Brands";
import UiEntities from "@/components/home/ui-entities";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <main>
          <Hero />
          <UiEntities />
          <section className="py-10">
            <div className="container">
              <div className="flex flex-col gap-14">
                <Features />
                <Achievements />
                <Brands direction="right" speed="slow" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
