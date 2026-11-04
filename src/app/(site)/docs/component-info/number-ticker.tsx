import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function NumberTickerData() {
  const faqData = [
    {
      title: "Can I control when the animation starts & stops ?",
      content:
        "Yes. You can trigger the animation on page load or when the component becomes visible on scroll using React logic.",
    },
    {
      title: "Can I format numbers with commas or currency symbols?",
      content:
        "Yes. You can format numbers as needed, including currency symbols like ₹ or $, and apply comma formatting.",
    },
    {
      title: "Is it suitable for dashboards?",
      content:
        "Yes. It works well inside summary cards and analytics sections in dashboards.",
    },
    {
      title: "Can I change animation speed?",
      content:
        "Yes. You can adjust the duration and speed based on your design preference.",
    },
    {
      title: "Will it slow down my page?",
      content:
        "No. The component is lightweight and optimized for smooth performance.",
    },

  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Statistics and numbers are important in landing pages and
            dashboards. Instead of displaying static values, adding a smooth
            count-up animation makes them more noticeable.
          </p>
        </section>

        {/* section - 01 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Number Ticker?
          </h2>
          <p className="text-foreground/80">
            Number Ticker is a component that animates numbers from a starting
            value to a target value.
          </p>
          <p className="text-foreground/80">
            Instead of showing static numbers like “10,000 users” or “₹5M
            revenue”, the number counts up smoothly when the section loads or
            becomes visible.
          </p>
          <p className="text-foreground/80">
            It makes statistics feel more dynamic without adding heavy
            animations.
          </p>
        </section>

        {/* section - 02 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Number Ticker
          </h2>
          <p className="text-foreground/80">
            In landing pages and dashboards, numbers represent growth, success,
            or key data.
          </p>
          <p className="text-foreground/80">
            Showing numbers with animation helps users notice them more easily.
            It adds a small interactive touch while keeping the interface clean.
          </p>
          <p className="text-foreground/80">
            Developers use Number Ticker because:
          </p>

          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>It improves visual engagement</li>
            <li>It makes stats sections more noticeable</li>
            <li>It is simple to control</li>
            <li>It does not require complex animation libraries</li>
          </ul>

          <p className="text-foreground/80">
            It is a small detail, but it adds life to a section.
          </p>
        </section>

        {/* section - 03 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Smooth counting animation</li>
            <li>Customizable start and end values</li>
            <li>Adjustable animation speed</li>
            <li>Supports number formatting</li>
            <li>Works inside cards and sections</li>
            <li>Lightweight and performance-friendly</li>
          </ul>
        </section>

        {/* section - 04 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Number Ticker
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Use it only for important numbers</li>
            <li>Format numbers properly (₹, $, commas)</li>
            <li>Trigger animation on scroll for better effect</li>
            <li>Avoid too many animated numbers in one section</li>
            <li>Keep animation duration natural</li>
          </ul>

          <p className="text-foreground/80">
            Too fast looks unnatural. Too slow feels boring. Balance matters.
          </p>
        </section>

        {/* section - 05 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Number Ticker
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>SaaS landing page stats</li>
            <li>Company growth metrics</li>
            <li>Dashboard summary cards</li>
            <li>Portfolio highlights</li>
            <li>Revenue or user count sections</li>
          </ul>
        </section>


        {/* section - 06 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components


          </h2>
          <p className="text-foreground/80">
            Number Ticker fits easily inside Cards, Hero sections, Feature grids, or Dashboard widgets.
          </p>
          <p className="text-foreground/80">
            Since it uses simple React logic, you can control it using state or intersection observer logic for scroll-based animation.

          </p>
          <p className="text-foreground/80">
            It blends naturally with existing shadcn components.
          </p>
        </section>


        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>


        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Number Ticker


          </h4>
          <p className="text-foreground/80">
            Our Shadcn Number Ticker is free to use. You can integrate it into dashboards, landing pages, or SaaS products without worrying about licensing limitations.

          </p>
        </section>
      </div>
    </>
  );
}
