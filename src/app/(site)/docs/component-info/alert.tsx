import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AlertData() {
  const faqData = [
    {
      title: "When should I use an alert message?",
      content: "Use alerts when users need to know the result of an action, such as saving data, uploading files, or encountering an error.",
    },
    {
      title: "Can alerts include icons?",
      content: "Yes. You can add icons to make messages easier to understand, especially for error or success notifications.",
    },
    {
      title: "Should alerts disappear automatically?",
      content: "It depends on the situation. Success messages may disappear after a few seconds, but error messages should stay until users read them.",
    },
    {
      title: "Can I style alerts differently?",
      content: "Yes. Since it uses Tailwind CSS, you can easily change colors, spacing, and layout styles.",
    },
    {
      title: "Can alerts be used inside forms?",
      content: "Yes. Alerts are often placed above forms to show validation errors or submission results.",
    },
    {
      title: "Free Shadcn Alert",
      content: "Our Shadcn Alert is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for personal or commercial projects.",
    }
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Improve your UI by adding alert <b>messages for success, errors, warnings,</b> or simple information. The component keeps the layout clean while making sure users notice important updates.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Alert?
          </h2>
          <p className="text-foreground/80">
            An Alert component is used to communicate <b>important information to users.</b>
          </p>
          <p className="text-foreground/80">
            For example, when a form is submitted successfully, when an error occurs during login, or when a system needs to show a warning.
          </p>
          <p className="text-foreground/80">
            Most applications <b>show alerts after actions</b> like saving data, uploading files, updating settings, or completing tasks.
          </p>
          <p className="text-foreground/80">
            Messy notifications can make the interface confusing. The Shadcn Alert component helps you <b>display messages</b> in a simple and structured way, while still matching the design of the rest of your interface.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Alert
          </h2>
          <p className="text-foreground/80">
            Feedback is an important part of any user interface.
          </p>
          <p className="text-foreground/80">
            Imagine clicking a “Save” button and nothing happens. Users will wonder if the system is working.
          </p>
          <p className="text-foreground/80">
            Alerts solve this problem by <b>giving clear feedback.</b>
          </p>
          <p className="text-foreground/80">
            Developers use Shadcn Alert because it:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Shows feedback after users complete actions</li>
            <li>Helps users understand errors or warning messages</li>
            <li>Keeps message layouts consistent across pages</li>
            <li>Works easily inside forms and dashboard layouts</li>
            <li>Allows simple customization using Tailwind CSS</li>
          </ul>
          <p className="text-foreground/80">
           It makes <b>communication between the system and the user</b> clearer.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Supports success, warning, error, and info messages</li>
            <li>Works well inside forms and dashboards</li>
            <li>Easy to customize colors and styles</li>
            <li>Supports icons for better message clarity</li>
            <li>Accessible and readable layout</li>
            <li>Works in both light and dark themes</li>
            <li>Lightweight and easy to maintain</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Alert
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Keep alert messages short and clear
            </li>
            <li>
              Use alerts only when something important happens
            </li>
            <li>
              Avoid showing too many alerts at the same time
            </li>
            <li>Use proper colors to match message types</li>
            <li>
             Place alerts close to the related action (like above a form)
            </li>
          </ul>
          <p className="text-foreground/80">
            Clear alerts help users understand what is happening without confusion.
          </p>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Alert
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Form submission success messages</li>
            <li>Login or authentication errors</li>
            <li>System warnings or notices</li>
            <li>API error messages</li>
            <li>Update confirmations</li>
            <li>Dashboard system alerts</li>
          </ul>
          <p className="text-foreground/80">
            Anywhere you need to inform users about something important.
          </p>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
           Shadcn Alert works smoothly with many other components.
          </p>
          <p className="text-foreground/80">You can place it with:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Place it with {" "}
              <a
                href="https://shadcnspace.com/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Forms
              </a>{" "}
               to display validation or submission messages
            </li>
            <li>
              Add it inside{" "}
              <a
                href="https://shadcnspace.com/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              layouts for dashboard notifications
            </li>
            <li>
              Trigger alerts from{" "}
              <a
                href="https://shadcnspace.com/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              or
              <a
                href="https://shadcnspace.com/components/button-group"
                target="_blank"
                className="text-primary underline"
              >
                Button Group
              </a>{" "}
              actions after user interactions
            </li>
            <li>
              Show alerts within{" "}
              <a
                href="https://shadcnspace.com/blocks/dashboard-ui/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              for confirmations or warnings
            </li>
          </ul>
          <p className="text-foreground/80">
            Because it follows the same Shadcn structure, it fits easily into existing layouts without breaking design consistency.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Alert
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Alert is free to use. You are welcome to use it with no hidden policies or licenses. It is clean, accessible, and flexible for personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
