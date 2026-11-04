import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SonnerData() {
  const faqData = [
    {
      title: "Shadcn Toast & Sonner are the same or different?",
      content:
        "They look similar, but Sonner is a more modern and flexible approach. You can use Sonner instead of traditional toast systems.",
    },
    {
      title: "How do I trigger a toast notification?",
      content:
        "Import the toast function and call it like toast('Saved successfully') or toast.error('Something went wrong'). Make sure the Toaster is added at the root level.",
    },
    {
      title: "How do I control toast position and duration?",
      content:
        "You can pass position and duration props to the Toaster component. For example, position='bottom-right' and duration={4000}.",
    },
    {
      title: "Can I add action buttons inside a sonner?",
      content:
        "Yes, you can pass an action object with a label and onClick function. This is useful for undo actions or quick links.",
    },
    {
      title: "Can I integrate sonner with React Hook Form?",
      content:
        "Yes, you can use it to show validation messages, success alerts, or errors after form submission.",
    },
    {
      title: "Can I customize the animation and duration of the notifications?",
      content:
        "Yes, you can control animations like slide or fade and adjust duration using Tailwind and component props.",
    },
    {
      title: "How do I ensure accessibility for screen readers?",
      content:
        "Sonner uses proper ARIA roles like aria-live so screen readers can announce messages correctly.",
    },
    {
      title: "Is it possible to control the position of the notification on the screen?",
      content:
        "Yes, you can place it anywhere like top-right, bottom-left, etc., based on your layout.",
    },
    {
      title: "How do I add icons to the notifications?",
      content:
        "You can use any icon library or custom SVGs to improve message clarity.",
    },
    {
      title: "Can I show multiple Shadcn Sonner notifications at once?",
      content:
        "Yes, multiple toasts can stack together, and you can control how they behave.",
    },
    {
      title: "Can I use Shadcn Sonner for loading states?",
      content:
        "Yes, you can use loading or promise-based toasts that update automatically once the task is complete.",
    },
    {
      title: "When should I avoid using Shadcn Sonner?",
      content:
        "Avoid using it for critical decisions. Use dialogs instead when user confirmation is required.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            <span className="text-foreground font-medium">Note</span>: After installing Sonner, you must add the{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              &lt;Toaster /&gt;
            </code>{" "}
            component to your layout.tsx so toasts are rendered globally across
            all pages.
          </p>
          <p className="text-foreground/80">
            Boost your interface with our Shadcn Sonner components, crafted
            with React and Tailwind CSS.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Sonner components provide elegant, non-blocking toast
            notifications for any user action. Choose from success, error,
            warning, info, loading, and promise variants - each ready for real
            use cases like form feedback, async operations, and system alerts.
          </p>          
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Sonner?
          </h2>
          <p className="text-foreground/80">
            Shadcn Sonner is a toast notification system that shows short
            messages on the screen without disturbing the user’s flow.
          </p>
          <p className="text-foreground/80">
            Instead of blocking the UI like dialogs, it quietly shows a message
            and disappears after a few seconds.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Shows quick feedback without blocking the screen</li>
            <li>Appears and disappears automatically</li>
            <li>Useful for success, error, and system updates</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Sonner
          </h2>
          <p className="text-foreground/80">
            In most apps, users click something and expect a response. If
            nothing happens, it feels broken.
          </p>
          <p className="text-foreground/80">
            Sonner solves this problem by giving instant feedback in a clean
            way.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Gives clear feedback after user actions</li>
            <li>Keeps UI simple without extra popups</li>
            <li>Works well with async operations</li>
            <li>Easy to trigger from anywhere</li>
            <li>Helps users understand what happened</li>
            <li>Reduces need for heavy UI components</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Sonner Variants
          </h2>
          <p className="text-foreground/80">
            Each toast type is used for a specific kind of message.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">Default</strong> -
              simple message
            </li>
            <li>
              <strong className="text-foreground font-medium">Success</strong> -
              shows completed actions
            </li>
            <li>
              <strong className="text-foreground font-medium">Error</strong> -
              shows failures or issues
            </li>
            <li>
              <strong className="text-foreground font-medium">Warning</strong> -
              alerts for caution
            </li>
            <li>
              <strong className="text-foreground font-medium">Info</strong> -
              informational updates
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Loading / Promise
              </strong>{" "}
              - updates automatically from loading to success/error
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Six toast types for different scenarios</li>
            <li>Flexible position control (top, bottom, corners)</li>
            <li>Auto-dismiss with custom timing</li>
            <li>Supports action buttons like undo</li>
            <li>Handles multiple toasts together</li>
            <li>Works in light and dark themes</li>
            <li>Accessible with proper ARIA support</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Sonner
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep messages short and clear</li>
            <li>Avoid showing too many toasts at once</li>
            <li>Use proper type (success, error, etc.)</li>
            <li>Don’t use toasts for critical confirmations</li>
            <li>Set duration based on importance</li>
            <li>Use loading toasts for async operations</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Sonner
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Form submission success or error</li>
            <li>API error handling</li>
            <li>File upload/download feedback</li>
            <li>Undo delete actions</li>
            <li>Login and session updates</li>
            <li>Dashboard notifications</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Sonner fits naturally with other components and helps you
            add feedback across your UI.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              to trigger toasts on click
            </li>
            <li>
              Use with{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Form
              </a>{" "}
              for submission feedback
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
              for action confirmation results
            </li>
            <li>
              Include inside{" "}
              <a
                href="/templates"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Templates
              </a>{" "}
              for dashboards
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
              to show field-level feedback
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              for selection updates
            </li>
            <li>
              Add with{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              for row-level actions
            </li>
            <li>
              Use alongside{" "}
              <a
                href="/components/alert"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Alert
              </a>{" "}
              for inline + toast feedback
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              for contextual UI updates
            </li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Sonner
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Sonner components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            Clean, accessible, and production-ready for personal or commercial
            projects with no hidden licenses.
          </p>
        </section>
      </div>
    </>
  );
}
