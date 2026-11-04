import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AnimatedListData() {
  const faqData = [
    {
      title: "Is Shadcn Animated List accessible?",
      content:
        "Yes. The animations are visual-only and do not block screen readers or keyboard navigation.",
    },
    {
      title: "Can I use it with dynamic data?",
      content:
        "Yes. It works well with API responses, live updates, and state-based lists.",
    },
    {
      title: "Will animations affect performance?",
      content:
        "If used carefully. Keep animations light and avoid animating very large lists at once.",
    },
    {
      title: "Is this safe to use in production?",
      content:
        "Yes. The animation is simple and does not affect page logic or data flow.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Build smooth, animated lists using React, Tailwind CSS, and
            shadcn/ui. Items appear step by step instead of all at once, making
            your UI easier to follow and more pleasant to use.
          </p>
          <p className="text-foreground/80 text-lg sm:text-xl">
            Just a simple motion that feels right.
          </p>
          <p className="text-foreground/80">
            Copy the component, adjust the timing, and plug it into dashboards,
            menus, notifications, or chat lists—no heavy setup, no extra
            complexity.
          </p>
          <h2 className="text-foreground text-xl sm:text-2xl font-bold mt-3">
            What is the Shadcn Animated List?
          </h2>
          <p className="text-foreground/80">
            The{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Animated List
            </strong>{" "}
            is a small React component that helps list items appear smoothly
            instead of showing everything at once. With this component, items
            show up step by step, fading in, sliding, or appearing one after
            another.
          </p>
          <p className="text-foreground/80">
            Think of a notification list loading after login, or messages
            appearing in a chat.
          </p>
          <p className="text-foreground/80">
            It feels smoother, easier on the eyes, and more natural for users.
            This component is built using React, Tailwind CSS, and shadcn/ui, so
            the code stays simple and fully under your control.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Animated List
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Makes lists feel alive without heavy animation libraries</li>
            <li>Helps users notice new or important items</li>
            <li>Improves page flow, especially on dashboards</li>
            <li>Easy to read and maintain code</li>
            <li>Works well with both small and large lists</li>
            <li>Does not slow down the app when used correctly</li>
            <li>Works well with API data and local state</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Fade, slide, and stagger effects for list items</li>
            <li>Control animation speed and delay with simple props</li>
            <li>Works with static lists and API data</li>
            <li>Lightweight and fast to render</li>
            <li>Mobile-friendly animations</li>
            <li>Plays nicely with server and client components</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Animated List
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Animate only what matters, not every list on the page</li>
            <li>Keep animation duration short for better performance</li>
            <li>Combine with spacing to improve clarity</li>
            <li>Avoid animations in very long lists</li>
            <li>Test on low-end devices to keep things smooth</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Shadcn Animated List
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Notification panels, lists</li>
            <li>Sidebar menus</li>
            <li>Activity logs or event feeds</li>
            <li>Chat messages</li>
            <li>Dashboard stats and updates</li>
            <li>Task or to-do lists</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Animated List works well with other UI Components like:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Cards for grouped content</li>
            <li>Badges for status or counts</li>
            <li>Buttons for actions</li>
            <li>Tooltips for extra context</li>
            <li>Forms and inputs for dynamic lists</li>
          </ul>
          <p className="text-foreground/80">
            Since the component lives inside your project, you can style and
            adjust it anytime without limits.
          </p>
        </section>

        {/* section - 06 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
