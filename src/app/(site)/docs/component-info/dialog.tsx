import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function DialogData() {
  const faqData = [
    {
      title: "What is a dialog component?",
      content: "A dialog is a modal window that appears on top of the main content, requiring the user to interact with it before returning to the page. It is commonly used for confirmations, forms, and alerts.",
    },
    {
      title: "How do I close a dialog?",
      content: "Dialogs can be closed by clicking the close button, pressing the Escape key, or clicking outside the dialog overlay. You can also close them programmatically using state.",
    },
    {
      title: "Can I use custom animations in the dialog?",
      content: "Yes. You can override the default animation by passing custom Tailwind CSS classes via the className prop on DialogContent. The component supports slide, zoom, and fade animations out of the box.",
    },
    {
      title: "Is the dialog accessible?",
      content: "Yes. The dialog is built on Base UI and Radix UI primitives which include full ARIA support, focus trapping, and keyboard navigation out of the box.",
    },
    {
      title: "Can I use forms inside a dialog?",
      content: "Yes. You can place any content inside a dialog including forms, inputs, and other interactive elements. The dialog manages focus correctly so forms work as expected.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Our Shadcn Dialog components provide accessible modal windows with smooth animations. Choose from slide (top, bottom, left, right) and zoom (in, out) variants - each with a clean, minimal layout ready for real use cases like confirmations, forms, and notifications.
          </p>
          <p className="text-foreground/80">
            For ready-to-use dialog layouts and patterns, see our{" "}<a
                href="/blocks/dashboard-ui/dialog"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Dialog blocks
              </a>.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Dialog?
          </h2>
          <p className="text-foreground/80">
            A dialog is a <b>modal overlay</b> that appears above the page content and asks the user to take an action or view important information before continuing.
          </p>
          <p className="text-foreground/80">
            Unlike tooltips or popovers, a dialog <b>blocks interaction</b> with the rest of the page until it is dismissed. This makes it ideal for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Confirming destructive actions like delete or logout</li>
            <li>Collecting quick user input like email or a search term</li>
            <li>Showing important alerts or notifications</li>
            <li>Displaying user profile details or summaries</li>
            <li>Announcing new features or product updates</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Animation Variants
          </h2>
          <p className="text-foreground/80">
            Each dialog variant uses a different entry and exit animation, applied by overriding the default Tailwind animation classes via <code className="bg-muted px-1 py-0.5 rounded text-sm">className</code> on <code className="bg-muted px-1 py-0.5 rounded text-sm">DialogContent</code>.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li><b>Slide from Top :</b> slides down into view, ideal for notifications</li>
            <li><b>Slide from Bottom :</b> rises up into view, ideal for confirmations</li>
            <li><b>Slide from Left :</b> sweeps in from the left, ideal for forms</li>
            <li><b>Slide from Right :</b> sweeps in from the right, ideal for detail panels</li>
            <li><b>Zoom In :</b> scales up from a small point, ideal for success states</li>
            <li><b>Zoom Out :</b> shrinks into place from a larger scale, ideal for announcements</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Six animation variants - slide and zoom</li>
            <li>Accessible with full keyboard and ARIA support</li>
            <li>Focus trapping keeps interaction inside the dialog</li>
            <li>Backdrop overlay with blur effect</li>
            <li>Closes on Escape key or outside click</li>
            <li>Fully responsive across all screen sizes</li>
            <li>Minimal, clean layouts ready for production</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Use Cases
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Delete or logout confirmation dialogs</li>
            <li>Newsletter or email subscription forms</li>
            <li>User profile and contact detail previews</li>
            <li>Payment success or error feedback</li>
            <li>Feature announcements and changelogs</li>
            <li>Quick action panels in dashboards</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Dialog works well with:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Button
              </a>{" "}
              to create trigger actions and dialog controls.
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Input
              </a>{" "}
              inside dialogs for quick form collection.
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Shadcn Badge
              </a>{" "}
              and{" "}
              <a
                href="/components/avatar"
                target="_blank"
                className="text-primary underline hover:opacity-80"
              >
                Avatar
              </a>{" "}
              for user detail panels.
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
            Free Shadcn Dialog
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Dialog components are free to use. Clean, accessible, and production-ready for personal or commercial projects with no hidden licenses.
          </p>
        </section>
      </div>
    </>
  );
}
