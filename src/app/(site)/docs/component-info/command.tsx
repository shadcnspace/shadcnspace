import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CommandData() {
  const faqData = [
    {
      title: "What's the difference between Search and Command?",
      content:
        "Search is mainly used to find content, while Command can both find and perform actions. A command menu can search pages, trigger actions, open dialogs, navigate routes, or execute workflows.",
    },
    {
      title: "What is the purpose of a shadcn command palette?",
      content:
        "This command palette helps users quickly find actions, pages, settings, or resources through a searchable interface. It reduces navigation time and improves productivity.",
    },
    {
      title: "How do keyboard shortcuts work with command menus?",
      content:
        "Most command palettes can be opened using shortcuts like Ctrl + K or Cmd + K. Once opened, users can search and navigate results using the keyboard.",
    },
    {
      title: "Can I use command components in Next.js projects?",
      content:
        "Yes. Shadcn Command works perfectly with Next.js applications and integrates easily with client-side or server-side data.",
    },
    {
      title: "Is Shadcn Command accessible?",
      content:
        "Yes. It supports keyboard navigation, focus management, and accessibility-friendly interaction patterns to provide a better experience for all users.",
    },
    {
      title: "Can I load command results from an API?",
      content:
        "Yes. Many developers connect command menus to APIs, databases, or search services to display dynamic results based on user input.",
    },
    {
      title: "How do I organize a large number of commands?",
      content:
        "Group commands into categories such as Navigation, Actions, Settings, Teams, or Resources. This makes the menu easier to scan and use.",
    },
    {
      title: "Can I show icons and descriptions inside commands?",
      content:
        "Yes. Command items can include icons, descriptions, keyboard shortcuts, badges, and other supporting content to improve readability.",
    },
    {
      title: "Should command palettes replace navigation menus?",
      content:
        "No. Command palettes work best as a companion to navigation. They provide a faster way for experienced users to access features while traditional navigation remains available.",
    },
    {
      title: "Can command menus handle large datasets?",
      content:
        "Yes. With proper filtering, virtualization, and API-driven results, command menus can comfortably work with thousands of items while maintaining good performance.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Fast Search Menus and Command Palettes with Shadcn Command
          </h2>
          <p className="text-foreground/80">
            Discover our Shadcn Command components <strong className="text-foreground">designed for searchable menus</strong>, keyboard shortcuts, quick actions, and command palette experiences built with React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a dashboard, admin panel, documentation site, or productivity app, these command components help users find actions quickly without navigating through multiple screens.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Command?
          </h2>
          <p className="text-foreground/80">
            Shadcn Command is a search-driven component that allows users to <strong className="text-foreground">quickly find pages</strong>, actions, settings, files, or commands from a single interface. Instead of clicking through menus, users can search and instantly access what they need.
          </p>
          <p className="text-foreground/80">
            Built using React, Tailwind CSS, and modern Base UI primitives, it helps create fast and keyboard-friendly experiences inside web applications.
          </p>
          <p className="text-foreground/80">Key Highlights:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Search and filter items in real time</li>
            <li>Supports keyboard shortcuts and navigation</li>
            <li>Works well in dashboards, admin panels, and SaaS apps</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Shadcn Command is Useful
          </h2>
          <p className="text-foreground/80">
            When an application grows, navigation can become difficult. Users may have dozens of pages, actions, settings, or resources to manage. A command menu gives them a <strong className="text-foreground">faster way to reach anything</strong>{" "}without hunting through menus.
          </p>
          <p className="text-foreground/80">
            Many developers first notice this pattern in tools like Notion, GitHub, VS Code, or Linear. Press a shortcut, start typing, and instantly jump to the right place.
          </p>
          <p className="text-foreground/80">Benefits of Using Command:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Helps users navigate faster</li>
            <li>Reduces clicks inside large applications</li>
            <li>Improves keyboard accessibility</li>
            <li>Makes search feel more natural</li>
            <li>Great for power users and frequent actions</li>
            <li>Easy to customize with your own data</li>
            <li>Works with both static and dynamic content</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Command components include everything needed to build modern search-driven experiences.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Real-time search filtering</li>
            <li>Keyboard shortcut support</li>
            <li>Command grouping and categories</li>
            <li>Custom icons and descriptions</li>
            <li>Scrollable command lists</li>
            <li>Responsive layouts</li>
            <li>Dark mode support</li>
            <li>Easy React integration</li>
            <li>Accessible keyboard navigation</li>
            <li>Works with large datasets</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Command Variants
          </h2>
          <p className="text-foreground/80">
            Explore these Shadcn Command examples and variations designed for different use cases.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Shortcut Menu Command</h3>
              <p className="text-foreground/80">A simple command palette designed for quick actions, navigation, and keyboard shortcuts.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Scrollable Command</h3>
              <p className="text-foreground/80">Ideal for displaying large collections of searchable items inside a fixed-height container.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Command Palette</h3>
              <p className="text-foreground/80">A modern command palette inspired by popular productivity tools and developer applications.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Team Member Search Command</h3>
              <p className="text-foreground/80">Quickly search and access team members, users, collaborators, and workspace contacts.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Developer Actions Command</h3>
              <p className="text-foreground/80">Built for admin panels, developer tools, project management systems, and internal applications.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Search Files Command</h3>
              <p className="text-foreground/80">Find files, folders, documents, and project resources from a single search interface.</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Filter Search Command</h3>
              <p className="text-foreground/80">Combine search and filtering capabilities to help users narrow down results more efficiently.</p>
            </div>
          </div>
          <p className="text-foreground/80">
            All these command components work especially well in dashboards, admin panels, blog sites, and productivity tools where quick navigation and keyboard-driven actions improve the overall UX.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            One of the best parts about Shadcn Command is how easily it fits into existing interfaces. You can use it as a standalone command palette or combine it with other components to create powerful web apps.
          </p>
          <p className="text-foreground/80">
            Use them with <a href="/components/dialog" target="_blank" className="text-primary underline hover:opacity-80">Dialog</a> to create global command palettes, <a href="/components/input" target="_blank" className="text-primary underline hover:opacity-80">Input</a> for searchable experiences, and <a href="/components/card" target="_blank" className="text-primary underline hover:opacity-80">Card</a> for structured command layouts. Pair them with <a href="/components/scroll-area" target="_blank" className="text-primary underline hover:opacity-80">Scroll Area</a> when working with long result lists, and <a href="/components/avatar" target="_blank" className="text-primary underline hover:opacity-80">Avatar</a> for team member or user search interfaces.
          </p>
          <p className="text-foreground/80">
            These combinations help create cleaner and more organized search experiences inside React applications.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Command Usage Tips
          </h2>
          <p className="text-foreground/80">
            A few small improvements can make command menus much easier to use.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Group similar commands together.</li>
            <li>Show keyboard shortcuts where possible.</li>
            <li>Use meaningful command names.</li>
            <li>Keep search results relevant.</li>
            <li>Prioritize frequently used actions.</li>
            <li>Add icons for visual recognition.</li>
            <li>Support both keyboard and mouse interactions.</li>
            <li>Include loading states for API-based results.</li>
            <li>Test with real application data.</li>
            <li>Make the shortcut discoverable for users.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Command
          </h2>
          <p className="text-foreground/80">
            Shadcn Command works well across many types of projects.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Admin dashboards</li>
            <li>SaaS platforms</li>
            <li>Team collaboration tools</li>
            <li>Documentation websites</li>
            <li>Internal company tools</li>
            <li>File management systems</li>
            <li>CRM applications</li>
            <li>Project management platforms</li>
            <li>Developer tools</li>
            <li>Knowledge bases</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            This Shadcn Command component is designed to work naturally with React and Next.js applications.
          </p>
          <p className="text-foreground/80">
            You can manage commands using local state, API data, server actions, or database-driven content. Since the component is highly composable, it&apos;s easy to <strong className="text-foreground">connect search results</strong>, actions, navigation routes, and user data.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a simple search menu or a full command palette, the setup remains straightforward and easy to maintain.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Command
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Command components are free to use in personal and commercial projects. They are clean, accessible, easy to customize, and ready to fit into modern React, Next.js, Tailwind CSS, Base UI applications.
          </p>
        </section>
      </div>
    </>
  );
}
