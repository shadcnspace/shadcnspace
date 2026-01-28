import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function TabsData() {
  const faqData = [
    {
      title: "Can I style and customize the tabs?",
      content: (
        <>
          Of course, you can customize tab headers with Tailwind CSS by adding
          icons, badges, or interactiveness for better styling and user
          experience.
        </>
      ),
    },
    {
      title: "How do I make nested tabs?",
      content: (
        <>
          Simply nest one Tab component in a TabPanel of another tab. That way
          you can develop multilevel navigation without jamming your interface.
        </>
      ),
    },
    {
      title: "Are these tabs responsive on mobile devices?",
      content: (
        <>
          Yeah. Tabs automatically adapt to screen size. They can either stack
          vertically or become scrollable on a mobile, while remaining
          horizontal on desktop.
        </>
      ),
    },
    {
      title: "Can I manage tabs dynamically?",
      content: (
        <>
          Absolutely. Utilize controlled state in order to add, remove, or even
          rename your tabs dynamically because it is ideal for dashboards or
          user-generated content.
        </>
      ),
    },
    {
      title: "How do I make tabs accessible for screen readers?",
      content: (
        <>
          Shadcn Tabs is built with proper ARIA roles, focus management, and
          full keyboard navigation to ensure accessibility out of the box.
        </>
      ),
    },
    {
      title: "How do I handle overflow when there are too many tabs?",
      content: (
        <>
          Use scrollable tabs or dropdown menus for narrow containers or mobile
          screens. Tailwind utilities make implementing this easy.
        </>
      ),
    },
    {
      title: "Can I render dynamic content inside tab panels?",
      content: (
        <>
          Yes. Each panel can dynamically show any React component or data,
          making the tabs fully interactive.
        </>
      ),
    },
    {
      title: "How do I make vertical tabs?",
      content: (
        <>
          Set the orientation prop to "vertical" for a sidebar-style layout.
          Tailwind utilities can manage spacing, alignment and general layout.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Organize your interface effortlessly with our{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Tabs
            </strong>
            . Our tabs components let you separate content into switchable
            panels, reducing clutter and making complex pages easy to navigate.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Interactive Navigation for Organized Tabs
          </h2>
          <p className="text-foreground/80">
            Accessible, keyboard-navigable tabs - built with TypeScript,
            Tailwind CSS and Base UI. Horizontal or vertical layout adaptability
            is possible. Great for dashboards, settings pages, multi-section
            forms, and just about any interface that requires obvious separation
            of content while not overwhelming the user.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What are Shadcn Tabs?
          </h2>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Tabs
            </strong>{" "}
            enables you to organize related content in separate panels, which
            are switchable by users. The default component comes with tab
            headers and content panels, all with flexible orientations
            (horizontal or vertical). With Tailwind CSS, you can style active
            states, spacing, and alignment. TypeScript provides full type safety
            and predictable state management.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Use Shadcn Tabs?
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Clear Navigation:
              </strong>{" "}
              Sections must be neat and accessible.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Reduced Cognitive Load:
              </strong>{" "}
              Users focus on one panel at a time without feeling overwhelmed.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Customizable & Flexible:
              </strong>{" "}
              Entirely styleable with Tailwind CSS utilities.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                By Default Accessibility:
              </strong>{" "}
              ARIA roles and keyboard navigation.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Responsive & Mobile Friendly:
              </strong>{" "}
              Our tabs fit all screens and also have tabbable areas for
              scrolling.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Dynamic & Interactive:
              </strong>{" "}
              Programmatic creation, removal, and renaming of tabs.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Tab Patterns
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Horizontal Tabs:
              </strong>{" "}
              Classic navigation for dashboards and anything with heavy content.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Vertical Tabs:
              </strong>{" "}
              Efficient settings or filters sidebar navigation.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Icon Tabs:
              </strong>{" "}
              Mashup icons with labels to scan quickly visually.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Dynamic Tabs:
              </strong>{" "}
              Include or exclude tabs in response to user input or data.
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Keyboard Navigation:
              </strong>{" "}
              Arrow keys, Home/End to move backward and forward, Enter or Space
              to slide.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Active tab styling:
              </strong>{" "}
              Set colours, borders and background to active/inactive state.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Display content:
              </strong>{" "}
              Text, forms, media or interactive elements.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Overflow Handling:
              </strong>{" "}
              Scrollable tabs for mobile or content-heavy interfaces.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                State Management:
              </strong>{" "}
              Controlled and uncontrolled modes for any React workflow.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Tabs
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Tabs labels should be short for readability, especially in mobile.
            </li>
            <li>
              There seems to be no real answer other than storing the form state
              inside tab panels, if you want to avoid loss of user input.
            </li>
            <li>
              Make the tabs scrollable or dropdowns on smaller screens if there
              is overflow content.
            </li>
            <li>
              Test real content on your layout, both vertical and horizontal to
              continue this consistency.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integration With Other Components
          </h2>
          <p className="text-foreground/80">
            You can combine tabs with Card, Form, Button, Badge or Tooltip
            components for more advanced UI.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">Cards:</strong>{" "}
              Wrap tab content in well organized containers.
            </li>
            <li>
              <strong className="text-foreground font-semibold">Forms:</strong>{" "}
              Multi-step workflows within tabs remain intuitive.
            </li>
            <li>
              <strong className="text-foreground font-semibold">Tables:</strong>{" "}
              Display tab-specific datasets efficiently.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Dialog & Sheet:
              </strong>{" "}
              Open contextual content without leaving the active tab.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Select & Tooltip:
              </strong>{" "}
              Filter or annotate tab content dynamically.
            </li>
          </ul>
        </section>

        {/* section - 08 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
