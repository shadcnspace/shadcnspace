import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function DrawerData() {
  const faqData = [
    {
      title: "What is a Drawer component?",
      content:
        "A Drawer component is an accessible overlay panel that slides in from the edge of the screen. Built on top of Base UI's drawer primitives, it features native gesture support, customizable swipe axis triggers, overlay behaviors, and custom dimensions.",
    },
    {
      title: "What swipe directions does it support?",
      content:
        "It supports 'down', 'up', 'left', and 'right' directions, controlled by the swipeDirection prop on the root component. This makes it highly versatile for bottom sheets, mobile menus, sidebars, and notifications.",
    },
    {
      title: "Does it support touch drag gestures?",
      content:
        "Yes. Since it is powered by Base UI, it natively supports swiping to dismiss or drag, with fluid velocity-based transitions and optional visual swipe handles.",
    },
    {
      title: "How do I configure the width or height of the drawer?",
      content:
        "You can easily configure sizing using Tailwind CSS utilities or CSS custom variables like --drawer-content-width and --drawer-content-height on the DrawerContent component wrapper.",
    },
    {
      title: "Can I customize the backdrop overlay opacity?",
      content:
        "Yes, the drawer overlay opacity and backdrop blur can be styled. By default, it transitions smoothly from black/10 to fully visible based on the drag progress.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Responsive and Swipeable Drawers with Shadcn Drawer
          </h2>
          <p className="text-foreground/80">
            Improve mobile navigation and user workflows with our{" "}
            <strong className="text-foreground">
              Shadcn Drawer components
            </strong>
            , built using React, Tailwind CSS, and Base UI. Simple,
            highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular and highly accessible sheet/drawer layout component that easily slides in from the bottom, left, right, or top, optimized for both touch and desktop environments.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Drawer?
          </h2>
          <p className="text-foreground/80">
            Shadcn Drawer is an advanced overlay layout system composed of{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              Drawer
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerTrigger
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerContent
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerHeader
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerTitle
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerDescription
            </code>
            , and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              DrawerClose
            </code>
            . It provides robust keyboard navigation, focus trap functionality, and drag-to-dismiss capabilities.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re creating a quick task planner, interactive settings menu,
            shopping cart tray, or notification panel, Shadcn Drawer provides fluid gestures and custom variables out of the box.
          </p>
          <p className="text-foreground/80">
            Drawer components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Getting Started onboarding checklists and setup guides</li>
            <li>Mobile-friendly e-commerce shopping cart side-panels</li>
            <li>Contextual item settings and detail preview overlays</li>
            <li>Bottom-sheet navigation and quick filters for mobile devices</li>
            <li>Right-side command hubs and activity feeds</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Drawer
          </h2>
          <p className="text-foreground/80">
            Handling fluid swipe gestures, velocity-based drag animations, and accessibility requirements like keyboard closing and focus trapping manually is incredibly complex. The Drawer component abstracts all of this, offering native-feeling performance on touch devices alongside standard desktop compatibility.
          </p>
          <p className="text-foreground/80">
            By utilizing Base UI&apos;s primitives, it grants full control over drag thresholds, snap points, custom layout sizes, and transition curves with zero heavy JS bundle overhead.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Multi-directional slides (down, up, left, right)</li>
            <li>Native swipe gestures and fluid velocity-based drag-to-dismiss</li>
            <li>Configurable snap points for expandable bottom sheets</li>
            <li>Custom sizing variables like --drawer-content-width and --drawer-content-height</li>
            <li>Optional visual swipe handle (DrawerSwipeHandle)</li>
            <li>Accessible focus trapping and keyboard shortcuts</li>
            <li>Supports custom trigger and close button wrappers</li>
            <li>Smooth transition states built on CSS custom properties</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Drawer Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore practical drawer layouts designed for modern dashboards
            and feeds. From user onboarding lists to advanced shopping cart overlays,
            these examples cover the core implementation setups.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Get Started Drawer
              </h3>
              <p className="text-foreground/80">
                A right-side onboarding drawer featuring a checklist of setup tasks. It tracks completeness using progress indicators and checkbox state inputs.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Shopping Cart Drawer
              </h3>
              <p className="text-foreground/80">
                A premium slide-out cart panel. Supports modifying quantities, removing items, real-time threshold progress for free shipping, confetti triggers, and horizontal-scrolling item suggestions.
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
            The Drawer layout elements work smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Combine with <strong className="text-foreground">Progress</strong> to display onboarding completion status or shipping progress limits inside the drawer header.
            </li>
            <li>
              Pair with <strong className="text-foreground">Checkbox</strong> and <strong className="text-foreground">Label</strong> to design structured checklists or configuration panels.
            </li>
            <li>
              Use with <strong className="text-foreground">ScrollArea</strong> to handle scrollable content lists and horizontal recommendation carousels.
            </li>
            <li>
              Integrate with <strong className="text-foreground">Button</strong> and <strong className="text-foreground">ButtonGroup</strong> to manage quantity controls and footer action flows.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Drawer
          </h2>
          <p className="text-foreground/80">
            Use <code className="bg-muted px-1 py-0.5 rounded text-sm">swipeDirection=&quot;right&quot;</code> to open the drawer from the right side of the screen. Apply custom styling class names like <code className="bg-muted px-1 py-0.5 rounded text-sm">data-[swipe-direction=right]:rounded-none</code> to match the screen edge perfectly.
          </p>
          <p className="text-foreground/80">
            When setting custom layout sizes:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Customize the panel width dynamically using utility variables such as <code className="bg-muted px-1 py-0.5 rounded text-sm">[--drawer-content-width:30rem]</code> directly in the <code className="bg-muted px-1 py-0.5 rounded text-sm">DrawerContent</code> className.
            </li>
            <li>
              For immersive layouts, zero out inset spacing using <code className="bg-muted px-1 py-0.5 rounded text-sm">[--drawer-inset:0px]</code> and hide bleed backgrounds with <code className="bg-muted px-1 py-0.5 rounded text-sm">[--drawer-bleed-background:transparent]</code>.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Drawer
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Getting started check-lists and onboarding guides</li>
            <li>Responsive e-commerce shopping carts</li>
            <li>Mobile bottom sheets for forms and controls</li>
            <li>Slide-out navigation and admin sidebars</li>
            <li>Detail detail-panels and filter systems</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            You can easily integrate it into any Next.js or React setup. All components are fully client-side safe and automatically handle portal rendering, screen resizing, and touch-interaction lifecycle events cleanly.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Drawer Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Drawer components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
