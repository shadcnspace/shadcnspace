import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function SwitchData() {
  const faqData = [
    {
      title: "Is the Shadcn Switch keyboard accessible?",
      content: (
        <>
          Yes. The switch supports keyboard navigation using Tab, Enter, and
          Space keys. It also includes proper ARIA attributes for screen
          readers.
        </>
      ),
    },
    {
      title: "Can I customize the size and style of the switch?",
      content: (
        <>
          Yes. You can control size, colors, spacing, and animations using
          Tailwind CSS utility classes.
        </>
      ),
    },
    {
      title: "Can I use Shadcn Switch with forms?",
      content: (
        <>
          Yes. The switch integrates easily with forms and works well with form
          libraries for handling boolean values.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* section - 01 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          What is the Shadcn Switch?
        </h2>
        <p className="text-foreground/80">
          The <strong>Shadcn Switch</strong> is a small React component that
          lets users turn something on or off. You’ll usually see it in settings
          pages for things like enabling notifications, switching themes, or
          turning features on and off.
        </p>
        <p className="text-foreground/80">
          Think of it as a replacement for checkboxes when you want a clearer
          action. Instead of ticking a box, users slide a switch. It feels more
          natural, especially on mobile screens.
        </p>
        <p className="text-foreground/80">The switch has three basic parts:</p>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>a label that explains the action,</li>
          <li>track that holds the switch,</li>
          <li>and a handle that moves between two states.</li>
        </ul>
        <p className="text-foreground/80">
          You can style every part using Tailwind CSS, so it fits easily into
          your app’s design. Since the code lives inside your project, you stay
          in control of how it looks and behaves.
        </p>
      </section>

      {/* section - 02 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Why Developers Use Shadcn Switch
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Gives a clear yes/no action without confusion</li>
          <li>Takes less space than buttons or dropdowns</li>
          <li>Easy for users to understand at first glance</li>
          <li>Works well in forms, dashboards, and settings pages</li>
          <li>Supports keyboard and screen readers by default</li>
          <li>Runs smoothly in React and Next.js projects</li>
          <li>No heavy setup or extra dependencies</li>
        </ul>
        <p className="text-foreground/80">
          Many developers prefer switches because users don’t need instructions.
          They just know what to do.
        </p>
      </section>

      {/* section - 03 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Key Features
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Style control using Tailwind CSS</li>
          <li>Smooth movement when toggling</li>
          <li>Works with keyboard navigation</li>
          <li>Screen reader support with ARIA attributes</li>
          <li>Disabled state support</li>
          <li>Works with controlled form values</li>
          <li>Optional icons for better clarity</li>
          <li>Touch-friendly on mobile devices</li>
        </ul>
      </section>

      {/* section - 04 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Tips for Using Shadcn Switch
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>
            Use switches only when there are two clear choices, like on or off.
          </li>
          <li>
            Always add a short label so users know what the switch controls.
          </li>
          <li>Use color or small icons to make the current state obvious.</li>
          <li>Keep switches large enough so they are easy to tap on phones.</li>
          <li>
            Avoid placing too many switches on one screen—it becomes noisy.
          </li>
        </ul>
        <p className="text-foreground/80">
          For advanced settings, add a tooltip with extra explanation.Good
          switches reduce thinking. Bad switches create confusion.
        </p>
      </section>

      {/* section - 05 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Some Common Uses of Shadcn Switch
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Turning features on or off in SaaS apps</li>
          <li>Switching between light and dark mode</li>
          <li>Notification and privacy settings</li>
          <li>Quick actions on dashboards</li>
          <li>Preferences inside forms</li>
          <li>Admin or control panels</li>
        </ul>
        <p className="text-foreground/80">
          If the action is binary, a switch usually fits well.
        </p>
      </section>

      {/* section - 06 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Easy to Integrate with Any Components
        </h2>
        <p className="text-foreground/80">
          Shadcn Switch fits naturally with other UI parts.
        </p>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Forms for handling true/false values</li>
          <li>Cards to group related settings</li>
          <li>Tooltips for helper text</li>
          <li>Badges to show status</li>
          <li>Dialogs for confirmations</li>
          <li>Tables for enabling or disabling rows</li>
          <li>Accordions to organize many options</li>
        </ul>
        <p className="text-foreground/80">
          Because the component is part of your codebase and follows{" "}
          <strong className="text-foreground font-semibold">shadcn/ui</strong>{" "}
          patterns, integration feels straightforward and predictable.
        </p>
      </section>

      {/* section - 07 */}
      <section>
        <FaqAccordion faqData={faqData} />
      </section>
    </div>
  );
}
