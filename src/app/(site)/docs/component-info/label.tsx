import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function LabelData() {
  const faqData = [
    {
      title: "Why should I use labels instead of placeholders?",
      content:
        "Placeholders disappear once users start typing. Labels remain visible and help users understand what each field is for at all times.",
    },
    {
      title: "Can I use labels with checkboxes and switches?",
      content:
        "Yes. Labels work especially well with checkboxes, switches, and radio buttons because they make actions easier to understand.",
    },
    {
      title: "Do labels improve accessibility?",
      content:
        "Yes. Properly connected labels help screen readers identify form fields and improve accessibility for all users.",
    },
    {
      title: "Can I customize the styling of the labels?",
      content:
        "Absolutely. You can change typography, spacing, colors, and layouts using Tailwind CSS to match your design system.",
    },
    {
      title: "Should every input have a label?",
      content:
        "In most cases, yes. Labels provide context and make forms easier to use, especially for accessibility and mobile users.",
    },
    {
      title: "Can I use floating labels in React forms?",
      content:
        "Yes. Floating labels work well in modern forms and can be easily combined with React and Tailwind CSS.",
    },
    {
      title: "Do these label components support dark mode?",
      content:
        "Yes. All examples can be used in both light and dark themes.",
    },
    {
      title: "Can I use these label components in Next.js projects?",
      content:
        "Yes. They work with Next.js and any React-based framework.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build More User-Friendly Web Projects with Shadcn Labels
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Label components are designed to create clear relationships between forms, fields, buttons, checkboxes and their descriptions. They help users move through web apps or sites confidently while keeping your interface organized and easy to understand.
          </p>
          <p className="text-foreground/80">
            Built with React, Tailwind CSS, and Shadcn UI, our label components are <strong className="text-foreground">simple to customize</strong> and fit naturally into modern web applications.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Label?
          </h2>
          <p className="text-foreground/80">
            A Shadcn Label is a component used to describe an input, checkbox, switch, textarea, or any form field. It gives users context about what information is expected before they interact with any field or component.
          </p>
          <p className="text-foreground/80">
            Labels are one of the simplest parts of a form, but they help <strong className="text-foreground">improve usability, accessibility, and overall user experience</strong>.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Shadcn Label Helps Developers
          </h2>
          <p className="text-foreground/80">
            When building forms, it is easy to focus only on inputs and validations. However, users first read the label before entering any information.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Label components help developers create forms that feel structured and easy to follow. Instead of writing custom label styles repeatedly, you can <strong className="text-foreground">use ready-made examples</strong> and focus on building the actual functionality of your application.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clean and easy-to-read label styles</li>
            <li>Works with inputs, checkboxes, switches, and textareas</li>
            <li>Built with React and Tailwind CSS</li>
            <li>Easy to customize and extend</li>
            <li>Supports light and dark mode</li>
            <li>Responsive across screen sizes</li>
            <li>Copy and use directly in your project</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            6 Shadcn Label Examples for Modern Web Projects
          </h2>
          <p className="text-foreground/80">
            These examples show different ways labels can be used across forms, settings pages, and application interfaces.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Label With Switch
              </h3>
              <p className="text-foreground/80">
                Help users understand what a toggle controls before enabling or disabling a feature.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Checkbox Label
              </h3>
              <p className="text-foreground/80">
                Pair labels with checkboxes to clearly explain options, preferences, and settings. This pattern is commonly used in registration forms and account settings.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Label With Input
              </h3>
              <p className="text-foreground/80">
                A simple combination of a label and input field. Perfect for login forms, contact forms, and user profile pages.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Label With Badge
              </h3>
              <p className="text-foreground/80">
                Add a badge alongside the label to highlight information such as &quot;New&quot;, &quot;Required&quot;, or &quot;Optional&quot; without adding extra text.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Floating Label
              </h3>
              <p className="text-foreground/80">
                A modern form pattern where the label moves smoothly as users interact with the input field, saving space while keeping context visible.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Label With Textarea
              </h3>
              <p className="text-foreground/80">
                Useful when collecting longer information such as feedback, comments, notes, or support requests.
              </p>
            </div>
          </div>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Other Shadcn Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Label components work naturally with the rest of your shadcn ecosystem.
          </p>
          <p className="text-foreground/80">
            Use them alongside{" "}
            <a
              href="/components/input"
              target="_blank"
              className="text-primary underline"
            >
              Inputs
            </a>
            ,{" "}
            <a
              href="/components/textarea"
              target="_blank"
              className="text-primary underline"
            >
              Textareas
            </a>
            ,{" "}
            <a
              href="/components/checkbox"
              target="_blank"
              className="text-primary underline"
            >
              Checkboxes
            </a>
            ,{" "}
            <a
              href="/components/radio-group"
              target="_blank"
              className="text-primary underline"
            >
              Radio Groups
            </a>
            ,{" "}
            <a
              href="/components/select"
              target="_blank"
              className="text-primary underline"
            >
              Selects
            </a>
            ,{" "}
            <a
              href="/components/switch"
              target="_blank"
              className="text-primary underline"
            >
              Switches
            </a>
            , Forms, and{" "}
            <a
              href="/components/card"
              target="_blank"
              className="text-primary underline"
            >
              Cards
            </a>{" "}
            to create consistent form experiences throughout your application.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a simple contact form or a complex dashboard, labels help keep everything organized and easier to understand.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Label
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep label text short and clear.</li>
            <li>Always place labels close to the related field.</li>
            <li>Use meaningful descriptions instead of generic names.</li>
            <li>Avoid relying only on placeholders for instructions.</li>
            <li>Maintain consistent spacing throughout forms.</li>
            <li>Test forms on both desktop and mobile devices.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Label
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Login and signup forms</li>
            <li>User profile pages</li>
            <li>Settings panels</li>
            <li>Contact forms</li>
            <li>Feedback forms</li>
            <li>Admin dashboards</li>
            <li>Checkout forms</li>
            <li>Survey and registration forms</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Label examples are built with React and Tailwind CSS, making them easy to add to existing projects.
          </p>
          <p className="text-foreground/80">
            You can <strong className="text-foreground">copy the code, customize</strong> the styling, and combine labels with any form component without changing your existing workflow.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Label Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Label components are free to use. You can copy, customize, and use them in personal or commercial projects without hidden restrictions. They are clean, flexible, and designed to <strong className="text-foreground">fit naturally into modern React applications</strong>.
          </p>
        </section>
      </div>
    </>
  );
}

