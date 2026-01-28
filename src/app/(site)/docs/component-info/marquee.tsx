import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function MarqueeData() {
  const faqData = [
    {
      title: "What type of content can I show inside the Shadcn Marquee?",
      content: (
        <>
          You can show text, images, icons, or logos. Anything that works inside
          a React component can be placed inside the marquee.
        </>
      ),
    },
    {
      title: "Can I control the speed and direction of the marquee?",
      content: (
        <>
          Yes. You can easily adjust how fast it moves and choose the scrolling
          direction based on your design needs.
        </>
      ),
    },
    {
      title: "Is Shadcn Marquee mobile friendly?",
      content: (
        <>
          Yes. It is responsive by default and works smoothly on mobile devices.
        </>
      ),
    },
    {
      title: "Can I pause the marquee on hover?",
      content: (
        <>
          Yes. Hover pause is supported and recommended, especially when showing
          text or logos.
        </>
      ),
    },
    {
      title: "Does it affect website performance?",
      content: (
        <>
          No. The component is lightweight and optimized for smooth animations
          without impacting performance.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80 text-xl sm:text-2xl">
            Sometimes you just want things to keep moving.
          </p>
          <p className="text-foreground/80">
            Display client logos, updates, or messages in a continuous scroll.
            Control speed, direction, and pause on hover using clean React code.
          </p>
          <h2 className="text-foreground text-xl sm:text-2xl font-bold mt-3">
            What is Shadcn Marquee?
          </h2>
          <p className="text-foreground/80">
            Shadcn Marquee is a simple React component that shows content moving
            continuously in a loop. It can scroll{" "}
            <strong className="text-foreground font-semibold">
              text, images, icons, or logos
            </strong>{" "}
            from left to right or right to left.
          </p>
          <p className="text-foreground/80">
            Think of it like a smooth moving banner you often see on websites
            showing client logos or short updates. It keeps moving without
            stopping and feels natural to the eye.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Marquee
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>It helps show more content in less space</li>
            <li>Keeps the page lively without heavy animations</li>
            <li>Easy to control speed and direction</li>
            <li>Works well on both desktop and mobile</li>
            <li>Lightweight and does not slow down the page</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Infinite scrolling loop without breaks</li>
            <li>Supports text, images, icons, and videos</li>
            <li>Custom speed and direction control</li>
            <li>Pause on hover for better readability</li>
            <li>Fully responsive layout</li>
            <li>Styled easily using Tailwind CSS</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Marquee
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Keep the content short and readable</li>
            <li>Use slower speed for text so users can read it</li>
            <li>Pause animation on hover for better user control</li>
            <li>Avoid placing too many marquees on one page</li>
            <li>Test on mobile to ensure smooth scrolling</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Shadcn Marquee
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Client logos or company partners</li>
            <li>Testimonials or user feedback</li>
            <li>Product features or highlights</li>
            <li>News updates or announcements</li>
            <li>Tech stack or tools used in a project</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Marquee works smoothly with other UI components. You can
            place it inside{" "}
            <strong className="text-foreground font-semibold">cards</strong>,
            combine it with{" "}
            <strong className="text-foreground font-semibold">images</strong>,
            or wrap it inside{" "}
            <strong className="text-foreground font-semibold">
              sections and layouts
            </strong>
            . Since the code lives in your project, you can adjust styles and
            behavior anytime without restrictions.
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
