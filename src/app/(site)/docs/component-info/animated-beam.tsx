import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AnimatedBeamData() {
  const faqData = [
    {
      title: "How does the beam animation work?",
      content: (
        <>
          Each connection is an SVG path drawn twice. The first is a static line, and the second is a short dash animated with{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">stroke-dashoffset</code> in a small CSS keyframe, so the light pulse travels along the path. Every path uses{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">pathLength</code> so the speed stays the same no matter how long the line is.
        </>
      ),
    },
    {
      title: "Does it respect reduced motion?",
      content:
        "Yes. When the user prefers reduced motion, the pulses stop and the beams render as soft static lines in their accent color.",
    },
    {
      title: "How do I change the nodes or connections?",
      content: (
        <>
          Edit the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">targets</code> array. Each target has a label, an icon, a color, and an SVG path. Paths are drawn in a 300 by 300 viewBox, so a node placed at{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">left-1/6</code> sits at x 50 in the path coordinates.
        </>
      ),
    },
    {
      title: "Does it need any animation library?",
      content:
        "No. The beams use plain SVG and CSS, and the icons come from lucide-react. There is no motion or canvas dependency.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* Intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Visualize Connections with Shadcn Animated Beam
          </h2>
          <p className="text-foreground/80">
            Shadcn Animated Beam connects nodes with lines and sends small pulses of light along them, so users can see how data moves through a system. Built with React, Tailwind CSS, and SVG.
          </p>
          <p className="text-foreground/80">
            Each beam is a single self-contained file with its own small stylesheet, so you can copy it into your project and rename the nodes, swap the icons, or redraw the paths without touching anything else.
          </p>
        </section>

        {/* Section 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Animated Beam?
          </h2>
          <p className="text-foreground/80">
            Shadcn Animated Beam is a collection of connection diagrams where light beams travel between nodes. A source, a hub, and a set of targets are linked by curved or straight paths, and each path carries a colored pulse in the direction the data flows.
          </p>
          <p className="text-foreground/80">
            Animated beams are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Data pipelines and infrastructure diagrams on landing pages</li>
            <li>Integration sections that show how tools connect</li>
            <li>AI agent and workflow visualizations</li>
            <li>Feature sections that explain how a product works</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Animated Beam
          </h2>
          <p className="text-foreground/80">
            Explaining architecture with a static image rarely shows direction or movement. Building an animated version usually means custom SVG math and animation libraries. Shadcn Animated Beam gives you a ready diagram with travelling pulses using only SVG and CSS, so it stays light and easy to edit.
          </p>
        </section>

        {/* Section 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Light pulses that travel along curved and straight paths</li>
            <li>Staggered timing so data flows from the source through the hub to each target</li>
            <li>Responsive layout that scales the diagram with its container</li>
            <li>Theme aware nodes and lines that work in light and dark mode</li>
            <li>Respects prefers-reduced-motion with static lines</li>
            <li>No animation library, only SVG, CSS, and lucide-react icons</li>
          </ul>
        </section>

        {/* Section 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Implementation
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Keep node positions and path coordinates in sync, since both use the same 300 by 300 grid</li>
            <li>Give each target its own accent color so users can follow each beam</li>
            <li>Use the animation delay to show the order in which data moves</li>
            <li>Keep labels short so the nodes stay compact on mobile screens</li>
          </ul>
        </section>

        {/* Section 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Animated Beam
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Database, cache, and CDN architecture diagrams</li>
            <li>Integration and sync illustrations</li>
            <li>AI agent tool calling flows</li>
            <li>Payment and authentication flows</li>
            <li>How it works sections on SaaS landing pages</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Animated Beam works smoothly with other components:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Place it inside a <strong className="text-foreground font-semibold">Shadcn Card</strong> to explain a feature.</li>
            <li>Pair it with <strong className="text-foreground font-semibold">Shadcn Badge</strong> to label each node with a status.</li>
            <li>Use it with <strong className="text-foreground font-semibold">Shadcn Tooltip</strong> to show details when users hover a node.</li>
            <li>Add it next to <strong className="text-foreground font-semibold">Shadcn Tabs</strong> to switch between different flows.</li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Animated Beam Components
          </h2>
          <p className="text-foreground/80">
            Our Animated Beam components are free and open-source. Copy the clean TypeScript and Tailwind CSS code into your project to show how your system connects in minutes.
          </p>
        </section>
      </div>
    </>
  );
}
