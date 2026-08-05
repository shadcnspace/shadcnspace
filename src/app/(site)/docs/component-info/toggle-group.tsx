import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ToggleGroupData() {
  const faqData = [
    {
      title: "What is the difference between single-select and multi-select modes?",
      content: (
        <>
          In single-select mode, only one button in the group can be active at a time (like tab switches). In multi-select mode, you can select and activate multiple buttons at the same time.
        </>
      ),
    },
    {
      title: "How does the animated sliding highlight background work?",
      content: (
        <>
          It leverages Framer Motion's <code className="bg-muted px-1 py-0.5 rounded text-sm">layoutId</code> feature. When the active item shifts, the layout engine automatically animates the background pill container across items within the same shared layout context, creating a smooth liquid transition.
        </>
      ),
    },
    {
      title: "How does the hover text reveal animation work?",
      content: (
        <>
          When you hover over a button, the hidden text smoothly expands and fades in, revealing the text label next to the icon.
        </>
      ),
    },
    {
      title: "Can I customize the active background styling?",
      content: (
        <>
          Yes, you can easily customize the sliding pill's background color, border radius, and animations by editing the Tailwind CSS classes on the <code className="bg-muted px-1 py-0.5 rounded text-sm">motion.div</code> wrapper.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Satisfying Tab and Button Groups with Shadcn Toggle Group
          </h2>
          <p className="text-foreground/80">
            Organize multiple selection choices with our{" "}
            <strong className="text-foreground">
              Shadcn Toggle Group components
            </strong>
            , built using React, Tailwind CSS, and Framer Motion (
            <code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>
            ). Simple, highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular toggle group layout component that provides animated sliding highlights, hover expansions,
            and full keyboard navigation for dashboard controls.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Animated Toggle Group?
          </h2>
          <p className="text-foreground/80">
            The <strong>Shadcn Animated Toggle Group</strong> collection provides premium, keyboard-accessible grouping containers built on robust Base UI structures, enhanced with state-of-the-art Framer Motion micro-interactions.
          </p>
          <p className="text-foreground/80">
            These components go beyond simple static button rows by featuring dynamic spring-based sliding highlights, interactive icon-popping physics, icon-fill toggles on select, and custom width-expanding text reveals when hovering.
          </p>
          <p className="text-foreground/80">
            Toggle Groups are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Layout view switchers (e.g. switching between Grid and List view)</li>
            <li>Interactive reaction panels (e.g. Like, Love, Dislike triggers)</li>
            <li>Multi-option filter buttons and state select toolbars</li>
            <li>Size, weight, or alignment controllers in content editors</li>
            <li>Compact tab-like navigation systems</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Animated Toggle Groups
          </h2>
          <p className="text-foreground/80">
            Setting up focus management, keyboard arrow-key navigation, and ARIA roles alongside custom sliding background highlight animations is highly complex. The Toggle Group component abstracts these requirements, enabling fluid, premium interfaces with a few lines of code.
          </p>
          <p className="text-foreground/80">
            By using Framer Motion's shared layout layoutId context, the active background highlight container slides smoothly across items, creating a cohesive, liquid transition.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Animated Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Shared Stacking Layouts: Smooth spring-based sliding background pills for active items</li>
            <li>Hover Expanding Widths: Dynamically expand button width to reveal text labels on hover</li>
            <li>Interactive Icon Morphing: Bouncing, scale popping, and solid HSL fills upon reaction selection</li>
            <li>Responsive Flex layouts: Adapts and wraps seamlessly on mobile viewports</li>
            <li>Framework Agnostic Styling: Clean integration with standard Tailwind CSS utility modifiers</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Toggle Group Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore advanced button grouping layouts designed for configuration panels and interactive feeds. From clean view switchers to reaction trays, these setups provide modern solutions for user selections.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                View Switcher
              </h3>
              <p className="text-foreground/80">
                A compact horizontal toggle group utilizing a sliding background pill to transition active selections (such as Grid and List views) with organic spring physics.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Reaction Tray
              </h3>
              <p className="text-foreground/80">
                An interactive reaction bar featuring Like, Love, and Dislike options that pop on select, highlighting selected icons with color fills and revealing text labels on hover.
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
            The Toggle Group layout elements work smoothly with other Shadcn UI components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Dropdown Menu</strong> to reveal extended configuration dropdowns from a group button.
            </li>
            <li>
              Use with <strong className="text-foreground">Tooltip</strong> to display descriptive keyboard shortcuts or details on group items.
            </li>
            <li>
              Combine with <strong className="text-foreground">Badge</strong> to count reactions or votes dynamically inside group buttons.
            </li>
            <li>
              Integrate with <strong className="text-foreground">Scroll Area</strong> to handle long rows of filters on smaller screens without breaking layout.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Toggle Group
          </h2>
          <p className="text-foreground/80">
            Use the <code className="bg-muted px-1 py-0.5 rounded text-sm">multiple</code> boolean prop to switch between single-select and multi-select behavior cleanly while reusing the same item templates.
          </p>
          <p className="text-foreground/80">
            To prevent text label jumpiness on hover in expanding item layouts, set a clean cubic-bezier easing curve or transition-all parameters on the child span element.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Toggle Group
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Layout view mode selection (Grid, List, Table)</li>
            <li>Interactive emoji or reaction trays on feed posts</li>
            <li>Formatting alignment toolbars (Left, Center, Right, Justify)</li>
            <li>Media controls (Play, Pause, Skip, Loop)</li>
            <li>Tab-like navigation arrays in settings dashboards</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            You can easily integrate it into any Next.js or React setup. The components are clean and customizable, accepting custom classNames, custom styling hooks, and responsive Tailwind layouts.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Toggle Group Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Toggle Group components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
