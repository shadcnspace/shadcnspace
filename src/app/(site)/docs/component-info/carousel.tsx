import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CarouselData() {
  const faqData = [
    {
      title: "Are carousels accessible to screen readers?",
      content:
        "Yes. The component supports proper navigation controls and keyboard interaction. However, always ensure you provide clear labels and avoid relying only on visual indicators.",
    },
    {
      title: "How do I optimize carousel performance?",
      content:
        "Lazy load images that are outside the visible area. Avoid using very large images. Keep slide content optimized and lightweight.",
    },
    {
      title: "Do touch gestures work on all mobile devices?",
      content:
        "Yes, swipe gestures are supported. Still, you should test on real Android and iOS devices to ensure sensitivity feels natural.",
    },
    {
      title: "When should I use infinite loop scrolling?",
      content:
        "Use infinite loop mode when content is repetitive or continuous, like product previews. Avoid it if users need a clear start and end point.",
    },
    {
      title: "What is the best auto-play timing?",
      content:
        "If you use auto-play, keep the timing between 4–6 seconds. It should feel slow enough for users to read content comfortably.",
    },
    {
      title: "How do I handle different slide content lengths?",
      content:
        "Try to keep slide heights consistent. You can use fixed height containers or AspectRatio components to maintain alignment.",
    },
    {
      title: "Do all keyboard shortcuts work?",
      content:
        "Yes. Users can navigate using arrow keys and focus controls. Make sure buttons are accessible and properly labeled.",
    },
    {
      title: "Are carousel contents indexed by search engines?",
      content:
        "Yes, as long as the content is rendered in the DOM and not hidden with heavy client-only logic, search engines can index it.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Improve your layout with flexible carousel variants crafted using{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="text-primary underline"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-primary underline"
            >
              Tailwind CSS
            </a>
            , giving smooth slide transitions and clean navigation without heavy
            setup.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Carousel?
          </h2>
          <p className="text-foreground/80">
            A Carousel is a component that allows users to slide through
            multiple items in the same space.
          </p>
          <p className="text-foreground/80">
            Instead of showing everything in a long vertical list, a carousel
            lets users move left and right to explore content. It saves screen
            space while still showing multiple items.
          </p>
          <p className="text-foreground/80">
            You have seen this many times in product galleries, testimonial
            sliders, movie lists, or image showcases.
          </p>
          <p className="text-foreground/80">
            But not all carousels are good. Some auto-play too fast. Some have
            tiny navigation buttons. Some don’t work properly on mobile.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Carousel focuses on smooth interaction, proper swipe
            support, keyboard accessibility, and clean layout control. It
            handles complex logic so you can focus on content.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Carousel
          </h2>
          <p className="text-foreground/80">
            Let’s be honest.
          </p>
          <p className="text-foreground/80">
            Sometimes you want to show multiple items without
            making the page too long. A carousel helps manage space.
          </p>
          <p className="text-foreground/80">
            Developers use Shadcn Carousel because:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>It supports swipe gestures on mobile</li>
            <li>It works with keyboard navigation</li>
            <li>It handles touch detection properly</li>
            <li>It supports manual or auto-play control</li>
            <li>It integrates well with other UI components</li>
          </ul>
          <p className="text-foreground/80">
            When built correctly, a carousel improves user experience instead of
            frustrating users.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Smooth horizontal sliding</li>
            <li>Touch and swipe support</li>
            <li>Keyboard navigation support</li>
            <li>Optional infinite loop mode</li>
            <li>Auto-play support (optional)</li>
            <li>Responsive layout</li>
            <li>Lazy loading friendly</li>
            <li>Custom navigation buttons</li>
            <li>Works well with dynamic content</li>
            <li>Lightweight and performance-friendly</li>
          </ul>
          <p className="text-foreground/80">
            It is flexible enough for simple image sliders and advanced content
            layouts.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Carousel
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Don’t auto-play everything. Use auto-play only for hero banners or
              passive content.
            </li>
            <li>
              Show a small part of the next slide so users know more content
              exists.
            </li>
            <li>
              Make navigation buttons large enough for mobile (at least 44px).
            </li>
            <li>Lazy load heavy images to improve performance.</li>
            <li>
              Test swipe gestures on real devices, not just browser dev tools.
            </li>
            <li>
              Avoid putting too much text inside slides. Keep content balanced.
            </li>
          </ul>
          <p className="text-foreground/80">
            A good carousel feels natural. A bad one feels annoying.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Carousel
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Product image galleries</li>
            <li>Testimonial sliders</li>
            <li>Feature showcases</li>
            <li>Portfolio sections</li>
            <li>Blog highlight sections</li>
            <li>E-commerce product previews</li>
            <li>Media and image galleries</li>
          </ul>
          <p className="text-foreground/80">
            Anywhere you want to display multiple items without expanding page
            height too much.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Carousel works smoothly with other Shadcn components:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use{" "}
              <a
                href="https://shadcnspace.com/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Card components
              </a>{" "}
              as slide containers
            </li>
            <li>
              Use{" "}
              <a
                href="https://shadcnspace.com/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Button components
              </a>{" "}
              for custom navigation
            </li>
            <li>
              Combine with{" "}
              <a
                href="https://shadcnspace.com/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Badge components
              </a>{" "}
              for product highlights
            </li>
            <li>
              Pair with{" "}
              <a
                href="https://shadcnspace.com/components/avatar"
                target="_blank"
                className="text-primary underline"
              >
                Avatar components
              </a>{" "}
              in testimonial sliders
            </li>
            <li>
              Use{" "}
              <a
                href="https://shadcnspace.com/components/tabs"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tabs
              </a>{" "}
              for consistent dimensions
            </li>
          </ul>
          <p className="text-foreground/80">
            Since it follows the same structure, it fits naturally inside your
            layout without breaking design consistency. Your carousel becomes a
            container for rich content, not just images.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Carousel
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Carousel is free to use. You are welcome to use it with
            no hidden policies or licenses. It is clean, accessible, and
            flexible for personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
