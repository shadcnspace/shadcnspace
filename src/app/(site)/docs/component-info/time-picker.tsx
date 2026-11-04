import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function TimePickerData() {
  const faqData = [
    {
      title: "Do these time pickers use the native browser time input?",
      content:
        "No. Each picker is built from shadcn/ui components such as Popover, Select, ToggleGroup, and Button, so it looks the same in every browser and follows your theme in light and dark mode.",
    },
    {
      title: "How do I get the selected time as a value?",
      content: (
        <>
          Each component keeps the time in React state, for example{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">hour</code>,{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">minute</code>, and{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">period</code>. Lift that state into your form or pass an{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">onChange</code> callback to read the value.
        </>
      ),
    },
    {
      title: "Can I change the minute step?",
      content: (
        <>
          Yes. The stepper uses a{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">MINUTE_STEP</code> constant, and the select based pickers build their options from a loop, so you can switch to 5, 10, 15, or 30 minute steps in one place.
        </>
      ),
    },
    {
      title: "Are the time pickers accessible?",
      content:
        "Yes. They use real buttons, selects, and toggle groups with labels, the stepper exposes spinbutton roles with arrow key support, and changes are announced to screen readers with live regions.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* Intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Pick Times Faster with Shadcn Time Picker
          </h2>
          <p className="text-foreground/80">
            Shadcn Time Picker components let users choose a time without typing it by hand. Built with React, Tailwind CSS, and shadcn/ui, they cover everything from a simple dropdown to booking slots, an analog clock, and time zone conversion.
          </p>
          <p className="text-foreground/80">
            Each picker is a single self-contained file, so you can copy it into your project and connect it to your form state in minutes.
          </p>
        </section>

        {/* Section 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Time Picker?
          </h2>
          <p className="text-foreground/80">
            Shadcn Time Picker is a collection of time selection components. shadcn/ui does not ship a time picker, so these components fill the gap with patterns built on its existing primitives.
          </p>
          <p className="text-foreground/80">
            Time pickers are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Meeting and appointment booking</li>
            <li>Reminders, alarms, and notification schedules</li>
            <li>Working hours and availability settings</li>
            <li>Scheduling across teams in different time zones</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Time Picker
          </h2>
          <p className="text-foreground/80">
            The native time input looks different in every browser and is hard to style. These components give you a consistent, themeable time picker that matches the rest of your shadcn/ui interface, with no extra date library required.
          </p>
        </section>

        {/* Section 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Scroll columns, booking slots, analog clock, range, stepper, and time zone layouts</li>
            <li>Built only with shadcn/ui components and lucide-react icons</li>
            <li>12 hour format with AM and PM, easy to adapt to 24 hour time</li>
            <li>Validation for time ranges with a live duration badge</li>
            <li>Keyboard support and screen reader announcements</li>
            <li>Works in light and dark mode with theme tokens</li>
          </ul>
        </section>

        {/* Section 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Implementation
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Store times as minutes since midnight to make comparisons and durations simple</li>
            <li>Disable unavailable slots instead of hiding them so users understand the schedule</li>
            <li>Show the time zone next to the picker whenever users are in different regions</li>
            <li>Use larger steps like 15 or 30 minutes when exact minutes are not needed</li>
          </ul>
        </section>

        {/* Section 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Time Picker
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Booking pages for calls and appointments</li>
            <li>Event and task scheduling forms</li>
            <li>Opening hours for stores and services</li>
            <li>Reminder and notification settings</li>
            <li>Global team meeting planners</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Time Picker works smoothly with other components:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Pair it with <strong className="text-foreground font-semibold">Shadcn Date Picker</strong> to build a full date and time field.</li>
            <li>Place it inside a <strong className="text-foreground font-semibold">Shadcn Dialog</strong> for event creation flows.</li>
            <li>Use it with <strong className="text-foreground font-semibold">Shadcn Calendar</strong> for booking pages.</li>
            <li>Combine it with <strong className="text-foreground font-semibold">Shadcn Select</strong> to add a time zone picker.</li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Time Picker Components
          </h2>
          <p className="text-foreground/80">
            Our Time Picker components are free and open-source. Copy the clean TypeScript and Tailwind CSS code into your project to add a polished time selection experience in minutes.
          </p>
        </section>
      </div>
    </>
  );
}
