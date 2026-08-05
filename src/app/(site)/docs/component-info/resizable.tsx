import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ResizableData() {
  const faqData = [
    {
      title: "What is a resizable component?",
      content:
        "A resizable component consists of a set of panels separated by draggable handles. Users can grab the handles to adjust the sizes of the adjacent panels dynamically, customizing their workspace.",
    },
    {
      title: "Does Shadcn Resizable support nested panels?",
      content:
        "Yes. You can nest ResizablePanelGroup components inside ResizablePanel elements to create complex grids with both vertical and horizontal resizable layouts.",
    },
    {
      title: "How can I persist the layout sizes?",
      content:
        "You can use the persistence features. If you provide a unique autoSaveId prop, the layout library can automatically persist panel sizes to local storage or cookies, maintaining the user's custom layout between page reloads.",
    },
    {
      title: "How do I handle collapsing panels?",
      content:
        "By setting the collapsible prop to true on a ResizablePanel and specifying a minSize, the panel will automatically collapse when the user drags the handle beyond the minSize threshold. You can also listen to onCollapse and onExpand callbacks to manage component state.",
    },
    {
      title: "Is it responsive and mobile-friendly?",
      content:
        "Yes. The underlying primitives support touch events for mobile gestures. Furthermore, you can listen to viewport width or use custom media queries to transition between horizontal and vertical layouts or switch to a full-screen mobile view, just like in our Resizable 01 Master-Detail Split Pane example.",
    },
    {
      title: "Is the resizable panel group accessible?",
      content:
        "Yes. It supports keyboard accessibility. Users can focus the resizable handles and use arrow keys, Home/End, or Enter to adjust panel sizes or collapse/expand them.",
    },
    {
      title: "What libraries are used?",
      content:
        "Shadcn Resizable is built using the excellent react-resizable-panels library, combining robust workspace partitioning logic with clean Tailwind CSS styling.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Flexibly Partitioned Layouts with Shadcn Resizable
          </h2>
          <p className="text-foreground/80">
            Keep your layouts organized with our{" "}
            <strong className="text-foreground">
              Shadcn Resizable components
            </strong>
            , built using React, Tailwind CSS and Base UI. Simple,
            interactive, and easy to customize for modern web applications.
          </p>
          <p className="text-foreground/80">
            A split pane component that helps segment page views into
            adjustable sections, letting users control their visual workspace
            size.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Resizable?
          </h2>
          <p className="text-foreground/80">
            Shadcn Resizable is a flexible layout system composed of{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ResizablePanelGroup
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ResizablePanel
            </code>
            , and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ResizableHandle
            </code>
            . It enables users to drag and adjust screen partitions
            dynamically.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a dashboard, email client, settings page,
            or code playground, resizable views make layouts{" "}
            <strong className="text-foreground">
              adaptable and user-controlled
            </strong>
            .
          </p>
          <p className="text-foreground/80">
            Resizable is commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Collapsible sidebars and navigation drawers</li>
            <li>Split-screen workspace comparisons</li>
            <li>Master-Detail interfaces (e.g., mail lists and details)</li>
            <li>Multi-window code playgrounds and IDE panels</li>
            <li>Interactive grid workspaces</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Resizable
          </h2>
          <p className="text-foreground/80">
            Fixed layout proportions don&apos;t fit all use cases, especially on
            different monitors and resolutions. Resizable panels allow users to
            customize their screen area, expanding main viewports while
            collapsing secondary sidebars or detailed inspector lists.
          </p>
          <p className="text-foreground/80">
            By using lightweight primitives, it offers{" "}
            <strong className="text-foreground">smooth drag performance</strong>
            , prevents parent container layout shifts, and ensures accessible keyboard
            behavior.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Horizontal and vertical split pane layouts</li>
            <li>Collapsible panels with configurable min/max/default sizes</li>
            <li>Persistent state support via cookies or local storage</li>
            <li>Accessible keyboard controls (arrow keys, collapse shortcuts)</li>
            <li>Native touch gestures for mobile and tablet devices</li>
            <li>Nested panel configurations for multi-dimensional layouts</li>
            <li>Custom visual drag handles with optional handle indicators</li>
            <li>Easy integration with scroll areas, cards, and tables</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Resizable Example &amp; Variant
          </h2>
          <p className="text-foreground/80">
            Explore practical layout configurations designed for modern dashboards
            and workspaces. From sidebars to inspectors, these examples help build
            robust, interactive layout divisions.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Master-Detail Layout
              </h3>
              <p className="text-foreground/80">
                Combines a searchable data list on one side and a detailed item
                preview inspector panel on the other.
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
            The resizable panel system works smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Scroll Area</strong> to handle scrollable content lists inside
              side panels.
            </li>
            <li>
              Use with <strong className="text-foreground">Card</strong> components inside panels to keep visual elements
              clean and bordered.
            </li>
            <li>
              Combine with <strong className="text-foreground">Badge</strong> and <strong className="text-foreground">Button</strong> to build interactive action headers in
              inspector panels.
            </li>
            <li>
              Integrate with text inputs or search groups inside panel headers for
              real-time list filtering.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Resizable
          </h2>
          <p className="text-foreground/80">
            Always define a reasonable <code className="bg-muted px-1 py-0.5 rounded text-sm">minSize</code> and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">maxSize</code> to prevent panels from shrinking to
            unreadable sizes. Ensure the parent container of your ResizablePanelGroup
            has a defined height and width (e.g. `h-full` or a fixed height like `h-150`).
          </p>
          <p className="text-foreground/80">
            For responsive layouts, switch the panel group&apos;s `direction`
            dynamically or hide/show mobile-specific views using media queries,
            providing a tailored mobile experience while retaining the desktop
            split layout.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Resizable
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>File managers and directory explorers</li>
            <li>Developer environments (IDEs, playgrounds, editors)</li>
            <li>Dashboard analytics with collapsible side navigation</li>
            <li>Master-detail lists (inbox, orders, contacts)</li>
            <li>Split-screen comparison views</li>
            <li>Database table browsers</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            You can easily integrate it into any Next.js or React setup. The
            components expose props like{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              onResize
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              onCollapse
            </code>
            , and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              onExpand
            </code>
            , and can be manipulated programmatically using React refs for
            high-fidelity interactive control.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Resizable
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Resizable components are open-source and free to use.
            Easily copy the code, customize the handles, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}