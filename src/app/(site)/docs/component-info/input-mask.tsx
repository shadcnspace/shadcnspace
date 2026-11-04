import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function InputMaskData() {
  const faqData = [
    {
      title: "Why should I use Input Mask instead of validation alone?",
      content:
        "Validation works after the user submits the form, but Input Mask helps during typing. It prevents mistakes early, which means fewer errors and better user experience.",
    },
    {
      title: "How can I ensure proper mobile support?",
      content:
        "Use the correct inputMode like \"numeric\" for number fields. This brings up the right keyboard on mobile and makes typing easier.",
    },
    {
      title: "Are these masks accessible?",
      content:
        "Yes, they use standard input fields with proper labels and attributes. Screen readers can understand them, and keyboard navigation works as expected.",
    },
    {
      title: "Does it handle different types of data like card numbers?",
      content:
        "Yes, common formats like credit cards, expiry dates, and MAC addresses are supported. You can also create your own patterns if needed.",
    },
    {
      title: "How do I handle errors for invalid input?",
      content:
        "You can use Shadcn Form to show validation messages. Even with masks, always keep error handling in place for edge cases.",
    },
    {
      title: "Can I customize the mask pattern?",
      content:
        "Yes, you can define your own format using patterns or regex. This makes it flexible for custom business use cases.",
    },
    {
      title: "Can I use Input Mask with controlled forms?",
      content:
        "Yes, it works well with controlled inputs in React. You can manage values using state or form libraries like React Hook Form.",
    },
    {
      title: "Will Input Mask slow down my form performance?",
      content:
        "No, it’s lightweight and runs on simple logic. In most cases, you won’t notice any performance impact.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Guide users to enter clean, correctly{" "}
            <span className="text-foreground font-medium">formatted data</span>{" "}
            without extra effort.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Input Mask components help users type data in the right
            format from the start. Instead of fixing errors later, the input
            guides them while typing, which makes forms feel smoother and
            faster.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is a Shadcn Input Mask?
          </h2>
          <p className="text-foreground/80">
            An Input Mask is a smart input field that controls how users enter
            data. It adds formatting like spaces, slashes, or colons
            automatically, so users don’t have to think about it.
          </p>
          <p className="text-foreground/80">
            It works quietly in the background and keeps the data clean without
            extra validation steps.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Automatically formats input while typing (like 1234 5678 9012
              3456)
            </li>
            <li>Restricts input to valid characters (numbers, letters, or both)</li>
            <li>Reduces mistakes before form submission</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Input Mask
          </h2>
          <p className="text-foreground/80">
            When you build forms, one common issue is messy or inconsistent
            input. Input Mask solves this at the input level itself instead of
            fixing it later.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Reduces validation errors before submission</li>
            <li>Keeps data format consistent across users</li>
            <li>Improves form completion rate</li>
            <li>Works well on mobile with proper keyboard support</li>
            <li>Avoids writing complex validation logic later</li>
            <li>Helps users understand expected format instantly</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Input Mask Variants
          </h2>
          <p className="text-foreground/80">
            These are common patterns developers use in real apps:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">Card Mask</strong>{" "}
              - Formats credit card numbers in grouped digits
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Expiry Mask
              </strong>{" "}
              - Restricts input to MM/YY format
            </li>
            <li>
              <strong className="text-foreground font-medium">
                MAC Address Mask
              </strong>{" "}
              - Formats hexadecimal values with colons
            </li>
          </ul>
          <p className="text-foreground/80">
            You can also create your own custom patterns based on your needs.
          </p>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features & Benefits
          </h2>
          <p className="text-foreground/80">
            Shadcn Input Mask is simple but solves a real problem in forms.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Real-time formatting while typing</li>
            <li>Prevents invalid characters at input level</li>
            <li>Works with React state and controlled inputs</li>
            <li>Mobile-friendly with correct keyboard type</li>
            <li>Accessible with proper labels and ARIA support</li>
            <li>Lightweight, no heavy external libraries</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Input Mask
          </h2>
          <p className="text-foreground/80">
            A small tip from experience: keep the mask helpful, not confusing.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Always show a clear placeholder (e.g. MM/YY)</li>
            <li>Don’t overuse masks for simple fields like names</li>
            <li>Match mask format with backend expectations</li>
            <li>Use numeric keyboard for number-based fields</li>
            <li>Test with real users to ensure clarity</li>
            <li>Keep error messages simple and helpful</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Input Mask
          </h2>
          <p className="text-foreground/80">
            You’ll find this useful in many real-world forms:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Payment forms (card number, expiry date)</li>
            <li>Phone number inputs</li>
            <li>Date and time fields</li>
            <li>Government or ID numbers</li>
            <li>Network-related inputs (IP, MAC)</li>
            <li>Booking or scheduling systems</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Input Mask fits naturally into your existing UI. It doesn’t
            try to replace components, it works with them.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use with{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Form
              </a>{" "}
              to manage validation and submission
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              for consistent styling across fields
            </li>
            <li>
              Add{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Button
              </a>{" "}
              for submit or action handling
            </li>
            <li>
              Use{" "}
              <a
                href="/components/tooltip"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tooltip
              </a>{" "}
              to explain input formats
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              for country or region selection
            </li>
            <li>
              Wrap inside{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dialog
              </a>{" "}
              for modal-based forms
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Card
              </a>{" "}
              to structure form layouts
            </li>
            <li>
              Integrate with{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              for filtering structured data
            </li>
          </ul>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Input Mask
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Input Mask components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            Clean, simple, and ready for real-world projects with no hidden
            restrictions.
          </p>
        </section>
      </div>
    </>
  );
}
