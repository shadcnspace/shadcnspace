import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ToggleData() {
  const faqData = [
    {
      title: "What is the difference between a toggle button and a switch?",
      content: (
        <>
          Toggle buttons are generally represented as standard or icon buttons that stay pressed or transition state when clicked (e.g., liking a post, upvoting, or formatting text). Switches represent binary on/off configurations (such as toggling notifications or themes in a settings panel).
        </>
      ),
    },
    {
      title: "Are these toggle components accessible?",
      content: (
        <>
          Yes. They are built using native HTML <code className="bg-muted px-1 py-0.5 rounded text-sm">&lt;button&gt;</code> elements, which automatically support keyboard navigation. For screen reader users, make sure to add descriptive <code className="bg-muted px-1 py-0.5 rounded text-sm">aria-label</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">aria-pressed</code> attributes.
        </>
      ),
    },
    {
      title: "Can I customize the transition speeds and physics?",
      content: (
        <>
          Absolutely. Because these components utilize Framer Motion, you can easily tweak the <code className="bg-muted px-1 py-0.5 rounded text-sm">transition</code> parameters (like <code className="bg-muted px-1 py-0.5 rounded text-sm">stiffness</code>, <code className="bg-muted px-1 py-0.5 rounded text-sm">damping</code>, or <code className="bg-muted px-1 py-0.5 rounded text-sm">mass</code>) directly on the <code className="bg-muted px-1 py-0.5 rounded text-sm">motion</code> tags to get the exact feel you want.
        </>
      ),
    },
    {
      title: "How do I control the state from a parent component?",
      content: (
        <>
          You can lift the state up by converting them into controlled components. Replace the internal <code className="bg-muted px-1 py-0.5 rounded text-sm">useState</code> state with <code className="bg-muted px-1 py-0.5 rounded text-sm">isActive</code> and <code className="bg-muted px-1 py-0.5 rounded text-sm">onActiveChange</code> props passed down from your parent container.
        </>
      ),
    },
    {
      title: "Does it require external animation libraries?",
      content: (
        <>
          It relies on Framer Motion (<code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>) for smooth animations, which is a lightweight utility that handles CSS and SVG animations efficiently.
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
            Build Interactive and Micro-Animated Buttons with Shadcn Toggle
          </h2>
          <p className="text-foreground/80">
            Add high-fidelity feedback to user actions with our{" "}
            <strong className="text-foreground">
              Shadcn Toggle components
            </strong>
            , built using React, Tailwind CSS, and Framer Motion (
            <code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>
            ). Simple, highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular toggle layout component that helps structure micro-interactions, rating selectors,
            and configuration triggers into clean, interactive states.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Toggle?
          </h2>
          <p className="text-foreground/80">
            The{" "}<strong className="text-foreground">Shadcn Toggle</strong>{" "}collection provides standalone, animated toggle buttons (such as Sun/Moon theme triggers, Like buttons, and Upvote counters) built using native HTML elements and powered by Framer Motion.
          </p>
          <p className="text-foreground/80">
            Instead of simple static icons, these components incorporate high-quality, physics-based micro-interactions (like SVG masking, rotation, radial particle bursts, and sliding numeric transitions) to delight users.
          </p>
          <p className="text-foreground/80">
            Toggles are highly responsive and tactile. They respond immediately to clicks, giving users intuitive visual cues (scale hops, color pops, and particle sparks) that acknowledge their action instantly.
          </p>
          <p className="text-foreground/80">
            Toggle components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Theme selectors (Light/Dark mode)</li>
            <li>Interactive rating and upvoting buttons</li>
            <li>Bookmark and favorite toggles</li>
            <li>Text formatting and style toggles (bold, italic, underline)</li>
            <li>Settings controls and feature toggles</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Toggle
          </h2>
          <p className="text-foreground/80">
            Instead of presenting standard, uninspired controls that feel stiff, implementing custom animated toggles improves user engagement and micro-satisfaction metrics. The Shadcn Toggle components abstract complex SVG mask transforms and particle burst physics into clean, plug-and-play elements.
          </p>
          <p className="text-foreground/80">
            By leveraging native button markup and Framer Motion spring physics, developers get accessible, high-performance interactions with minimal bundle footprint.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Custom SVG mask morphing animations (Sun to Moon crescent rotation)</li>
            <li>Radial particle burst (sparkle) effects upon selection</li>
            <li>Sliding numeric transitions for real-time reactive counters</li>
            <li>Highly performant spring physics (stiffness, damping, mass configuration)</li>
            <li>Native HTML button elements with full keyboard accessibility</li>
            <li>Styling variants using utility Tailwind CSS classes</li>
            <li>Fully responsive, lightweight, and fast performance</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Toggle Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore practical standalone toggle designs built to enhance your app's interactive feel. From theme triggers to numeric counters, these examples provide modern, responsive alternatives to traditional buttons.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Theme Toggle
              </h3>
              <p className="text-foreground/80">
                An animated SVG-masked button that rotates and transitions smoothly from a glowing sun to a crescent moon, perfect for dark mode triggers.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Heart Like Button
              </h3>
              <p className="text-foreground/80">
                An interactive favorite control featuring a bouncing heart icon and a colorful radial particle burst when activated.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Upvote Counter
              </h3>
              <p className="text-foreground/80">
                A compound button mapping a triangular chevron indicator, text labels, and a sliding number counter for upvoting threads or items.
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
            The Toggle layout elements work smoothly with other Shadcn UI components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Tooltip</strong> to display helpful hover labels describing the button's action.
            </li>
            <li>
              Use with <strong className="text-foreground">Card</strong> to frame interactive controls cleanly inside product feeds.
            </li>
            <li>
              Combine with <strong className="text-foreground">Dropdown Menu</strong> to embed detailed options alongside the main toggle trigger.
            </li>
            <li>
              Integrate with <strong className="text-foreground">Badge</strong> to show current counts or status levels adjacent to toggle switches.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Toggle
          </h2>
          <p className="text-foreground/80">
            For screen reader users, always provide descriptive{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">aria-label</code> and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">aria-pressed</code> state attributes since toggles are often icon-only.
          </p>
          <p className="text-foreground/80">
            When adjusting physics-based spring variables, check the{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">stiffness</code> and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">damping</code> ratios in the{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">motion</code> tags to balance snappy acceleration and satisfying deceleration.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Toggle
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Dark and light theme mode switches</li>
            <li>Favorite, bookmark, and like button feedback</li>
            <li>Upvoting or downvoting community posts</li>
            <li>Rich text formatting controls in text editors</li>
            <li>Compact status selectors and settings toggles</li>
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
            Free Shadcn Toggle Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Toggle components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
