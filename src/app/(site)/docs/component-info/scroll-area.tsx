import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ScrollAreaData() {
  const faqData = [
    {
      title: "When should I use Scroll Area instead of overflow-auto?",
      content:
        "Use Scroll Area when you want a consistent scrollbar design across browsers. Native scrollbars look different on each system, but Scroll Area gives a uniform experience without affecting layout width.",
    },
    {
      title: "Does Scroll Area support both vertical and horizontal scrolling?",
      content:
        "Yes. You can enable vertical, horizontal, or both directions depending on your layout. This is useful for tables, grids, or content that grows in multiple directions.",
    },
    {
      title: "How do I set a fixed height for the scroll container?",
      content:
        "Apply Tailwind height classes like h-64 or max-h-[400px] directly to the container. The content inside will scroll within that defined space.",
    },
    {
      title: "Is Scroll Area accessible on the keyboard?",
      content:
        "Yes. It supports keyboard navigation like arrow keys, Page Up/Down, and Home/End. Screen readers can also interact with it properly.",
    },
    {
      title: "Are custom scroll areas accessible to screen readers?",
      content:
        "Yes. The component keeps native behavior, so assistive technologies work as expected. Still, it’s always good to test with real scenarios.",
    },
    {
      title: "How do scroll areas work on mobile devices?",
      content:
        "They use native touch scrolling. Users can swipe naturally, and the experience feels the same as any mobile app.",
    },
    {
      title: "Do custom scroll areas impact scrolling performance?",
      content:
        "No. The scrolling itself is still handled by the browser. Only the visual scrollbar is styled, so performance stays smooth.",
    },
    {
      title: "Can I customize the scroll area appearance?",
      content:
        "Yes. You can change colors, thickness, spacing, and more using Tailwind classes. It easily fits into your design system.",
    },
    {
      title: "Can I use Scroll Area inside flex or grid layouts?",
      content:
        "Yes, it works well inside flexbox and grid layouts. Just make sure the container has a defined height or width to enable scrolling.",
    },
    {
      title: "Should I use multiple scroll areas on one page?",
      content:
        "You can, but use them carefully. Too many scrollable sections can confuse users. Keep it simple and use only where needed.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Sometimes your layout is fine, but the{" "}
            <span className="text-foreground font-medium">content just doesn’t stop</span>. That’s where Scroll Area helps.
            It keeps things neat, scrollable, and consistent without breaking
            your design.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Scroll Area components are built with React and Tailwind
            CSS to give you full control over scrollable sections. Instead of
            relying on browser defaults, you get a clean, styled scrollbar that
            works the same across devices and screens.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Scroll Area?
          </h2>
          <p className="text-foreground/80">
            Shadcn Scroll Area is a scrollable container that lets you control
            how overflow content behaves inside a fixed space. It replaces the
            default scrollbar with a cleaner, theme-friendly version.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Wrap long content inside a fixed-height container</li>
            <li>Replace default scrollbars with styled overlay scrollbars</li>
            <li>Support vertical, horizontal, or both directions</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Scroll Area
          </h2>
          <p className="text-foreground/80">
            When building dashboards or admin panels, long content is
            unavoidable. Scroll Area helps manage that without making the UI
            messy.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clean, controlled scrolling for real UI layouts</li>
            <li>Keeps layouts clean even with large content</li>
            <li>Consistent scrollbar design across browsers</li>
            <li>Prevents layout shift caused by native scrollbars</li>
            <li>Works well with fixed height panels</li>
            <li>Easy to style using Tailwind classes</li>
            <li>Smooth scrolling with native performance</li>
            <li>Helps structure complex UI sections</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Scroll Area Variants
          </h2>
          <p className="text-foreground/80">
            Each variant uses the same base structure but adapts to different
            layout needs.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">
                Vertical Scroll
              </strong>{" "}
              - best for feeds, lists, and sidebars
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Horizontal Scroll
              </strong>{" "}
              - useful for wide tables or image rows
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Both Axes
              </strong>{" "}
              - for grids or large datasets
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Styled Scrollbar
              </strong>{" "}
              - matches your UI theme
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Custom Height
              </strong>{" "}
              - control container size easily
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Custom overlay scrollbar for consistent UI</li>
            <li>Works in both vertical and horizontal directions</li>
            <li>No layout shift like native scrollbars</li>
            <li>Built with accessibility support</li>
            <li>Works with any content without restructuring</li>
            <li>Fully responsive with Tailwind</li>
            <li>Lightweight and easy to use</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Scroll Area
          </h2>
          <p className="text-foreground/80">
            Using scroll areas well can improve UX a lot, but overusing them can
            confuse users.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep scroll areas for clearly defined sections only</li>
            <li>Avoid nested scroll areas unless really needed</li>
            <li>Set proper height using Tailwind classes</li>
            <li>Use vertical scroll for lists and feeds</li>
            <li>Combine with headers or sticky elements for better UX</li>
            <li>Test on mobile for smooth touch scrolling</li>
            <li>Keep scrollbar visible enough for usability</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Scroll Area
          </h2>
          <p className="text-foreground/80">
            Scroll Area fits naturally in many real-world layouts.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Sidebar navigation menus</li>
            <li>Chat or messaging interfaces</li>
            <li>Notification panels</li>
            <li>Data tables with fixed height</li>
            <li>Code editors or logs</li>
            <li>Modal or drawer content</li>
            <li>Dropdown lists with many options</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Scroll Area works best when combined with other UI elements
            to control layout and content flow. It fits naturally into
            dashboards, forms, and navigation systems.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use with{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              to handle long modal content
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to create scrollable widgets
            </li>
            <li>
              Wrap{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              for horizontal scrolling data
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/tabs"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tabs
              </a>{" "}
              for multi-view panels
            </li>
            <li>
              Add{" "}
              <a
                href="/components/breadcrumb"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Breadcrumb
              </a>{" "}
              for navigation context
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              for status lists
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/avatar"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Avatar
              </a>{" "}
              for chat layouts
            </li>
            <li>
              Wrap{" "}
              <a
                href="/components/combobox"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Combobox
              </a>{" "}
              for searchable lists
            </li>
            <li>
              Use with{" "}
              <a
                href="/blocks/dashboard-ui/dropdown"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dropdown
              </a>{" "}
              for long menus
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/accordion"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Accordion
              </a>{" "}
              for structured sections
            </li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Scroll Area
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Scroll Area components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            They are clean, flexible, and ready for real-world projects without
            any hidden rules.
          </p>
        </section>
      </div>
    </>
  );
}
