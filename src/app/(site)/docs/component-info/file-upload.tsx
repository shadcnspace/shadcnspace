import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function FileUploadData() {


  const faqData = [
    {
      title: "Does the component support multiple file uploads?",
      content:
        "Yes. You can enable multiple file selection and handle uploaded files using React state or your backend API.",
    },
    {
      title: "Can I restrict file types like only PDF or images?",
      content:
        "Yes. You can limit file types using input configuration and add validation logic to ensure only allowed formats are uploaded.",
    },
    {
      title: "Can I show file preview after selection?",
      content: "Yes. You can display file names or preview images before uploading, which improves user confidence and clarity.",
    },
    {
      title: "Does it support drag-and-drop functionality?",
      content:
        "Yes. The component can support drag-and-drop interaction, making file selection easier and more intuitive.",
    },
    {
      title: "Can I integrate it with form validation libraries?",
      content:
        "Yes. Since it supports controlled state, it works well with React Hook Form or any custom validation logic.",
    },

  ];
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section>
          <p className="text-foreground/80">
            Our Shadcn File Upload component gives you a clean and flexible way
            to handle file selection in React and Next.js projects. It supports
            customization, validation, and smooth integration with forms.
          </p>
        </section>
        {/* section - 01 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is File Upload?
          </h2>
          <p className="text-foreground/80">
            A File Upload component allows users to select and upload files such
            as images, PDFs, documents, or other media to your application.
          </p>
          <p className="text-foreground/80">
            The default HTML file input is functional but difficult to style
            properly. A well-designed File Upload component improves both user
            experience and visual consistency.
          </p>
          <p className="text-foreground/80">
            Our Shadcn File Upload component provides a structured and
            customizable way to handle file selection while keeping the UI clean
            and modern.
          </p>
        </section>

        {/* section - 02 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use File Upload
          </h2>
          <p className="text-foreground/80">
            In real applications, file uploading is common profile pictures,
            resumes, invoices, reports, and media content.
          </p>
          <p className="text-foreground/80">
            Handling file previews, validation, drag-and-drop support, and error
            states manually takes time. Developers use a ready component so they
            can focus more on backend logic instead of frontend styling.
          </p>
          <p className="text-foreground/80">
            It simplifies the UI while keeping full control over file handling.
          </p>
        </section>

        {/* section - 03 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Drag and drop support</li>
            <li>Customizable layout and styles</li>
            <li>Multiple file selection support</li>
            <li>File preview capability</li>
            <li>Works with form validation</li>
            <li>Lightweight and responsive</li>
          </ul>
        </section>

        {/* section - 04 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using File Upload
          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Always validate file size before uploading</li>
            <li>Restrict file types when necessary</li>
            <li>Show upload progress for better feedback</li>
            <li>Handle error states clearly</li>
            <li>Provide preview or confirmation after selection</li>
          </ul>
        </section>


        {/* section - 05 */}

        <section className="flex flex-col gap-3">
          <h3 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of File Upload

          </h3>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Profile image upload
            </li>
            <li>Resume submission forms</li>
            <li>Admin content management</li>
            <li>Document submission portals</li>
            <li>Media libraries</li>
          </ul>
        </section>

        {/* section - 06 */}

        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Other Components

          </h2>
          <p className="text-foreground/80">
            It fits naturally inside forms, cards, modals, and dashboard layouts. Because it follows shadcn conventions, you don’t need extra wrappers or layout adjustments.
          </p>
        </section>


        {/* section - 07 */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>


        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h4 className="text-foreground text-base sm:text-lg font-semibold">
            Free Shadcn File Upload


          </h4>
          <p className="text-foreground/80">
            Our Shadcn File Upload component is free to use. There are no hidden restrictions or complex licensing terms. It is flexible, accessible, and ready to use in real-world applications.

          </p>
        </section>
      </div>
    </>
  );
}
