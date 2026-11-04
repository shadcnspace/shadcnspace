import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ComboboxData() {
  const faqData = [
    {
      title: "Can I use Combobox with large datasets?",
      content:
        "Yes. You can use local filtering for smaller lists or server-side search with pagination for large datasets. It also supports virtualization for better performance.",
    },
    {
      title: "Does it support multi-select with tags?",
      content:
        "Yes. You can enable multi-select mode where selected items appear as removable tags or badges inside the input field.",
    },
    {
      title: "Can users create new options?",
      content:
        "Yes. The component supports creatable options. If a value does not exist in the list, users can add it dynamically.",
    },
    {
      title: "Is it accessible for keyboard users?",
      content:
        "Yes. It follows ARIA combobox standards. Users can navigate using arrow keys, select using Enter, and close using Esc.",
    },
    {
      title: "Can I control the open state manually?",
      content:
        "Yes. You can use controlled mode to manage both selected value and open state using React state.",
    },
    {
      title: "Does it work inside modals or dialogs?",
      content:
        "Yes. It works smoothly inside dialogs, popovers, cards, and form layouts without layout issues.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Boost your forms and filters with combobox variants crafted using{" "}
            <a href="https://react.dev/" target="_blank" className="text-primary underline">React</a> and <a href="https://tailwindcss.com/" target="_blank" className="text-primary underline">Tailwind CSS</a>, with smooth motion support for clean open
            and close animations.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Combobox?
          </h2>
          <p className="text-foreground/80">
            A Combobox is a smart input field that allows users to type and
            select options from a list.
          </p>
          <p className="text-foreground/80">
            It combines two things:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>An input field</li>
            <li>A dropdown list of options</li>
          </ul>
          <p className="text-foreground/80">
            Instead of forcing users to scroll through long dropdown lists, a
            combobox allows them to type and filter options instantly.
          </p>
          <p className="text-foreground/80">
            For example, if you have 200 cities in a list, a simple dropdown becomes
            difficult to use. With a combobox, users just type “New” and
            instantly see “NewYork”.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Combobox follows the proper ARIA combobox pattern,
            meaning it supports accessibility, keyboard navigation, and
            structured list control. It works smoothly in modern React and
            Next.js applications.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Combobox
          </h2>
          <p className="text-foreground/80">
            Let’s be practical. Dropdowns work well for 5–10 options. But once
            the list grows bigger, users start scrolling endlessly. Combobox
            solves this problem.
          </p>
          <p className="text-foreground/80">
            Developers use Shadcn Combobox because:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>It makes large datasets easy to search</li>
            <li>It improves form usability</li>
            <li>It supports both single and multi-select</li>
            <li>It works well with async server data</li>
            <li>It keeps UI clean without heavy libraries</li>
          </ul>
          <p className="text-foreground/80">
            If you are building admin panels, dashboards, or SaaS products,
            searchable selection improves user experience instantly.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Supports single and multi-select</li>
            <li>Creatable options (users can add new items)</li>
            <li>Async search support for server-side data</li>
            <li>Keyboard navigation (Arrow keys, Enter, Esc, Tab)</li>
            <li>Loading and empty states</li>
            <li>Custom rendering with icons, avatars, or descriptions</li>
            <li>Works with local filtering or remote search</li>
            <li>Fully customizable with Tailwind CSS</li>
            <li>Controlled and uncontrolled usage</li>
            <li>Lightweight and performance-friendly</li>
          </ul>
          <p className="text-foreground/80">
            It gives flexibility without complexity.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Combobox
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Add debounce (150–300ms) for remote search calls</li>
            <li>Keep option IDs stable to avoid focus issues</li>
            <li>Show helpful empty state messages like “No results found”</li>
            <li>For multi-select, validate maximum selection count</li>
            <li>On mobile, increase clickable areas for better usability</li>
            <li>Use reduced motion support for accessibility</li>
          </ul>
          <p className="text-foreground/80">
            Small improvements like these make the component feel polished in
            production.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Combobox
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Team member selection</li>
            <li>Technology or skill picker</li>
            <li>Country or city selector</li>
            <li>Tag management system</li>
            <li>Admin dashboard filters</li>
            <li>Searchable category selection</li>
            <li>Multi-select labels with removable badges</li>
          </ul>
          <p className="text-foreground/80">
            Anywhere users need to choose from a large list, combobox is a
            better choice than a basic dropdown.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Combobox works smoothly with:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/input" target="_blank" className="text-primary underline">Shadcn Input</a>
              </span>{" "}
              (as trigger field)
            </li>
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/tooltip" target="_blank" className="text-primary underline">Shadcn Tooltip</a>
              </span>{" "}
              (for dropdown panel)
            </li>
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/badge" target="_blank" className="text-primary underline">Shadcn Badge</a>
              </span>{" "}
              (for selected items in multi-select)
            </li>
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/select" target="_blank" className="text-primary underline">Shadcn Select</a>
              </span>{" "}  
              (for validation)
            </li>
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/button" target="_blank" className="text-primary underline">Shadcn Button</a>
              </span>{" "}
              (for apply or reset actions)
            </li>
            <li>
              <span className="text-foreground font-semibold">
                <a href="https://shadcnspace.com/components/card" target="_blank" className="text-primary underline">Shadcn Card</a>
              </span>{" "}
              (for filter panels or dashboards)
            </li>
          </ul>
          <p className="text-foreground/80">
            Because it follows the same shadcn structure, it fits naturally into
            your layout without breaking design consistency. You can use it
            inside forms, modals, toolbars, or dashboard filters easily.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Combobox
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Combobox is free to use. You are welcome to use it with
            no hidden policies or licenses. It is clean, accessible, and
            flexible for personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
