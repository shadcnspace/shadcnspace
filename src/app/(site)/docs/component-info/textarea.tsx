import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function TextareaData() {
  const faqData = [
    {
      title: "Can I limit the number of characters in the Shadcn Textarea?",
      content: (
        <>
          Yes. You can set a maximum character limit and show helper text or a
          counter so users know how many characters they can enter.
        </>
      ),
    },
    {
      title: "Can I change the size or make it auto-expand?",
      content: (
        <>
          Yes. You can control height, width, and resize behavior using Tailwind
          classes. You can also make it grow based on user input with simple
          logic.
        </>
      ),
    },
    {
      title: "Is the Shadcn Textarea accessible?",
      content: (
        <>
          Yes. When used with proper labels and helper text, it supports screen
          readers and keyboard navigation, making it usable for all users.
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* section - 01 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          What is the Shadcn Textarea?
        </h2>
        <p className="text-foreground/80">
          Shadcn Textarea is a React component used to collect multi-line text
          from users. It allows people to type longer content such as messages,
          descriptions, comments, or feedback.
        </p>
        <p className="text-foreground/80">
          The component is built with React and styled using Tailwind CSS. It
          works like a normal HTML textarea but gives you full control over
          styles, layout, and behavior inside your own codebase.
        </p>
      </section>

      {/* section - 02 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Why Developers Use Shadcn Textarea
        </h2>
        <p className="text-foreground/80">
          Developers use Shadcn Textarea because it is simple, flexible, and
          easy to control.
        </p>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>
            <strong className="text-foreground font-semibold">
              Accessible by Design:
            </strong>{" "}
            Supports keyboard navigation, screen readers, and proper labels so
            all users can interact with it easily.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Fully Customizable:
            </strong>{" "}
            Change size, colors, borders, spacing, and focus styles using
            Tailwind CSS to match any design.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Rich Functionality:
            </strong>{" "}
            Supports resizing, auto-growing text, error states, and form
            validation without extra setup.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Ideal for Multiline Input:
            </strong>{" "}
            Perfect for contact forms, feedback fields, comments, notes, and
            content writing areas.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Good Performance:
            </strong>{" "}
            Handles large text smoothly without slowing down the interface.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Easy to Maintain:
            </strong>{" "}
            Lives inside your project, making it simple to update, style, and
            extend as your app grows.
          </li>
        </ul>
      </section>

      {/* section - 03 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Key Features
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>
            <strong className="text-foreground font-semibold">
              Multi-line Text Input:
            </strong>{" "}
            Allows users to enter long text such as messages, comments, or
            descriptions.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Tailwind CSS Styling:
            </strong>{" "}
            Easy to change spacing, colors, borders, and size using Tailwind
            utility classes.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Form Friendly:
            </strong>{" "}
            Works smoothly with form libraries and supports validation and error
            states.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Accessible by Default:
            </strong>{" "}
            Supports labels, placeholders, and keyboard navigation for better
            usability.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Resizable Support:
            </strong>{" "}
            Can be fixed, vertically resizable, or auto-growing based on
            content.
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              Character Limit Support:
            </strong>{" "}
            Lets you set a maximum character count and show helpful feedback to
            users.
          </li>
        </ul>
      </section>

      {/* section - 04 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Tips for Using Shadcn Textarea
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Always add a clear label so users know what to enter</li>
          <li>Use helper text to explain limits or errors</li>
          <li>Set a character limit when needed</li>
          <li>Enable resize or auto-grow for better typing experience</li>
          <li>Use proper spacing for readability</li>
          <li>Keep styles consistent across the app</li>
        </ul>
      </section>

      {/* section - 05 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Some Common Uses of Shadcn Textarea
        </h2>
        <ul className="text-foreground/80 ml-8 list-disc space-y-2">
          <li>Contact and feedback forms</li>
          <li>Chat and messaging inputs</li>
          <li>Comment sections</li>
          <li>Blog or post editors</li>
          <li>Product descriptions</li>
          <li>Multi-step form fields</li>
        </ul>
      </section>

      {/* section - 06 */}
      <section className="flex flex-col gap-3">
        <h2 className="text-foreground text-xl sm:text-2xl font-bold">
          Easy to Integrate with Any Components
        </h2>
        <p className="text-foreground/80">
          Shadcn Textarea works smoothly with other UI components.
        </p>
        <p className="text-foreground/80">
          You can combine it with buttons for submit actions, tooltips for
          guidance, badges for character count, and alerts for error or success
          messages. It also fits well inside cards, forms, and modal layouts.
        </p>
        <p className="text-foreground/80">
          Since the component lives in your project, you can connect it easily
          with validation logic, state management, and form handling.
        </p>
      </section>

      {/* section - 07 */}
      <section>
        <FaqAccordion faqData={faqData} />
      </section>
    </div>
  );
}
