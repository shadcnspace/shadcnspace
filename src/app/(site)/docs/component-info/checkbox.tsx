import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CheckboxData() {
  const faqData = [
    {
      title: "What is the Shadcn UI CheckBox component?",
      content:
        "The Shadcn UI CheckBox component is a reusable UI element that gives end-users the ability to select none, one, or more items in a form or interface. It’s a common element in Next.js and React applications to accept terms, select options, enable settings, or filter records.",
    },
    {
      title: "Is the Shadcn CheckBox accessible by default?",
      content:
        "Yes. The component is kept production-ready by including keyboard navigation, focus management, and screen reader support by default.",
    },
    {
      title: "Can I customize the CheckBox styles?",
      content:
        "Definitely. The CheckBox is completely compatible with Tailwind CSS. Therefore, you can override default settings in color, size, spacing, borders, and even in state settings like checked or disabled.",
    },
    {
      title: "Does the Shadcn CheckBox work with the Next.js App Router?",
      content:
        "Yes. The component is compatible with the Next.js App Router and is always a plus to not bloat the code with irrelevant JavaScript, which is a common issue with newer Next.js projects.",
    },
    {
      title: "Can I use the CheckBox with forms and form libraries?",
      content:
        "Yes. The CheckBox is easy to use with simple React state and other popular form libraries. It is common to use a CheckBox in forms to provide a multi-select option, agreement, or feature toggle.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Check out and contribute to our expanding collection of{" "}
            <strong className="text-foreground font-semibold">
              Shadcn CheckBox components
            </strong>{" "}
            with over 9 customizable checkbox variants and powered by shadcn/ui.
            Built with Next.js, React, and Tailwind CSS, these components are
            optimized to increase your confidence in building attractive
            interfaces for QuickApps while maintaining high performance and
            usability.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            A Small Component That Matters
          </h2>
          <p className="text-foreground/80">
            Without a doubt, a Checkbox is a small component in a web interface.
            Yet, it handles great responsibilities such as accepting terms and
            conditions and enabling multiple selections in a form. This makes
            the checkbox a huge part of the user experience.
          </p>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn/ui CheckBox
            </strong>{" "}
            has the privilege to be simple, modern, accessible, and usable in
            React & Next.js projects. What is most advantageous is that you are
            not confined to the designs of a traditional UI library. Instead,
            you have full control over the code. The component is not packed
            into a library. Thus, you are free to change the styles,
            interaction, and any other motif without friction.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Simple and Flexible by Design
          </h2>
          <p className="text-foreground/80">
            The shadcn/ui CheckBox offers great features. It is perfect for
            modern applications and hacks. This is because it is based on Base
            UI primitives and has accessibility features handled by default.
            Keyboard control and reading accessibility are built in, making the
            application reliable for real-world usage.
          </p>
          <p className="text-foreground/80">
            Styling components in this framework is done in a similarly
            straightforward manner. Tailwind CSS provides utility classes to
            quickly configure the customization options, such as size, color,
            spacing, and alignment. Adapting to different use cases is not an
            issue, whether it's for a compact checkbox for a settings page or a
            large checkbox for an onboarding step.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Use Shadcn CheckBox?
          </h2>
          <p className="text-foreground/80">
            Although checkboxes appear to be rather simplistic at a glance,
            there is a right and wrong way to do them. Shadcn/ui CheckBox offers
            a remarkable level of customizability without sacrificing a single
            one of the steps in the developer workflow in order to yield a
            professional experience for the end user.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            The key benefits of this checkbox to the developer:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Accessibility features are built directly into the framework
              (keyboard and screen-reader-friendly).
            </li>
            <li>Shallow footprint resulting in a fast performance.</li>
            <li>
              Customizable to a great extent through the use of Tailwind CSS.
            </li>
            <li>Compatibility with Next.js App Router.</li>
            <li>No enforced design or hidden functionality.</li>
          </ul>
          <p className="text-foreground/80">
            Another huge benefit to the developer, and the reason why there is
            no possibility of library maintenance breaking your implementation,
            is the fact that the entire component is copied directly into your
            repository.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate in Forms
          </h2>
          <p className="text-foreground/80">
            Most often, checkboxes are used in the context of forms, and this is
            where shadcn/ui excels. The CheckBox component is compatible with
            basic React state as well as some of the most popular form libraries
            like React Hook Form.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            Common use cases include:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Accepting terms and conditions</li>
            <li>Selecting multiple preferences</li>
            <li>Enabling or disabling features</li>
            <li>Filtering lists or tables</li>
            <li>Multi-select options in dashboards</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Clean UI for Modern Applications
          </h2>
          <p className="text-foreground/80">
            In terms of aesthetics, the shadcn/ui CheckBox embodies minimalistic
            and contemporary design. Dashboards, SaaS offerings, administration
            panels, and landing pages all incorporate it seamlessly.
          </p>
          <p className="text-foreground/80">
            Staying in the application remains design consistent because it uses
            the same design principles that other shadcn/ui components do. To
            improve clarity, it can be used alongside labels, descriptions, or
            helper text, and without creating unnecessary cognitive overload.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Customizable Without Complexity
          </h2>
          <p className="text-foreground/80">
            Because the component lives within your project, alterations are
            easily made. You can:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Adjust colors to match your brand</li>
            <li>Custom animations or transitions</li>
            <li>Modify icons and styles</li>
            <li>Manage the checked, unchecked, and disabled actions</li>
          </ul>
          <p className="text-foreground/80">
            There’s no need to override complex styles or work around
            limitations—you decide how the component evolves as your project
            grows.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Ideal for Next.js Projects
          </h2>
          <p className="text-foreground/80">
            The shadcn/ui CheckBox is compatible with Next.js App Router and is
            designed for contemporary application architectures. It is
            efficient, speedy, and keeps your bundle manageable.
          </p>
          <p className="text-foreground/80">
            The CheckBox offers a good experience if design consistency,
            performance, and developer experience are important to you.
          </p>
        </section>

        {/* section - 08 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free shadcn/ui CheckBox Component
          </h4>
          <p className="text-foreground/80">
            Our Shadcn CheckBox components are completely free to use and fully
            customizable. You can copy them directly into your project and start
            building without restrictions.
          </p>
        </section>
      </div>
    </>
  );
}
