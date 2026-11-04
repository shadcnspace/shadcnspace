import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function StepperData() {
  const faqData = [
    {
      title: "When should I use a Stepper component?",
      content:
        "Steppers are best suited for guided workflows, multi-step forms, configurations, and onboarding flows where users must complete tasks in a specific, linear or semi-linear sequence.",
    },
    {
      title: "Are the stepper step badges interactive?",
      content:
        "Yes, users can click directly on the step badges to navigate back and forth, or they can use the progressive Back/Next controls provided in the interface.",
    },
    {
      title: "Is the Stepper component responsive?",
      content:
        "Yes. The layout is optimized to display labels vertically on desktop and adapts dynamically on mobile. The design utilizes flexible flex layouts and spacing to ensure readability on all screens.",
    },
    {
      title: "How do I add custom validation before moving to the next step?",
      content: (
        <>
          You can easily add step validation logic in the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">handleNext</code> trigger.
          Check if all required inputs for the active step are valid before incrementing the
          active step index.
        </>
      ),
    },
    {
      title: "Does it support custom animation transitions?",
      content: (
        <>
          Yes, using Framer Motion (
          <code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>
          ), you can customize exit and enter animations (e.g. fade, slide, scale) by updating the
          transition and motion properties in the step container.
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
            Build Intuitive Multi-Step Workflows with Shadcn Stepper
          </h2>
          <p className="text-foreground/80">
            Guide your users through sequential processes with our{" "}
            <strong className="text-foreground">
              Shadcn Stepper components
            </strong>
            , built using React, Tailwind CSS, and Framer Motion (
            <code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code>
            ). Simple, highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular animated stepper component that helps structure form wizards, registration flows, and setups into clean, guided step-by-step experiences.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Stepper?
          </h2>
          <p className="text-foreground/80">
            Shadcn Stepper is a structured workflow system that organizes tasks into sequential steps.
            By providing clear visual feedback on active, completed, and upcoming tasks, it prevents
            users from feeling overwhelmed by large volumes of information.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re configuring server infrastructure, finalizing an e-commerce order,
            or registering a new account, Shadcn Stepper provides the progress indicators and transition
            handling out of the box.
          </p>
          <p className="text-foreground/80">
            Stepper components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Account setup and multi-step registration forms</li>
            <li>Checkout screens with shipping, payment, and review steps</li>
            <li>Software configuration and onboarding wizards</li>
            <li>Linear database migration and network setups</li>
            <li>Guided setup procedures and system diagnostics</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Stepper
          </h2>
          <p className="text-foreground/80">
            Managing state, progress connectors, dynamic labels, and animation changes manually
            for every step-based form is time-consuming. The Stepper component abstracts these requirements,
            offering smooth slide animations, icon badges, and controls with minimum code integration.
          </p>
          <p className="text-foreground/80">
            By utilizing Framer Motion for slide transitions, the component gives users immediate visual cues
            when transitioning between sections, elevating the perceived quality of your dashboard workflow.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Interactive step badges showing Active, Completed, and Pending states</li>
            <li>Smooth slide-and-fade step content transitions with Framer Motion</li>
            <li>Progress tracking lines that scale dynamically based on step index</li>
            <li>Custom icon support for each step badge</li>
            <li>Horizontal and vertical layout adaptation for mobile viewports</li>
            <li>Custom back, forward, and reset controls out-of-the-box</li>
            <li>Clean grid alignments mapping descriptors with layout indicators</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            The Stepper layout elements work smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Card</strong> to contain steps and details in an elegant container box.
            </li>
            <li>
              Use with <strong className="text-foreground">Form</strong> and <strong className="text-foreground">Input</strong> fields to validate step contents before moving to the next screen.
            </li>
            <li>
              Combine with <strong className="text-foreground">Badge</strong> to mark steps with optional or required visual tags.
            </li>
            <li>
              Integrate with custom <strong className="text-foreground">Buttons</strong> for next/prev commands matching standard action styles.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Stepper
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Onboarding sequences and user registration screens</li>
            <li>Checkout funnels and multi-step payment operations</li>
            <li>System setup and configuration wizard interfaces</li>
            <li>Survey applications and detailed feedback forms</li>
            <li>Interactive workflow trackers and tutorials</li>
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
            Free Shadcn Stepper Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Stepper components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}

