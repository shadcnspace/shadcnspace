import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CardData() {
  const faqData = [
    {
      title:
        "How can I pick between cards that are outlined, filled, or raised?",
      content: (
        <>
          Filled cards stand out to draw attention, outlined cards are simple,
          and elevated cards create depth with shadows. Choose the style
          depending on the context and visual emphasis you want for your
          content.
        </>
      ),
    },
    {
      title: "When should I use a card vs a basic div?",
      content: (
        <>
          If you want a visual container that breaks up information into smaller
          pieces, use a card. Cards help users quickly skim content, whereas
          divs are general-purpose containers with no inherent structure or
          styling.
        </>
      ),
    },
    {
      title: "Is it possible for the entire card to be clickable?",
      content: (
        <>
          Yes, cards can be made fully clickable for things like product tiles
          or articles. Make sure inner buttons or actions remain easily
          accessible and are not blocked by the click area.
        </>
      ),
    },
    {
      title: "How do I add images, icons, or other media?",
      content: (
        <>
          You can add images, icons, or media elements using{" "}
          <strong className="text-foreground font-semibold">CardContent</strong>{" "}
          or{" "}
          <strong className="text-foreground font-semibold">CardHeader</strong>.
          Tailwind CSS utilities make it easy to maintain proper aspect ratios
          and responsive layouts across different devices.
        </>
      ),
    },
    {
      title: "How should you handle actions inside a card?",
      content: (
        <>
          Quick actions should be placed in the header section, while primary
          actions belong in the footer, such as save, submit, or purchase
          buttons. Secondary actions can be implemented using dropdown menus to
          keep the interface clean.
        </>
      ),
    },
    {
      title: "Can I use cards for forms or input groups?",
      content: (
        <>
          Absolutely. Cards are ideal for grouping related form fields, such as
          inputs, selects, and checkboxes. This keeps the layout organized,
          clear, and visually separated from other content.
        </>
      ),
    },
    {
      title: "How can I support loading states?",
      content: (
        <>
          Use skeleton or placeholder cards while data is loading. Empty states
          are also helpful to indicate missing or pending content, preventing
          layout shifts and improving user experience.
        </>
      ),
    },
    {
      title: "Are Shadcn Cards accessible?",
      content: (
        <>
          Yes, Shadcn Cards are fully accessible. They use semantic HTML,
          maintain proper heading order, and implement appropriate ARIA roles,
          ensuring smooth navigation for screen readers and keyboard users.
        </>
      ),
    },
    {
      title: "How do I make card grids responsive?",
      content: (
        <>
          Cards are responsive by default. On mobile screens, they stack
          vertically, while on larger screens they can be arranged in grids.
          Tailwind CSS utilities make it easy to adjust spacing, alignment, and
          layout for any device size.
        </>
      ),
    },
    {
      title: "Do Shadcn Cards slow down performance?",
      content: (
        <>
          Not at all. They are lightweight, fully semantic, and optimized for
          React and Next.js. Even with many cards in dashboards or grids,
          performance remains smooth and efficient.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            With{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Card components
            </strong>
            , you can organize your content. You can quickly build dashboards,
            e-commerce product tiles, profile summaries, and even set up admin
            panels with multiple customizable card variants built with{" "}
            <strong className="text-foreground font-semibold">
              React, TypeScript, and Tailwind CSS
            </strong>
            . These cards are fully responsive and user-friendly, adding
            structure and clarity to any Next.js application.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why the Shadcn Card?
          </h2>
          <p className="text-foreground/80">
            Cards help break up a large block of text, making it easier to view.
            Using no cards can make dashboards, forms, and product listings seem
            very messy. The{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Card
            </strong>{" "}
            is a very flexible and thematic way to organize your content.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Clear Structure:
              </strong>{" "}
              Components like CardHeader, CardTitle, CardDescription,
              CardContent, CardAction, and CardFooter make the layout easy to
              navigate.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Highly Composable:
              </strong>{" "}
              You can add buttons, badges, avatars, charts, and menus freely
              with no annoying fixed styles.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Accessible and Semantic:
              </strong>{" "}
              Uses proper headings and sections that work well with ARIA.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Responsive:
              </strong>{" "}
              It works well on any device, adjusting perfectly on mobile and
              desktop.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Lightweight and Fast:
              </strong>{" "}
              There won't be any lag caused by excess overhead, so your UI will
              be running smoothly.
            </li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Use Cases
          </h2>
          <p className="text-foreground/80">
            Shadcn Card components are flexible enough for any task:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-semibold">
                Dashboard Cards:
              </strong>{" "}
              Metrics, statistics, and easy actions for analysis.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Product Cards:
              </strong>{" "}
              Pictures, descriptions, pricing, and buttons for ecommerce stores.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Profile Cards:
              </strong>{" "}
              Badges for avatar, name, role, and status.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Form containers:
              </strong>{" "}
              Group input fields, labels, and buttons organised.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Content Cards:
              </strong>{" "}
              Articles, news, or posts with headings, content, and action areas.
            </li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Interactive States:
              </strong>{" "}
              Hover, focus, and selectable styles for a better user experience.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Media and Badges:
              </strong>{" "}
              You can quickly add images, icons, avatars, or labels.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Action Areas:
              </strong>{" "}
              Header and footer areas that can be changed for buttons, menus, or
              links.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Flexible Layouts:
              </strong>{" "}
              You can arrange cards in a stack, split them, or organize them in
              a grid for better responsiveness.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Customizable:
              </strong>{" "}
              Tailwind CSS makes it easy to style your site without getting
              stuck in complicated CSS frameworks.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Card
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Keep the content focused:
              </strong>{" "}
              To keep things clean, each card should only cover one topic.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Action Hierarchy Matters:
              </strong>{" "}
              Quick actions should be in the header, while main actions belong
              in the footer.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Plan Grid Layouts:
              </strong>{" "}
              Make sure the cards can handle content of different lengths
              without any problems.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Use Loading States:
              </strong>{" "}
              Skeleton cards or empty states stop the layout from changing while
              the API is being fetched.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Mobile-First Design:
              </strong>{" "}
              Use grids for bigger screens and stack cards on mobile.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Accessible Design:
              </strong>{" "}
              Keep headlines meaningful and make sure keyboard users can see
              focus styles.
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integration With Other Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Card integrates perfectly with the{" "}
            <strong className="text-foreground font-semibold">
              Shadcn UI ecosystem:
            </strong>
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Buttons:
              </strong>{" "}
              Put the main and secondary actions in the CardFooter or
              CardHeader.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Inputs & Selects:
              </strong>{" "}
              Put forms in order within CardContent.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Tooltips:
              </strong>{" "}
              Show hints or more information when you hover over or focus on
              something.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Tables and Dialogs:
              </strong>{" "}
              Make galleries that can be filtered or menus that show up when you
              right-click.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Card Components
          </h4>
          <p className="text-foreground/80">
            You can use all of our{" "}
            <strong className="text-foreground font-semibold">
              Shadcn components
            </strong>{" "}
            for
            <strong className="text-foreground font-semibold"> free</strong>,
            change them to fit your needs, and get them production-ready. You
            may copy them right into your project to make sure that your
            dashboards, product listings, forms, or content-rich pages all have
            the same layout and are easy to use.
          </p>
        </section>
      </div>
    </>
  );
}
