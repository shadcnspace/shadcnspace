import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AccordionData() {
  const faqData = [
    {
      title: "When is an accordion better than tabs?",
      content:
        "Use accordions when content is optional or secondary. Tabs work better when users need to switch between primary sections frequently.",
    },
    {
      title: "Can multiple sections remain open?",
      content:
        "Yes, one or many can remain expanded, depending on your layout needs.",
    },
    {
      title: "Is the Shadcn Accordion accessible?",
      content:
        "Yes, all ARIA and keyboard interfaces have been properly implemented.",
    },
    {
      title: "Can I add icons or badges to headers?",
      content:
        "Absolutely. You can place icons, counters, or status badges inside triggers to give users more context.",
    },
    {
      title: "Can accordions include multiple forms?",
      content:
        "Yes, they’re ideal for combining form fields and do not disrupt the form state.",
    },
    {
      title: "Does the accordion affect performance?",
      content:
        "No, it’s lightweight and performs well even in large React or Next.js apps.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Browse the set of Shadcn Accordion components built with React,
            TypeScript, and Tailwind CSS. These accordion variants help you
            create clean, collapsible content sections with smooth interactions
            and full keyboard support for any web project.
          </p>
        </section>
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Simple, Clean Accordion Components for Real-World UIs
          </h2>
          <p className="text-foreground/80">
            Accordions are one of those components you don’t think much about
            until your page gets too long. When used well, they make content
            easier to scan, reduce visual noise, and help users focus on what
            they actually care about.
          </p>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Accordion
            </strong>{" "}
            components are built for that exact use case. They’re designed for
            React and Next.js apps and give you clean, collapsible sections with
            smooth interactions and full keyboard support right out of the box.
          </p>
          <p className="text-foreground/80">
            We use React, TypeScript, and{" "}
            <span className="text-foreground font-semibold">shadcn/ui</span>{" "}
            through Tailwind CSS, which also makes them lightweight and
            reusable. No imposed styles, just one extra step for you to adapt
            them to your design system.
          </p>
        </section>
        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What Are Shadcn Accordion Components?
          </h2>
          <p className="text-foreground/80">
            Accordion doesn’t just display everything on the page at once, it
            organizes information efficiently. This approach is preferred for
            FAQs, technical instructions, and other reading materials,
            especially for users on mobile devices with limited screen space.
          </p>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Accordion’s
            </strong>{" "}
            goal is simplicity. You get the structure you need, but retain full
            control over how it behaves and looks. Whether your project is a
            small-scale FAQ or an advanced settings panel, it fits both cases
            perfectly.
          </p>
          {/*  */}
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            An accordion is made of a few simple building blocks:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>A main Accordion wrapper</li>
            <li>Individual Accordion items</li>
            <li>A trigger (the clickable header)</li>
            <li>The content area that expands or collapses</li>
          </ul>
          <p className="text-foreground/80">
            Everything is unstyled by default, so you stay in full control of
            the design using Tailwind CSS.
          </p>
          <p className="text-foreground/80">
            Whether you’re building FAQs, documentation, settings pages, or
            product details, Shadcn Accordion gives you a reliable structure
            without forcing design decisions.
          </p>
        </section>
        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Shadcn Accordion Is Useful
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                More Readable Interfaces:
              </strong>{" "}
              By breaking long content into sections, pages become easier to
              scan and less likely to overwhelm readers.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Built-in Accessibility:
              </strong>{" "}
              Keyboard navigation, focus handling, and screen reader support all
              work out of the box.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Highly Customizable:
              </strong>{" "}
              You can choose whether only one section stays open at a time or
              allows multiple sections to expand simultaneously.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Easy to Style:
              </strong>{" "}
              The look is easy to change, giving your site a seamless feel.
              Adapting the styles to match your existing design system is
              simple.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Versatile Applications:
              </strong>{" "}
              Shadcn Accordions work in FAQs, forms, administrative interfaces,
              help documents, and mobile versions of websites.
            </li>
          </ul>
        </section>
        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Use Cases of Accordion
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>FAQ sections</li>
            <li>Machine specifications</li>
            <li>Settings/preferences pages</li>
            <li>Foldable forms</li>
            <li>Documentation layouts</li>
            <li>Mobile navigation menus</li>
          </ul>
        </section>
        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Practical Tips for Using Accordions Well
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Write clear, scannable headings so users know what each section
              contains.
            </li>
            <li>
              Choose an appropriate default state - closed for FAQs, open for
              important dashboard information.
            </li>
            <li>Avoid overwhelming pages with too much content.</li>
            <li>Foldable forms</li>
            <li>
              Ensure keyboard navigation (arrow keys, Enter, and Space) always
              works.
            </li>
          </ul>
        </section>
        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Works Great With Other Shadcn Components
          </h2>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Accordion
            </strong>{" "}
            integrates perfectly with other{" "}
            <strong className="text-foreground font-semibold">Shadcn/ui</strong>{" "}
            components & blocks. For example, you can:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Place buttons inside the accordion content.</li>
            <li>Add badges or icons to headers.</li>
            <li>Organize form inputs into collapsible sections.</li>
          </ul>
          <p className="text-foreground/80">
            For complex interfaces, combining accordions with{" "}
            <strong className="text-foreground font-semibold">
              Cards, Tooltips
            </strong>{" "}
            or{" "}
            <strong className="text-foreground font-semibold">Dialogues</strong>{" "}
            adds structure and clarity to otherwise cluttered layouts.
          </p>
        </section>
        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Accordion Components
          </h4>
          <p className="text-foreground/80">
            You are welcome to use them at no charge; they are clean,
            accessible, and flexible. The architecture is designed to work
            seamlessly with both{" "}
            <strong className="text-foreground font-semibold">React</strong> and{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>.
          </p>
        </section>
      </div>
    </>
  );
}
