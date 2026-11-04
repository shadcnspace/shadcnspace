import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SkeletonData() {
  const faqData = [
    {
      title: "When should I use a skeleton instead of a spinner?",
      content:
        "Use a skeleton when you know the layout of the content like cards, lists, or text. Use a spinner when the result is unknown, like form submission or background processing.",
    },
    {
      title: "How do I animate the Shadcn Skeleton?",
      content:
        "By default, it uses a pulse animation from Tailwind. You can change it to a shimmer effect or remove animation using custom styles.",
    },
    {
      title: "Can I build complex layouts using skeletons?",
      content:
        "Yes, you can combine multiple skeleton blocks with different sizes to match any layout like cards, tables, or profile sections.",
    },
    {
      title: "Does Shadcn Skeleton affect accessibility?",
      content:
        "Yes, you should add attributes like aria-busy=\"true\" and labels like \"Loading...\" so screen readers understand the loading state.",
    },
    {
      title: "How should I handle progressive loading with skeletons?",
      content:
        "Show skeletons only for visible content first. Load more placeholders as users scroll. This makes the app feel faster.",
    },
    {
      title: "How do I choose the right skeleton size?",
      content:
        "Check your actual content size and match the same width and height for skeletons. This avoids layout shifts when content loads.",
    },
    {
      title: "What type of content works best with skeletons?",
      content:
        "Skeletons work best for structured content like profiles, cards, tables, and articles where layout is predictable.",
    },
    {
      title: "Can I disable or customize skeleton animation?",
      content:
        "Yes, you can remove or change animations using Tailwind classes. The structure stays the same, only styling changes.",
    },
    {
      title: "Do skeletons work well on mobile devices?",
      content:
        "Yes, they are fully responsive. Just make sure sizes match mobile layouts properly.",
    },
    {
      title: "Do skeletons impact performance?",
      content:
        "No, they are very lightweight. In fact, they improve perceived performance by showing layout instantly.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Our Shadcn Skeleton components provide lightweight, composable
            loading placeholders that match your content layout exactly. Use
            them to replace cards, lists, avatars, and text blocks during data
            fetching for a smooth and clean loading experience.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Skeleton?
          </h2>
          <p className="text-foreground/80">
            A skeleton is a loading placeholder that looks like the structure of
            your actual content while data is loading.
          </p>
          <p className="text-foreground/80">
            Instead of showing a spinner and making users wait blindly,
            skeletons give a visual preview of what’s coming next. This makes
            your app feel faster and more stable.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Shows content layout before real data loads</li>
            <li>Reduces layout shift when content appears</li>
            <li>Improves perceived performance for users</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Skeleton
          </h2>
          <p className="text-foreground/80">
            Skeletons help make loading states feel natural instead of
            frustrating.
          </p>
          <p className="text-foreground/80">
            When users see a blank screen or spinner, they don’t know what’s
            happening. But with skeletons, they can already understand the
            layout and expect the content.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Makes loading experience feel faster</li>
            <li>Prevents sudden layout jumps</li>
            <li>Keeps UI structure consistent during loading</li>
            <li>Easy to match with real content design</li>
            <li>Works well for dashboards and data-heavy apps</li>
            <li>Simple to build using reusable blocks</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Skeleton Variants
          </h2>
          <p className="text-foreground/80">
            Skeleton is a flexible building block. You can combine different
            shapes to match any layout.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">Text Line</strong> - used for headings and paragraph placeholders
            </li>
            <li>
              <strong className="text-foreground font-medium">Avatar</strong> - circular skeleton for profile images
            </li>
            <li>
              <strong className="text-foreground font-medium">Card</strong> - combination of image and text blocks
            </li>
            <li>
              <strong className="text-foreground font-medium">Table Row</strong> - multiple columns for data loading
            </li>
            <li>
              <strong className="text-foreground font-medium">Image Block</strong> - fixed size rectangle for media
            </li>
            <li>
              <strong className="text-foreground font-medium">Button</strong> - small rounded block matching button size
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Smooth pulse animation using Tailwind</li>
            <li>Fully composable and reusable</li>
            <li>Matches any layout using simple styling</li>
            <li>Lightweight with no extra dependencies</li>
            <li>Easy to switch animation styles</li>
            <li>Works across all screen sizes</li>
            <li>Minimal markup, easy to manage</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Skeleton
          </h2>
          <p className="text-foreground/80">
            Using skeletons properly makes a big difference in user experience.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Match skeleton size exactly with real content</li>
            <li>Avoid showing too many placeholders at once</li>
            <li>Use skeletons only where loading takes noticeable time</li>
            <li>Keep animation subtle, not distracting</li>
            <li>Combine with proper loading states for accessibility</li>
            <li>Load visible content first for better performance</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Skeleton
          </h2>
          <p className="text-foreground/80">
            Skeletons are useful in almost every modern app where data loads
            dynamically.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Dashboard cards and widgets loading</li>
            <li>Profile pages with avatar and text placeholders</li>
            <li>Blog and article loading previews</li>
            <li>Product grid in e-commerce apps</li>
            <li>Tables and reports loading states</li>
            <li>Notification and activity feeds</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Skeleton fits naturally with other{" "}
            <a
              href="/components"
              target="_blank"
              className="text-primary underline"
            >
              components
            </a>{" "}
            and helps you build complete loading states without extra effort.
          </p>
          <p className="text-foreground/80">
            You can easily combine it with different UI elements:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to create loading versions of dashboard cards
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              to show form fields loading before data appears
            </li>
            <li>
              Add alongside{" "}
              <a
                href="/components/avatar"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Avatar
              </a>{" "}
              to display profile placeholders
            </li>
            <li>
              Combine with{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              to show row-level loading in data views
            </li>
            <li>
              Include inside{" "}
              <a
                href="/templates"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Templates
              </a>{" "}
              for full page loading states
            </li>
            <li>
              Attach with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              to show loading actions or disabled states
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              to represent loading tags or statuses
            </li>
            <li>
              Place inside{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              to handle modal loading content
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              to show dropdown loading states
            </li>
          </ul>
          <p className="text-foreground/80">
            This makes Skeleton a small but very powerful part of your UI
            system.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Skeleton
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Skeleton components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            You are welcome to use them with no hidden policies or licenses.
            They are clean, accessible, and flexible for any web project.
          </p>
        </section>
      </div>
    </>
  );
}
