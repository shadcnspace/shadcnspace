import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 Not Found",
    description: "Page not found",
    openGraph: {
        title: "404 Not Found",
        description: "Page not found",
    },
};

export default function NotFound() {
  return (
    <section className="py-8 flex items-center h-screen justify-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src={"/images/not-found/notfound-light.webp"}
            alt="404"
            width={670}
            height={380}
            className="dark:hidden"
          />
          <Image
            src={"/images/not-found/notfound-dark.webp"}
            alt="404"
            width={670}
            height={380}
            className="hidden dark:block"
          />
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-2">
              <h1 className=" text-4xl md:text-5xl font-semibold tracking-tight">
                Lost in Space
              </h1>
              <p>Oops! The page you are looking for doesn't exist</p>
            </div>
            <Button
              variant="outline"
              className="py-2.5 px-5 h-auto bg-linear-to-b from-background from-30% to-[#1118270a]"
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-base! font-medium leading-snug tracking-[0.2px]"
              >
                Back to home
                <Icon
                  icon="solar:arrow-right-linear"
                  width={20}
                  height={20}
                  className="w-5! h-5!"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
