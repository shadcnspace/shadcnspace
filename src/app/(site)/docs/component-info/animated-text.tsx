import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AnimatedTextData() {
  const faqData = [
    {
      title: "What types of animations does Shadcn Animated Text support?",
      content: (
        <>
          This component supports multiple animation styles including fade-in,
          slide-up, scale, blur, typing effects, and staggered character orword
          animations. These can be customized using Tailwind CSS classes and
          animation timing props.
        </>
      ),
    },
    {
      title: "Is Shadcn Animated Text suitable for production applications?",
      content: (
        <>
          Yes, the component was designed to be lightweight, accessible, and
          performance friendly. It is designed to avoid heavy animations, and
          library, and it also respects the reduction of the motion preferences.
          This makes it safe for any applications.
        </>
      ),
    },
    {
      title:
        "Is it possible for me to customize animations and the way they behave?",
      content: (
        <>
          Yes, you can customize everything from the duration, delay, easing,
          and direction of the animations. You can also customize the animating
          triggers. Since the code for this component is already in your project
          you are free to make any changes you like.
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
            This component applies modern animations to text in a variety of
            smooth and customizable styles. It is specially made for Next.js &
            React projects. Our Shadcn Animated Text helps you add motion and
            emphasis to typography without sacrificing performance or
            accessibility.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What Exactly Is The Animated Text Component?
          </h2>
          <p className="text-foreground/80">
            Animated text improves visual hierarchy and user engagement, and it
            draws attention to important content. Instead of having text that is
            just one color, animated text adds meaning and feedback to the
            interface.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Animated Text Component
          </h2>
          <p className="text-foreground/80">
            It allows developers to animate characters, words, letters, or
            entire text blocks using transitions like fade, slide, scale,
            reveal, or staggered effects.
          </p>
          <p className="font-semibold">
            Here are some things Shadcn Animated Text helps developers do:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Make a good first impression on landing pages</li>
            <li>Draw attention to important actions or messages</li>
            <li>
              Make text easy to read with animations that reveal the text a
              little at a time
            </li>
            <li>
              Provide movement that can be achieved with light animation
              libraries
            </li>
          </ul>
          <p className="text-foreground/80">
            This animated component lives inside your codebase, it remains fully
            customizable and easy to maintain as your project grows.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Multiple Animation Styles:
              </strong>{" "}
              Animate text with fade, slide, scale, threshold, or characters and
              word stagger animations.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Letter-Level & Word-Level Control:
              </strong>{" "}
              Animate all the text at once, individual words, one character, or
              any combination of the above.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Tailwind CSS Powered:
              </strong>{" "}
              Adjust the duration, delay, ease, and spacing with Tailwind
              utilities.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Lightweight:
              </strong>{" "}
              No unnecessary dependencies and no runtime overhead.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Accessible by Design:
              </strong>{" "}
              Respects reduced-motion, and screen readers stay away.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Animated Text
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Don't overuse animations, users can be distracted.</li>
            <li>Stagger animations on the headings, no body paragraphs.</li>
            <li>
              Pair animated text with scroll or visibility triggers for better
              performance
            </li>
            <li>Use motion-reduction settings for accessibility</li>
            <li>Don't overdo animations on important instructions.</li>
          </ul>
          <p className="text-foreground/80">
            Content, don't over power it with animations.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Some Common Uses of Animated Text
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Hero section headlines</li>
            <li>Marketing slogans.</li>
            <li>Section headings.</li>
            <li>Landing pages and dashboards that are interactive.</li>
            <li>Messages on loading or onboarding.</li>
            <li>Call-to-action emphasis</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Animated Text integrates perfectly with other UI elements
            like:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Links and Buttons</li>
            <li>Sections and Cards</li>
            <li>Inputs and Forms</li>
            <li>Accordions and Tabs</li>
            <li>Modals and Tooltips</li>
          </ul>
          <p className="text-foreground/80">
            You can Copy the component straight into your project and wrap it
            around any text element without reworking your layout.
          </p>
        </section>

        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
