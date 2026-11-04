import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CollapsibleData() {
  const faqData = [
    {
      title: "Is the Shadcn Collapsible component accessible?",
      content:
        "Yes, it follows proper accessibility patterns using ARIA attributes like aria-expanded and aria-controls. It also supports keyboard navigation, so users can interact without a mouse.",
    },
    {
      title: "Can I use animations with Shadcn Collapsible?",
      content:
        "Yes. You can easily add smooth open and close animations using Tailwind transitions or tools like Framer Motion. Just keep animations quick so they don’t slow down interaction.",
    },
    {
      title: "Does Shadcn Collapsible support nested layouts?",
      content:
        "Yes, you can nest multiple collapsible sections to build multi-level layouts like menus or grouped content. Just make sure it stays easy to understand for users.",
    },
    {
      title: "How do I control the open state in Shadcn Collapsible?",
      content:
        "You can let it manage state internally for simple use cases, or control it using open and onOpenChange props when you need full control.",
    },
    {
      title: "Is Shadcn Collapsible and Accordion the same?",
      content:
        "They may look similar, but they serve different purposes. Collapsible controls a single section, while Accordion manages multiple items together with structured behavior.",
    },
    {
      title: "What is the difference between Shadcn Collapsible and Accordion?",
      content:
        "Collapsible is used for independent sections anywhere in the UI. Accordion is used when multiple items are grouped and follow a pattern like single or multiple open items.",
    },
    {
      title: "Can I use multiple Shadcn Collapsible components on one page?",
      content:
        "Yes, each collapsible works independently. If you need grouped behavior, then using an Accordion is a better option.",
    },
    {
      title: "Can I control the Shadcn Collapsible state from outside?",
      content:
        "Yes, you can connect it with your app state, routing, or analytics by using controlled props.",
    },
    {
      title: "When should I use Collapsible instead of Dialog?",
      content:
        "Use Collapsible when content is part of the same page flow. Use Dialog when you need to interrupt flow and focus user attention on something important.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Clean way to{" "}
            <span className="text-foreground font-medium">
              hide and show content
            </span>{" "}
            without making your UI heavy.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Collapsible helps you manage long or secondary content in
            a simple way. Instead of showing everything at once, it lets users
            open only what they need, keeping the screen clean and easy to scan.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Collapsible?
          </h2>
          <p className="text-foreground/80">
            Shadcn Collapsible is a simple toggle-based UI component that lets
            users expand or hide content when needed. It follows a pattern where
            content stays hidden by default and becomes visible on user action.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Built with React and Tailwind CSS, with accessible UI primitives</li>
            <li>Supports controlled and uncontrolled open state</li>
            <li>Fully accessible with keyboard and ARIA support</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Shadcn Collapsible Useful
          </h2>
          <p className="text-foreground/80">
            It keeps your UI focused by showing only what matters first and
            revealing details when needed.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Reduces visual clutter on long pages</li>
            <li>Helps users focus on primary content first</li>
            <li>Improves readability in dashboards and forms</li>
            <li>Works well for mobile layouts with limited space</li>
            <li>Easy to control open/close state with React</li>
            <li>Supports smooth animations for better UX</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Use Cases of Shadcn Collapsible
          </h2>
          <p className="text-foreground/80">
            Used in many real-world interfaces where content needs to be
            controlled.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>FAQ sections with expandable answers</li>
            <li>“Show more” for long descriptions</li>
            <li>Advanced filters in dashboards</li>
            <li>Settings panels with grouped options</li>
            <li>Sidebar menus with nested items</li>
            <li>Logs or technical details inside cards</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Useful Tips for Using Shadcn Collapsible
          </h2>
          <p className="text-foreground/80">
            Small decisions here can improve usability a lot.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep triggers clear (like “Show more” or icons)</li>
            <li>Avoid hiding important primary content</li>
            <li>Use smooth animations but keep them fast</li>
            <li>Combine with icons for better state clarity</li>
            <li>Don’t nest too many levels, it can confuse users</li>
            <li>Use consistent open/close behavior across your app</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate Shadcn Collapsible With Other Shadcn Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Collapsible works well with many other components to build
            structured layouts. You can use it inside a complex UI without
            breaking flow.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              as a clean toggle trigger
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
              to hide extra card details
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/accordion"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Accordion
              </a>{" "}
              for grouped collapsible sections
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/checkbox"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Checkbox
              </a>{" "}
              for filter panels
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              to show active states
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/tooltip"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tooltip
              </a>{" "}
              for icon-only triggers
            </li>
            <li>
              Add inside{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Form
              </a>{" "}
              for advanced settings sections
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/tabs"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tabs
              </a>{" "}
              to manage multi-view content
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              for collapsible sections inside modals
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              for progressive form fields
            </li>
          </ul>
          <p className="text-foreground/80">
            This makes it flexible for dashboards, admin panels, and
            content-heavy apps.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Collapsible
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Collapsible components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            They are clean, accessible, and flexible enough for both personal
            and commercial projects without any hidden conditions.
          </p>
        </section>
      </div>
    </>
  );
}
