import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ButtonData() {
  const faqData = [
    {
      title: "When should I use Buttons ?",
      content:
        "Use buttons for actions submitting forms, saving data, opening modals, or triggering UI updates.",
    },
    {
      title: "Can I match my brand style with your shadcn buttons?",
      content:
        "Yes. Our Buttons use Tailwind CSS, so you can fully customize colors, spacing, borders, and motion.",
    },
    {
      title: "Are icon-only buttons supported?",
      content:
        "Yes. Use Shadcn Icons or your favorite icon pack to make your actions more intuitive.",
    },
    {
      title: "How do I show loading feedback?",
      content:
        "You can disable the button and show a spinner or text change while an action is running, helping users understand something is happening.",
    },
    {
      title: "Are these buttons keyboard friendly?",
      content:
        "Yes. Buttons support keyboard focus, activation via Enter/Space, and visible focus states for accessibility.",
    },
    {
      title: "Can I use buttons for navigation?",
      content:
        "Yes. Buttons can be styled as links or rendered as anchors while keeping consistent visuals and behavior.",
    },
    {
      title: "Do Shadcn Buttons affect performance?",
      content:
        "No. They are lightweight, simple components designed to work smoothly even in large apps.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Shadcn Buttons are ready-to-use button components made for React and
            Next.js apps. They help you build clean, responsive, and interactive
            actions without overthinking styles or behavior.
          </p>
          <p className="text-foreground/80">
            Buttons are where users interact the most - submitting forms,
            opening dialogs, moving between pages. These buttons are built to
            feel fast, reliable, and familiar.
          </p>
          <p className="text-foreground/80">
            Built with{" "}
            <strong className="text-foreground font-semibold">
              React, Next.js, and Tailwind CSS
            </strong>
            , Shadcn Buttons start simple and stay flexible.
          </p>
          <p className="text-foreground/80">
            What you get is sensible defaults, clear states, and complete
            control over styling. No hidden logic, no magic. Whether your
            looking for a simple button or complete interactions, they fit
            naturally into modern web projects.
          </p>
        </section>
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What Are Shadcn Buttons?
          </h2>
          <p className="text-foreground/80">
            Shadcn Buttons are reusable React components for common user
            actions. They support various styles, sizes, icons, and states
            (hover/focus/disabled/and loading).
          </p>
          <p className="text-foreground/80">
            Instead of restyling buttons over and over again, you style them
            once and use them everywhere. It means your UI is kept consistent
            and would be much easier to maintain.
          </p>
        </section>
        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Buttons
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Easy to understand – Click, focus, shoot. Buttons behave as the
              user expects.
            </li>
            <li>
              Uniform UI – Same spacing, colors and working method in App.
            </li>
            <li>
              Accessible by default: – Keyboard support, focus rings and good
              contrast are included out of the box.
            </li>
            <li>
              Optional animations – Include a tiny amount of movement to provide
              the user with feedback without impacting speed.
            </li>
            <li>
              Completely customizable – Adjust size, color, shape or motion with
              Tailwind classes.
            </li>
          </ul>
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            Key Features of Buttons
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Multiple styles: solid, outline, ghost, link, destructive</li>
            <li>
              Sizes that are compatible great together: small, default, large,
              icon-only.
            </li>
            <li>Icon support : icons in front / behind text</li>
            <li>Keyboard & screen-reader friendly</li>
            <li>Tailwind-first styling for full control</li>
          </ul>
          <h4 className="text-base sm:text-lg font-semibold mt-3">
            Button Usage Tips
          </h4>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep primary actions clear: The main buttons need to pop.</li>
            <li>
              Use lightweight animations: Micro hover, or press effects are
              good.
            </li>
            <li>Consider touch: Buttons need to be easy to tap on mobile.</li>
            <li>Variants reuse: Define styles once and keep using it.</li>
          </ul>
        </section>
        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Works Well With Other Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Buttons fit perfectly with the rest of the Shadcn UI
            ecosystem.
          </p>
          <p className="text-foreground/80">
            Use them in{" "}
            <strong className="text-foreground font-semibold">
              {" "}
              Cards, Dialogs, Forms,
            </strong>{" "}
            and{" "}
            <strong className="text-foreground font-semibold">
              Tables.
            </strong>{" "}
            Pair icon-only buttons with{" "}
            <strong className="text-foreground font-semibold"> Tooltips</strong>
            , or combine them with{" "}
            <strong className="text-foreground font-semibold">Badges</strong> to
            show counts or status.
          </p>
          <p className="text-foreground/80">
            They are a solid foundation for building UI across your whole
            application.
          </p>
        </section>
        {/* section - 04 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Shadcn Button Components for Free
          </h4>
          <p className="text-foreground/80">
            Our Shadcn button components are free to use. You can install them
            through the shadcn CLI or pick up local code directly and plug it
            into your project, then customize according to your design.
          </p>
        </section>
      </div>
    </>
  );
}
