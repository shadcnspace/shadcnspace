import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AvatarData() {
  const faqData = [
    {
      title: "What is the purpose of the Shadcn Avatar?",
      content: (
        <>
          The Shadcn Avatar helps represent users using images, initials, or
          icons within React interfaces such as dashboards, messaging apps, and
          user lists.
        </>
      ),
    },
    {
      title: "How do I handle missing images?",
      content: (
        <>
          If images are not available, you can use{" "}
          <strong className="text-foreground font-semibold">
            AvatarFallback
          </strong>{" "}
          to show initials or an icon.
        </>
      ),
    },
    {
      title: "Can I change the size or shape?",
      content: (
        <>
          {" "}
          Yes. Sizes and shapes are controlled using Tailwind CSS utility
          classes.{" "}
        </>
      ),
    },
    {
      title: "Is the Shadcn Avatar accessible?",
      content: (
        <>
          Yes. It includes the required accessibility attributes such as alt
          text and uses semantic HTML.
        </>
      ),
    },
    {
      title: "Can avatars be grouped together?",
      content: (
        <>
          Yes. You can display multiple avatars for teams, shared projects, or
          group chats.
        </>
      ),
    },
    {
      title: "Is it possible to use icons or badges?",
      content: (
        <>
          Yes. You can use badges to indicate status and combine avatars with
          tooltips or dropdowns.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Shadcn Avatar is a React component used to show user profile images,
            initials, or fallback icons. This component can be used on
            dashboards, chat apps, navigation bars, comment sections, and
            anywhere users need to be identified visually.
          </p>
          <p className="text-foreground/80">
            This component is styled with Tailwind CSS and is copied directly
            into your project using a CLI command. This means you control the
            markup, styles, and behavior without relying on hidden abstractions
            or large dependencies.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Avatar?
          </h2>
          <p className="text-foreground/80">
            The purpose of Shadcn Avatar is to give interfaces a way to
            represent users visually. This component is broken down into three
            parts:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">Avatar</strong>{" "}
              – the main wrapper
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                AvatarImage
              </strong>{" "}
              – renders the user image
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                AvatarFallback
              </strong>{" "}
              – shows initials or an icon when the image is missing or fails to
              load
            </li>
          </ul>
          <p className="text-foreground/80">
            Each part of this component can be customized with Tailwind CSS
            classes to suit the needs of your design system.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Avatar
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Shows users clearly with images or initials</li>
            <li>
              Effectively manages missing and broken images without layout
              issues
            </li>
            <li>Styled efficiently with Tailwind CSS</li>
            <li>Uses semantic HTML and is accessibility-friendly</li>
            <li>
              Lightweight and performs well in React and Next.js applications
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
                Image fallback handling
              </strong>{" "}
              – when images are missing or broken, initials or icons are shown
              instead
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Custom sizes and shapes
              </strong>{" "}
              – circles, squares, rounded styles, and sizes from small to large
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Status indicators
              </strong>{" "}
              – online, offline, or activity badges
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Group layouts
              </strong>{" "}
              – display multiple users together
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Accessible by default
              </strong>{" "}
              – supports screen readers and alt text
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Avatar
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Always define a fallback for missing images</li>
            <li>Use properly sized images</li>
            <li>Add borders when avatars are placed on complex backgrounds</li>
            <li>Use optimized image sizes to avoid slow loading</li>
            <li>Maintain consistent avatar sizes throughout the application</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>User profiles and accounts in dashboards</li>
            <li>Navigation bar menus</li>
            <li>Chat and messaging interfaces</li>
            <li>Team or project member lists</li>
            <li>Comment sections and social media feeds</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Other Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Avatar works well with other UI components:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Badges for status or notifications</li>
            <li>Tooltips to show user details on hover</li>
            <li>Dropdown menus for account actions</li>
            <li>Cards for profile or team layouts</li>
            <li>Accordions for expandable user details</li>
          </ul>
          <p className="text-foreground/80">
            Since the component lives in your codebase, integration is
            straightforward.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Production Notes
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Avoid loading large images for small avatars</li>
            <li>
              Add a short delay before showing fallbacks to prevent flicker
            </li>
            <li>
              Generate initials properly (for example, “John Smith” → “JS”)
            </li>
            <li>Test with broken images to ensure fallbacks look good</li>
            <li>
              Avoid overusing status indicators, as they can create visual noise
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
