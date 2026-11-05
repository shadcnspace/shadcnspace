"use client";

import { motion, useReducedMotion } from "motion/react";
import Subfooter from "@/components/shadcn-space/blocks/footer-03/subfooter";

type FooterLink = {
  title: string;
  href: string;
};

const footerColumns: FooterLink[][] = [
  [
    { title: "About us", href: "#" },
    { title: "Health tests", href: "#" },
    { title: "Your results", href: "#" },
  ],
  [
    { title: "Our Experts", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Testimonial", href: "#" },
  ],
  [
    { title: "FAQ", href: "#" },
    { title: "Contact", href: "#" },
  ],
];

const Footer = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 pt-16 pb-10 sm:px-10 lg:px-20 lg:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
          <motion.div
            {...reveal(0)}
            className="flex flex-col gap-4 lg:flex-1"
          >
            <a href="#" className="flex w-fit items-center gap-2">
              <span className="flex rounded-lg bg-primary p-1.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M13.3333 8C13.3333 10.9455 10.9455 13.3333 8 13.3333C5.05448 13.3333 2.66667 10.9455 2.66667 8C2.66667 5.05448 5.05448 2.66667 8 2.66667C10.9455 2.66667 13.3333 5.05448 13.3333 8Z"
                    strokeWidth="2"
                    className="stroke-blue-500"
                  />
                  <path
                    d="M8 9.66667C8.92047 9.66667 9.66667 8.92047 9.66667 8C9.66667 7.07953 8.92047 6.33333 8 6.33333C7.07953 6.33333 6.33333 7.07953 6.33333 8C6.33333 8.92047 7.07953 9.66667 8 9.66667Z"
                    className="fill-primary-foreground"
                  />
                </svg>
              </span>
              <span className="text-[22px] leading-normal tracking-tight text-foreground">
                veyra
              </span>
            </a>
            <p className="text-base text-muted-foreground">
              See what&apos;s happening inside.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:flex lg:gap-10">
            {footerColumns.map((column, index) => (
              <motion.ul
                key={column[0].title}
                {...reveal(0.1 + index * 0.1)}
                className="flex flex-col gap-2.5 lg:w-45"
              >
                {column.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="inline-block text-base text-foreground transition-all duration-200 hover:translate-x-1 hover:text-blue-500 motion-reduce:hover:translate-x-0"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </motion.ul>
            ))}
          </div>
        </div>

        <motion.div {...reveal(0.4)}>
          <Subfooter />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
