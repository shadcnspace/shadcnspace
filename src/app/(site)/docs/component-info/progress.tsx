import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ProgressData() {
  const faqData = [
    {
      title: "Is the Shadcn Progress component accessible?",
      content:
        <>
          Yes, it uses proper ARIA roles like{" "}
          <span className="text-primary font-mono bg-muted px-1.5 py-0.5 rounded-sm text-[0.9em]">
            progressbar
          </span>{" "}
          and attributes such as{" "}
          <span className="text-primary font-mono bg-muted px-1.5 py-0.5 rounded-sm text-[0.9em]">
            aria-valuenow
          </span>
          , so screen readers can understand the progress correctly.
        </>,
    },
    {
      title: "Where is the Shadcn Progress component used?",
      content:
        "It is used in file uploads, loading states, dashboards, onboarding steps, and anywhere you need to show task completion visually.",
    },
    {
      title: "Can I use animations with Shadcn Progress?",
      content:
        "Yes, you can use Tailwind CSS transitions to animate the progress bar smoothly as values change.",
    },
    {
      title: "Can I customize progress bar animations?",
      content:
        "Yes, you can control animation speed, style, and transitions using Tailwind classes.",
    },
    {
      title: "Progress vs loading spinners?",
      content:
        "Use progress when you know how much is completed. Use a spinner when you don’t know how long it will take.",
    },
    {
      title: "Does it support indeterminate states?",
      content:
        "Yes, you can show an animated state when exact progress is not known.",
    },
    {
      title: "How do I show progress in multi-step forms?",
      content:
        "Track the current step and calculate percentage based on total steps. Update the value as users move forward.",
    },
    {
      title: "How do I handle indeterminate progress states?",
      content:
        "Set a condition where value is unknown and show a looping animation instead of a fixed percentage.",
    },
    {
      title: "Can I use Shadcn Progress for real-time updates?",
      content:
        "Yes, you can connect it with APIs or WebSockets to update progress dynamically as data changes.",
    },
    {
      title: "How do I style Shadcn Progress for different themes?",
      content:
        "Use Tailwind utility classes to change colors, height, rounded corners, and spacing to match your design.",
    },
    {
      title: "Can I show multiple progress bars on one page?",
      content:
        "Yes, you can use multiple progress components for different tasks like batch uploads or parallel processes.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Simple way to show users{" "}
            <span className="text-foreground font-medium">
              how much work is done
            </span>{" "}
            and what’s left.
          </p>
          <p className="text-foreground/80">
            Shadcn Progress helps you give clear feedback when something is
            loading, uploading, or moving step by step. Instead of leaving users
            guessing, it shows real progress in a visual way.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Progress?
          </h2>
          <p className="text-foreground/80">
            Simple UI component that shows how much of a task is completed. It
            usually appears as a horizontal bar that fills based on a value,
            helping users understand progress instead of just waiting.
          </p>
          <p className="text-foreground/80">
            It is useful for tasks like file uploads, loading data, or
            multi-step forms where users need clear feedback.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Built with React and Tailwind CSS, with accessible UI primitives
            </li>
            <li>Supports dynamic and controlled values</li>
            <li>Accessible with proper ARIA support</li>
          </ul>
          <p className="text-foreground/80">
            It helps reduce confusion by showing what’s happening and how much
            is left.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Shadcn Progress Useful
          </h2>
          <p className="text-foreground/80">
            It builds trust by clearly showing that something is happening in
            the background.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Reduces user frustration during wait times</li>
            <li>Makes long tasks feel faster and predictable</li>
            <li>Helps users understand how much is completed</li>
            <li>Improves clarity in multi-step workflows</li>
            <li>Works well for both small and large tasks</li>
            <li>Easy to update dynamically with state</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Progress Variants
          </h2>
          <p className="text-foreground/80">
            Different layouts help you match different use cases.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">
                Step Progress:
              </strong>{" "}
              shows completion across steps
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Upload Progress:
              </strong>{" "}
              includes percentage and status text
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Dashboard Stats:
              </strong>{" "}
              styled bars for metrics and analytics
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Smooth progress animations using CSS transitions</li>
            <li>Supports percentage-based and dynamic values</li>
            <li>Accessible with ARIA progressbar roles</li>
            <li>Easy to style using Tailwind classes</li>
            <li>Lightweight and fast to render</li>
            <li>Works across all screen sizes</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Use Cases
          </h2>
          <p className="text-foreground/80">
            You’ll find progress bars in many everyday apps.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>File upload and download tracking</li>
            <li>Multi-step forms or onboarding flows</li>
            <li>Data loading in dashboards</li>
            <li>Profile or task completion tracking</li>
            <li>Storage or usage indicators</li>
            <li>Background processing tasks</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate With Other Shadcn Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Progress becomes more useful when combined with other
            components. It helps you create complete UI flows instead of just
            showing a bar.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use with{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to display progress inside widgets
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              for actions like cancel or retry
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              for modal-based progress flows
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              for file upload progress
            </li>
            <li>
              Add with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              to show percentage values
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/skeleton"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Skeleton
              </a>{" "}
              for better loading states
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
              to show extra details
            </li>
            <li>
              Integrate with{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              for row-level progress
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/alert"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Alert
              </a>{" "}
              to show completion messages
            </li>
            <li>
              Use inside{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Form
              </a>{" "}
              for step-based progress tracking
            </li>
          </ul>
          <p className="text-foreground/80">
            This helps you build real workflows like uploads, onboarding, and
            dashboards.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Progress
          </h2>
          <p className="text-foreground/80">
            Small details make progress feel more natural.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Always show percentage if possible</li>
            <li>Use smooth animation for better feel</li>
            <li>Don’t jump values suddenly (keep it gradual)</li>
            <li>Use indeterminate state when progress is unknown</li>
            <li>Keep design consistent across your app</li>
            <li>Avoid overusing progress bars for small actions</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with any React Component
          </h2>
          <p className="text-foreground/80">
            Shadcn Progress fits easily into any React setup. You just pass a
            value and control it with state.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Works with both client-side and server data</li>
            <li>Easy to plug into existing UI layouts</li>
            <li>Can be reused across multiple pages</li>
            <li>Supports real-time updates with API data</li>
            <li>Flexible for dashboards, forms, and tools</li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Progress
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Progress components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            They are clean, accessible, and ready for real projects without any
            hidden limitations.
          </p>
        </section>
      </div>
    </>
  );
}
