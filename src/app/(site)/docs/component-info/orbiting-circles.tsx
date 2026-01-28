import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function OrbitingCirclesData() {
  const faqData = [
    {
      title: "Is Orbiting Circles good for beginners?",
      content: (
        <>
          Yes. The logic is simple. Once you understand how items move in a
          circle, you can easily customize it.
        </>
      ),
    },
    {
      title: "Will this affect page performance?",
      content: (
        <>
          No, if used correctly. Keep the number of circles low and avoid heavy
          images.
        </>
      ),
    },
    {
      title: "Can I stop the animation?",
      content: (
        <>
          Yes. You can pause it on hover or stop it completely based on your use
          case.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Orbiting Circles component?
          </h2>
          <p className="text-foreground/80">
            Orbiting Circles is a small animation where circles move around a
            center in a round path. Imagine planets going around the sun. Each
            circle can hold an icon, image, or text.
          </p>
          <p className="text-foreground/80">
            This component is not for forms or data. It is mostly used to make a
            page feel active and alive. Even when the user does nothing,
            something nice is happening on the screen.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Orbiting Circles
          </h2>
          <p className="text-foreground/80">
            Sometimes a page feels empty, even when the content is correct.
            Orbiting Circles helps fill that gap without adding extra text.
          </p>
          <p className="text-foreground/80">
            Developers use it when they want to:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Show connections between things</li>
            <li>Highlight important items</li>
            <li>Add motion without user clicks</li>
          </ul>
          <p className="text-foreground/80">
            It looks modern, but it is still simple to understand.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Circles move smoothly in a circular path</li>
            <li>Supports icons, images, or short text</li>
            <li>Animation runs automatically</li>
            <li>Speed and direction can be controlled</li>
            <li>Works on mobile and desktop screens</li>
            <li>Can pause animation when user hovers</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Developer’s Notes
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Start with fewer circles, maybe 4 or 5. More items make it
              confusing.
            </li>
            <li>
              Use icons or small images. Long text is hard to read while moving.
            </li>
            <li>
              Keep animation slow. Fast movement looks messy and distracts
              users.
            </li>
            <li>
              Place one important element in the center, like a logo or title.
            </li>
            <li>
              Test on mobile screens. Make sure circles do not overlap or go
              outside the screen.
            </li>
            <li>
              Avoid putting buttons inside moving circles. Users may miss
              clicks.
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Orbiting Circles
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Use it in hero sections or feature sections, not everywhere.
            </li>
            <li>Keep the background clean so the animation stands out.</li>
            <li>Do not mix too many colors. Simple colors work best.</li>
            <li>Use pause-on-hover if users need time to see content.</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Orbiting Circles
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Showing skills or tools around your profile</li>
            <li>Displaying partner or client logos</li>
            <li>Highlighting features around a product image</li>
            <li>Visual storytelling on landing pages</li>
            <li>Decorative section in dashboards</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Orbiting Circles works well with text, cards, and buttons. You can
            place it inside a hero section or next to a feature list. Since it
            lives inside your code, you can control layout, styles, and
            animation without depending on external libraries.
          </p>
        </section>

        {/* section - 08 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
