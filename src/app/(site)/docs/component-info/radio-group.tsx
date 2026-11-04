import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function RadioGroupData() {
  const faqData = [
    {
      title: "When should I use a Radio Group instead of a Checkbox?",
      content: (
        <>
          Use a{" "}
          <strong className="text-foreground font-semibold">Radio Group</strong>{" "}
          when the user must select{" "}
          <strong className="text-foreground font-semibold">
            only one option
          </strong>{" "}
          from a list. If the user can choose multiple options, a{" "}
          <strong className="text-foreground font-semibold">Checkbox</strong> is
          the better choice.
        </>
      ),
    },
    {
      title: "Is the Shadcn Radio Group accessible?",
      content: (
        <>
          Yes. It supports keyboard navigation and works well with screen
          readers using proper labels and roles.
        </>
      ),
    },
    {
      title: "Can I customize how the radio buttons look?",
      content: (
        <>
          Yes. You can change spacing, colors, layout, and states using Tailwind
          CSS classes.
        </>
      ),
    },
    {
      title: "Can I disable specific options?",
      content: (
        <>
          Yes. Individual radio items can be disabled while keeping the rest
          active.
        </>
      ),
    },
    {
      title: "Can I use it inside forms?",
      content: (
        <>
          Yes. It integrates easily with forms and works well with form
          libraries for validation and state handling.
        </>
      ),
    },
    {
      title: "Can I use Radio Groups and Checkboxes together in a form?",
      content: (
        <>
          Yes. It’s common to use{" "}
          <strong className="text-foreground font-semibold">
            Radio Groups for single-choice decisions
          </strong>{" "}
          and{" "}
          <strong className="text-foreground font-semibold">
            Checkboxes for optional or multi-select inputs
          </strong>{" "}
          in the same form.
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
            Radio group components help users select one option from a fixed
            set. They are commonly used in forms, settings panels, and
            preference screens where only one choice makes sense. Examples
            include radio groups with descriptions, helper text, disabled
            states, and custom layouts.
          </p>
          <p className="text-foreground/80">
            Examples include radio groups with descriptions, helper text,
            disabled states, and custom layouts.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Radio Group?
          </h2>
          <p className="text-foreground/80">
            The{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Radio Group
            </strong>{" "}
            is a React component used when a user needs to pick{" "}
            <strong className="text-foreground font-semibold">
              one option from many
            </strong>
            . You’ll see this pattern everywhere like payment methods, plan
            selection, form questions, or settings pages. Think of a situation
            where selecting more than one option would cause confusion. That’s
            where a radio group fits best.
          </p>
          <p className="text-foreground/80">
            Think of a situation where selecting more than one option would
            cause confusion. That’s where a radio group fits best.
          </p>
          <p className="text-foreground/80">
            The component is copied directly into your project and styled using
            Tailwind CSS, so you are always in control of how it looks and
            behaves.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Radio Group
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Makes single-choice selection clear for users</li>
            <li>Prevents multiple selections by mistake</li>
            <li>Easy to understand without extra explanation</li>
            <li>Works well in forms, filters, and settings</li>
            <li>Keyboard friendly and screen-reader safe</li>
            <li>Simple and fast in React and Next.js projects</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Only one option can be selected at a time</li>
            <li>Fully styled using Tailwind CSS</li>
            <li>Works with controlled and uncontrolled state</li>
            <li>Keyboard navigation supported</li>
            <li>Screen reader friendly with proper labels</li>
            <li>Disabled options supported</li>
            <li>Vertical or horizontal layouts</li>
            <li>Easy to extend with icons or helper text</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Radio Group
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Use radio groups only when{" "}
              <strong className="text-foreground font-semibold">
                one option is required
              </strong>
            </li>
            <li>Keep labels short and easy to read</li>
            <li>Group related options with spacing</li>
            <li>Use tooltips if an option needs explanation</li>
            <li>Avoid too many choices in one group</li>
            <li>Stack options vertically on mobile screens</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Shadcn Radio Group
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Forms and surveys</li>
            <li>Settings and preference pages</li>
            <li>Payment or plan selection</li>
            <li>Filters in dashboards</li>
            <li>Multi-step wizards</li>
            <li>Admin panels</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Radio Group works smoothly with other UI pieces:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Forms for handling values</li>
            <li>Buttons for submit or reset actions</li>
            <li>Cards to group related inputs</li>
            <li>Tooltips for helper messages</li>
            <li>Inputs for mixed form layouts</li>
            <li>Checkboxes when both single and multiple choices are needed</li>
          </ul>
          <p className="text-foreground/80">
            Because it lives inside your codebase, styling and changes stay
            simple.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
