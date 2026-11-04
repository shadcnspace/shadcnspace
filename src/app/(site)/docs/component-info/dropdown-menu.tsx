import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function DropdownMenuData() {
  const faqData = [
    {
      title: "What is the use of Shadcn Dropdown?",
      content:
        "Shadcn Dropdown is used to show actions, options, or navigation items inside a compact menu. It helps reduce clutter and keeps interfaces cleaner.",
    },
    {
      title: "Are Shadcn Dropdown components accessible?",
      content:
        "Yes. They support keyboard navigation, focus management, and ARIA attributes for better accessibility.",
    },
    {
      title: "Can I customize Shadcn Dropdown styles?",
      content:
        "Yes. Since it uses Tailwind CSS, you can fully customize spacing, colors, borders, and animations.",
    },
    {
      title: "Can I use icons inside these shadcn dropdown menus?",
      content:
        "Yes, icons are commonly used inside dropdown items for faster recognition and better visual hierarchy.",
    },
    {
      title: "Does Shadcn Dropdown support nested menus?",
      content:
        "Yes. You can create multi-level dropdown menus for more advanced navigation and grouped actions.",
    },
    {
      title: "Can I use Shadcn Dropdown in tables?",
      content:
        "Absolutely. Many Shadcn Dropdown examples are used for row-level actions inside tables and data grids.",
    },
    {
      title: "Is Shadcn Dropdown mobile friendly?",
      content:
        "Yes. The component works well on touch devices and can be adjusted easily for smaller screens.",
    },
    {
      title: "What is the difference between Select and Dropdown?",
      content:
        "A Select component is mainly for choosing values in forms, while Dropdown menus are commonly used for actions, navigation, and quick controls.",
    },
    {
      title: "Can I control dropdown state manually?",
      content:
        "Yes. You can manage the open and close state using React state when you need custom behavior.",
    },
    {
      title: "Which Shadcn Dropdown variant is best for dashboards?",
      content:
        "Action dropdowns, profile menus, and filter dropdowns are the most commonly used variants in dashboards and admin panels.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Simple and flexible{" "}
            <span className="text-foreground font-medium">
              dropdown menus for actions, navigation, and quick options.
            </span>
          </p>
          <p className="text-foreground/80">
            Our Dropdown components help you organize actions and menu items
            without cluttering the interface.
          </p>
          <p className="text-foreground/80">
            Built with React and Tailwind CSS, these dropdown{" "}
            <span className="text-foreground font-medium">variations</span> make
            it easy to create clean menus, profile actions, filters, and
            navigation flows in modern apps.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Dropdown?
          </h2>
          <p className="text-foreground/80">
            Shadcn Dropdown is a{" "}
            <span className="text-foreground font-medium">
              menu-based UI component
            </span>{" "}
            that shows a list of actions or options when users click a trigger
            button. Instead of placing every action directly on the screen,
            dropdowns help keep the layout clean and easier to manage.
          </p>
          <p className="text-foreground/80">
            These Shadcn Dropdown components are built using React, Tailwind
            CSS, giving developers accessible and{" "}
            <span className="text-foreground font-medium">customizable</span>{" "}
            dropdown menus for real-world applications.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Built with React, Tailwind CSS, and Base UI</li>
            <li>Supports keyboard navigation and ARIA accessibility</li>
            <li>Easy to customize with Tailwind utility classes</li>
          </ul>
          <p className="text-foreground/80">
            You’ll commonly see Shadcn Dropdown examples in dashboards, profile
            menus, admin panels, and table actions.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Dropdown
          </h2>
          <p className="text-foreground/80">
            As applications grow, screens become crowded with actions and
            controls. Dropdowns solve this problem by hiding{" "}
            <span className="text-foreground font-medium">
              secondary actions
            </span>{" "}
            until users actually need them.
          </p>
          <p className="text-foreground/80">
            That’s why many developers use Shadcn Dropdown components in
            dashboards and admin panels. They help create cleaner layouts while
            still keeping important actions nearby.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keeps interfaces clean and organized</li>
            <li>Reduces button clutter in complex layouts</li>
            <li>Improves navigation in dashboards and tables</li>
            <li>Makes mobile layouts easier to manage</li>
            <li>Supports accessible keyboard interaction</li>
            <li>Easy to reuse across different projects</li>
          </ul>
          <p className="text-foreground/80">
            Many Shadcn Dropdown variants also work well for filters, sorting
            menus, and settings panels.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Dropdown Variants
          </h2>
          <p className="text-foreground/80">
            Different layouts help dropdowns fit different use cases.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Simple Action Dropdown</li>
            <li>Profile Menu Dropdown</li>
            <li>Navigation Dropdown</li>
            <li>Filter & Sorting Dropdown</li>
            <li>Multi-level Dropdown Menu</li>
            <li>Icon-based Dropdown Trigger</li>
          </ul>
          <p className="text-foreground/80">
            These Shadcn Dropdown variations can be styled easily to match any
            react project.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Accessible keyboard navigation</li>
            <li>Supports nested and grouped menu items</li>
            <li>Easy open and close state handling</li>
            <li>Custom trigger buttons and icons</li>
            <li>Smooth animations and transitions</li>
            <li>Works with dark and light themes</li>
            <li>Fully responsive across all screen sizes</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Dropdown
          </h2>
          <p className="text-foreground/80">
            A good dropdown should feel simple and predictable.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep menu labels short and clear</li>
            <li>Group related actions together</li>
            <li>Avoid adding too many menu levels</li>
            <li>Use icons carefully for quick scanning</li>
            <li>Keep destructive actions separated</li>
            <li>Close dropdown after action completion</li>
            <li>Make mobile tap targets large enough</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Dropdown Menu
          </h2>
          <p className="text-foreground/80">
            Shadcn Dropdown examples are used in many real interfaces.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Profile and account menus</li>
            <li>Dashboard action menus</li>
            <li>Table row actions</li>
            <li>Filter and sorting controls</li>
            <li>Navigation headers</li>
            <li>Settings and preference panels</li>
            <li>Context menus in admin apps</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Other Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Dropdown components work smoothly with many other Shadcn UI
            components and layouts.
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
              for dropdown triggers
            </li>
            <li>
              Add inside{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              for dashboard widgets
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
              for action confirmations
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/tooltip"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tooltip
              </a>{" "}
              for icon-only menus
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              for notification menus
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
              for dashboard navigation
            </li>
            <li>
              Add inside{" "}
              <a
                href="/blocks/dashboard-ui/sidebars"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Sidebar
              </a>{" "}
              layouts for app navigation
            </li>
          </ul>
          <p className="text-foreground/80">
            These integrations make Shadcn Dropdown components useful for
            dashboards, SaaS apps, admin panels, and modern React applications.
          </p>
        </section>
    
        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
