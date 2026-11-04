import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function QuestionnaireData() {
  const faqData = [
    {
      title: "How do I manage and store responses across multiple questions?",
      content: (
        <>
          You can maintain response state using React{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">useState</code>, Context API, or form libraries like{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">react-hook-form</code> with{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">zod</code>. Answers can be accumulated per step and submitted in full at the final confirmation step.
        </>
      ),
    },
    {
      title: "What question types can I include in a questionnaire?",
      content:
        "You can combine single-choice radio options, multi-select checkboxes, text inputs, textareas, rating stars, cards with icons, and slider inputs. Because each question step is modular, any shadcn/ui primitive can be embedded.",
    },
    {
      title: "Can I add step transitions and progress indicators?",
      content: (
        <>
          Yes. You can pair the questionnaire with a progress bar or step tracker, and use{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">motion/react</code> to animate step transitions smoothly with enter/exit slide and fade effects.
        </>
      ),
    },
    {
      title: "Can I wrap a Questionnaire inside a collapsible section like an Accordion?",
      content: (
        <>
          Yes. Nesting a <code className="bg-muted px-1 py-0.5 rounded text-sm">Questionnaire</code> inside an{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">Accordion</code> item works well for quiz modules or grouped assessments, letting users expand a topic, complete the questions, and collapse it once done. Track a{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">submitted</code> state to swap the accordion badge and body content between the active form and a completion summary.
        </>
      ),
    },
    {
      title: "How do I enable keyboard shortcuts for selecting answers?",
      content: (
        <>
          Set the <code className="bg-muted px-1 py-0.5 rounded text-sm">shortcuts=&quot;letters&quot;</code> prop on the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">Questionnaire</code> root to let respondents press A, B, C, D to select a choice instead of clicking. Shortcut hints render automatically next to each{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">QuestionnaireChoice</code>, which speeds up completion on desktop.
        </>
      ),
    },
    {
      title: "How do I show a completion state after the questionnaire is submitted?",
      content:
        "Handle the onSubmit callback to flip a 'submitted' flag, then conditionally render a success card (checkmark icon, confirmation message, and a 'Retake Quiz' button) in place of the questionnaire steps. Resetting the flag on the retake button remounts the questionnaire so users can answer again from question one.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* Intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Interactive Surveys and Multi-Step Questionnaires with Shadcn Questionnaire
          </h2>
          <p className="text-foreground/80">
            Shadcn Questionnaire is a composable component system designed to create engaging surveys, multi-step onboarding flows, assessments, and feedback forms. Built with React, Tailwind CSS, Base UI, and Radix UI primitives.
          </p>
          <p className="text-foreground/80">
            Easily customizable for single-choice cards, multi-selection grids, rating scales, and open-ended responses with smooth step transitions and responsive layouts.
          </p>
        </section>

        {/* Section 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Questionnaire?
          </h2>
          <p className="text-foreground/80">
            Shadcn Questionnaire provides a structured layout and step flow for presenting interactive question sequences. It guides respondents through one question or section at a time, minimizing cognitive load and boosting completion rates.
          </p>
          <p className="text-foreground/80">
            Questionnaires are commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Customer onboarding and personalization preference gathering</li>
            <li>Lead generation, buyer qualification, and interactive quizzes</li>
            <li>NPS ratings, user experience feedback, and post-purchase surveys</li>
            <li>Interactive diagnostic tests and product recommendation wizards</li>
          </ul>
        </section>

        {/* Section 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Questionnaire
          </h2>
          <p className="text-foreground/80">
            Building multi-step questionnaire flows from scratch requires managing state transitions, progress tracking, keyboard navigation, and responsive touch controls. Shadcn Questionnaire components provide pre-designed patterns with accessible foundations and frictionless styling.
          </p>
        </section>

        {/* Section 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Multi-step step navigation with Back, Next, and Skip actions</li>
            <li>Integrated progress bar and step counter indicators</li>
            <li>Support for single-select, multi-select, rating, and text responses</li>
            <li>Keyboard accessible with clear focus indicators and ARIA attributes</li>
            <li>Smooth step transitions powered by motion and CSS transitions</li>
            <li>Dual-theme parity with semantic design tokens</li>
            <li>Fully composable with React Hook Form and Zod schemas</li>
          </ul>
        </section>

        {/* Section 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Implementation
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2 lg:max-w-5/6">
            <li>Keep questions concise and break complex workflows into bite-sized steps</li>
            <li>Show a clear progress indicator so respondents know how much remains</li>
            <li>Support auto-advancement for single-choice questions to speed up the flow</li>
            <li>Persist draft responses in local storage or session state to prevent lost progress</li>
          </ul>
        </section>

        {/* Section 05 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* Section 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Questionnaire Components
          </h2>
          <p className="text-foreground/80">
            Our Questionnaire components are completely free and open-source. Copy the clean TypeScript and Tailwind CSS code directly into your project to launch interactive surveys and multi-step forms in minutes.
          </p>
        </section>
      </div>
    </>
  );
}

