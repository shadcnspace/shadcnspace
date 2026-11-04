import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function InputData() {
  const faqData = [
    {
      title: "When should I use Input vs Textarea?",
      content: (
        <>
          When entering entries in one line, like emails, names, or passwords,
          use <strong className="text-foreground font-semibold">Input</strong>.
          Textarea should be used when the content is in multiple lines, such as
          comments, messages, or descriptions.
        </>
      ),
    },
    {
      title: "How do I add validation to inputs?",
      content: (
        <>
          Shadcn Input should be used with React Hook Form or validation
          libraries such as Zod/Yup. Input states like focus, disabled, and
          invalid offer a predictable downfall for styling error messages.
        </>
      ),
    },
    {
      title: "Can I customize the way an input looks?",
      content: (
        <>
          Tailwind CSS customization is super flexible when spacing, sizing,
          color, borders, focus states, and other features. Adding icons,
          prefixes, and suffixes is also an option for a better user experience!
        </>
      ),
    },
    {
      title:
        "Are you able to include icons or text that go before or after an input?",
      content: (
        <>
          For sure! Inputs can have icons, text, and buttons to take actions
          like search, show currency, or toggle a password.
        </>
      ),
    },
    {
      title: "Can the password inputs show password visibility?",
      content: (
        <>
          Definitely! Password inputs can have functionality that allows you to
          show/hide the password, and can also have an indicator to show the
          strength of the password.
        </>
      ),
    },
    {
      title:
        "How do I manage inputs that are formatted like a currency or phone number?",
      content: (
        <>
          When formatted values are to be displayed to the user, controlled
          inputs should be used to save the value. Shadcn Input allows you to
          manage the application's state so that you can focus on user
          experience to the greatest extent.
        </>
      ),
    },
    {
      title: "Should I use controlled or uncontrolled inputs?",
      content: (
        <>
          We support both modes. Controlled inputs allow for programmatic state
          management. Uncontrolled inputs are easier for static forms.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Build smarter inputs with{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Input components
            </strong>
            . Designed for web developers, these React and Tailwind CSS input
            fields offer full customization, accessibility, and seamless
            integration with forms, search bars, and data collection interfaces.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Simple, Flexible, and Accessible Input Fields
          </h2>
          <p className="text-foreground/80">
            React makes building forms difficult sometimes due to focus states,
            validation, and accessibility.Shadcn Input components remove the
            common headaches like keyboard navigation, focus outlines, etc. All
            you have to do is add Shadcn Input components to your project, and
            you can get to work.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <p className="text-foreground/80">
            <strong className="text-foreground font-semibold">
              Shadcn Input components
            </strong>{" "}
            handle all the details, so you don’t have to worry:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Accessible by default:
              </strong>{" "}
              Keyboard navigation, focus management, and screen reader support
              work out of the box.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Flexible and fully customizable:
              </strong>{" "}
              Tailwind CSS allows you to adjust spacing, colors, borders, and
              states.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                TypeScript-ready:
              </strong>{" "}
              Works with validators like Zod or Yup to create robust type-safe
              forms.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Form-ready:
              </strong>{" "}
              React Hook Form and other form libraries work with them easily.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Lightweight and performance-ready:
              </strong>{" "}
              Minimal bundle size with fast rendering and smooth interactions.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Multiple input variants:
              </strong>{" "}
              Texts, emails, passwords, numbers, searches, pins, file uploads,
              and even inputs with icons.
            </li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Input Use Cases
          </h2>
          <p className="text-foreground/80">
            These input components from Shadcn are aimed at common scenarios
            like:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              <strong className="text-foreground font-semibold">
                Forms & Authentication:
              </strong>{" "}
              User sign-up, login, and profile forms.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Search & Filters:
              </strong>{" "}
              Input search bars or filter fields in dashboards.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                File Inputs:
              </strong>{" "}
              Styled file upload fields that are smoothly embedded.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Password Fields:
              </strong>{" "}
              With visibility toggles and optional strength meters.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Specialized Inputs:
              </strong>{" "}
              Currency, phone numbers, OTP/pin codes, and masked fields.
            </li>
            <li>
              <strong className="text-foreground font-semibold">
                Interactive Forms:
              </strong>{" "}
              Clear buttons, helper texts, and validation messages
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Customization and Integration
          </h2>
          <p className="text-foreground/80">
            Since the component is located inside your project, you have
            complete control:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>
              Personalize it by customizing the colors, padding, and typography
            </li>
            <li>
              Including prefix and suffix{" "}
              <strong className="text-foreground font-semibold">icons</strong>{" "}
              or <strong className="text-foreground font-semibold">text</strong>
            </li>
            <li>Managing the states of disabled, read-only, or invalid</li>
            <li>
              Works well with other Shadcn UI components like CheckBox, Select,
              Button, Tooltip, Card, & More
            </li>
          </ul>
          <p className="text-foreground/80">
            There are no style overrides, no hidden logic systems, and
            everything is customizable.
          </p>
        </section>

        {/* section - 05 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn Input Components
          </h4>
          <p className="text-foreground/80">
            Our{" "}
            <strong className="text-foreground font-semibold">
              Shadcn Input components
            </strong>{" "}
            are{" "}
            <strong className="text-foreground font-semibold">
              free customizable, and ready to use
            </strong>
            . Simply copy them into your application and efficiently create
            forms, search bars, login interfaces, and any other components with
            your desired functionality.
          </p>
        </section>
      </div>
    </>
  );
}
