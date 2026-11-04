
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blockCategories } from "./utils";

export default function BlockDetails() {
  return (
    <section className="dark:prose-invert mt-12 prose prose-h2:text-3xl prose-h2:tracking-tight prose-p:text-xl prose-p:leading-loose prose-li:text-xl prose-li:leading-loose mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" id="what-is-shadcnspace-">What is Shadcn Space?</h2>
      <p>
        In the world of modern web development, UI components play a crucial
        role in building interactive and visually appealing applications.{" "}
        <strong>Shadcn Space</strong> is an innovative platform that
        provides developers with a vast collection of{" "}
        <strong>Shadcn UI components and blocks</strong>, making it easier to
        create sleek and professional UIs with minimal effort. Let&apos;s
        explore how the platform works, its benefits, and the various types of
        blocks available with all their functionalities.
      </p>
      <hr />
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" id="how-shadcnspace-works">How Shadcn Space Works</h2>
      <p>
        Shadcn Space is designed to be a{" "}
        <strong>one-stop solution for developers</strong> looking for
        high-quality, ready-to-use components built with{" "}
        <strong>Shadcn UI, Radix UI, and Tailwind CSS</strong>. The platform
        allows users to:
      </p>
      <ol>
        <li>
          <strong>Browse through an extensive collection of UI blocks</strong>
        </li>
        <li>
          <strong>Preview different block variations</strong> before copying the
          code
        </li>
        <li>
          <strong>Copy the source code instantly</strong> with a single click
        </li>
        <li>
          <strong>Integrate the components easily</strong> into your projects
        </li>
        <li>
          <strong>Install your favorite blocks</strong> into your project using{" "}
          <strong>just a single command</strong>.
        </li>
      </ol>
      <p>
        Each block follows best practices in accessibility, performance,
        responsiveness, and customization, ensuring seamless integration with
        existing codebases.
      </p>
      <hr />
      <h2 className="text-3xl md:text-4xl  font-semibold tracking-tight" id="benefits-of-using-shadcnspace">
        Benefits of Using Shadcn Space
      </h2>
      <h3 className="text-3xl font-semibold tracking-tight" id="1-saves-development-time-">
        1. <strong>Saves Development Time</strong>
      </h3>
      <p>
        Building UI components from scratch can be time-consuming. With Shadcn
        UI Blocks, developers can simply select a pre-built block, customize it,
        and use it instantly.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="2-customizable-and-scalable-">
        2. <strong>Customizable and Scalable</strong>
      </h3>
      <p>
        Each block is built with Tailwind CSS, making customization
        straightforward. You can easily tweak styles, spacing, and interactions
        to match your design requirements.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="3-consistent-design-system-">
        3. <strong>Consistent Design System</strong>
      </h3>
      <p>
        Since all blocks are based on Shadcn UI and Radix UI, they maintain a
        consistent design language, ensuring a professional look across
        different UI elements.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="4-optimized-for-performance-">
        4. <strong>Optimized for Performance</strong>
      </h3>
      <p>
        The components are lightweight and optimized for speed, reducing
        unnecessary re-renders and ensuring smooth user interactions.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="5-beginner-friendly-">
        5. <strong>Beginner-Friendly</strong>
      </h3>
      <p>
        Even developers new to Shadcn UI can leverage these blocks without deep
        knowledge of Radix UI, making it an excellent resource for beginners and
        experienced developers alike.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="6-fully-responsive">6. Fully Responsive</h3>
      <p>
        All the blocks are fully responsive, providing a seamless user
        experience.
      </p>
      <h3 className="text-3xl font-semibold tracking-tight" id="7-theme-support">7. Theme Support</h3>
      <p>
        All the blocks support light and dark theme modes. Additionally, you can
        easily integrate your theme with these blocks by tweaking just the
        Shadcn UI variables.
      </p>
      <hr />
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" id="types-of-blocks-available">Types of Blocks Available</h2>
      <p>
        Shadcn Space provides a diverse collection of UI blocks, covering
        various use cases such as navigation, authentication, hero sections,
        footers, logo clouds, and more. Here are some of the major categories:
      </p>
      <ol>
        {blockCategories.map((category) => {
          const categoryTitle =
            category.name[0].toUpperCase() + category.name.slice(1);

          return (
            <li key={category.name}>
              <Link href={`/blocks/categories/${category.name}`}>
                {categoryTitle} Blocks
              </Link>
              <ArrowUpRight className="mr-2 h-4 2-4 inline-block" />(
              {category.totalBlocks} blocks)
            </li>
          );
        })}
      </ol>
      <hr />
      <h2 className="text-3xl md:text-4xl  font-semibold tracking-tight" id="how-to-use-shadcnspace">How to Use Shadcn Space</h2>
      <p>Using Shadcn Space in your project is a simple process:</p>
      <ol>
        <li>
          <p>
            <strong>Browse the blocks collection</strong> on the website.
          </p>
        </li>
        <li>
          <p>
            <strong>Select the desired block</strong> and preview how it looks
            and behaves on different screen sizes.
          </p>
        </li>
        <li>
          <p>
            <strong>Install the block</strong> with a simple installation
            command or <strong>copy the file code you need</strong> with a
            single click.
          </p>
        </li>
        <li>
          <p>
            <strong>Paste it into your Next.js or React project</strong> and
            customize it as needed.
          </p>
        </li>
      </ol>
      <p>
        For best results, ensure that{" "}
        <strong>Shadcn UI, Tailwind CSS, and Radix UI</strong> are installed in
        your project.
      </p>
      <hr />
      <h2 className="text-3xl md:text-4xl  font-semibold tracking-tight" id="conclusion">Conclusion</h2>
      <p>
        <strong>Shadcn Space</strong> is a game-changer for developers
        looking to enhance their UI development workflow. By providing
        high-quality, customizable, and accessible UI blocks, it simplifies the
        process of building modern web applications. Whether you&#39;re a
        beginner or an experienced developer, this platform empowers you to
        create beautiful and functional interfaces with ease.
      </p>
      <p>
        If you&#39;re working on a Next.js or React project and need{" "}
        <strong>premium UI components</strong>, Shadcn Space is the perfect
        resource to streamline your development and take your designs to the
        next level. 🚀
      </p>
    </section>
  );
}
