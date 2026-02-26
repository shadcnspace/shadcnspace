import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SpinningTextData() {
  const faqData = [
    {
      title: "Can I control rotation speed?",
      content:
        "Yes. You can adjust the animation speed to make it slow and smooth or slightly faster based on your design needs.",
    },
    {
      title: "Is the text readable on small screens?",
      content:
        "Yes. You can adjust font size and spacing using responsive Tailwind classes to maintain readability on mobile devices.",
    },
    {
      title: "Can I use custom fonts?",
      content:
        "Yes. You can apply any font style or typography configuration from your design system.",
    },
    {
      title: "Does it support SVG-based layouts?",
      content:
        "Yes. It can work with SVG or standard text-based circular layouts depending on your implementation.",
    },
    {
      title: "Should I use it in multiple sections?",
      content:
        "It is better to use Spinning Text in key areas like hero sections or branding highlights. Using it too many times may reduce its visual impact.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Hero sections sometimes need a small motion element to feel more
            interactive. Instead of adding heavy animations, a rotating text
            effect can add movement in a simple way.
          </p>
        </section>

        {/* section - 01 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Spinning Text?
          </h2>
          <p className="text-foreground/80">
            The Shadcn Spinning Text component displays text in a circular
            layout with smooth rotation. Built with React and Tailwind CSS, it
            works well in branding sections and landing pages.
          </p>
          <p className="text-foreground/80">
            It is commonly used in hero sections or highlight areas to add
            movement without overwhelming the design.
          </p>
          <p className="text-foreground/80">
            The text rotates around a center point, creating a subtle but
            noticeable motion effect.
          </p>
        </section>

        {/* section - 02 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Spinning Text
          </h2>
          <p className="text-foreground/80">
            Sometimes a static hero section feels flat. Adding too many
            animations makes it heavy.
          </p>
          <p className="text-foreground/80">
            Spinning Text is a balanced option. It adds motion while keeping the
            layout simple.
          </p>
          <p className="text-foreground/80">Developers use it because:</p>

          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>It adds personality to a section</li>
            <li>It draws attention naturally</li>
            <li>It works well in branding sections</li>
            <li>It is lightweight compared to heavy animation libraries</li>
          </ul>
          <p className="text-foreground/80">
            It works best when used thoughtfully.
          </p>
        </section>

        {/* section - 03 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Circular rotating text layout</li>
            <li>Adjustable rotation speed</li>
            <li>Customizable font and spacing</li>
            <li>Works with SVG or plain text</li>
            <li>Responsive design</li>
            <li>Smooth and continuous animation</li>
          </ul>
        </section>

        {/* section - 04 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Spinning Text
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use short and readable phrases</li>
            <li>Avoid very small font sizes</li>
            <li>Keep rotation speed slow and smooth</li>
            <li>Use it in hero or branding sections</li>
            <li>Test readability on mobile devices</li>
          </ul>

          <p className="text-foreground/80">
            If users cannot read the text easily, slow it down.
          </p>
        </section>

        {/* section - 05 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Spinning Text
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Landing page hero sections</li>
            <li>Brand identity highlights</li>
            <li>Announcement banners</li>
            <li>Portfolio headers</li>
            <li>Product showcase sections</li>
          </ul>
        </section>

        {/* section - 06 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Spinning Text can be placed inside Hero components, Section blocks,
            or Cards.
          </p>

          <p className="text-foreground/80">
            It does not affect layout width or structure. You can center it or
            combine it with images and headings easily. Because it follows the
            same React + Tailwind structure, it stays consistent with other
            shadcn components.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Spinning Text
          </h4>
          <p className="text-foreground/80">
            Our Shadcn Spinning Text component is free to use. It is
            lightweight, customizable, and suitable for both personal and
            commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
