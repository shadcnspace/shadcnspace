import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SelectData() {
  const faqData = [
    {
      title: "What is the Shadcn UI Select component?",
      content: (
        <>
          Shadcn UI Select is a reusable dropdown input that allows users to
          select one option from multiple choices. It is widely used in React
          and Next.js applications for forms, filters, and settings, providing a
          clean and space-efficient selection interface.
        </>
      ),
    },
    {
      title: "Is Shadcn Select by default accessible?",
      content: (
        <>
          Yes. The Select component is accessible out of the box. It supports
          keyboard interactions, focus management, and works with screen
          readers, ensuring usability for all users, including those with visual
          impairments.
        </>
      ),
    },
    {
      title: "Can I customize the Select styles?",
      content: (
        <>
          Absolutely. Tailwind CSS makes it easy to customize colors, spacing,
          fonts, and dropdown organization to match your design system. Since
          the component lives in your project, you have full control over its
          appearance.
        </>
      ),
    },
    {
      title: "Can I add icons for Select options in Shadcn?",
      content: (
        <>
          Yes. You can include icons alongside text in the Select options to
          improve visual hierarchy or clarity. Since you control the component
          code, this can be done without restrictions.
        </>
      ),
    },
    {
      title: "Does the Shadcn Select support multi-select?",
      content: (
        <>
          Shadcn Select supports single-selection by default. Multi-select
          functionality can be implemented by adding custom logic or using
          complementary components, such as checkbox lists or command menus.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Select components
            </strong>{" "}
            feature a selection of fully customizable select and dropdown
            options built using{" "}
            <strong className="text-foreground font-semibold">
              React, Tailwind CSS, and shadcn/ui
            </strong>
            . This selection of components has been fully optimized so seamless
            selection experiences can be integrated in modern applications built
            in Next.js.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            A Better Way to Handle User Selection
          </h2>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Select components
            </strong>{" "}
            are a core part of many user interfaces. It allows users to choose
            one option from a list without overwhelming the screen. From country
            pickers and role selection to filters and settings, select inputs
            are everywhere.
          </p>
          <p className="text-foreground/80">
            The{" "}
            <strong className="text-foreground font-semibold">
              shadcn/ui Select component
            </strong>{" "}
            does not offer a streamlined experience without sacrificing ease of
            use with a level of dropdown functionality we have come to expect
            from modern{" "}
            <strong className="text-foreground font-semibold">
              React and Next.js applications.
            </strong>
          </p>
          <p className="text-foreground/80">
            Logic is not hidden behind abstract frameworks common with
            traditional UI libraries. Instead, the Select component lives in
            your project, which means it is in your hands fully, to style and
            customize to your exact preferences.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Designed for Control and Consistency
          </h2>
          <p className="text-foreground/80">
            With the shadcn/ui Select component built using{" "}
            <strong className="text-foreground font-semibold">
              Base UI primitives
            </strong>
            , you can expect the same level of accessibility support to be
            applied with zero extra lift needed by you. Built in is keyboard
            navigation, focus management, and support for screen readers.
          </p>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            makes styling trouble-free and predictable. Width, spacing, color,
            and typography can be modified in accordance with your design
            system. It integrates nicely into your design, whether it's a small
            dropdown for forms or a big select for onboarding flows.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why use shadcn/ui Select?
          </h2>
          <p className="text-foreground/80">
            Dropdowns can be slow, frustrating, difficult to style, and can
            create accessibility issues. shadcn/ui Select avoids these problems,
            keeping users and developers happy.
          </p>
          <p className="font-semibold">Some other characteristics include:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Default accessibility</li>
            <li>Keyboard and mouse interactions are smooth</li>
            <li>Light-weight and high-performance</li>
            <li>Tailwind CSS allows full customizability</li>
            <li>Compatible with Next.js App Router</li>
            <li>No external dependencies or style locking</li>
          </ul>
          <p className="text-foreground/80">
            You can safely modify or extend it as there are no breaking changes
            to be worried about, due to the fact that the component code is
            copied over to your project.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Built for Forms and Filters
          </h2>
          <p className="text-foreground/80">
            Filters, forms, and settings panels are where the Select component
            finds its most applications. It is also compatible with common React
            state and the widely used form libraries to facilitate the
            management of selected values.
          </p>
          <p className="font-semibold">Here are some expected use cases:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Selecting countries, roles, or categories</li>
            <li>Sorting and filtering data</li>
            <li>Choosing account settings</li>
            <li>Picking plans or options</li>
            <li>Dropdowns in dashboards and admin panels</li>
          </ul>
          <p className="text-foreground/80">
            To enhance usability, consider combining the Selection feature with
            labels, descriptions, and help text.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Clean UI for Modern Products
          </h2>
          <p className="text-foreground/80">
            In terms of design, the shadcn/ui Select follows the minimal and
            modern design approach. It integrates seamlessly into most SaaS
            products, dashboards, internal tools, and landing pages.
          </p>
          <p className="text-foreground/80">
            Because it follows the same design principles as other components
            from Shadcn greatly contributes to maintaining visual harmony across
            your overall application. It ensures that the dropdown animation and
            spacing feel natural, rendering the interface smooth and very
            user-friendly.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Customize It Your Way
          </h2>
          <p className="text-foreground/80">
            Customization for this component is simple, the{" "}
            <strong className="text-foreground font-semibold">
              Select component
            </strong>{" "}
            directly integrates with your codebase. Some of the things you can
            customize with ease are as follows:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Match brand colors with your brand</li>
            <li>Adjust dropdown width and alignment</li>
            <li>Style active and selected options</li>
            <li>Add transitions or subtle animations</li>
            <li>Control states for disabled and placeholder elements</li>
          </ul>
          <p className="text-foreground/80">
            No complex overrides or hacks are needed. You decide how the
            component evolves.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Optimized for Next.js Applications
          </h2>
          <p className="text-foreground/80">
            The shadcn/ui Select works perfectly with{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>,
            especially with the App Router. It doesn't bloat your application
            with unnecessary JavaScript, and it is fast and lightweight as well.
          </p>
          <p className="text-foreground/80">
            When developing applications consisting of well-crafted performance
            UI and positive developer experience, shadcn/ui Select becomes a
            good choice.
          </p>
        </section>

        {/* section - 08 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free shadcn/ui Select Component
          </h4>
          <p className="text-foreground/80">
            All{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Select components
            </strong>{" "}
            are completely customizable and free for use in our collection. Feel
            free to copy them to your projects to start building without
            limitations.
          </p>
        </section>
      </div>
    </>
  );
}
