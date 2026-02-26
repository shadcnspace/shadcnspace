import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function ButtonGroupData() {


  const faqData = [
    {
      title: "Can it behave like radio buttons?",
      content:
        "Yes. You can control the selected value using React state and make it work like radio or toggle behavior.",
    },
    {
      title: "Can I use Button Group as a toggle switch?",
      content:
        "Yes. You can manage the selected value using React state and make it behave like a toggle. It can work like radio buttons (single selection) or multi-select buttons depending on your logic.",
    },
    {
      title: "Can I customize active and inactive styles?",
      content:
        "Yes. Since it is built with Tailwind CSS, you can easily modify background colors, borders, spacing, and hover states to match your design system.",
    },
    {
      title: "Does it support keyboard navigation?",
      content:
        "Yes. The component structure allows keyboard accessibility, making it usable for users who rely on keyboard input.",
    },
    {
      title: "Can I use icons inside the buttons?",
      content:
        "Yes. You can include icons along with text labels to improve clarity, especially when space is limited.",
    },
    {
      title: "Is it suitable for mobile screens?",
      content:
        "Yes. You can adjust spacing and layout using responsive Tailwind classes to make it work smoothly on mobile devices.",
    },

  ];


  return (
    <>
      <section>
        <div className="flex flex-col gap-10">
          <p className="text-foreground/80">
            When users need to switch between options like Monthly and Yearly
            pricing, Grid and List views, or filter categories, the interface
            should feel quick and clear. Hiding small choices inside dropdowns
            often slows down interaction.
          </p>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-foreground text-xl sm:text-2xl font-bold">
              What is Button Group?
            </h2>
            <p className="text-foreground/80">
              A Button Group is a set of buttons placed together where only one
              or multiple options can be selected.
            </p>
            <p className="text-foreground/80">
              Instead of using dropdowns for small choices, a Button Group makes
              options visible and easy to switch between.
            </p>
            <p className="text-foreground/80">
              For example, switching between Monthly and Yearly pricing, Grid
              and List views, or filtering categories
            </p>
            <ul className="text-foreground/80 ml-8 list-disc space-y-2">
              <li>It keeps the UI organized.</li>
              <li>It improves clarity for users</li>
              <li>And it makes your UI feel structured</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-xl sm:text-2xl font-bold">
              Why Developers Use Button Group
            </h3>
            <p className="text-foreground/80">
              When users need to quickly toggle between options, a grouped
              button layout feels faster and clearer.
            </p>
            <p className="text-foreground/80">
              Developers use Button Groups to improve clarity. Instead of hiding
              choices inside menus, users can see all options at once.
            </p>
            <p className="text-foreground/80">
              It improves interaction and keeps layouts organized
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-xl sm:text-2xl font-bold">
              Key Features

            </h3>
            <ul className="text-foreground/80 ml-8 list-disc space-y-2">
              <li>Grouped button alignment.</li>
              <li>Active and inactive state styling</li>
              <li>Supports single or multiple selection</li>
              <li>Fully customizable with Tailwind</li>
              <li>Accessible and keyboard-friendly</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-xl sm:text-2xl font-bold">
              Tips for Using Button Group
            </h3>
            <ul className="text-foreground/80 ml-8 list-disc space-y-2">
              <li>Keep labels short and clear.</li>
              <li>Highlight the active option clearly</li>
              <li>Avoid adding too many buttons in one group</li>
              <li>Use icons when space is limited</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-xl sm:text-2xl font-bold">
              Common Uses of Button Group
            </h3>
            <ul className="text-foreground/80 ml-8 list-disc space-y-2">
              <li>Pricing plan toggle
              </li>
              <li>View switch (Grid/List)
              </li>
              <li>Filter categories
              </li>
              <li>Status selection</li>
              <li>Tab-like navigation
              </li>

            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-foreground text-xl sm:text-2xl font-bold">
              Easy to Integrate with Other Components

            </h3>
            <p className="text-foreground/80">
              It fits inside headers, toolbars, cards, or dashboard sections without layout conflicts. You can manage the selection state easily using React.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <FaqAccordion faqData={faqData} />
          </div>


          <div className="flex flex-col gap-3">
            <h4 className="text-foreground text-base sm:text-lg font-semibold">
              Free Shadcn Button Group

            </h4>
            <p className="text-foreground/80">
              Our Shadcn Button Group is free to use. You can use it in personal or commercial projects without hidden policies or licenses. It is clean, customizable, and easy to integrate into any modern React application.

            </p>
          </div>
        </div>
      </section>
    </>
  );
}
