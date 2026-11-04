import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function InputGroupData() {
  const faqData = [
    {
      title: "What is an Input Group component?",
      content: (
        <>
          An Input Group is a layout element that packages text inputs with icons, buttons, or custom badges on either side to save space and group actions.
        </>
      ),
    },
    {
      title: "Can I add interactive buttons or dropdowns inside an Input Group?",
      content: (
        <>
          Yes. The addon containers inside the input group can host buttons, dropdown selectors, search triggers, or loader status icons, aligning them cleanly with the input field.
        </>
      ),
    },
    {
      title: "Is this component screen reader accessible?",
      content: (
        <>
          Yes. It uses standard HTML input tags and semantic wrappers, meaning it works correctly with screen readers and supports keyboard arrow keys and focus outlines naturally.
        </>
      ),
    },
    {
      title: "Can I put items on either the left or right side of the input?",
      content: (
        <>
          Yes. You can easily place icons, buttons, or badges on either the left (start) or right (end) of the input field using the alignment properties.
        </>
      ),
    },
    {
      title: "Does it require external animation libraries?",
      content: (
        <>
          It relies on Framer Motion (<code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>) for smooth animations, which is a lightweight utility that handles CSS and SVG transitions efficiently.
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
            Build Interactive and Responsive Input Fields with Shadcn Input Group
          </h2>
          <p className="text-foreground/80">
            Combine fields, buttons, icons, and dynamic status badges cleanly with our{" "}
            <strong className="text-foreground">
              Shadcn Input Group components
            </strong>
            , built using React, Tailwind CSS, and Base UI. Simple, highly customizable,
            and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A composable layout primitive that standardizes spacing, alignments, and state-based loading
            indicators inside textual input controls.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Input Group?
          </h2>
          <p className="text-foreground/80">
            Shadcn Input Group is a structured form element composed of{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">InputGroup</code>,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">InputGroupInput</code>, and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">InputGroupAddon</code>. It allows you to align text boxes alongside actions, icons, loaders, or validation states.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re developing search bars with inline key triggers, credit card inputs with validation icon helpers, or real-time document title updates with auto-save indicators, Shadcn Input Group handles the grid flex alignments natively.
          </p>
          <p className="text-foreground/80">
            Input Group components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Search bars with trailing action buttons</li>
            <li>Inputs with inline status icons (loading, validation errors, checkmarks)</li>
            <li>Interactive password inputs with inline eye toggle icons</li>
            <li>Document titlers with auto-saving status loaders</li>
            <li>Monospaced tag inputs with inline add triggers</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Input Groups
          </h2>
          <p className="text-foreground/80">
            Manually adjusting absolute positioning, padding offsets, focus rings, border-radius alignments,
            and flex wrapping for inline addons is repetitive and prone to rendering issues. The Input Group component abstracts these calculations, keeping indicators and buttons neatly aligned with the active text field.
          </p>
          <p className="text-foreground/80">
            By preserving native HTML attributes, it works smoothly with all forms libraries, validation schemes, and React Server Components setups.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Composable layout components for inputs and action addons</li>
            <li>Autosave state tracking with built-in loader animations</li>
            <li>Smooth fade/slide transitions powered by Framer Motion</li>
            <li>Vertical alignment options and customizable size boundaries</li>
            <li>High accessibility with inherited focus management</li>
            <li>Easily styled with standard utility Tailwind CSS classes</li>
            <li>Fully responsive container bounds adapting to desktop and mobile screens</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            The Input Group elements work smoothly with other Shadcn UI components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Tooltip</strong> to display description popups on inline action icons.
            </li>
            <li>
              Use with <strong className="text-foreground">Form</strong> to manage layout orientation and validation flows cleanly.
            </li>
            <li>
              Combine with <strong className="text-foreground">Button</strong> to trigger submit actions directly from inline addon containers.
            </li>
            <li>
              Integrate with <strong className="text-foreground">Badge</strong> to label input states or prefix fields with metadata.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Input Group
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Real-time page title and document name editors</li>
            <li>Dynamic search fields with trailing clear buttons</li>
            <li>Code verification fields with inline countdown indicators</li>
            <li>Credit card payment forms with card brand indicators</li>
            <li>Chat message inputs with trailing send controls</li>
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
            Free Shadcn Input Group Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Input Group components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
