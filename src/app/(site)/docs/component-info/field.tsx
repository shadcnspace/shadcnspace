import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function FieldData() {
  const faqData = [
    {
      title: "What is a Field component?",
      content:
        "A Field component is a layout primitive for building forms. It standardizes the spacing, alignment, and structure around labels, descriptions, inputs, and validation errors, so every form field in your app looks and behaves consistently.",
    },
    {
      title: "Does it work with any form control?",
      content:
        "Yes. Field wraps whatever control you give it - Input, Textarea, Select, Checkbox, Switch, or RadioGroup - and handles the surrounding label, description, and error layout automatically.",
    },
    {
      title: "How do I show validation errors?",
      content:
        "Use the FieldError subcomponent alongside your control. Pass it an errors array (e.g. from a form library) or plain children, and it renders a single message or a de-duplicated list automatically.",
    },
    {
      title: "Can fields be laid out horizontally?",
      content:
        "Yes. Field accepts an orientation prop - vertical, horizontal, or responsive - to switch between stacked labels, inline label-and-control rows, or a layout that stacks on mobile and goes inline at larger container widths.",
    },
    {
      title: "How do I group related fields together?",
      content:
        "Wrap related fields in a FieldSet with a FieldLegend for the group heading, or use FieldGroup to control spacing between multiple Field elements. FieldSeparator adds a labeled or plain divider between groups.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Consistent, Accessible Forms with Shadcn Field
          </h2>
          <p className="text-foreground/80">
            Stop rebuilding label, description, and error markup for every
            input. Our{" "}
            <strong className="text-foreground">
              Shadcn Field components
            </strong>{" "}
            give you a composable layout system for forms, built with React,
            Tailwind CSS, and Base UI.
          </p>
          <p className="text-foreground/80">
            A modular field layout system that helps structure sign in forms,
            settings pages, checkout steps, and any other form-heavy UI into
            clean, responsive layouts.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Field?
          </h2>
          <p className="text-foreground/80">
            Shadcn Field is a structured layout system composed of{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              FieldSet
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              FieldGroup
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              Field
            </code>
            ,{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              FieldLabel
            </code>
            , and{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              FieldError
            </code>
            . It enables developers to align labels, descriptions, controls,
            and validation messages cleanly, without rewriting spacing rules
            for every form.
          </p>
          <p className="text-foreground/80">
            Whether you&apos;re building a sign in form, a notification
            settings page, a pricing plan picker, or a checkout address form,
            Shadcn Field provides the spacing and responsive layout
            configuration out of the box.
          </p>
          <p className="text-foreground/80">Field components are commonly used for:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Sign in and sign up forms</li>
            <li>Notification and account settings lists</li>
            <li>Pricing and plan selection cards</li>
            <li>Checkout and shipping address forms</li>
            <li>Validation states with inline error messages</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Field
          </h2>
          <p className="text-foreground/80">
            Aligning labels, descriptions, and error text by hand for every
            input is repetitive and easy to get inconsistent. The Field
            component abstracts these layout rules, supporting vertical,
            horizontal, and responsive orientations with zero manual styling.
          </p>
          <p className="text-foreground/80">
            Because it&apos;s just layout, Field works with any control or
            form library - plain React state, React Hook Form, or your own
            validation logic - without imposing extra dependencies.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Vertical, horizontal, and responsive orientation variants</li>
            <li>Automatic invalid state styling via a data-invalid attribute</li>
            <li>FieldError with automatic de-duplication of error messages</li>
            <li>FieldSet and FieldLegend for grouping related fields</li>
            <li>FieldSeparator for plain or labeled dividers between groups</li>
            <li>Card-style selectable fields for radio and checkbox groups</li>
            <li>Works with Input, Textarea, Select, Switch, Checkbox, and RadioGroup</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Field Examples &amp; Variants
          </h2>
          <p className="text-foreground/80">
            Explore practical form layouts designed for real product flows.
            From authentication to settings to checkout, these examples cover
            the core implementation setups.
          </p>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Sign In Form</h3>
              <p className="text-foreground/80">
                An email and password form with inline validation, a
                forgot-password link, and social sign in buttons separated by
                a labeled divider.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Notification Settings
              </h3>
              <p className="text-foreground/80">
                A horizontal field list pairing a title and description with a
                switch for each toggleable preference.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">Choose a Plan</h3>
              <p className="text-foreground/80">
                A radio group of selectable pricing cards, using field labels
                to highlight the active plan.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Shipping Address
              </h3>
              <p className="text-foreground/80">
                A fieldset combining responsive field orientation, inputs, a
                select, and a checkbox confirmation field.
              </p>
            </div>
          </div>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Integrate with Any Shadcn Components
          </h2>
          <p className="text-foreground/80">
            The Field layout elements work smoothly with other Shadcn UI
            components in your application:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with <strong className="text-foreground">Input</strong> or{" "}
              <strong className="text-foreground">Textarea</strong> for text
              entry fields.
            </li>
            <li>
              Use with <strong className="text-foreground">Select</strong> to
              wrap dropdown choices with a label and description.
            </li>
            <li>
              Combine with <strong className="text-foreground">Switch</strong>{" "}
              or <strong className="text-foreground">Checkbox</strong> for
              toggleable settings rows.
            </li>
            <li>
              Integrate with{" "}
              <strong className="text-foreground">Radio Group</strong> to
              build card-style selectable options.
            </li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Field
          </h2>
          <p className="text-foreground/80">
            Use{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              FieldSeparator
            </code>{" "}
            between grouped sections, such as before a set of social sign in
            buttons, to divide content without manual borders or padding
            offsets.
          </p>
          <p className="text-foreground/80">When handling validation:</p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Set{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-sm">
                data-invalid
              </code>{" "}
              on <code className="bg-muted px-1 py-0.5 rounded text-sm">Field</code>{" "}
              and <code className="bg-muted px-1 py-0.5 rounded text-sm">aria-invalid</code>{" "}
              on the control to trigger the built-in destructive styling.
            </li>
            <li>
              Pass an errors array to{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-sm">FieldError</code>{" "}
              to automatically render a single message or a de-duplicated
              list, matching whatever your form library returns.
            </li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Field
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Authentication and onboarding forms</li>
            <li>Account and notification settings pages</li>
            <li>Pricing and plan selection screens</li>
            <li>Checkout and shipping address forms</li>
            <li>Any form requiring inline validation feedback</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            You can easily integrate it into any Next.js or React setup. The
            components are clean and customizable, accepting custom
            classNames, form library bindings, and responsive Tailwind
            layouts.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Field Components
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Field components are open-source and free to use.
            Easily copy the code, customize the elements, and integrate them
            into your personal or commercial projects.
          </p>
        </section>
      </div>
    </>
  );
}
