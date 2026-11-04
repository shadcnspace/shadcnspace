import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AppleDockData() {
  const faqData = [
    {
      title: "How does Apple Dock handle accessibility?",
      content: (
        <>
          The Apple Dock is designed for all users, including those who use
          keyboard navigation to access the menu, focus outlines, and ARIA
          roles. Users can move through dock items using arrow keys, the tab
          key, or screen readers.
        </>
      ),
    },
    {
      title: "Can I use Apple Dock vertically or horizontally?",
      content: (
        <>
          Yes! You can position the dock as a vertical sidebar or a horizontal
          footer/header. Tailwind CSS makes it simple to control positioning and
          the spacing, alignment, and orientation.
        </>
      ),
    },
    {
      title: "Is it possible to add content previews or tooltips?",
      content: (
        <>
          Sure! Each item in the dock can show panels, tooltips, or submenus
          when you hover over or click on them. You can even use React
          components for previews and other interactive stuff.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Apple Dock Component?
          </h2>
          <p className="text-foreground/80">
            Apple Dock is a component that lets you add a floating menu to your
            application. With the Apple Dock component, you can create
            navigation menus that mimic the MacOS experience. Using the Apple
            Dock menu, you can keep the interface clean while offering users
            access to important sections of the application.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use This Component
          </h2>
          <p className="text-foreground/80">
            Developers use the apple dock component because of its ease of use
            while keeping it visually appealing.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Create a sleek and intuitive navigation experience.</li>
            <li>Display active sections or pages of the application.</li>
            <li>Maintain screen space while usability is prioritized.</li>
            <li>Incorporate motion and hover effects.</li>
            <li>Use React, Tailwind CSS, and Next.js integration.</li>
          </ul>
          <p className="text-foreground/80">
            This component works especially well on dashboards, portfolios, SaaS
            tools, applications, and anything else that requires quick access to
            lots of areas.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Floating & Interactive:
              </strong>{" "}
              The dock is a floating menu that can interact with hover, click,
              or focus.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Expandable Sections:
              </strong>{" "}
              Each item in the dock can show a menu, sub-menu, or tooltip.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Icons & Text:
              </strong>{" "}
              Clear modern navigation can be accomplished with labels of your
              choice combined with icons.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Smooth Animations:
              </strong>{" "}
              Tailwind CSS transitions handle hover, scaling, and reveal
              effects.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Custom Orientation:
              </strong>{" "}
              The dock can be used as a sidebar with vertical orientation or as
              a footer/header with horizontal layout.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Lightweight & Accessible:
              </strong>{" "}
              The dock offers focus management, keyboard navigation, and ARIA
              roles.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Apple Dock
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              To avoid clutter, limit how many items you put in your dock.
            </li>
            <li>
              Use the same style for icons throughout your dock, and use text
              labels for clarity, and to help users identify icons easily.
            </li>
            <li>Use smooth transitions when hovering around your dock.</li>
            <li>
              Keep your dock near important items that you need to access
              frequently.
            </li>
            <li>
              Use expanded panels for quick previews, and avoid large content
              blocks.
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Apple Dock
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Dashboards that have collapsible navigation panels</li>
            <li>
              Showcase or portfolio websites that have sections to showcase
              individual projects
            </li>
            <li>
              SaaS applications that have sections for multiple tools or
              features
            </li>
            <li>Admin dashboards that have frequently used actions</li>
            <li>Interactive landing pages that have content previews</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Apple Dock integrates well with the following elements:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Cards or content panels that serve as previews</li>
            <li>Buttons or icons that serve as actionable items</li>
            <li>Tooltips, modals, or dialog components</li>
            <li>Tabs, accordions, or sections within forms</li>
            <li>Badges or indicators that show status</li>
          </ul>
          <p className="text-foreground/80">
            Since the component lives in your codebase, you can fully customize
            styling, animations, and behavior to fit your design system.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
