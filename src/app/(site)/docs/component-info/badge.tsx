import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function BadgeData() {
  const faqData = [
    {
      title: "What purpose do badges serve in a UI?",
      content:
        "By reading its label, status, count, or just glancing, the user would have quickly cared about it. Clarity is enhanced. Visual noise is minimized.",
    },
    {
      title: "Can I use badges with icons or avatars?",
      content:
        "Sure. Icons, profile avatars, buttons, and others are all decorated with badges in normal practice to show their notices or clocks.",
    },
    {
      title: "Are Shadcn Badges customizable?",
      content:
        "Totally. Tailwind CSS lets you change the colors, sizes, and shapes by modifying the style file in your project.",
    },
    {
      title: "Do badges work well with accessibility tools?",
      content:
        "Yes, Shadcn Badges conform to good markup practice. When properly contextualized, you can use a screen reader to understand them.",
    },
    {
      title: "Can I use badges inside tables or lists?",
      content:
        "Along with table and dashboard-functioning badges, these little signs added at strategic positions make it easier to read data.",
    },
    {
      title: "Will badges be a performance issue?",
      content:
        "No. Badges are lightweight components and don’t light up your computer screen.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">Shadcn/ui</strong>{" "}
            badges are built with React and Tailwind CSS. These variants help
            you highlight key information like status, categories, and counts in
            a clear, eye-catching way. They are easy to customize, simple to
            copy, and ready for any modern web project.
          </p>
          <p className="text-foreground/80">
            Although small in size, badges can play a big role. In a rich user
            interface, this might include, at a glance, an understanding of what
            is new, active/or may go unread; it could also serve as reminders
            for those more forgetful moments in life. All this information
            becomes apparent without any extra text or crowding up an already
            busy screen.
          </p>
        </section>
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Small Badges Making a Big Difference
          </h2>
          <p className="text-foreground/80">
            Badges are simple visual signs that illuminate your interface within
            a tight area. Be it a reminder count, a function mark, or a state
            sign, this badge element makes things clear and easy to remember.
          </p>
          <p className="text-foreground/80">
            By default, these badges are clean-coded. You're not pinned down by
            plush styles, just the essential logic. Since the component code
            lives in your project, you can modify it anyway you like, color,
            shape, spacing, behavior; It's just modified with those familiar
            Tailwind classes!
          </p>
        </section>
        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Badge?
          </h2>
          <p className="text-foreground/80">
            A Shadcn Badge is a lightweight UI component for short labeling,
            numbering, or icons placed right next to the rest of your
            interface's elements, like a button, tab key, card, or even avatar.
          </p>
          {/*  */}
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            Typical Badges Are Labels
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Labels like "New" or "Beta"</li>
            <li>Number of Unread messages</li>
            <li>Indicators that "Active" or "Paused" belong</li>
            <li>Sort or filter tags</li>
          </ul>
          <p className="text-foreground/80">
            It’s based on semantic HTML and accessible patterns, so the badge
            works well in dashboards, admin panels, SaaS products, and
            content-heavy applications.
          </p>
        </section>
        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Do Developers Use Badges?
          </h2>
          <p className="text-foreground/80">
            Badges are easy to overlook, but a well-designed badge improves
            usability instantly. Shadcn Badges are designed to stay out of your
            way, while giving you complete control.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-3">
            Key Features:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Styling ease via Tailwind CSS</li>
            <li>It's lightweight and fast to render</li>
            <li>Work naturally with Next.js and React</li>
            <li>No design lock-in or theme overrides</li>
            <li>Accessible to keyboard and screen readers</li>
          </ul>
          <p className="text-foreground/80">
            However, since you own the code. You can extend or tweak it anytime
            without needing to wait for library updates.
          </p>
        </section>
        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Badges
          </h2>
          <p className="text-foreground/80">
            You can use badges with the following kinds of UI patterns:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Notification counts on icons or buttons</li>
            <li>Status labels inside tables and lists</li>
            <li>Tags on cards, products, or blog posts</li>
            <li>Indicators inside tabs or menus</li>
            <li>Labels for categories and filters</li>
            <li>Mobile navigation menus</li>
          </ul>
          <p className="text-foreground/80">
            They help users quickly understand context, especially in data-laden
            layouts.
          </p>
        </section>
        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easily Customizable
          </h2>
          <p className="text-foreground/80">
            Customization is very easy. You can:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Change the colors to match your brand</li>
            <li>Adjust the size for subtle or insistent emphasis</li>
            <li>Add numbers or icons to the tag</li>
            <li>Round or square the corners</li>
            <li>Place badge relative to other elements</li>
          </ul>
          <p className="text-foreground/80">
            This is all done with Tailwind utilities, no special configuration
            needed.
          </p>
        </section>
        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Designed for the Modern Web UI
          </h2>
          <p className="text-foreground/80">
            Shadcn Badge components mix and match seamlessly with other
            shadcn/ui elements like Buttons, Cards, Tabs, and Tooltips. This
            makes it easy to keep your application UI uniform while still
            focusing on what needs highlighting. In addition, they work well in
            responsive layouts, which enables their smooth transition across
            screen sizes.
          </p>
        </section>
        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Shadcn Badge Components for Free
          </h4>
          <p className="text-foreground/80">
            Our Shadcn badge components are free to use. You can install them
            through the shadcn CLI or pick up local code directly and plug it
            into your project, then customize according to your design.
          </p>
        </section>
      </div>
    </>
  );
}
