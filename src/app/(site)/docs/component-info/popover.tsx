import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function PopoverData() {
  const faqData = [
    {
      title: "When should I use Popover instead of Tooltip?",
      content:
        "Use a tooltip for very short text, like labels or hints. Use a popover when you need more space for actions, details, or small forms.",
    },
    {
      title: "When should I use Popover instead of Dialog?",
      content:
        "Use a dialog when you need full attention from the user. Use a popover when the interaction is small and does not block the whole screen.",
    },
    {
      title: "Can I use forms inside a popover?",
      content:
        "Yes, you can place inputs, buttons, and even small forms inside a popover. It works well for quick actions.",
    },
    {
      title: "Is Shadcn Popover accessible?",
      content:
        "Yes, it supports keyboard navigation, focus handling, and works well with screen readers.",
    },
    {
      title: "Does it work on mobile devices?",
      content:
        "Yes, it is responsive. Just make sure the size and position are comfortable for touch interaction.",
    },
    {
      title: "Can I control where the popover appears?",
      content:
        "Yes, you can set positions like top, bottom, left, or right, and it can adjust automatically if space is not available.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Build lightweight, interactive overlays using React, Tailwind CSS,
            and shadcn/ui. Show helpful content, actions, or small forms exactly
            where users need them without breaking the flow.
          </p>
          <p className="text-foreground/80">
            Popover is one of those{" "}
            <a
              href="/components"
              target="_blank"
              className="text-primary underline hover:opacity-80"
            >
              Shadcn Components
            </a>{" "}that makes a big
            difference. Instead of taking users to another page or opening a
            heavy modal, you can show just the right amount of information
            exactly where it is needed.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Popover?
          </h2>
          <p className="text-foreground/80">
            A popover is a small floating box that appears when a user clicks or
            hovers on an element like a button or icon.
          </p>
          <p className="text-foreground/80">
            Think of it like a{" "}<span className="text-foreground font-semibold">helper that shows extra details</span>{" "}without
            disturbing the current screen. It can contain text, actions, or even
            small forms.
          </p>
          <p className="text-foreground/80">
            For example, when a user clicks on a settings icon, instead of
            opening a full page, you can show options inside a popover. It keeps
            the flow smooth and feels quick to use.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Popover
          </h2>
          <p className="text-foreground/80">
            When building real projects, not every interaction needs a full page
            or modal. Sometimes you just need to show a{" "}<span className="text-foreground font-semibold">small piece of information</span>{" "}or a quick action. That&apos;s where popover becomes
            useful.
          </p>
          <p className="text-foreground/80">
            Developers prefer Shadcn Popover because it:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keeps the UI clean and uncluttered</li>
            <li>Shows information only when needed</li>
            <li>Reduces navigation between pages</li>
            <li>Works well for quick actions and small forms</li>
            <li>Is easy to customize using Tailwind CSS</li>
            <li>Supports keyboard and accessibility features by default</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Supports multiple positions like top, bottom, left, and right</li>
            <li>Automatically adjusts position if space is limited</li>
            <li>Works with both click and hover interactions</li>
            <li>Supports animations like fade and slide</li>
            <li>Allows any content inside, including forms and buttons</li>
            <li>Closes on outside click or Escape key</li>
            <li>Fully responsive and works well on mobile</li>
            <li>Clean base styles that are easy to customize</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Popover
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep the content short and focused</li>
            <li>Use a click trigger for forms and actions</li>
            <li>Use a hover trigger for hints or preview content</li>
            <li>Avoid placing too many elements inside one popover</li>
            <li>
              Test on mobile to make sure it does not cover important content
            </li>
            <li>
              Choose a position wisely so it feels natural near the trigger
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Popover
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>User profile quick view</li>
            <li>Settings or action menus</li>
            <li>Help text and small guides</li>
            <li>Filter panels in dashboards</li>
            <li>Notifications preview</li>
            <li>Quick forms like rename, edit, or tag selection</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Popover works smoothly with other components:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair it with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Button
              </a>{" "}
              to trigger the popover.
            </li>
            <li>
              Combine it with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Input
              </a>{" "}
              to collect quick user input.
            </li>
            <li>
              Use it with{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Form
              </a>{" "}
              for lightweight inline forms.
            </li>
            <li>
              Add{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Badge
              </a>{" "}
              or{" "}
              <a
                href="/components/avatar"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Avatar
              </a>{" "}
              inside for better visuals.
            </li>
            <li>
              Connect it with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Select
              </a>{" "}
              for filter or{" "}<a
                href="/components/date-picker"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Date pickers
              </a>.
            </li>
            <li>
              Use it with{" "}
              <a
                href="/blocks/dashboard-ui/dialog"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Dialog Blocks
              </a>{" "}
              when deeper interaction is needed.
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
            Free Shadcn Popover
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Popover components are free to use. You can use them in
            personal or commercial projects without any hidden conditions. They
            are clean, flexible, and easy to adapt to your needs.
          </p>
        </section>
      </div>
    </>
  );
}
