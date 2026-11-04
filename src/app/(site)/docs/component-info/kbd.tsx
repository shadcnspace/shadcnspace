import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function KbdData() {
  const faqData = [
    {
      title: "What does KBD stand for?",
      content:
        "KBD stands for Keyboard Input Display. It is commonly used to visually represent keyboard shortcuts such as Ctrl + K, ⌘ + P, or Shift + Enter.",
    },
    {
      title: "What is the difference between a KBD component and a Command component?",
      content:
        "KBD component displays keyboard shortcuts like Ctrl + K or ⌘ + P. A Command component lets users search, navigate, and run actions. KBD shows the shortcut, while Command performs the action.",
    },
    {
      title: "When should I use a KBD component?",
      content:
        "Use a KBD component whenever you want to show users a keyboard shortcut, hotkey, or key combination that performs an action inside your application.",
    },
    {
      title: "Can I show Mac and Windows shortcuts together?",
      content:
        "Yes. Many developers display both Mac and Windows shortcuts so users can easily find the correct key combination for their device.",
    },
    {
      title: "Are Shadcn KBD components accessible?",
      content:
        "Yes. Our components use semantic HTML and follow accessibility-friendly practices to ensure keyboard shortcuts are clearly presented.",
    },
    {
      title: "Can I customize the appearance of the KBD component?",
      content:
        "Absolutely. Since the components are built with React and Tailwind CSS, you can adjust colors, spacing, borders, typography, and layouts to match your project.",
    },
    {
      title: "Do KBD components require JavaScript?",
      content:
        "No. Most KBD displays are simple UI elements and can work without additional JavaScript logic.",
    },
    {
      title: "Can I use KBD components inside tooltips?",
      content:
        "Yes. Tooltips are one of the most common places to show shortcuts because users can discover them without cluttering the interface.",
    },
    {
      title: "Can I use KBD components in documentation sites?",
      content:
        "Definitely. Documentation pages often use KBD components to explain navigation shortcuts, commands, and developer workflows.",
    },
    {
      title: "Should I use KBD components in command palettes?",
      content:
        "Yes. Command palettes often rely on keyboard shortcuts, making KBD components a natural way to display available commands.",
    },
    {
      title: "Can I build custom shortcut combinations?",
      content:
        "Yes. You can combine multiple keys and create any shortcut pattern that fits your application's workflow.",
    },
    {
      title: "What is the KBD Generator?",
      content:
        "The KBD Generator is a tool that helps developers create keyboard shortcut combinations visually. Instead of manually writing shortcut markup, you can select keys such as Ctrl, Shift, Alt, or ⌘, preview the result instantly, and copy the generated JSX code directly into your project.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Better Shortcuts with Our Shadcn KBD Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn KBD components are built with React and Tailwind CSS to make keyboard shortcuts <strong className="text-foreground">easy to show</strong> across your application. Whether you&apos;re building a command palette, documentation page, search interface, or developer tool, these components help users <strong className="text-foreground">understand available shortcuts</strong> without reading long instructions.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the KBD Component?
          </h2>
          <p className="text-foreground/80">
            KBD stands for <strong className="text-foreground">Keyboard Input Display</strong> and is commonly represented using the HTML <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">&lt;kbd&gt;</code>{"  "}element. You&apos;ve probably seen it on websites showing shortcuts like <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">⌘ + K</code>, <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">Ctrl + P</code>, or <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">Shift + Enter</code>.
          </p>
          <p className="text-foreground/80">
            Our KBD components make it easy to display these shortcuts in a clean and consistent way. Instead of explaining actions with long text, you can show the exact keys users need to press.
          </p>
          <p className="text-foreground/80">
            Today, many modern applications, documentation sites, and SaaS products use KBD components to help <strong className="text-foreground">users learn shortcuts</strong> naturally while using the product.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How KBD Components Help Developers
          </h2>
          <p className="text-foreground/80">
            When building applications, shortcuts often get added later and end up hidden inside documentation.
          </p>
          <p className="text-foreground/80">
            All these Shadcn KBD components solve this by <strong className="text-foreground">making shortcuts visible</strong>{" "}right where users need them. Whether it&apos;s a search box, button tooltip, command menu, or settings page, you can show key combinations clearly and consistently.
          </p>
          <p className="text-foreground/80">
            This improves usability while helping users discover <strong className="text-foreground">faster ways to interact</strong> with your application.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Built with React and Tailwind CSS</li>
            <li>Clean keyboard shortcut styling</li>
            <li>Works for Mac and Windows shortcuts</li>
            <li>Easy to customize and extend</li>
            <li>Lightweight and simple to implement</li>
            <li>Supports single keys and key combinations</li>
            <li>Responsive across desktop and mobile layouts</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Ready-to-Use Shadcn KBD Examples
          </h2>
          <p className="text-foreground/80">
            Our Shadcn KBD components come in <strong className="text-foreground">different styles</strong>{" "} &amp; variations to help you display keyboard shortcuts across buttons, search inputs, tooltips, documentation pages, and developer tools.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                KBD in Button
              </h3>
              <p className="text-foreground/80">
                Display keyboard shortcuts directly inside buttons so users immediately know faster ways to perform actions without opening documentation.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                KBD Group
              </h3>
              <p className="text-foreground/80">
                Show multiple keys together such as <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">Ctrl + Shift + P</code> or <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">⌘ + K</code> using a clean grouped layout that is easy to read.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                KBD in Tooltip
              </h3>
              <p className="text-foreground/80">
                Add shortcut hints inside tooltips to help users discover actions naturally while hovering over buttons and icons.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                KBD in Search Input
              </h3>
              <p className="text-foreground/80">
                Perfect for search bars and command menus where you want to highlight shortcuts like <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">⌘ + K</code> or <code className="rounded bg-muted px-1 py-0.5 text-sm font-mono">Ctrl + K</code>.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                KBD Generator
              </h3>
              <p className="text-foreground/80">
                Generate keyboard shortcut combinations visually and quickly copy the code into your project. Useful for documentation and developer tools.
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
            Our Shadcn KBD components work naturally with the rest of the Shadcn ecosystem.
          </p>
          <p className="text-foreground/80">
            Use them inside{" "}
            <a
              href="/components/button"
              target="_blank"
              className="text-primary underline"
            >
              Button
            </a>{" "}
            components to display shortcuts, pair them with{" "}
            <a
              href="/components/tooltip"
              target="_blank"
              className="text-primary underline"
            >
              Tooltip
            </a>{" "}
            for helpful keyboard hints, or place them inside{" "}
            <a
              href="/components/dialog"
              target="_blank"
              className="text-primary underline"
            >
              Dialog
            </a>{" "}
            and{" "}
            <a
              href="/components/command"
              target="_blank"
              className="text-primary underline"
            >
              Command
            </a>{" "}
            interfaces for a familiar command palette experience.
          </p>
          <p className="text-foreground/80">
            They also fit nicely within{" "}
            <a
              href="/components/card"
              target="_blank"
              className="text-primary underline"
            >
              Card
            </a>
            ,{" "}
            <a
              href="/components/input"
              target="_blank"
              className="text-primary underline"
            >
              Input
            </a>
            ,{" "}
            <a
              href="/components/dropdown-menu"
              target="_blank"
              className="text-primary underline"
            >
              Dropdown Menu
            </a>
            , and{" "}
            <a
              href="/components/popover"
              target="_blank"
              className="text-primary underline"
            >
              Popover
            </a>{" "}
            components where keyboard guidance improves usability.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using These KBD Components
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep shortcut labels short and easy to understand.</li>
            <li>Use familiar key combinations whenever possible.</li>
            <li>Display shortcuts near the related action.</li>
            <li>Maintain consistent styling across the application.</li>
            <li>Show platform-specific keys when necessary.</li>
            <li>Avoid overwhelming users with too many shortcuts at once.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Special Component: Shadcn KBD Generator
          </h2>
          <p className="text-foreground/80">
            Our Shadcn KBD Generator helps you quickly <strong className="text-foreground">create keyboard shortcut combinations</strong> without manually writing each key. Simply select modifier keys, add a letter or shortcut, and instantly see the final result.
          </p>
          <p className="text-foreground/80">
            You can preview the shortcut live and copy the generated JSX code directly into your project. It is especially useful when building documentation, command palettes, help pages, developer tools, or applications that rely on keyboard shortcuts.
          </p>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of KBD Components
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Command palette triggers</li>
            <li>Search shortcut indicators</li>
            <li>Documentation pages</li>
            <li>Developer tools</li>
            <li>Settings screens</li>
            <li>Productivity applications</li>
            <li>Text editors and dashboards</li>
            <li>Help and onboarding sections</li>
          </ul>
        </section>

        {/* section - 10 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn KBD components are simple React components that can be added anywhere in your application.
          </p>
          <p className="text-foreground/80">
            You can place them inside buttons, tooltips, dialogs, menus, cards, and forms without additional setup. Since they&apos;re built using standard React and Tailwind CSS patterns, customization is straightforward and <strong className="text-foreground">fits naturally</strong> into existing projects.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn KBD Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn KBD components are free to use. You can <strong className="text-foreground">copy, customize, and integrate</strong> them into personal projects, client work, SaaS products, and internal tools without hidden restrictions.
          </p>
          <p className="text-foreground/80">
            They are lightweight, accessible, and easy to adapt to your own design system.
          </p>
        </section>
      </div>
    </>
  );
}

