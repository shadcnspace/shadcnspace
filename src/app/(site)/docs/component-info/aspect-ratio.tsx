import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AspectRatioData() {
  const faqData = [
    {
      title: "Why use the Aspect Ratio component over native CSS aspect-ratio?",
      content: (
        <>
          The Aspect Ratio component provides a cross-browser, highly reliable wrapper that coordinates overflow containment, relative positioning, and sizing behaviors automatically. This guarantees that modern Tailwind v4 aspect utility classes operate consistently across older browsers and variable containers.
        </>
      ),
    },
    {
      title: "How do I specify a custom aspect ratio?",
      content: (
        <>
          You can set the aspect ratio using the <code className="bg-muted px-1 py-0.5 rounded text-sm">ratio</code> prop. For example, pass <code className="bg-muted px-1 py-0.5 rounded text-sm">ratio={16 / 9}</code> for widescreen, <code className="bg-muted px-1 py-0.5 rounded text-sm">ratio={4 / 3}</code> for standard definition, or <code className="bg-muted px-1 py-0.5 rounded text-sm">ratio={1}</code> for a perfect square.
        </>
      ),
    },
    {
      title: "Does it support responsive styling?",
      content: (
        <>
          Yes. Since the component is styled using Tailwind CSS, you can wrap it or combine it with responsive classes to adapt or change container sizes across different screen breakpoints.
        </>
      ),
    },
    {
      title: "Is it compatible with the Next.js Image component?",
      content: (
        <>
          Yes. You can place a Next.js <code className="bg-muted px-1 py-0.5 rounded text-sm">Image</code> inside the <code className="bg-muted px-1 py-0.5 rounded text-sm">AspectRatio</code> container. Make sure to set the <code className="bg-muted px-1 py-0.5 rounded text-sm">fill</code> prop on the image and configure the parent container with overflow hidden and a rounded border.
        </>
      ),
    },
    {
      title: "Can I use it for video embeds and maps?",
      content: (
        <>
          Yes, it is ideal for preventing layout shifts in video players, embedded YouTube or Vimeo videos, interactive maps, or any iframe-based content.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* Intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Consistent and Responsive Layouts with Shadcn Aspect Ratio
          </h2>
          <p className="text-foreground/80">
            Shadcn Aspect Ratio is a React utility component designed to display images, videos, maps, and other media in clean, constrained proportions. Built using React, Radix UI, Base UI, and Tailwind CSS, it ensures layouts stay stable without shifting.
          </p>
          <p className="text-foreground/80">
            By defining a ratio, you prevent layout shifts as images load and can quickly adjust visual layouts across different screen resolutions.
          </p>
        </section>

        {/* Section 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Aspect Ratio?
          </h2>
          <p className="text-foreground/80">
            Shadcn Aspect Ratio is a wrapper that forces child content to match a specific size profile. It handles calculations automatically using modern CSS container properties, keeping your markup clean.
          </p>
          <p className="text-foreground/80">
            Use cases for aspect ratios include:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>E-commerce product showcases requiring uniform grids</li>
            <li>Video embeds, player wrappers, and screen previews</li>
            <li>Interactive maps, SVG cards, and charts</li>
            <li>User profile galleries and background banner images</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Aspect Ratio
          </h2>
          <p className="text-foreground/80">
            Without explicit aspect ratios, loading media can push layout components around, leading to poor page speed scores and jarring visual reflows. Aspect Ratio ensures the browser reserves the correct layout space before the actual media file completes downloading.
          </p>
        </section>

        {/* Section 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Prevents layout shifts as external media loads</li>
            <li>Simplifies dynamic media layouts with exact ratio controls</li>
            <li>Works with standard image tags, Next.js images, and video players</li>
            <li>Easy customization of border radius and overlays via Tailwind CSS</li>
            <li>Responsive adaptation using native CSS aspect ratios</li>
            <li>Compatible with both Radix UI and Base UI setups</li>
          </ul>
        </section>

        {/* Section 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Implementation
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Use object-cover class on images to prevent distortion</li>
            <li>Define background color states for loading placeholders</li>
            <li>Apply overflow-hidden to keep child elements within borders</li>
            <li>Set absolute positioning on nested child overlays when needed</li>
          </ul>
        </section>

        {/* Section 05 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* Section 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Aspect Ratio Components
          </h2>
          <p className="text-foreground/80">
            Our Aspect Ratio components are open-source and free to copy. Simply select a variant, copy the code directly, and integrate it into your Next.js or React application.
          </p>
        </section>
      </div>
    </>
  );
}
