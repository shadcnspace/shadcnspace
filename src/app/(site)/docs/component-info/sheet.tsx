import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SheetData() {
  const faqData = [
    {
      title: "When should I use a Sheet instead of a Dialog?",
      content:
        "Use a Sheet when you want to show additional content while keeping the current page visible. Dialogs are better for actions that require immediate user attention, while sheets are ideal for navigation, settings, filters, and contextual information.",
    },
    {
      title: "Can a Sheet open from different sides of the screen?",
      content:
        "Yes. A Shadcn Sheet can open from the left, right, top, or bottom, depending on your design and user experience requirements.",
    },
    {
      title: "Is the Shadcn sheet mobile-friendly?",
      content:
        "Yes. Sheets are widely used in mobile interfaces because they provide a natural sliding interaction that feels familiar to users.",
    },
    {
      title: "Can I place forms inside a Sheet?",
      content:
        "Absolutely. Sheets are commonly used for profile editing, account settings, feedback forms, and other input-based workflows.",
    },
    {
      title: "Does the Sheet support custom widths and layouts?",
      content:
        "Yes. You can easily customize the width, height, spacing, and internal layout using Tailwind CSS utilities and component props.",
    },
    {
      title: "Can I use multiple Sheet components in the same project?",
      content:
        "Yes. You can create different sheet variants for navigation, settings, filters, notifications, and other interface patterns within the same application.",
    },
    {
      title: "Does the Sheet component work with dark mode?",
      content:
        "Yes. Shadcn Sheet Components support both light and dark themes and can be styled to match your application's design system.",
    },
    {
      title: "Is the Shadcn sheet suitable for dashboards?",
      content:
        "Definitely. Sheets are frequently used in admin panels and dashboards for filters, settings, quick actions, and detailed information panels.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Create slide-out panels and drawers with Sheet Components
          </h2>
          <p className="text-foreground/80">
            Our <strong className="text-foreground">Shadcn Sheet Components</strong> make it easy to add animated side panels, navigation drawers, filter sections, settings panels, and mobile bottom sheets to your application. Designed for React and Next.js projects, they provide a clean and user-friendly way to reveal extra content while keeping the main page visible.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn sheet?
          </h2>
          <p className="text-foreground/80">
            A <strong className="text-foreground">Shadcn Sheet</strong> is a slide-out panel component that appears from the top, right, bottom, or left side of the screen. It allows users to access additional information, forms, navigation, or actions without leaving the current page.
          </p>
          <p className="text-foreground/80">
            Sheets are commonly used for mobile menus, settings panels, filters, notifications, and contextual content.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why developers use Shadcn sheet
          </h2>
          <p className="text-foreground/80">
            Modern web apps mostly need to display extra content without navigating users away from their current task. That&apos;s where sheets become useful. Instead of opening a full page or blocking the entire screen with a modal, a sheet slides into view while keeping the existing content visible in the background.
          </p>
          <p className="text-foreground/80">
            This creates a <strong className="text-foreground">smoother user experience</strong>, especially on mobile devices. Developers also prefer sheets because they are flexible, responsive, and work well for navigation, forms, settings, filters, and other secondary workflows.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Slide-in panels from all screen edges</li>
            <li>Responsive design for desktop and mobile devices</li>
            <li>Built with React, TypeScript, and Tailwind CSS</li>
            <li>Supports navigation drawers and sidebars</li>
            <li>Ideal for settings, filters, and action panels</li>
            <li>Smooth, animated opening and closing transitions</li>
            <li>Keyboard-friendly interactions</li>
            <li>Accessible structure with proper focus handling</li>
            <li>Easy integration with existing Shadcn components</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            7 types of Shadcn sheet examples &amp; variants
          </h2>
          <p className="text-foreground/80">
            Explore different Shadcn Sheet examples built for common interface patterns. These sheet variants help you create navigation menus, notification panels, shopping carts, filters, settings sections, and contextual side panels for modern React and Next.js applications.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Top bar notification sheet
              </h3>
              <p className="text-foreground/80">
                A sheet that slides down from the top of the screen to display announcements, alerts, updates, and important messages without interrupting the user&apos;s workflow.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Right side slide-out sheet
              </h3>
              <p className="text-foreground/80">
                A commonly used sheet that opens from the right side, making it ideal for settings, profile management, account details, and contextual information panels.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Left navigation sheet
              </h3>
              <p className="text-foreground/80">
                Perfect for mobile menus and application navigation drawers, helping users access links and sections without leaving the current page.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Bottom sheet with footer actions
              </h3>
              <p className="text-foreground/80">
                A mobile-friendly sheet component that slides up from the bottom of the screen for quick actions, forms, confirmations, and touch-friendly interactions. Includes dedicated action buttons such as Save, Cancel, or Submit, making it ideal for forms and settings workflows.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Scrollable content sheet
              </h3>
              <p className="text-foreground/80">
                Designed for displaying longer content inside a panel while maintaining a smooth scrolling experience without affecting the main page.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Shopping cart sheet
              </h3>
              <p className="text-foreground/80">
                A convenient slide-out cart panel that lets users review products, update quantities, and proceed to checkout without navigating away from the current page.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Filter panel sheet
              </h3>
              <p className="text-foreground/80">
                A practical sheet for product filters, search options, sorting controls, and advanced filtering experiences commonly used in eCommerce and dashboard applications.
              </p>
            </div>
          </div>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            These Sheet components work seamlessly with{" "}
            <a href="/components/button" target="_blank" className="text-primary underline">buttons</a>,{" "}
            <a href="/blocks/dashboard-ui/forms" target="_blank" className="text-primary underline">forms</a>,{" "}
            <a href="/components/input" target="_blank" className="text-primary underline">inputs</a>, <a href="/blocks/dashboard-ui/tables" target="_blank" className="text-primary underline">tables</a>, <a href="/blocks/marketing/navbar-section" target="_blank" className="text-primary underline">navigation menus</a>,{" "}
            <a href="/components/command" target="_blank" className="text-primary underline">command palettes</a>,{" "}
            <a href="/components/card" target="_blank" className="text-primary underline">cards</a>,{" "}
            <a href="/components/alert" target="_blank" className="text-primary underline">alerts</a>,{" "}
            <a href="/components/badge" target="_blank" className="text-primary underline">badges</a>,{" "}
            <a href="/components/dropdown-menu" target="_blank" className="text-primary underline">dropdown menus</a>, and many other Shadcn UI components. You can combine them to create advanced workflows while maintaining a consistent design throughout your application.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Sheet
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use right-side sheets for settings and account management panels.</li>
            <li>Use left-side sheets for navigation drawers and menus.</li>
            <li>Keep sheet content focused on a single task.</li>
            <li>Avoid overcrowding sheets with too many actions.</li>
            <li>Choose bottom sheets for mobile-first experiences.</li>
            <li>Add clear headings and descriptions for better usability.</li>
            <li>Test sheet behavior on different screen sizes.</li>
            <li>Use action buttons consistently across all sheet variants.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Sheet
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Mobile navigation menus</li>
            <li>Settings and preferences panels</li>
            <li>Product filters and search options</li>
            <li>User profile editing forms</li>
            <li>Shopping cart side panels</li>
            <li>Notifications and announcements</li>
            <li>Quick actions and workflows</li>
            <li>Content previews and details panels</li>
            <li>Dashboard configuration panels</li>
            <li>Help and support sections</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            All these Shadcn sheet components are designed to work naturally within React applications. It follows a simple component structure, making it easy to manage state, customize layouts, and integrate with existing UI elements. Whether you&apos;re using Next.js, Vite, Remix, or another React framework, you can quickly add sheet functionality without complex setup or additional dependencies.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn sheet components
          </h2>
          <p className="text-foreground/80">
            Our <strong className="text-foreground">Shadcn Sheet Components</strong> are free to use. You are welcome to use them with no hidden policies or licensing restrictions. They are clean, accessible, customizable, and flexible enough for personal projects, client work, startups, and production-ready applications.
          </p>
        </section>
      </div>
    </>
  );
}
