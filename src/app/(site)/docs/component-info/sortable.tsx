import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SortableData() {
  const faqData = [
    {
      title: "What library is the Shadcn Sortable component based on?",
      content: (
        <>
          It is built using <code className="bg-muted px-1 py-0.5 rounded text-sm">@dnd-kit</code>, which is a lightweight, modular, and highly performant drag-and-drop toolkit for React. This gives you complete control over keyboard, pointer, and screen reader interactions.
        </>
      ),
    },
    {
      title: "How do I handle grid layouts versus list layouts?",
      content: (
        <>
          For vertical or horizontal lists, use <code className="bg-muted px-1 py-0.5 rounded text-sm">verticalListSortingStrategy</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">horizontalListSortingStrategy</code> from dnd-kit. For grids, you can use the <code className="bg-muted px-1 py-0.5 rounded text-sm">rectSortingStrategy</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">rectSwappingStrategy</code>.
        </>
      ),
    },
    {
      title: "Are drag handles required for sorting items?",
      content: (
        <>
          No. You can make the entire item a drag trigger by spreading the attributes and listeners directly on it. Alternatively, you can restrict dragging to a specific icon handle to prevent accidental drags during text selection or button clicks.
        </>
      ),
    },
    {
      title: "How do I implement sorting across multiple lists or containers?",
      content: (
        <>
          To enable drag-and-drop sorting between multiple lists, define multiple <code className="bg-muted px-1 py-0.5 rounded text-sm">SortableContext</code> blocks with matching item lists. You can track list container IDs inside your active state, and use the <code className="bg-muted px-1 py-0.5 rounded text-sm">onDragOver</code> event in dnd-kit to move items between containers dynamically during the drag action.
        </>
      ),
    },
    {
      title: "How do I save the sorted order back to a database?",
      content: (
        <>
          The <code className="bg-muted px-1 py-0.5 rounded text-sm">onDragEnd</code> handler receives the active and target IDs. You can update your local state using <code className="bg-muted px-1 py-0.5 rounded text-sm">arrayMove</code> and then trigger an API call to save the final sequence in your database.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* Intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Create Drag-and-Drop Sortable Lists and Grids with Shadcn Sortable
          </h2>
          <p className="text-foreground/80">
            Shadcn Sortable is a React component system designed to implement smooth, accessible, and performant drag-and-drop reordering interfaces. Built with Radix UI, Base UI, Tailwind CSS, and powered by @dnd-kit, it is perfect for lists, grids, dashboards, and media libraries.
          </p>
          <p className="text-foreground/80">
            A flexible sortable system that supports custom drag handles, multi-column layouts, animations, and keyboard accessibility.
          </p>
        </section>

        {/* Section 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Sortable?
          </h2>
          <p className="text-foreground/80">
            Shadcn Sortable provides the layout and logic wrap to coordinate reordering items. It hooks into dnd-kit events to track pointer and keyboard actions, translating them into dynamic translations and state updates.
          </p>
          <p className="text-foreground/80">
            Sortable layouts are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Media libraries and layout gallery arrangement</li>
            <li>Music playlist queue management</li>
            <li>Structured forms, settings checklists, and option builders</li>
            <li>Kanban boards and multi-list workflows</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Sortable
          </h2>
          <p className="text-foreground/80">
            Developing drag-and-drop operations that support touch devices, screen readers, keyboard navigation, and smooth animations is difficult to build from scratch. Using dnd-kit, the Sortable component handles these requirements with zero layout jitter.
          </p>
        </section>

        {/* Section 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Robust pointer, touch, and keyboard sensor support</li>
            <li>Smooth reordering animations and drag previews</li>
            <li>Supports vertical lists, horizontal lists, and grid layouts</li>
            <li>Customizable drag handles and overlay styles</li>
            <li>Fully screen-reader accessible with custom ARIA descriptions</li>
            <li>Clean local state manipulation via utility helpers</li>
            <li>Fully compatible with both Radix UI and Base UI setups</li>
          </ul>
        </section>

        {/* Section 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Implementation
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Use drag overlay components to prevent list reflow and keep drag elements crisp</li>
            <li>Ensure every sortable item has a stable, unique ID</li>
            <li>Optimize lists with React.memo for high-performance sorting in large lists</li>
            <li>Provide clear visual indicators like cursor grab patterns to improve UX</li>
          </ul>
        </section>

        {/* Section 05 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* Section 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Sortable Components
          </h2>
          <p className="text-foreground/80">
            Our Sortable components are completely free and open-source. Copy the clean Tailwind and React snippets, and easily plug them into your project to create interactive interfaces.
          </p>
        </section>
      </div>
    </>
  );
}
