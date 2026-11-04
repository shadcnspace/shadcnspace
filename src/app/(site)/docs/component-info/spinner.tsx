import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SpinnerData() {
  const faqData = [
    {
      title: "When should I use a spinner instead of a skeleton?",
      content:
        "Use a spinner when you don’t know what the content will look like, like form submissions or login flows. Use a skeleton when you already know the layout, like cards or lists.",
    },
    {
      title: "Can I change the size of the Shadcn Spinner?",
      content:
        "Yes, you can control the size using Tailwind classes like w-4 h-4 for small or w-12 h-12 for larger spinners.",
    },
    {
      title: "Can I change the spinner color?",
      content:
        "Yes, you can apply Tailwind text color classes like text-primary or text-white. The spinner will follow that color.",
    },
    {
      title: "Is the Shadcn Spinner accessible?",
      content:
        "Yes, you should add role=\"status\" and a label like “Loading…” so screen readers can understand the state.",
    },
    {
      title: "Is Spinner, Loader, and Progress Bar the same?",
      content:
        "Spinner and loader are often used in a similar way, but a progress bar is different. A progress bar shows how much work is completed, while a spinner only shows that something is in progress.",
    },
    {
      title: "Can I use Shadcn Spinner inside buttons?",
      content:
        "Yes, it works perfectly inside buttons. You can replace button text with a spinner or show both together during loading.",
    },
    {
      title: "Can I show a full-page loading spinner?",
      content:
        "Yes, you can use an overlay spinner to block the screen when needed, like during authentication or page transitions.",
    },
    {
      title: "How do I choose the right spinner type?",
      content:
        "Use simple circular spinners for general use, dots for chat or messaging, and bars or pulse styles for more visual feedback.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Our Shadcn Spinner components provide lightweight, accessible
            loading indicators for any async operation. Choose from circular,
            dots, pulse, and bar variants each styled with Tailwind and ready
            for buttons, overlays, and full-page loading states.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Spinner?
          </h2>
          <p className="text-foreground/80">
            A spinner is a small animated element that tells users something is
            loading or processing.
          </p>
          <p className="text-foreground/80">
            Sometimes users click a button and nothing happens on screen. That
            creates confusion. A spinner solves this by showing that the system
            is working in the background.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Shows loading state without blocking UI completely</li>
            <li>Works when content structure is unknown</li>
            <li>Gives quick feedback after user actions</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Spinner
          </h2>
          <p className="text-foreground/80">
            Spinners are simple, but they solve a very real problem in apps - feedback.
          </p>
          <p className="text-foreground/80">
            Without feedback, users may think the app is broken. With a spinner,
            they know something is happening.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Gives instant feedback after clicks or actions</li>
            <li>Easy to add inside buttons or sections</li>
            <li>Works well for API calls and async tasks</li>
            <li>Keeps UI clean without extra layout setup</li>
            <li>Lightweight and quick to implement</li>
            <li>Useful for both small and full-page loading</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Spinner Variants
          </h2>
          <p className="text-foreground/80">
            Each spinner style can be adjusted using Tailwind classes, so you
            can match it with your UI easily.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">Circular</strong>{" "} - classic rotating spinner for general loading
            </li>
            <li>
              <strong className="text-foreground font-medium">Dots</strong> - bouncing dots, good for chat or messaging UI
            </li>
            <li>
              <strong className="text-foreground font-medium">Pulse</strong> - soft animation for subtle loading states
            </li>
            <li>
              <strong className="text-foreground font-medium">Bars</strong> - animated bars, useful for processing visuals
            </li>
            <li>
              <strong className="text-foreground font-medium">Button Spinner</strong> - small spinner inside buttons
            </li>
            <li>
              <strong className="text-foreground font-medium">Overlay Spinner</strong> - full screen or section loader
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Multiple animation styles for different use cases</li>
            <li>Easy size control using Tailwind utilities</li>
            <li>Color customization using text color classes</li>
            <li>Accessible with proper roles and labels</li>
            <li>Works inline or as overlay</li>
            <li>Fully responsive across devices</li>
            <li>No extra dependencies required</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Spinner
          </h2>
          <p className="text-foreground/80">
            Spinners are helpful, but using them correctly makes the experience
            better.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use spinners only when loading time is noticeable</li>
            <li>Don’t block the whole screen unless required</li>
            <li>Keep spinner size small for inline usage</li>
            <li>Combine with text like “Loading…” when needed</li>
            <li>Avoid showing spinners for very fast actions</li>
            <li>Use overlay spinners only for important operations</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Spinner
          </h2>
          <p className="text-foreground/80">
            Spinners are used in almost every app where async operations
            happen.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Form submission loading states</li>
            <li>API call feedback in dashboards</li>
            <li>Login and authentication flow</li>
            <li>File upload and download actions</li>
            <li>Lazy-loaded sections in pages</li>
            <li>Chat or AI response waiting states</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Spinner works smoothly with many other components and helps
            you show loading states in real situations.
          </p>
          <p className="text-foreground/80">You can combine it with:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              to show loading inside buttons during form actions
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              to display a blocking loader during processing
            </li>
            <li>
              Add inside{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to replace content while data loads
            </li>
            <li>
              Include in{" "}
              <a
                href="/templates"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Templates
              </a>{" "}
              for full-page or dashboard loading
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              to show field-level loading
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              to indicate dropdown data loading
            </li>
            <li>
              Add alongside{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              for row or table loading states
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/alert"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Alert
              </a>{" "}
              to show loading + feedback together
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/progress"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Progress
              </a>{" "}
              when combining loading with progress tracking
            </li>
          </ul>
          <p className="text-foreground/80">
            This makes Spinner a small but essential part of your UI system.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Spinner
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Spinner components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            Clean, accessible, and production-ready for personal or commercial
            projects with no hidden licenses.
          </p>
        </section>
      </div>
    </>
  );
}
