import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CodeBlockData() {
  const faqData = [
    {
      title: "Can I add a copy button to code blocks?",
      content:
        "Yes. Many developers add copy-to-clipboard functionality so users can quickly copy commands and code snippets without manually selecting text.",
    },
    {
      title: "Does Shadcn Code Block support multiple programming languages?",
      content:
        "Yes. You can display examples for JavaScript, TypeScript, React, Next.js, HTML, CSS, Bash, JSON, and many other languages.",
    },
    {
      title: "Can I show multiple files inside one code example?",
      content:
        "Yes. Multi-file code blocks allow users to switch between different files using tabs, making larger examples easier to understand.",
    },
    {
      title: "How do highlighted lines work?",
      content:
        "Highlighted lines help draw attention to important parts of a code example. This is useful when explaining updates, changes, or key implementation details.",
    },
    {
      title: "Is Shadcn Code Block responsive?",
      content:
        "Yes. The component adapts well across desktop, tablet, and mobile devices. Long code snippets can be placed inside scrollable containers when needed.",
    },
    {
      title: "Can I use Code Blocks in documentation websites?",
      content:
        "Absolutely. Documentation sites are one of the most common use cases because code blocks make examples easier to read and follow.",
    },
    {
      title: "Does it support dark mode?",
      content:
        "Yes. The component can be styled for both light and dark themes using Tailwind CSS and your existing design system.",
    },
    {
      title: "Should I use tabs or separate code blocks for different languages?",
      content:
        "If you want users to compare implementations, language tabs usually provide a cleaner experience. Separate code blocks work better when examples need additional explanation.",
    },
    {
      title: "Can I show terminal commands with Code Blocks?",
      content:
        "Yes. Installation commands, CLI examples, and terminal outputs are commonly displayed using dedicated command-style code blocks.",
    },
    {
      title: "Can I use Code Blocks inside blogs and tutorials?",
      content:
        "Yes. They work well for technical blogs, tutorials, learning platforms, and walkthroughs where code examples are part of the content.",
    },
    {
      title: "What's the difference between a Code Block and a Code Editor?",
      content:
        "A Code Block is mainly for displaying code. A Code Editor allows users to write, edit, and interact with code directly inside the interface.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Show Code Clearly with Shadcn Code Block Components
          </h2>
          <p className="text-foreground/80">
            Whether you&apos;re creating documentation, tutorials, product guides, or developer tools, a well-designed code block makes your <strong className="text-foreground">code examples easier to read</strong> and follow. Our Shadcn Code Block components help you present code clearly while keeping the overall interface clean and consistent.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Code Block?
          </h2>
          <p className="text-foreground/80">
            Shadcn Code Block Components are reusable UI components used to <strong className="text-foreground">display code snippets</strong>, terminal commands, installation steps, and developer examples inside React applications. Built with React, Tailwind CSS, and modern UI patterns, they help present technical content in a clear and structured way.
          </p>
          <p className="text-foreground/80">
            They are commonly used in documentation websites, component libraries, developer tools, tutorials, and product guides where code needs to be easy to read and copy.
          </p>
          <p className="text-foreground/80">
            Built with React, Next.js, Tailwind CSS, and modern UI patterns, these components are <strong className="text-foreground">useful for documentation sites</strong>, developer portals, blogs, SaaS products, and educational platforms.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Code Block
          </h2>
          <p className="text-foreground/80">
            Every developer has copied code from a tutorial, documentation page, or GitHub repository. When code examples are difficult to read, users often miss important details or make mistakes while implementing them.
          </p>
          <p className="text-foreground/80">
            They also help <strong className="text-foreground">maintain consistency</strong> across your documentation and product pages without spending time building code displays from scratch.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clean and readable code presentation</li>
            <li>Supports multiple programming languages</li>
            <li>Copy-to-clipboard functionality</li>
            <li>Multi-file code examples</li>
            <li>Line highlighting support</li>
            <li>Scrollable layouts for long snippets</li>
            <li>Responsive design for all screen sizes</li>
            <li>Dark mode and light mode support</li>
            <li>Easy Tailwind CSS customization</li>
            <li>Works with React and Next.js projects</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Types of Shadcn Code Block Examples
          </h2>
          <p className="text-foreground/80">
            We provide several Code Block examples for different developer workflows and documentation needs.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Default Code editor component
              </h3>
              <p className="text-foreground/80">
                A simple and clean code snippet or editor UI layout for displaying examples, documentation, and tutorials.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Scrollable Code Block
              </h3>
              <p className="text-foreground/80">
                Perfect for larger code snippets that would otherwise take up too much space on the page.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Code Block with Custom Background
              </h3>
              <p className="text-foreground/80">
                Use different backgrounds to match your branding or separate code examples from surrounding content.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Code Block with Highlighted Line
              </h3>
              <p className="text-foreground/80">
                Highlight important lines of code to help users focus on specific changes or instructions.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Multi-File Code Block
              </h3>
              <p className="text-foreground/80">
                Display multiple files inside tabs, making it easier to showcase complete project structures and examples.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Code Block with Language Tabs
              </h3>
              <p className="text-foreground/80">
                Allow users to switch between JavaScript, TypeScript, React, Next.js, and other language examples.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Install Command Code Block
              </h3>
              <p className="text-foreground/80">
                Designed specifically for npm, pnpm, yarn, and bun installation commands with copy functionality.
              </p>
            </div>
          </div>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Component
          </h2>
          <p className="text-foreground/80">
            Shadcn Code Block works naturally with other components across your application.
          </p>
          <p className="text-foreground/80">
            Use it inside{" "}
            <a
              href="/components/card"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Card
            </a>{" "}
            for documentation sections, pair it with{" "}
            <a
              href="/components/tabs"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Tabs
            </a>{" "}
            for language switching, and combine it with{" "}
            <a
              href="/components/accordion"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Accordion
            </a>{" "}
            for expandable tutorials.
          </p>
          <p className="text-foreground/80">
            You can also use it alongside{" "}
            <a
              href="/components/command"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Command
            </a>
            ,{" "}
            <a
              href="/components/dialog"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Dialog
            </a>
            ,{" "}
            <a
              href="/components/tooltip"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Tooltip
            </a>
            ,{" "}
            <a
              href="/components/scroll-area"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Scroll Area
            </a>
            , and{" "}
            <a
              href="/components/button"
              target="_blank"
              className="text-primary underline"
            >
              Shadcn Button
            </a>{" "}
            to create complete developer experiences and interactive documentation pages.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Code Block
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep examples short and focused when possible.</li>
            <li>Highlight only the most important lines.</li>
            <li>Add language labels for better clarity.</li>
            <li>Use copy buttons for installation commands.</li>
            <li>Split large examples into multiple files using tabs.</li>
            <li>Provide comments when explaining complex logic.</li>
            <li>Test examples before publishing them.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Code Blocks
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Developer documentation</li>
            <li>Product setup guides</li>
            <li>Installation instructions</li>
            <li>API examples</li>
            <li>Tutorial websites</li>
            <li>Blog articles</li>
            <li>SaaS onboarding guides</li>
            <li>Open-source project documentation</li>
            <li>Internal developer portals</li>
            <li>Learning platforms</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            All these Shadcn Code Block components are designed to work smoothly inside React and Next.js applications.
          </p>
          <p className="text-foreground/80">
            You can easily <strong className="text-foreground">display code snippets</strong>, installation commands, API examples, and project structures while keeping full control over styling and behavior. Since the components are built with Tailwind CSS, customizing colors, spacing, layouts, and interactions feels straightforward.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Code Block Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Code Block components are free to use. You can copy, customize, and integrate them into personal projects, client work, open-source applications, or commercial products without hidden restrictions.
          </p>
        </section>
      </div>
    </>
  );
}

