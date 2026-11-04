import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SeparatorData() {
  const faqData = [
    {
      title: "When should I use a separator instead of extra spacing?",
      content:
        "Spacing helps create distance between elements, while separators create a clear visual boundary. When you want users to recognize that two sections are different, a separator is often the better choice.",
    },
    {
      title: "Can I place content inside a separator?",
      content:
        "Yes. Many layouts use text labels, badges, or icons inside separators to introduce a new section or highlight grouped content.",
    },
    {
      title: "Do separators work well in mobile layouts?",
      content:
        "Yes. Separators are lightweight and adapt well to responsive designs. Horizontal separators are especially useful for organizing content on smaller screens.",
    },
    {
      title: "Can I customize the separator style?",
      content:
        "Absolutely. You can change thickness, colors, spacing, borders, gradients, dashed styles, and labels using Tailwind CSS.",
    },
    {
      title: "Are vertical separators useful in dashboards?",
      content:
        "Yes. Vertical separators are commonly used between toolbar actions, navigation links, statistics, and grouped controls in dashboard interfaces.",
    },
    {
      title: "Does the separator affect performance?",
      content:
        "No. The component is extremely lightweight and has virtually no impact on application performance.",
    },
    {
      title: "Can I use separators inside forms?",
      content:
        "Yes. Separators are often used to divide long forms into logical sections, making them easier to complete.",
    },
    {
      title: "How do separators improve user experience?",
      content:
        "They help users scan content more easily by creating clear visual groups, reducing clutter, and improving overall layout organization.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Create Better Content Structure with Shadcn Separator
          </h2>
          <p className="text-foreground/80">
            Keep your layouts organized with our <strong className="text-foreground">Shadcn Separator components</strong>, built using React, Tailwind CSS, Base UI. Simple, flexible, and easy to customize for modern web applications.
          </p>
          <p className="text-foreground/80">
            A lightweight divider component that helps separate content and <strong className="text-foreground">improve layout structure</strong>.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Separator?
          </h2>
          <p className="text-foreground/80">
            The Shadcn Separator is a UI component used to visually divide content into clear sections. It helps improve readability by creating space and structure between different parts of an interface.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a dashboard, profile page, settings screen, or navigation menu, separators make layouts <strong className="text-foreground">easier to scan and understand</strong>.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Separator
          </h2>
          <p className="text-foreground/80">
            Developers use separators to create cleaner layouts without adding unnecessary design elements. A simple divider can make content feel more organized and easier to navigate.
          </p>
          <p className="text-foreground/80">
            It is especially useful when <strong className="text-foreground">working with cards, forms, menus</strong>, sidebars, tables, and dashboards where multiple content groups need clear separation.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Horizontal and vertical separator support</li>
            <li>Works with React and Next.js projects</li>
            <li>Built using Tailwind CSS</li>
            <li>Easy customization for colors and spacing</li>
            <li>Lightweight and simple implementation</li>
            <li>Accessible structure</li>
            <li>Works well in responsive layouts</li>
            <li>Easy integration with other Shadcn components</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Types of Shadcn Separator Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore different separator styles designed for various layout needs. From simple dividers to labeled and decorative separators, these examples help create cleaner and more organized interfaces.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Simple Separator
              </h3>
              <p className="text-foreground/80">
                A clean divider used to separate content sections without adding visual distraction.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Separator Vertical
              </h3>
              <p className="text-foreground/80">
                A vertical divider that works well between navigation items, toolbars, and grouped actions.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Horizontal Separator with Label Placement
              </h3>
              <p className="text-foreground/80">
                Displays a text label inside a horizontal divider to highlight a section title or category.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Vertical Separator with Label Placement
              </h3>
              <p className="text-foreground/80">
                Combines a vertical divider with labels for structured layouts and grouped content areas.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Dashed Separator
              </h3>
              <p className="text-foreground/80">
                A dashed divider style that adds a subtle visual difference while keeping layouts clean.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Separator with Gradient Faded Effect
              </h3>
              <p className="text-foreground/80">
                Uses a soft fade effect to create a modern and polished divider appearance.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Badge Separator
              </h3>
              <p className="text-foreground/80">
                Places a badge or tag between divider lines to draw attention to important sections.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Separator with Icon
              </h3>
              <p className="text-foreground/80">
                Adds an icon inside the separator for visual context and improved section identification.
              </p>
            </div>
          </div>
          <p className="text-foreground/80 mt-2">
            Our Shadcn Separator collection includes practical examples for dashboards, forms, menus, settings pages, and content sections. Every example is designed to be easy to copy, customize, and use in your React projects.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            The Shadcn Separator works smoothly with{" "}
            <a
              href="/components/card"
              target="_blank"
              className="text-primary underline"
            >
              Cards
            </a>
            ,{" "}
            <a
              href="/blocks/dashboard-ui/forms"
              target="_blank"
              className="text-primary underline"
            >
              Forms
            </a>
            ,{" "}
            <a
              href="/components/dropdown-menu"
              target="_blank"
              className="text-primary underline"
            >
              Dropdown Menu
            </a>
            ,{" "}
            <a
              href="/components/tabs"
              target="_blank"
              className="text-primary underline"
            >
              Tabs
            </a>
            ,{" "}
            <a
              href="/blocks/dashboard-ui/sidebars"
              target="_blank"
              className="text-primary underline"
            >
              Sidebars
            </a>
            ,{" "}
            <a
              href="/components/dialog"
              target="_blank"
              className="text-primary underline"
            >
              Dialogs
            </a>
            ,{" "}
            <a
              href="/blocks/marketing/navbar-section"
              target="_blank"
              className="text-primary underline"
            >
              Navigation Menus
            </a>
            , and Dashboard layouts. It helps organize content without changing the overall design language of your application.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Separator
          </h2>
          <p className="text-foreground/80">
            Use separators to group related content rather than placing them between every element. <strong className="text-foreground">Consistent spacing around dividers</strong> helps layouts look cleaner and easier to read.
          </p>
          <p className="text-foreground/80">
            For navigation menus and toolbars, vertical separators work best when there is enough spacing on both sides. Keep separator colors subtle so they support the content instead of drawing attention away from it.
          </p>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Separator
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Dashboard sections</li>
            <li>User profile pages</li>
            <li>Settings screens</li>
            <li>Pricing tables</li>
            <li>Navigation menus</li>
            <li>Toolbars</li>
            <li>Forms and input groups</li>
            <li>Sidebar layouts</li>
            <li>Cards and content blocks</li>
            <li>Documentation pages</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            The component can be added to any React or Next.js application with minimal setup. Since it is built using reusable UI patterns, you can easily <strong className="text-foreground">customize orientation, spacing, styling, and labels</strong> using Tailwind CSS classes.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Separator
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Separator components are free to use. You are welcome to use them with no hidden policies or licensing restrictions. They are clean, flexible, accessible, and ready for modern React applications.
          </p>
        </section>
      </div>
    </>
  );
}

