import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ShineBorderData() {
  const faqData = [
    {
      title: "Does Shine Border affect performance?",
      content:
        "No. It uses lightweight animation techniques and does not add heavy scripts, so performance remains smooth.",
    },
    {
      title: "Can I change the animation speed?",
      content:
        "Yes. You can adjust animation duration and timing using Tailwind classes or custom CSS.",
    },
    {
      title: "Can I use it in dark mode?",
      content:
        "Yes. You can customize border colors and effects to match both light and dark themes.",
    },
    {
      title: "Does it work with any card component?",
      content:
        "Yes.It can wrap around cards, buttons, and containers without changing their internal structure.",
    },
    {
      title: "Should I use it on every component?",
      content:
        "It is better to use Shine Border only on important sections. Overusing it may reduce its visual impact.",
    },

  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Sometimes you want to highlight a section without redesigning it
            completely. Small visual details can guide user attention in a
            subtle way. The Shadcn Shine Border component adds a smooth animated
            border effect around cards, buttons, or containers.
          </p>
        </section>

        {/* section - 01 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shine Border ?
          </h2>
          <p className="text-foreground/80">
            Shine Border is a visual enhancement component that adds a subtle
            animated shine effect around a card, button, or section.
          </p>
          <p className="text-foreground/80">
            Instead of using static borders, Shine Border creates a moving
            highlight that gives a small sense of depth and motion. It does not
            change the structure of your component. It simply wraps around it
            and adds a smooth animated layer.
          </p>
          <p className="text-foreground/80">
            This is useful when you want to highlight something important
            without redesigning the entire layout.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Shine Border is built with React and Tailwind CSS and
            follows the same clean structure used across other shadcn
            components.
          </p>
        </section>

        {/* section - 02 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shine Border
          </h2>
          <p className="text-foreground/80">
            In real projects, sometimes you want to draw attention to a pricing
            card, feature block, or CTA button.
          </p>
          <p className="text-foreground/80">
            You don’t always need heavy animation or complex UI changes. A
            subtle border animation is enough to guide the user’s eye.
          </p>
          <p className="text-foreground/80">
            Developers use Shine Border because:
          </p>

          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>It adds small interaction without extra JavaScript logic</li>
            <li>It keeps performance smooth</li>
            <li>It improves visual hierarchy</li>
            <li>It works without affecting layout structure</li>
          </ul>
        </section>

        {/* section - 03 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Smooth animated shine effect</li>
            <li>Fully customizable border color</li>
            <li>Adjustable animation speed</li>
            <li>Works with cards, buttons, and containers</li>
            <li>Lightweight implementation</li>
            <li>Responsive and clean structure</li>
          </ul>
        </section>

        {/* section - 04 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shine Border
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use it only on important elements</li>
            <li>Avoid applying it everywhere</li>
            <li>Match border color with your theme</li>
            <li>Keep animation subtle, not distracting</li>
            <li>Test contrast in dark and light mode</li>
          </ul>

          <p className="text-foreground/80">
            Shine works best when it feels natural, not flashy.
          </p>
        </section>

        {/* section - 05 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shine Border
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Highlighted pricing plans</li>
            <li>Featured product cards</li>
            <li>Special offer sections</li>
            <li>Call-to-action buttons</li>
            <li>Important dashboard widgets</li>
          </ul>
        </section>

        {/* section - 06 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components

          </h2>
          <p className="text-foreground/80">
            Shine Border can wrap around existing components like Card, Button, or Feature blocks. You don’t need to change the internal structure. Just place it around your component and customize styles using Tailwind.
          </p>
          <p className="text-foreground/80">
            It works smoothly with other shadcn components and does not break layout alignment.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>


        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Shine Border


          </h4>
          <p className="text-foreground/80">
            Our Shadcn Shine Border component is free to use in any project. It comes with a simple structure, no hidden conditions, and full customization flexibility using Tailwind CSS.
          </p>
        </section>
      </div>
    </>
  );
}
