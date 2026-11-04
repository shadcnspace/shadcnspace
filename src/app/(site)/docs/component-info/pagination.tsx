import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function PaginationData() {
  const faqData = [
    {
      title: "What is Shadcn Pagination used for?",
      content:
        "It is used to divide large data into smaller pages so users can navigate easily without loading everything at once.",
    },
    {
      title: "When should I use pagination instead of infinite scroll?",
      content:
        "Use pagination when users need control and want to jump between pages. Infinite scroll is better for continuous browsing like social feeds.",
    },
    {
      title: "Can I use Shadcn Pagination with API data?",
      content:
        "Yes, it works well with APIs. You can control page numbers using query params and fetch data accordingly.",
    },
    {
      title: "How do I show the current page?",
      content:
        "You can highlight the active page using styles and aria attributes so users always know where they are.",
    },
    {
      title: "How do I control the active page state?",
      content:
        "Manage the current page using a state variable and pass it to your pagination component. Based on this value, you can highlight the active page and fetch the correct data. The component is controlled, so you handle both state and data updates.",
    },
    {
      title: "Can I use pagination with server-side data fetching?",
      content:
        "Yes, pagination works with both client-side and server-side setups. You can pass the current page in the URL and read it in your server logic to load the correct data.",
    },
    {
      title: "How do I handle large page counts with ellipsis?",
      content:
        "When there are too many pages, show only a few numbers around the current page and use ellipsis to indicate skipped pages. This keeps the UI clean while still allowing navigation.",
    },
    {
      title: "Is the pagination component accessible?",
      content:
        "Yes, it uses proper navigation roles and aria attributes. The current page is clearly marked so screen readers can understand it.",
    },
    {
      title: "Can I customize pagination design?",
      content:
        "Yes, you can fully style it using Tailwind classes to match your UI.",
    },
    {
      title: "Can I add a page size selector?",
      content:
        "Yes, you can combine it with a select component to let users choose how many items they want per page.",
    },
    {
      title: "Can I sync pagination with URL?",
      content:
        "Yes, storing page numbers in the URL helps with refresh, sharing links, and better user experience.",
    },
    {
      title: "Does pagination improve performance?",
      content:
        "Yes, it reduces the amount of data loaded at once, making your app faster and easier to use.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <p className="text-foreground/80">
            Boost your interface with our Shadcn Pagination variants, crafted
            with React and Tailwind CSS.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Pagination components provide simple and clear page
            navigation for large data sets. Choose from previous/next buttons,
            numbered pages, and ellipsis styles all ready for tables, lists,
            search results, and dashboards.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Pagination?
          </h2>
          <p className="text-foreground/80">
            Pagination is a way to break large data into smaller pages so users
            don’t have to load everything at once.
          </p>
          <p className="text-foreground/80">
            Think about a table with 1000 rows. Showing everything together
            makes the page heavy and hard to use. Pagination solves this by
            showing only a few items per page and letting users move step by
            step.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Splits large data into smaller pages</li>
            <li>Helps users move between pages easily</li>
            <li>Keeps UI fast and clean</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Pagination
          </h2>
          <p className="text-foreground/80">
            When your app starts growing, data also grows. Without pagination,
            things quickly become messy.
          </p>
          <p className="text-foreground/80">
            Pagination helps keep things under control and improves
            performance.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Improves page load speed</li>
            <li>Makes large data easy to handle</li>
            <li>Gives users clear control over navigation</li>
            <li>Works well with APIs and server data</li>
            <li>Keeps UI clean and structured</li>
            <li>Easy to implement in tables and lists</li>
          </ul>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Pagination Variants
          </h2>
          <p className="text-foreground/80">
            Different layouts help depending on how much data you have.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              <strong className="text-foreground font-medium">
                Simple Prev / Next
              </strong>{" "}
              - basic navigation for linear content
            </li>
            <li>
              <strong className="text-foreground font-medium">
                Numbered Pages
              </strong>{" "}
              - shows page numbers for small datasets
            </li>
            <li>
              <strong className="text-foreground font-medium">
                With Ellipsis
              </strong>{" "}
              - shortens long page lists
            </li>
            <li>
              <strong className="text-foreground font-medium">
                With First / Last
              </strong>{" "}
              - quick jump to start or end
            </li>
            <li>
              <strong className="text-foreground font-medium">Compact</strong> -
              smaller layout for tight spaces
            </li>
            <li>
              <strong className="text-foreground font-medium">
                With Page Size Selector
              </strong>{" "}
              - lets users choose items per page
            </li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Previous, next, and page number controls</li>
            <li>Active page highlight support</li>
            <li>Works with client and server-side data</li>
            <li>Flexible structure using small building blocks</li>
            <li>Accessible with keyboard and screen reader support</li>
            <li>Fully responsive on all devices</li>
            <li>Clean and minimal design</li>
          </ul>
        </section>

        {/* section - 05 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Pagination
          </h2>
          <p className="text-foreground/80">
            Pagination is simple, but small improvements make a big difference.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Show current page clearly</li>
            <li>Don’t overload with too many page numbers</li>
            <li>Use ellipsis for large datasets</li>
            <li>Keep navigation buttons easy to click</li>
            <li>Sync pagination with URL for better UX</li>
            <li>Combine with filters and search properly</li>
          </ul>
        </section>

        {/* section - 06 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Pagination
          </h2>
          <p className="text-foreground/80">
            Pagination is used almost everywhere in data-heavy apps.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Table navigation in dashboards</li>
            <li>Search results pages</li>
            <li>Blog or article listings</li>
            <li>Product listing pages in e-commerce</li>
            <li>Admin panels with user or order data</li>
            <li>API-based list rendering</li>
          </ul>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Integrate with Any Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Pagination works smoothly with other components and helps
            manage large data easily.
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>
              Pair with{" "}
              <a
                href="/blocks/dashboard-ui/tables"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Table
              </a>{" "}
              to handle row navigation
            </li>
            <li>
              Use with{" "}
              <a
                href="/components/select"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Select
              </a>{" "}
              to control items per page
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/input"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Input
              </a>{" "}
              for jump-to-page feature
            </li>
            <li>
              Include inside{" "}
              <a
                href="/templates"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Templates
              </a>{" "}
              for dashboards
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
              to paginate content sections
            </li>
            <li>
              Combine with{" "}
              <a
                href="/components/tabs"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Tabs
              </a>{" "}
              for category-based pagination
            </li>
            <li>
              Add with{" "}
              <a
                href="/components/dropdown-menu"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Dropdown
              </a>{" "}
              for filter + pagination control
            </li>
            <li>
              Use alongside{" "}
              <a
                href="/components/skeleton"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Skeleton
              </a>{" "}
              for loading states
            </li>
            <li>
              Pair with{" "}
              <a
                href="/components/badge"
                target="_blank"
                className="text-primary underline"
              >
                Shadcn Badge
              </a>{" "}
              to show counts or page info
            </li>
          </ul>
          <p className="text-foreground/80">
            This makes pagination a core part of any structured UI.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Pagination
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Pagination components are{" "}
            <span className="text-foreground font-medium">free to use</span>.
            Clean, accessible, and production-ready for personal or commercial
            projects with no hidden licenses.
          </p>
        </section>
      </div>
    </>
  );
}
