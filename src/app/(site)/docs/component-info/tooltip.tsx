import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function TooltipData() {
  const faqData = [
    {
      title: "How do I position the tooltip?",
      content: (
        <>
          You can use the placement functionality to display tooltips on the
          top, bottom, left, or right of an element. Tailwind CSS classes can
          help you fine-tune spacing and alignment for precise positioning.
        </>
      ),
    },
    {
      title: "Is there a way to put some icons or badges into the tooltip?",
      content: (
        <>
          Yes. Tooltips can include visual elements such as icons, small images,
          or buttons to enhance clarity or interactivity. However, if a tooltip
          is used only for hover or click hints, additional embellishments may
          be optional.
        </>
      ),
    },
    {
      title: "Is the tooltip accessible?",
      content: (
        <>
          Absolutely. Shadcn Tooltips are fully ARIA-compliant, support keyboard
          navigation, and manage focus correctly to ensure accessibility for all
          users.
        </>
      ),
    },
    {
      title: "Can tooltips be interactive?",
      content: (
        <>
          Yes. You can embed clickable elements like links or buttons inside a
          tooltip to make it interactive or provide additional context without
          cluttering the interface.
        </>
      ),
    },
    {
      title: "How can I decide when the tooltip shows?",
      content: (
        <>
          You can configure predefined delays for showing and hiding tooltips.
          This ensures users have enough time to read the content without the
          tooltip appearing or disappearing too abruptly.
        </>
      ),
    },
    {
      title: "Can I animate tooltips?",
      content: (
        <>
          Yes. Tooltips can be animated with effects such as fade-in/fade-out,
          sliding, or scaling transitions to provide smooth and visually
          appealing interactions.
        </>
      ),
    },
    {
      title: "How can we use tooltips with forms?",
      content: (
        <>
          Tooltips can be added to inputs, selects, or buttons and triggered on
          focus or hover. They can also be displayed inline to assist users
          without adding additional form elements, improving usability while
          keeping the interface clean.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Tooltip
            </strong>{" "}
            is an easy, simple way to hint users to provide extra context,
            guidance, or pop-up for users in your React and Next.js
            applications. They help increase the usability of a website but it
            doesn’t mean that they need to be displayed always on your
            interface, especially not in forms, inputs or any other kind of
            interactive element for navigation. Developed with React, TypeScript
            and Tailwind CSS, these tooltips are lightweight, highly
            customizable and extremely accessible out of the box.
          </p>
          <p className="font-bold">
            Digital Sticky Note Hints in Your Browser for Any Web App
          </p>
          <p className="text-foreground/80">
            For web development, a great tooltip is not just a popup; it's a
            means of effectively communicating with your end users.{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Tooltip
            </strong>{" "}
            includes all you need to spice up your UI without adding junks of
            code. Serve them up to tell users what to do, where they can go or
            how certain features are better and save from overloading them with
            information that’s not worth knowing until the time is right.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Use Our Shadcn Tooltip?
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Out of the Box Accessibility:
              </strong>{" "}
              Tooltips are appropriately ARIA labelled, fundamentally supports
              navigating with a keyboard and manage focus to ensure everyone, no
              matter their ability can access it.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Fully customizable:
              </strong>{" "}
              With Tailwind CSS utilities you can change colors, spacing,
              borders, shadows or use a transition to make the tooltip look
              exactly how it should in your design system.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Interactive content:
              </strong>{" "}
              Embed links, badges, icons or buttons within a tooltip to make it
              interactive or add more context.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Light and Fast:
              </strong>{" "}
              The Shadcn Popup Tooltip is built for maximum performance, so no
              matter how many tooltips you have on a page it won’t weigh down
              your app.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Flexible Triggers:
              </strong>{" "}
              Tooltips can trigger at hover, focus, or click, allowing you to
              tailor the way you present your online content.
            </li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              11+ Preset Variants (Top, Bottom, Left and Right Positioning, List
              with Icon, Hover/ Focus Trigger)
            </li>
            <li>Slick animations fade, slide and scale.</li>
            <li>Control time visibility with delay options for improved UX.</li>
            <li>
              Works great with other Shadcn components such as Buttons, Avatars,
              Inputs and Badges.
            </li>
            <li>
              Great to be used in forms, dashboards, tables and interactive
              components.
            </li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Developer Recommendations
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Make your tooltip text short and snappy so that users aren't
              bombarded.
            </li>
            <li>
              Make sure that the tooltip will not interfere with important
              content or parts of your UI.
            </li>
            <li>
              Tooltips (hints inside the tooltips) also – tooltips must be used
              as hints, not instructions, Short-text works better!
            </li>
            <li>
              Test on devices and various screen sizes to verify that hover,
              focus, and click triggers are functioning properly.
            </li>
            <li>
              Use tooltips alongside with inputs or buttons to provide
              additional information about elements In your forms or other
              components that is clickable.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Tooltip Components
          </h4>
          <p className="text-foreground/80">
            Easily make hints clean, interactive, and accessible in your React
            applications to improve usability and experience.
          </p>
        </section>
      </div>
    </>
  );
}
