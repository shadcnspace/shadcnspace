import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AlertData() {
  const faqData = [
    {
      title: "Do breadcrumbs help SEO?",
      content: "Yes. Breadcrumb navigation helps search engines understand the structure of your website.",
    },
    {
      title: "Why are breadcrumbs useful?",
      content: "Breadcrumbs help users understand their location on a website and navigate back to previous pages easily.",
    },
    {
      title: "Should every page have breadcrumbs?",
      content: "Not always. Breadcrumbs are most useful on websites with multiple levels of navigation.",
    },
    {
      title: "Can breadcrumbs work with dynamic routes?",
      content: "Yes. They can be generated dynamically based on the page structure or routing logic.",
    },
    {
      title: "Can I customize breadcrumb separators?",
      content: "Yes. You can change separators like “>”, “/”, or icons depending on your design.",
    },
    {
      title: "Free Shadcn Breadcrumb",
      content: "Our Shadcn Breadcrumb is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for personal or commercial projects.",
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Our Breadcrumb helps users know what page they are currently on and helps them move to other pages without having to guess where to go. It organizes the page and helps the users by having them move to different spots on the page with ease.It is built using React, Next.js, and Tailwind CSS.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
           What is Shadcn Breadcrumb?
          </h2>
          <p className="text-foreground/80">
            Breadcrumb is, simply put, a <b>path of navigation</b> that shows where the user is in a web page, and what other pages they can go to.
          </p>
          <p className="text-foreground/80">
            For example:
          </p>
          <p className="text-foreground/80">
            Home → Components → Shadcn Breadcrumb
          </p>
          <p className="text-foreground/80">
            Instead of pressing the back button multiple times, users can <b>directly jump to the previous page</b> or sections.
          </p>
          <p>Breadcrumbs are especially useful on websites with many pages, such as documentation sites, blogs, dashboards, or e-commerce stores. The Shadcn Breadcrumb component helps you display this <b>navigation path</b> clearly while keeping your layout simple.</p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Breadcrumb Is Good For Developers
          </h2>
          <p className="text-foreground/80">
            As a website grows, the navigation gets more complicated.
          </p>
          <p className="text-foreground/80">
            People can land on a really deep page. And if that page isn’t already a part of the website's hierarchy, the user may not know how to get back to the main pages.
          </p>
          <p className="text-foreground/80">
            A breadcrumb helps users understand the <b>hierarchy of web pages.</b>
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Improves Clarification in Navigation</li>
            <li>Helps Users Move Through Sections</li>
            <li>Supports Better Structure of Pages</li>
            <li>Works Good For SEO and Usability</li>
            <li>Helps Keep Navigate Simple and Easy to Read</li>
            <li>Makes It Easy to Explore Large Websites</li>
          </ul>
          <p className="text-foreground/80">
           Shadcn Breadcrumb is a web component that organizes the web pages and makes the navigation clear and focused.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clear navigation hierarchy</li>
            <li>Works with dynamic routes</li>
            <li>Custom separators between items</li>
            <li>Lightweight and flexible layout</li>
            <li>Easy styling with Tailwind CSS</li>
            <li>Works well with Next.js routing</li>
            <li>Accessible navigation structure</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Breadcrumb
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Keep breadcrumb labels short
            </li>
            <li>
              Avoid very long navigation paths
            </li>
            <li>
              Always start with the Home page
            </li>
            <li>Use clear separators like "/" or "&gt;"</li>
            <li>
             Make sure breadcrumb links are clickable
            </li>
          </ul>
          <p className="text-foreground/80">
            Simple breadcrumbs help users move around faster.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Breadcrumb
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Blog article navigation</li>
            <li>Documentation websites</li>
            <li>E-commerce product pages</li>
            <li>Admin dashboards</li>
            <li>Category-based websites</li>
          </ul>
          <p className="text-foreground/80">
            Any site with multiple nested pages benefits from breadcrumbs.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
           Shadcn Breadcrumb works well with:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Place it with {" "}
              <a
                href="https://shadcnspace.com/blocks/dashboard-ui/sidebars"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Navigation Menu
              </a>{" "}
               to support top-level navigation.
            </li>
            <li>
              Add it inside{" "}
              <a
                href="https://shadcnspace.com/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              layouts when showing page titles or section headers.
            </li>
            <li>
              Use it with{" "}
              <a
                href="https://shadcnspace.com/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              actions when creating navigation controls.
            </li>
            <li>
              Include it within{" "}
              <a
                href="https://shadcnspace.com/templates"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Templates
              </a>{" "}
              as well for websites & landing pages.
            </li>
          </ul>
          <p className="text-foreground/80">
            Since it follows the <a href="https://shadcnspace.com/components" target="_blank" className="text-primary underline">Shadcn component</a> structure, it fits naturally into your UI without layout issues.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Breadcrumb
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Breadcrumb is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
