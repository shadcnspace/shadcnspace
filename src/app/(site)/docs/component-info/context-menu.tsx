import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ContextMenuData() {
  const faqData = [
    {
      title: "Can I trigger a Context Menu without a right-click?",
      content:
        "Yes. You can open a Context Menu using buttons, icons, long-press interactions on mobile devices, or custom events. This is useful when building touch-friendly interfaces where right-click actions are not available.",
    },
    {
      title: "When should I use a Context Menu instead of a Dropdown Menu?",
      content:
        "Use a Context Menu when actions are related to a specific item and should appear near that item after a right-click or secondary interaction. Use a Dropdown Menu when actions are part of the primary interface and need to be visible through a button or trigger.",
    },
    {
      title: "Does the Context Menu work with tables and data grids?",
      content:
        "Yes. Context Menus are commonly used in tables, data grids, and admin panels. You can attach different actions to rows, cells, or records, allowing users to edit, delete, duplicate, or manage data without leaving the current screen.",
    },
    {
      title: "Can I add icons and keyboard shortcuts to menu items?",
      content:
        "Yes. You can display icons, shortcut keys, descriptions, and custom content inside menu items. This helps users quickly understand available actions and improves usability in complex applications.",
    },
    {
      title: "Can I disable specific menu items?",
      content:
        "Yes. Individual menu items can be disabled based on permissions, application state, or user roles. Disabled items remain visible but cannot be selected until the required conditions are met.",
    },
    {
      title:
        "Does the Context Menu automatically position itself on the screen?",
      content:
        "Yes. The component intelligently adjusts its position when opened near the edges of the viewport. This helps prevent the menu from being cut off and keeps actions accessible.",
    },
    {
      title:
        "Can I use Context Menu in file managers and dashboard applications?",
      content:
        "Absolutely. Context Menus are commonly used in file explorers, admin dashboards, project management tools, content management systems, and productivity apps where users frequently perform item-specific actions.",
    },
    {
      title:
        "Does the Context Menu close automatically after selecting an action?",
      content:
        "Yes. By default, the menu closes after a user selects an item. You can also customize this behavior if a workflow requires the menu to remain open.",
    },
    {
      title: "Can I show different menu options based on the selected item?",
      content:
        "Yes. Menu items can be rendered dynamically based on the selected record, user permissions, application state, or any custom business logic.",
    },
    {
      title: "Does the Context Menu support touch devices?",
      content:
        "Yes. While right-click interactions are mainly desktop-focused, you can trigger the same menu using long-press gestures or custom buttons on mobile and tablet devices.",
    },
    {
      title:
        "Can I use Context Menu with file upload and media management interfaces?",
      content:
        "Yes. Context Menus work well for media libraries, image galleries, and file management systems where users need quick access to actions like rename, move, download, share, or delete.",
    },
    {
      title: "Is Context Menu suitable for enterprise and admin applications?",
      content:
        "Yes. Context Menus help reduce interface clutter by keeping secondary actions hidden until needed, making them a practical choice for data-heavy dashboards and enterprise tools.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Boost your interface with our Shadcn Context Menu
          </h2>
          <p className="text-foreground/80">
            Sometimes users need quick access to actions without opening extra
            pages or navigating through multiple options. That&apos;s where
            context menus become useful. <strong className="text-foreground">With a simple right-click or secondary</strong>{" "}
            action, users can instantly access the options they need.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Context Menu helps you build cleaner options for
            dashboards, file managers, tables, editors, and productivity tools
            while keeping your interface simple and organized.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Context Menu?
          </h2>
          <p className="text-foreground/80">
            A Shadcn Context Menu lets users access actions by right-clicking on
            an element. Instead of filling your interface with extra buttons,
            actions stay hidden until they are needed.
          </p>
          <p className="text-foreground/80">
            Our Context Menu components make it easy to add actions such as
            edit, delete, copy, share, rename, or manage items directly from the
            current view. This pattern is commonly used in dashboards, file
            managers, admin panels, and productivity tools.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Our Shadcn Context Menu Components
          </h2>
          <p className="text-foreground/80">
            When building real applications, screen space matters. Nobody wants
            dozens of buttons and options everywhere.
          </p>
          <p className="text-foreground/80">
            That&apos;s why many developers use context menus. They{" "}
            <strong className="text-foreground">keep interfaces clean</strong> while still providing quick
            access to actions. Our Shadcn Context Menu examples handle the
            interaction patterns for you, making it easier to build familiar
            experiences that users already understand from desktop applications.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Context Menu Variants
          </h2>
          <p className="text-foreground/80">
            Explore different Shadcn Context Menu examples designed for modern
            React applications:
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Right Click Animated Context Menu
              </h3>
              <p className="text-foreground/80">
                A classic right-click menu with quick actions, smooth
                transitions and clean layouts.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Radial Bubble Menu
              </h3>
              <p className="text-foreground/80">
                A creative circular action menu that expands around the cursor
                for faster access to common actions.
              </p>
            </div>
          </div>
          <p className="text-foreground/80">
            These examples help you add right-click actions, quick shortcuts,
            and contextual options to your applications with minimal setup.
            Available for both Base UI.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clean right-click interactions</li>
            <li>Keyboard-friendly navigation</li>
            <li>Supports icons, shortcuts, and grouped actions</li>
            <li>Works well on desktop applications</li>
            <li>Easy to customize and extend</li>
            <li>Accessible interaction patterns</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Other Components
          </h2>
          <p className="text-foreground/80">
            Our Context Menu examples work naturally with other components
            across your application.
          </p>
          <p className="text-foreground/80">
            Use them alongside{" "}
            <a
              href="/blocks/dashboard-ui/tables"
              target="_blank"
              className="text-primary underline"
            >
              Table
            </a>{" "}
            components for row actions,{" "}
            <a
              href="/components/card"
              target="_blank"
              className="text-primary underline"
            >
              Card
            </a>{" "}
            components for item management, and{" "}
            <a
              href="/components/dialog"
              target="_blank"
              className="text-primary underline"
            >
              Dialog
            </a>{" "}
            components for edit or delete confirmations. They also pair nicely
            with{" "}
            <a
              href="/components/command"
              target="_blank"
              className="text-primary underline"
            >
              Command
            </a>
            ,{" "}
            <a
              href="/components/dropdown-menu"
              target="_blank"
              className="text-primary underline"
            >
              Dropdown Menu
            </a>
            ,{" "}
            <a
              href="/components/tooltip"
              target="_blank"
              className="text-primary underline"
            >
              Tooltip
            </a>
            , and{" "}
            <a
              href="/components/scroll-area"
              target="_blank"
              className="text-primary underline"
            >
              Scroll Area
            </a>{" "}
            components to build more complete user experiences.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Context Menu
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep action labels short and clear.</li>
            <li>Group related actions together.</li>
            <li>Place dangerous actions near the bottom.</li>
            <li>Add icons only when they improve clarity.</li>
            <li>Avoid adding too many nested levels.</li>
            <li>Test menu positioning near screen edges.</li>
            <li>Make sure keyboard navigation works properly.</li>
            <li>Use separators to organize large menus.</li>
            <li>Show only actions relevant to the selected item.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Context Menu
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>File management systems</li>
            <li>Admin dashboards</li>
            <li>Data tables and grids</li>
            <li>Project management tools</li>
            <li>Document editors</li>
            <li>Media management applications</li>
            <li>Team collaboration software</li>
            <li>Design tools</li>
            <li>CRM applications</li>
            <li>Internal business platforms</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            All these Context Menu components are easy to integrate into React
            and Next.js projects.
          </p>
          <p className="text-foreground/80">
            You can attach it to cards, table rows, folders, files, images, user
            profiles, or any custom element. Whether your data comes from local
            state, APIs, or databases, the component works smoothly with
            existing React workflows.
          </p>
          <p className="text-foreground/80">
            Because it is{" "}
            <strong className="text-foreground">fully customizable</strong>, you
            can match the menu to your own design system without changing its
            core behavior.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Context Menu Components
          </h2>
          <p className="text-foreground/80">
            All of our Shadcn Context Menu components are free to use. Simply
            copy the code, customize it to match your project, and start
            building. Every example is designed to be clean, accessible, and
            easy to understand for developers working with React and Tailwind
            CSS.
          </p>
        </section>
      </div>
    </>
  );
}
