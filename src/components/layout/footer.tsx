import { blockCategories } from "@/components/blocks/utils";
import { Separator } from "@/components/ui/separator";
import { config } from "@/config";
import { components } from "@/config/registry/components/sidebar-data";
import { templates } from "@/components/templates/data/templates";
import { capitalize } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "../common/logo/logo";
import { GithubLogo, TwitterLogo } from "../ui/icons";

const TemplatesData = templates.flatMap(template =>
  template.items.slice(0, 3).map(item => ({
    slug: item.slug,
  }))
);

const footerSections = [
  {
    title: "Components",
    links: components.slice(0, 3).map(({ title, url }) => ({
      title,
      href: url,
    })),
  },
  {
    title: "Templates",
    links: TemplatesData.map(({ slug }) => ({
      title: slug,
      href: `/templates/${slug.toLowerCase()}`,
    })),
  },
  {
    title: "Blocks",
    links: [
      ...blockCategories.filter((cat) => (cat as any).isHome),
      ...blockCategories.filter((cat) => !(cat as any).isHome),
    ]
      .slice(0, 3)
      .map(({ title, name, masterCategory }: any) => ({
        title,
        href: `/blocks/${masterCategory}/${name}`,
      })),
  },
  {
    className: "col-span-full xl:col-span-2",
    title: "Help & Support",
    links: [
      {
        title: "Documentation",
        href: "https://www.shadcnspace.com/docs/getting-started/introduction",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto">
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
          <div className="col-span-full lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Logo />
            </Link>
            <p className="mt-4 text-muted-foreground">
              Craft modern UIs faster
              with Shadcn components,
              blocks & templates
            </p>
          </div>

          {footerSections.map(({ title, links, className }, index) => (
            <div key={index} className={className}>
              <p className="text-base font-semibold">{title}</p>
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Shadcn Space
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href={config.social.github} target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link href={config.social.twitter} target="_blank">
              <TwitterLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
