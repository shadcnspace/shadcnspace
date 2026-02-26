import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function DatePickerData() {
  const faqData = [
    {
      title: "Can I disable specific dates like weekends or past dates?",
      content:
        "Yes, you can disable past dates, future dates, weekends, or even custom date ranges depending on your project needs. This is especially helpful for booking systems, appointment scheduling, or event registration forms where date restrictions are required.",
    },
    {
      title: "Does the Date Picker support different date formats?",
      content:
        "Yes, you can format the selected date in different formats such as DD/MM/YYYY or MM/DD/YYYY. Maintaining a consistent date format across your application helps avoid confusion and improves user experience",
    },
    {
      title: "Is the Date Picker accessible for keyboard users?",
      content: "Is the Date Picker accessible for keyboard users.",
    },
    {
      title: "Can I use this Date Picker inside a modal or popover?",
      content:
        "Yes, the Date Picker works smoothly inside modals, popovers, dialogs, and dropdown components. Since it follows the shadcn structure, integration inside layered UI components remains stable and visually consistent.",
    },
    {
      title: "Does it work with form validation libraries?",
      content:
        "Yes, you can integrate it easily with form libraries such as React Hook Form or your own custom validation logic. Because it supports controlled state management, connecting it to form validation is simple and flexible.",
    },
    {
      title: "Free Shadcn Date Picker",
      content:
        "Our Shadcn Date Picker is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for any web project.",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            When building forms, booking systems, dashboards, or admin panels,
            date selection is something users interact with very often. If the
            experience feels confusing or inconsistent, it affects the entire
            workflow.
          </p>
        </section>
        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Date Picker?
          </h2>
          <p className="text-foreground/80">
            A Date Picker is a UI component that allows users to select a date
            from a calendar interface instead of typing it manually.
          </p>
          <p className="text-foreground/80">
            In many web applications, asking users to type a date can lead to
            formatting mistakes. Some users write DD/MM/YYYY, others write
            MM/DD/YYYY. A Date Picker removes this confusion. It gives a clear
            calendar view where users can click and choose the exact date they
            need.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Date Picker is built using React, Tailwind CSS, and
            shadcn/ui. It follows a clean structure so you can easily use it in
            forms, dashboards, booking systems, or admin panels without extra
            setup.
          </p>
        </section>
        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Date Picker
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Date Picker component helps you add a clean and reliable
            date selection interface to your React or Next.js project without
            building everything from scratch
          </p>
          <p className="text-foreground/80">
            Instead of creating a calendar from scratch and handling edge cases
            like month navigation, disabled dates, or formatting, developers
            prefer using a ready component that already solves these problems.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>It saves development time.</li>
            <li>It reduces user input errors.</li>
            <li>And it makes forms look more professional and consistent.</li>
          </ul>
        </section>
        {/* section - 03 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features:
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Clean and minimal calendar layout</li>
            <li>Fully customizable using Tailwind</li>
            <li>Easy integration with React forms</li>
            <li>Accessible keyboard navigation</li>
            <li>Works smoothly in Next.js projects</li>
          </ul>
        </section>
        {/* section - 04 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Date Picker
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep date formats consistent across your application</li>
            <li>Disable past or future dates when necessary</li>
            <li>Combine with validation for required fields</li>
            <li>Use it inside popovers or modals for better UX</li>
            <li>If building booking systems, clearly show unavailable dates</li>
          </ul>
        </section>
        {/* section - 05 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Date Picker
          </h2>

          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Hotel or service booking systems</li>
            <li>Event registration forms</li>
            <li>Admin dashboard filters</li>
            <li>Subscription start and end date selection</li>
            <li>Report filtering by date</li>
          </ul>
        </section>
        {/* section - 06 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Other Components
          </h2>
          <p className="text-foreground/80">
            The Date Picker works perfectly with{" "}
            <a
              href="https://shadcnspace.com/components/button"
              className="underline text-blue-500"
            >
              Buttons
            </a>
            ,


            <a
              href="https://shadcnspace.com/components/input"
              className="underline text-blue-500"
            >
              Input
            </a>,


            <a
              href="https://shadcnspace.com/blocks/dashboard-ui/dialog"
              className="underline text-blue-500"
            >
              Dialog
            </a>,
            <a
              href="https://shadcnspace.com/components/card"
              className="underline text-blue-500"
            >
              Card
            </a>
            and other
            <a
              href="https://shadcnspace.com/components"
              className="underline text-blue-500"
            >
              {" "}
              Shadcn components.
            </a>
            Since it follows the same Shadcn structure, you can easily integrate
            it into our
            <a
              href="https://shadcnspace.com/blocks"
              className="underline text-blue-500"
            >
              {" "}
              UI Blocks{" "}
            </a>
            &
            <a
              href="https://shadcnspace.com/templates"
              className="underline text-blue-500"
            >
              {" "}
              Templates{" "}
            </a>
            without breaking design consistency.
          </p>
        </section>
        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Date Picker

          </h4>
          <p className="text-foreground/80">
            Our Shadcn Date Picker is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for any web project.
          </p>
        </section>
      </div>
    </>
  );
}
