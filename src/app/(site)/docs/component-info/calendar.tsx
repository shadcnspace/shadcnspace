import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function CalendarData() {
  const faqData = [
    {
      title: "How are Shadcn Calendar Components utilized?",
      content: (
        <>
          Shadcn Calendar components allow users to select dates visually within
          an application. They are commonly used for scheduling, bookings,
          forms, reports, and dashboards, especially in{" "}
          <strong className="text-foreground font-semibold">React</strong> and{" "}
          <strong className="text-foreground font-semibold">Next.js</strong>{" "}
          projects.
        </>
      ),
    },
    {
      title: "Do the calendar components support date ranges?",
      content: (
        <>
          Yes. The calendar components support single-date selection, multi-day
          selection, and full date ranges. This makes them suitable for use
          cases like check-in/check-out systems, analytics filters, and
          reporting periods.
        </>
      ),
    },
    {
      title:
        "Do Shadcn Calendar Range components include accessibility features?",
      content: (
        <>
          Yes. Accessibility is built in by default. Users can navigate the
          calendar using a keyboard, and screen readers correctly announce
          dates, selections, and navigation changes.
        </>
      ),
    },
    {
      title: "Can I disable specific dates in the calendar?",
      content: (
        <>
          Absolutely. You can disable past or future dates, weekends, or define
          custom rules such as holidays, blackout dates, or unavailable periods.
        </>
      ),
    },
    {
      title: "Can I customize the calendar design?",
      content: (
        <>
          Yes. All calendar components are styled using{" "}
          <strong className="text-foreground font-semibold">
            Tailwind CSS
          </strong>
          . Since the components live directly in your project, you have full
          control over colors, spacing, states, and layout without any
          restrictions.
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
            Select dates, manage timelines, and plan schedules all at once with{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Calendar components
            </strong>
            . Designed for{" "}
            <strong className="text-foreground font-semibold">
              React and Next.js applications
            </strong>
            , these calendars provide a more flexible and accessible way to work
            with dates than through fragile text inputs.
          </p>
          <p className="text-foreground/80">
            Shadcn Calendar is styled using{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            to offer a great user experience and is powered by well-developed
            calendar logic to provide seamless user experiences when working
            with customizable dates on dashboards, booking flows, reports, and
            forms.
          </p>
        </section>
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Use a Calendar Instead of Text Inputs?
          </h2>
          <p className="text-foreground/80">
            Letting users enter dates in free-text fields is a great UX. Upon
            doing this, users may potentially enter dates incorrectly, in the
            wrong format, include invalid dates, or even make simple typos. With
            a visual calendar, this friction is removed; users can see available
            dates, navigate flexibly and easily, and select valid dates without
            confusion.
          </p>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Calendar
            </strong>{" "}
            is built in a way to require little onboarding to use dates,
            keyboard navigation, and accessibility seamlessly integrated, so you
            can focus on building features instead of fixing edge cases.
          </p>
        </section>
        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            How Do Calendar Components Work?
          </h2>
          <p className="text-foreground/80">
            Shadcn Calendar components render a grid of days and include
            controls for selecting the month and year. They allow for{" "}
            <strong className="text-foreground font-semibold">
              single date selection, range selection, or multiple selections of
              dates
            </strong>{" "}
            to provide a solution for most of the use cases that may be
            required.
          </p>
          <p className="text-foreground/80">
            The calendar consists of modular components, which include
            navigational elements, headers for the week, and individual day
            cells. This design allows for great customization of functionality
            and layout, while making sure that the components all have a uniform
            design provided by{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            and your existing{" "}
            <strong className="text-foreground font-semibold">
              shadcn/ui configuration
            </strong>
            .
          </p>
        </section>
        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Choose Shadcn Space Calendar Components?
          </h2>
          <p className="text-foreground/80">
            These calendar components are designed and developed for real-world
            applications, not just for demos. They concentrate on utility,
            access for all users, and ease of customization, all without being
            overly complicated.
          </p>
          <h3 className="text-foreground text-xl sm:text-2xl font-bold mt-3">
            Key features:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Keyboard and screen reader compatible by default</li>
            <li>Completely customizable using Tailwind CSS</li>
            <li>
              Designed for efficiency, optimized, and responsive for all modern
              React applications
            </li>
            <li>Works seamlessly with Next.js App Router</li>
          </ul>
          <p className="text-foreground/80">
            The components are a part of your own codebase, which means you
            control everything. You can also make changes as your product
            develops.
          </p>
        </section>
        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Functionality Within Shadcn Space Calendar Components
          </h2>
          <p className="text-foreground/80">
            Calendar components include everything you need for common
            scheduling and date-selection scenarios:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong>Different modes for selection:</strong> A continuous
              range, multiple, and single date ranges are offered
            </li>
            <li>
              <strong>Configurable disabled dates:</strong> Disable specific
              dates in the calendar, including past dates, future dates,
              weekends, and other custom rules
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> You can navigate through the
              calendar using the keyboard.
            </li>
            <li>
              <strong>Navigation controls for month and year:</strong> Activate
              controls for the previous and next month, or use dropdown controls
            </li>
            <li>
              <strong>Hover range previews:</strong> Preview selected ranges by
              hovering over date ranges.
            </li>
            <li>
              <strong>Indicators:</strong> Mark date ranges with custom
              indicators, prices, other events, or custom banners
            </li>
          </ul>
        </section>
        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Built for Real-World Applications
          </h2>
          <p className="text-foreground/80">
            These calendar components fit naturally into dashboards, booking
            systems, onboarding flows, and internal tools. They work well in
            forms where users need to select valid dates without confusion.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Booking and reservation systems</li>
            <li>Event scheduling dashboards</li>
            <li>Date-based filters and reports</li>
            <li>User profile date selection</li>
            <li>Availability and planning tools</li>
          </ul>
          <p className="text-foreground/80">
            The components are designed to be reused in various use cases,
            allowing you to deploy them in different areas of your application.
          </p>
        </section>
        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Styling Without Limitations
          </h2>
          <p className="text-foreground/80">
            With{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>
            , Shadcn Space calendar components can be styled to enable you to
            modify their appearance. You can change the spacing, color, and
            typography, among other things, without making major changes to the
            design system.
          </p>
        </section>
        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Ideal for React & Next.js Projects
          </h2>
          <p className="text-foreground/80">
            Built with modern React patterns,{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Space Calendar components
            </strong>{" "}
            are a great fit for{" "}
            <strong className="text-foreground font-semibold">
              Next.js applications
            </strong>
            . They’re lightweight, fast, and designed to scale as your product
            grows.
          </p>
          <p className="text-foreground/80">
            If you need a reliable and flexible approach to handling dates while
            maintaining a simple and positive experience for a developer, these
            components for calendars are an optimal choice.
          </p>
        </section>
        {/* section - 08 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Calendar Components
          </h4>
          <p className="text-foreground/80">
            Our{" "}
            <strong className="text-foreground font-semibold">
              Calendar Components
            </strong>{" "}
            are fully customizable, and you can utilize them without any charge.
            They can be directly copied into your workspace and modified per
            your requirements without any restrictions on their use.
          </p>
        </section>
      </div>
    </>
  );
}
