import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function RatingData() {
  const faqData = [
    {
      title: "How can I customize the rating scale or maximum value?",
      content: (
        <>
          You can customize the maximum rating value (e.g., a 5-point rating or a 10-point scale)
          using the <code className="bg-muted px-1 py-0.5 rounded text-sm">max</code> prop.
          This lets you configure the rating range to match your specific feedback requirements.
        </>
      ),
    },
    {
      title: "Are these rating components keyboard accessible?",
      content: (
        <>
          Yes. The components support full keyboard navigation. Users can focus the
          rating element and use the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">ArrowRight</code>/
          <code className="bg-muted px-1 py-0.5 rounded text-sm">ArrowUp</code> keys
          to increase the value,{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">ArrowLeft</code>/
          <code className="bg-muted px-1 py-0.5 rounded text-sm">ArrowDown</code> keys
          to decrease it, and the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">Home</code>/
          <code className="bg-muted px-1 py-0.5 rounded text-sm">End</code> keys to
          jump instantly to the minimum or maximum values.
        </>
      ),
    },
    {
      title: "How do I customize the icons, emojis, or labels?",
      content: (
        <>
          The components are fully customizable. You can adjust size classes, change color themes
          using Tailwind CSS, modify the labels, or replace the default assets and SVGs with your own
          icons or custom graphics to match your application's design system.
        </>
      ),
    },
    {
      title: "Do they support controlled and uncontrolled state management?",
      content: (
        <>
          Yes. All rating options support controlled mode using the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">value</code> and{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">onValueChange</code> props,
          as well as uncontrolled mode using the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">defaultValue</code> prop.
        </>
      ),
    },
    {
      title: "Can I use these components in read-only mode?",
      content: (
        <>
          Yes. You can pass the <code className="bg-muted px-1 py-0.5 rounded text-sm">readOnly</code> or{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">disabled</code> props.
          This disables hover effects and interactions, prevents keyboard focus, and sets correct
          ARIA attributes, making it perfect for displaying average ratings or survey summaries.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Interactive and Responsive Rating Fields with Shadcn Rating
          </h2>
          <p className="text-foreground/80">
            Build interactive, <strong className="text-foreground">animated</strong>, accessible, and user-friendly feedback loops with our{" "}
            <strong className="text-foreground">
              Shadcn Rating components
            </strong>
            , built using React, Tailwind CSS and Base UI. Simple,
            highly customizable, and easy to configure for modern web applications.
          </p>
          <p className="text-foreground/80">
            A modular rating selection system that easily captures star ratings, interactive 3D emojis, or numeric scales to capture user reviews, customer satisfaction, or Net Promoter Scores (NPS).
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Rating?
          </h2>
          <p className="text-foreground/80">
            Shadcn Rating is an advanced feedback layout system composed of customizable rating inputs and interaction wrappers. It provides robust keyboard navigation, custom icon scaling, half-star selection support, and animated interactive states.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re creating a post-checkout satisfaction rating, a detailed product review form,
            a NPS feedback survey, or a quick reaction collector, Shadcn Rating provides fluid animations and easy-to-use props out of the box.
          </p>
          <p className="text-foreground/80">
            Rating components are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>E-commerce product reviews and community feedback panels</li>
            <li>Net Promoter Score (NPS) surveys and recommendation forms</li>
            <li>Customer Satisfaction (CSAT) prompts and post-onboarding surveys</li>
            <li>In-app content, article, or task rating systems</li>
            <li>Instant micro-sentiment collection and mood tracking</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Rating
          </h2>
          <p className="text-foreground/80">
            Handling precise pointer locations (like half-star detection), custom hover animations, and accessibility requirements like keyboard arrow selection and focus trapping manually is incredibly complex. The Rating component abstracts all of this, offering native-feeling performance alongside standard desktop compatibility.
          </p>
          <p className="text-foreground/80">
            By utilizing Base UI primitives, it grants full control over rating thresholds, range options, custom icons, and transition styles with zero heavy bundle overhead.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Supports multiple visual styles including star ratings, emojis, and numeric scales</li>
            <li>Fully customizable maximum values, icon sizes, and text labels</li>
            <li>Supports fractional values, enabling precise selection like half-stars</li>
            <li>Accessible markup including ARIA roles, screen-reader labels, and keyboard navigation</li>
            <li>Flexible API supporting both controlled and uncontrolled component state</li>
            <li>Responsive design optimized for both light and dark color themes</li>
            <li>Easy styling and custom theme support via Tailwind CSS</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            The Rating layout elements work smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Combine with <strong className="text-foreground">Card</strong> to display rating overview panels, average score details, and testimonials.
            </li>
            <li>
              Pair with <strong className="text-foreground">Form</strong> and <strong className="text-foreground">Label</strong> to capture and validate rating inputs within structured feedback forms.
            </li>
            <li>
              Use with <strong className="text-foreground">Dialog</strong> to trigger interactive feedback modals or survey prompts after actions.
            </li>
            <li>
              Combine with <strong className="text-foreground">Select</strong> and input groups to collect additional qualitative feedback alongside rating values.
            </li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Rating
          </h2>
          <p className="text-foreground/80">
            Use the <code className="bg-muted px-1 py-0.5 rounded text-sm">readOnly</code> prop to display static average ratings or testimonials where interaction is not required.
          </p>
          <p className="text-foreground/80">
            When setting up custom rating layouts:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Tweak size options using predefined utility variables like <code className="bg-muted px-1 py-0.5 rounded text-sm">size=&quot;lg&quot;</code> to make rating icons highly visible on mobile.
            </li>
            <li>
              Pair your rating inputs with temporary toast notifications (like <code className="bg-muted px-1 py-0.5 rounded text-sm">sonner</code>) to instantly confirm user actions.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Rating
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Product reviews and ratings in E-commerce platforms</li>
            <li>Net Promoter Score (NPS) surveys</li>
            <li>Post-purchase and onboarding feedback forms</li>
            <li>App Store review prompts and testimonial cards</li>
            <li>Interactive CSAT (Customer Satisfaction) feedback popups</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            You can easily integrate it into any Next.js or React setup. All components are fully client-side safe and automatically handle pointer coordinates, keyboard listeners, and resize events cleanly.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Rating Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Rating components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them into
            your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
