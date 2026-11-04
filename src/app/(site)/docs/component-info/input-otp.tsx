import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function InputOtpData() {
  const faqData = [
    {
      title: "Can I add timers and resend buttons?",
      content:
        "Absolutely. OTP flows commonly include resend buttons and countdown timers for better usability.",
    },
    {
      title: "Does Shadcn Input OTP support auto-focus?",
      content:
        "Yes. The component automatically moves focus to the next input as users type.",
    },
    {
      title: "Can users paste the full OTP code?",
      content:
        "Yes. Most OTP variants support pasting the complete code directly into the component.",
    },
    {
      title: "Is Shadcn Input OTP mobile friendly?",
      content:
        "Yes. It supports mobile keyboards and works smoothly on touch devices.",
    },
    {
      title: "Can I customize OTP length?",
      content:
        "Yes. You can create 4-digit, 6-digit, 8-digit, or custom-length OTP inputs easily.",
    },
    {
      title: "Does it support alphanumeric verification codes?",
      content: "Yes. Some OTP variants support both letters and numbers.",
    },
    {
      title: "Can I connect it with React Hook Form?",
      content:
        "Yes. It works well with React Hook Form and other validation libraries.",
    },
    {
      title: "How do I handle invalid OTP states?",
      content:
        "You can show validation messages, error styling, or alerts when verification fails.",
    },
    {
      title: "Is the OTP component accessible?",
      content:
        "Yes. It supports keyboard navigation, focus management, and accessible interaction patterns.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground font-medium">
            Clean and secure OTP input components for authentication and
            verification flows.
          </p>
          <p className="text-foreground/80">
            Shadcn Input OTP components help users enter verification codes
            smoothly without confusion. Built with React and Tailwind CSS, these
            OTP input variations are useful for login systems, password
            recovery, transaction verification, and secure onboarding flows.
          </p>
          <p className="text-foreground/80">
            Instead of using a single plain input field, OTP components split
            codes into smaller input boxes, making the experience easier to
            understand and faster to complete on both desktop and mobile
            devices.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is the Shadcn Input OTP?
          </h2>
          <p className="text-foreground/80">
            Shadcn Input OTP is a{" "}
            <span className="text-foreground font-medium">
              verification input component
            </span>{" "}
            used for entering one-time passwords, PIN codes, or authentication
            tokens. It separates the code into multiple small input boxes and
            manages focus automatically while users type.
          </p>
          <p className="text-foreground/80">
            The component is built using React, Tailwind CSS, and accessible UI
            patterns, making it easy to integrate into modern applications.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Supports numeric and alphanumeric OTP formats</li>
            <li>Includes auto-focus and auto-navigation behavior</li>
            <li>Works smoothly across desktop and mobile devices</li>
          </ul>
          <p className="text-foreground/80">
            It is commonly used in login verification, two-factor
            authentication, and password reset systems.
          </p>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Input OTP
          </h2>
          <p className="text-foreground/80">
            Many developers prefer OTP input components because they improve the
            overall verification experience. Instead of making users type long
            codes into one field, the input is divided into smaller parts that
            feel simpler and easier to manage.
          </p>
          <p className="text-foreground/80">
            This becomes especially useful in apps where{" "}
            <span className="text-foreground font-medium">
              authentication speed
            </span>{" "}
            matters.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Makes verification flows feel cleaner</li>
            <li>Improves mobile OTP entry experience</li>
            <li>Reduces formatting mistakes during input</li>
            <li>Supports automatic focus movement</li>
            <li>Helps users paste full OTP codes easily</li>
            <li>Works well in secure login systems</li>
            <li>Easy to customize using Tailwind CSS</li>
          </ul>
          <p className="text-foreground/80">
            Shadcn Input OTP components are also lightweight and simple to
            connect with form libraries and backend validation flows.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Types of our Input OTP Components
          </h2>
          <p className="text-foreground/80">
            Different applications need different verification experiences.
            That’s why multiple OTP variations are useful.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-3">
            <li>
              <span className="text-foreground font-semibold">
                Basic Input OTP:
              </span>{" "}
              Simple OTP layout with clean segmented inputs for standard
              verification flows.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Input OTP Separator:
              </span>{" "}
              Uses separators between segments for better readability in longer
              codes.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Animated OTP:
              </span>{" "}
              Adds smooth focus and transition animations for modern
              authentication screens.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Controlled Input OTP:
              </span>{" "}
              Fully controlled React state management for custom validation and
              API integration.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Invalid OTP:
              </span>{" "}
              Displays validation and error states when the entered OTP is
              incorrect or expired.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Four Digits Input OTP:
              </span>{" "}
              Compact verification flow for shorter PIN or security code entry.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Six Digits Input OTP:
              </span>{" "}
              Most common OTP layout used in banking, authentication, and login
              systems.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Alphanumeric Input OTP:
              </span>{" "}
              Supports both letters and numbers for advanced verification
              workflows.
            </li>
            <li>
              <span className="text-foreground font-semibold">
                Form Input OTP:
              </span>{" "}
              Integrated directly with forms and validation libraries like React
              Hook Form.
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Auto-focus between input boxes</li>
            <li>Paste full OTP support</li>
            <li>Mobile-friendly numeric keyboard support</li>
            <li>Error and success validation states</li>
            <li>Accessible keyboard navigation</li>
            <li>Supports custom OTP lengths</li>
            <li>Smooth focus and transition handling</li>
            <li>Easy integration with React forms</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Input OTP
          </h2>
          <p className="text-foreground/80">
            Small UX improvements make OTP flows feel much better.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Focus the first input automatically</li>
            <li>Allow pasting complete OTP codes</li>
            <li>Show clear error messages for invalid codes</li>
            <li>Use countdown timers for expiry indication</li>
            <li>Keep spacing large enough for mobile users</li>
            <li>Avoid unnecessary animations during typing</li>
            <li>Add resend OTP functionality for failed delivery</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Input OTP Components
          </h2>
          <p className="text-foreground/80">
            OTP inputs are used in many authentication flows.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Login verification systems</li>
            <li>Two-factor authentication (2FA)</li>
            <li>Password reset verification</li>
            <li>Banking and payment confirmation</li>
            <li>Mobile number verification</li>
            <li>Email verification workflows</li>
            <li>Secure onboarding flows</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate Input OTP with Other Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Input OTP works nicely with many other Shadcn UI components
            to create complete authentication experiences.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Use with{" "}
              <a
                href="/blocks/marketing/login"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Login screens
              </a>{" "}
              to guide users during verification
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/button"
                target="_blank"
                className="text-primary underline"
              >
                Button
              </a>{" "}
              to handle submit and resend OTP actions
            </li>
            <li>
              Use inside{" "}
              <a
                href="/components/dialog"
                target="_blank"
                className="text-primary underline"
              >
                Dialog
              </a>{" "}
              to show OTP verification in a popup window
            </li>
            <li>
              Combine with{" "}
              <a
                href="/blocks/dashboard-ui/forms"
                target="_blank"
                className="text-primary underline"
              >
                Form
              </a>{" "}
              to manage form validation and error messages
            </li>
            <li>
              Place inside{" "}
              <a
                href="/components/card"
                target="_blank"
                className="text-primary underline"
              >
                Card
              </a>{" "}
              for clean login and verification layouts
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Input
              </a>{" "}
              for signup, login, and account recovery forms
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/tabs"
                target="_blank"
                className="text-primary underline"
              >
                Tabs
              </a>{" "}
              to build step-by-step authentication flows
            </li>
          </ul>
          <p className="text-foreground/80">
            These combinations help developers build secure and user-friendly
            authentication systems in React and Next.js applications.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>
      </div>
    </>
  );
}
