import FaqAccordion from "@/components/custom-components/faq-accordion";

export default function AutocompleteData() {
  const faqData = [
    {
      title: "Can I use Autocomplete for location and address search?",
      content:
        "Yes. Autocomplete is a great choice for city, country, address, and location search fields where users need quick suggestions instead of scrolling through long lists.",
    },
    {
      title: "Should I use Autocomplete or Command for search?",
      content:
        "Use Autocomplete when users need to search and select data inside forms or inputs. Use Command when building a command palette for navigation, actions, or application shortcuts.",
    },
    {
      title: "What is the difference between Autocomplete and Combobox?",
      content:
        "Both help users select options, but autocomplete focuses on searching and filtering while typing. A combobox often combines dropdown selection with search capabilities. Autocomplete is usually preferred when users need to find items quickly from larger datasets.",
    },
    {
      title: "Can I create a global search using Autocomplete?",
      content:
        "Absolutely. Many developers use autocomplete inside Dialogs or Command-style interfaces to build global search experiences across their applications.",
    },
    {
      title: "Does Autocomplete work with React Hook Form?",
      content:
        "Yes. It integrates well with React Hook Form and can be used for validation, controlled inputs, and form submissions.",
    },
    {
      title: "Can I display avatars and icons inside suggestions?",
      content:
        "Yes. You can render avatars, icons, badges, descriptions, and custom layouts inside each suggestion item.",
    },
    {
      title: "How do I handle large datasets?",
      content:
        "For large datasets, use server-side search or async fetching instead of loading everything on the client. This keeps the interface fast and responsive.",
    },
    {
      title: "Does Autocomplete support keyboard shortcuts?",
      content:
        "Yes. Users can navigate suggestions using arrow keys, select results with Enter, and close suggestion lists using Escape.",
    },
    {
      title: "When should I use Autocomplete instead of a Dropdown?",
      content:
        "Use autocomplete when the list contains many options and users need search functionality. For smaller lists, a standard dropdown is usually enough.",
    },
    {
      title: "How many autocomplete suggestions should I show?",
      content:
        "It's usually best to show a limited number of relevant results, such as 5–10 suggestions. Showing too many options can make the list harder to scan and select.",
    },
    {
      title: "Can I show a loading state while fetching results?",
      content:
        "Yes. When using API-based search, you can display a loading indicator or skeleton state while results are being fetched. This gives users clear feedback that the search is still in progress.",
    },
    {
      title: "What happens when no matching results are found?",
      content:
        '"You can display a custom empty state message such as "No results found" or provide helpful suggestions to guide users toward another search term."',
    },
    {
      title: "Can I use Shadcn Autocomplete for user and team member search?",
      content:
        "Absolutely. Autocomplete works well for searching users, team members, customers, or collaborators. You can even display profile images and additional information inside the suggestion list.",
    },
    {
      title: "Does Shadcn Autocomplete work on mobile devices?",
      content:
        "Yes. The component works well on mobile devices and supports touch interactions. It can be used for search fields, selectors, and form inputs across different screen sizes.",
    },
    {
      title: "Can I use Autocomplete with remote APIs?",
      content:
        "Yes. Many developers connect autocomplete inputs to APIs for searching products, locations, users, or database records. Results can be loaded dynamically as users type.",
    },
    {
      title: "Can I highlight matching text in search results?",
      content:
        "Yes. You can highlight the matching part of each result to make suggestions easier to scan and help users quickly identify relevant options.",
    },
    {
      title: "Does Shadcn Autocomplete support debounced search?",
      content:
        "Yes. Debouncing is commonly used with autocomplete to reduce unnecessary API calls and improve performance when users type quickly.",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        {/* intro */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Build Faster Search Experiences with Shadcn Autocomplete
          </h2>
          <p className="text-foreground/80">
            Whether you&apos;re building a search box, user selector, country
            picker, or product finder, autocomplete can save users a lot of
            time. Instead of scrolling through long lists, users simply start
            typing and get{" "}
            <strong className="text-foreground">relevant suggestions</strong>
            {" "}instantly.
          </p>
          <p className="text-foreground/80">
            Our Shadcn Autocomplete examples help you add smart search
            experiences to your React applications without building everything
            from scratch.
          </p>
        </section>

        {/* section - 01 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            What is Shadcn Autocomplete?
          </h2>
          <p className="text-foreground/80">
            Shadcn Autocomplete is a search-driven input component that helps
            users find and select options quickly as they type. Instead of
            showing a long dropdown with hundreds of items, it filters and
            displays relevant suggestions in real time.
          </p>
          <p className="text-foreground/80">
            Built with React, Next.js, Tailwind CSS, and modern UI primitives,
            these components are {" "}
            <strong className="text-foreground">easy to customize</strong> and
            work well in forms, search interfaces, dashboards, admin panels,
            and data-heavy applications.
          </p>
          <p className="text-foreground/80">
            Autocomplete is commonly used for:
          </p>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>User and team member search</li>
            <li>Product and category selection</li>
            <li>Country and city pickers</li>
            <li>Search filters</li>
            <li>Tags and labels</li>
            <li>Command-style search experiences</li>
          </ul>
        </section>

        {/* section - 02 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Why Developers Use Shadcn Autocomplete
          </h2>
          <p className="text-foreground/80">
            Many applications contain large lists of data. Asking users to
            scroll through hundreds of options isn&apos;t always the best
            experience.
          </p>
          <p className="text-foreground/80">
            Autocomplete makes <strong className="text-foreground">
              searching feel natural
            </strong>. Users type a few characters and instantly see matching
            results. This reduces clicks, speeds up workflows, and helps users
            find the right option faster.
          </p>
          <p className="text-foreground/80">
            Developers also like autocomplete because it works for many
            different scenarios. The same component can power a user search
            field, location picker, command search, product selector, or filter
            menu.
          </p>
        </section>

        {/* section - 03 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Key Features
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Real-time search suggestions</li>
            <li>Keyboard-friendly navigation</li>
            <li>Supports local and async search data</li>
            <li>Works with large datasets</li>
            <li>Custom option rendering support</li>
            <li>Accessible interaction patterns</li>
            <li>Mobile-friendly experience</li>
            <li>Supports icons, avatars, and grouped results</li>
            <li>Easy customization with Tailwind CSS</li>
          </ul>
        </section>

        {/* section - 04 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Shadcn Autocomplete Variants
          </h2>
          <div className="flex flex-col gap-4 ml-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Basic Autocomplete
              </h3>
              <p className="text-foreground/80">
                A simple autocomplete input that filters and displays matching
                results while typing.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Size Variants Autocomplete
              </h3>
              <p className="text-foreground/80">
                Available in multiple sizes to fit toolbars, forms, filters, and
                search pages.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Vanish Animation Autocomplete
              </h3>
              <p className="text-foreground/80">
                Adds smooth animations when suggestions appear or disappear.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Team Member Autocomplete Search
              </h3>
              <p className="text-foreground/80">
                Perfect for finding users, team members, collaborators, or
                workspace participants.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Async Autocomplete Search
              </h3>
              <p className="text-foreground/80">
                Fetches suggestions from APIs as users type.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground text-lg font-semibold">
                Autocomplete With Icon
              </h3>
              <p className="text-foreground/80">
                Displays icons, avatars, or custom visuals alongside search
                results.
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
            All these Autocomplete components work naturally with many other
            components in your project.
          </p>
          <p className="text-foreground/80">
            Use it inside{" "}
            <a
              href="/blocks/dashboard-ui/forms"
              target="_blank"
              className="text-primary underline"
            >
              Forms
            </a>{" "}
            to improve data entry. Pair it with{" "}
            <a
              href="/components/dialog"
              target="_blank"
              className="text-primary underline"
            >
              Dialogs
            </a>{" "}
            for global search experiences. Combine it with{" "}
            <a
              href="/components/command"
              target="_blank"
              className="text-primary underline"
            >
              Command
            </a>{" "}
            for searchable actions, or use it with{" "}
            <a
              href="/components/popover"
              target="_blank"
              className="text-primary underline"
            >
              Popovers
            </a>{" "}
            and{" "}
            <a
              href="/components/dropdown-menu"
              target="_blank"
              className="text-primary underline"
            >
              Dropdown Menus
            </a>{" "}
            for interactive selection workflows.
          </p>
          <p className="text-foreground/80">
            Integrating with these components helps create search experiences
            that feel fast and easy to use.
          </p>
        </section>

        {/* section - 07 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Tips for Using Shadcn Autocomplete
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>Keep suggestion lists focused and relevant.</li>
            <li>Show meaningful labels instead of IDs.</li>
            <li>Limit visible results when working with large datasets.</li>
            <li>Use loading indicators for async searches.</li>
            <li>Provide helpful empty states when no results are found.</li>
            <li>Support keyboard navigation for faster selection.</li>
            <li>Test mobile interactions on smaller screens.</li>
            <li>Debounce API requests for better performance.</li>
          </ul>
        </section>

        {/* section - 08 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Common Uses of Shadcn Autocomplete
          </h2>
          <ul className="text-foreground/80 ml-8 list-disc space-y-2">
            <li>User search and selection</li>
            <li>Team member pickers</li>
            <li>Product search</li>
            <li>Location and country selectors</li>
            <li>Filter panels</li>
            <li>Command search interfaces</li>
            <li>CRM dashboards</li>
            <li>Admin panels</li>
            <li>E-commerce product discovery</li>
            <li>Documentation search</li>
          </ul>
        </section>

        {/* section - 09 */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Easy to Use with React Components
          </h2>
          <p className="text-foreground/80">
            Shadcn Autocomplete is designed to fit naturally into any React
            &amp; Next.js applications.
          </p>
          <p className="text-foreground/80">
            You can connect it to a local state, fetch results from APIs,
            integrate with React Hook Form, or combine it with server-side data.
            Since the component is built using reusable React patterns, it
            remains {" "}
            <strong className="text-foreground">
              easy to extend and customize
            </strong>{" "}
            as your application grows.
          </p>
        </section>

        {/* section - faq */}
        <section>
          <FaqAccordion faqData={faqData} />
        </section>

        {/* section - free */}
        <section className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl sm:text-2xl font-bold">
            Free Shadcn Autocomplete
          </h2>
          <p className="text-foreground/80">
            Our Shadcn Autocomplete components are free to use. You can copy,
            customize, and use them in personal or commercial projects without
            worrying about hidden licenses. Every example is designed to be
            clean, accessible, and easy to adapt to your own application.
          </p>
        </section>
      </div>
    </>
  );
}
