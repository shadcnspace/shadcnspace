import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ItemData() {
  const faqData = [
    {
      title: "What is an Item component?",
      content:
        "An Item component is a flexible, semantic list or group element used to display content layouts like user profiles, settings options, and activity feeds. It includes subcomponents for media, content, headers, footers, actions, and separators.",
    },
    {
      title: "Does it support custom media like avatars or icons?",
      content:
        "Yes. The ItemMedia subcomponent can render custom elements like avatars, icons, or text initials, and includes preset size classes (xs, sm, default) to fit seamlessly into any item layout.",
    },
    {
      title: "Can I add interactive actions to an Item?",
      content:
        "Absolutely. The ItemActions subcomponent is designed to host buttons, dropdown triggers, badges, or toggles, aligning them neatly on the trailing side of the item.",
    },
    {
      title: "Can I customize the sizes and borders?",
      content:
        "Yes, the Item component uses class-variance-authority (cva) with size variants (xs, sm, default) and visual borders/backgrounds (default, outline, muted) to adjust padding, gap, and styling.",
    },
    {
      title: "How does ItemGroup manage spacing?",
      content:
        "ItemGroup acts as a wrapper container for multiple Item components, dynamically adjusting the vertical gap spacing based on the child item sizes (e.g., smaller gaps for compact sizes).",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Structured and Accessible Lists with Shadcn Item
          </h2>
          <p className="text-foreground/80">
            Keep your lists and feeds organized with our{" "}
            <strong className="text-foreground">
              Shadcn Item components
            </strong>
            , built using React, Tailwind CSS, and Base UI. Simple,
            highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular list item layout component that helps structure lists, activity feeds,
            and action panels into neat, responsive layouts.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Item?
          </h2>
          <p className="text-foreground/80">
            Shadcn Item is a structured layout system composed of{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ItemGroup
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              Item
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ItemMedia
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ItemContent
            </code>
            , and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              ItemActions
            </code>
            . It enables developers to align media indicators, descriptions, and action buttons cleanly.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a user listing, settings panel,
            notification hub, or navigation sidebar, Shadcn Item provides the
            spacing and responsive layout configuration out of the box.
          </p>
          <p className="text-foreground/80">
            Item components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>User directories and profile detail lists</li>
            <li>Settings list items with switch and badge actions</li>
            <li>Message items and social feed cards</li>
            <li>Interactive menu options and dropdown rows</li>
            <li>Notification item trays</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Item
          </h2>
          <p className="text-foreground/80">
            Setting up flex alignment, gap spacing, and text truncation properties manually for every list item is time-consuming. The Item component abstracts these layout requirements, supporting vertical sizing variants and horizontal alignments with zero manual styling.
          </p>
          <p className="text-foreground/80">
            By utilising Base UI's render primitive, it allows developers to switch underlying tags (e.g. to anchors or buttons) easily while maintaining all CSS styles and accessibility attributes.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Vertical sizing variants (xs, sm, default)</li>
            <li>Visual styling variants (default, outline, muted)</li>
            <li>Support for icons, avatars, and custom media wrappers</li>
            <li>Flexible action containers for buttons, dropdowns, and badges</li>
            <li>Semantic markup with automatic layout role attributes</li>
            <li>Clean grid and column setups for structured dashboards</li>
            <li>Modular elements including headers, footers, and separators</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Item Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore practical list layouts designed for modern dashboards
            and feeds. From user listings with profile avatars to model display cards,
            these examples cover the core implementation setups.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Team Members List
              </h3>
              <p className="text-foreground/80">
                A clean layout showing user avatars, emails, custom role badges,
                and menu action dropdown buttons.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Model Grid Cards
              </h3>
              <p className="text-foreground/80">
                A grid item setup showcasing preview panels with colorful background blobs, titles, and descriptions.
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
            The Item layout elements work smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Avatar</strong> to show profile pictures inside media sections.
            </li>
            <li>
              Use with <strong className="text-foreground">Badge</strong> to mark statuses, tags, or item indicators.
            </li>
            <li>
              Combine with <strong className="text-foreground">Dropdown Menu</strong> to provide rich contextual actions.
            </li>
            <li>
              Integrate with text inputs or checkbox elements for list selections.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Item
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Team list and user directory interfaces</li>
            <li>Activity logs and social feed lists</li>
            <li>Settings list items and collapsible controls</li>
            <li>Command menus and navigation sidebars</li>
            <li>Product comparison layouts</li>
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
            Free Shadcn Item Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Item components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}