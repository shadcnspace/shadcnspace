import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SliderData() {
  const faqData = [
    {
      title: "When should I use Slider vs Input components?",
      content:
        "Use sliders when users need to adjust values visually like volume, brightness, or filters. Use input fields when users need exact values like quantities or IDs. Sliders are better for quick adjustments, while inputs are better for precision.",
    },
    {
      title: "Range Picker and Slider: are these the same?",
      content:
        "They are similar. A slider can work as a range picker when you use two values. It allows users to select a minimum and maximum range using dual thumbs.",
    },
    {
      title: "How do I set minimum, maximum, and step values in Shadcn Slider?",
      content:
        "You can define min, max, and step props directly in the component. This controls how the slider behaves and how values are selected.",
    },
    {
      title: "Can I show the current value of the slider?",
      content:
        "Yes, you can use the onValueChange callback to track the value and display it anywhere in your UI like above the slider or next to it.",
    },
    {
      title: "Is Shadcn Slider accessible?",
      content:
        "Yes, it supports keyboard navigation and screen readers. Users can adjust values using arrow keys and other shortcuts, making it usable for everyone.",
    },
    {
      title: "Can I customize the slider design?",
      content:
        "Yes, you can style the slider using Tailwind CSS. You can change colors, sizes, and layout to match your design system.",
    },
    {
      title: "Can I create vertical sliders?",
      content:
        "Yes, you can switch orientation to vertical. This is useful for audio controls, dashboards, or side panels.",
    },
    {
      title: "How do I control slider precision?",
      content:
        "You can use the step property. Smaller steps give more precision, while larger steps make selection faster.",
    },
    {
      title: "Can I create a dual range slider?",
      content:
        "Yes, by passing two values, you can create a range slider with two handles for selecting minimum and maximum values.",
    },
    {
      title: "How does keyboard navigation work in Shadcn Slider?",
      content:
        "Users can use arrow keys for small changes, Page Up/Down for bigger jumps, and Home/End to jump to minimum or maximum values. This makes interaction smooth even without a mouse.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Our Shadcn Slider components provide accessible,{" "}
            <span className="text-foreground font-semibold">
              customizable range
            </span>{" "}
            inputs with smooth drag interactions. Choose from single-thumb and
            dual-thumb range variants, each styled with Tailwind and ready for
            real use cases like volume controls, price filters, and settings
            panels.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Slider?
          </h2>
          <p className="text-foreground/80">
            A slider is a UI component that lets users select a value by
            dragging a thumb across a track instead of typing it manually.
          </p>
          <p className="text-foreground/80">
            In many apps,{" "}
            <span className="text-foreground font-semibold">typing numbers</span>
            {" "}
            can feel slow or unclear. A slider makes it visual and interactive.
            Users can quickly adjust values like volume, brightness, or price
            range just by moving a handle.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Drag-based input instead of typing values</li>
            <li>Supports single value or range selection</li>
            <li>Gives users better control with visual feedback</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Slider
          </h2>
          <p className="text-foreground/80">
            Sliders are useful when users need quick and smooth control over a{" "}
            <span className="text-foreground font-semibold">value range</span>.
          </p>
          <p className="text-foreground/80">
            Instead of building drag logic, handling edge cases, and managing
            accessibility, developers prefer using a ready slider component that
            just works.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Saves time by avoiding custom drag logic</li>
            <li>Makes user interaction faster and more natural</li>
            <li>Reduces input errors in numeric fields</li>
            <li>Works well for filters and settings panels</li>
            <li>Keeps UI clean without extra input fields</li>
            <li>Supports both simple and advanced use cases</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Slider Variants
          </h2>
          <p className="text-foreground/80">
            Each slider variant is configured through props and styled using
            Tailwind, so you can{" "}
            <span className="text-foreground font-medium">easily adjust</span>{" "}
            it without changing the base component.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">Single Thumb</strong> -{" "}
              select one value, ideal for volume or brightness
            </li>
            <li>
              <strong className="text-foreground font-medium">Range (Dual Thumb)</strong> -{" "}
              select min and max, perfect for price filters
            </li>
            <li>
              <strong className="text-foreground font-medium">With Step</strong> -{" "}
              snaps to fixed values, useful for quantities
            </li>
            <li>
              <strong className="text-foreground font-medium">With Value Label</strong> -{" "}
              shows current value above the thumb
            </li>
            <li>
              <strong className="text-foreground font-medium">Disabled</strong> -{" "}
              read-only state for locked settings
            </li>
            <li>
              <strong className="text-foreground font-medium">Custom Color</strong> -{" "}
              styled track and thumb using Tailwind
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Single and dual-thumb range selection</li>
            <li>Configurable min, max, and step values</li>
            <li>Accessible with keyboard and screen reader support</li>
            <li>Smooth drag interaction on mouse and touch devices</li>
            <li>onValueChange callback for controlled usage</li>
            <li>Fully responsive across devices</li>
            <li>Clean and minimal design ready for production</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Slider
          </h2>
          <p className="text-foreground/80">
            Using sliders properly{" "}
            <span className="text-foreground font-medium">improves UX</span>{" "}
            a lot.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use sliders when users don’t need exact numbers</li>
            <li>Always show the selected value clearly</li>
            <li>Keep step values meaningful (avoid too many tiny steps)</li>
            <li>Don’t use sliders for very large or complex ranges</li>
            <li>Combine with labels so users understand the range</li>
            <li>Test on mobile to ensure smooth dragging</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Slider
          </h2>
          <p className="text-foreground/80">
            Sliders are commonly{" "}
            <span className="text-foreground font-medium">used in dashboards</span>{" "}
            and interactive UIs.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Price range filters in e-commerce</li>
            <li>Volume and brightness controls</li>
            <li>Dashboard settings panels</li>
            <li>Progress or range selection tools</li>
            <li>Media player controls</li>
            <li>Data filtering interfaces</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Slider works smoothly with other Shadcn components and fits
            naturally into most layouts.
          </p>
          <p className="text-foreground/80">
            You can combine it with different UI elements to create complete
            user flows:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              to show a synced numeric value users can
              also edit manually
            </li>
            <li>
              Place inside{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to build clean settings panels or filter
              sections
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              when combining range filters with dropdown
              options
            </li>
            <li>
              Integrate with{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Form
              </a>{" "}
              for validation and structured data input
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/progress"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Progress
              </a>{" "}
              when showing live progress or completion states
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
              for dashboards and media player
              UIs.
            </li>
          </ul>
          <p className="text-foreground/80">
            This makes the slider a flexible part of{" "}
            <a
              href="/admin-dashboard"
              target="_blank"
              className="text-primary underline"
            >
              admin dashboard
            </a>
              , forms, and interactive UI systems.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Slider
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Slider components are{" "}
            <span className="text-foreground font-medium">
              free to use
            </span>.{" "}
             Clean, accessible, and production-ready
            for personal or commercial projects with no hidden licenses.
          </p>
        </section>
      </div>
    </>
  );
}
