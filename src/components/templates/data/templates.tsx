export interface Template {
  label: string;
  slug: string;
  icon: string;
  description: string;
  items: {
    metatitle: string;
    metadescription: string;
    name: string;
    price: number;
    figma: string;
    subtitle: string;
    category: string;
    description: React.ReactNode;
    images: string[];
    coverImage: string;
    technologies: {
      name: string;
      icon: string;
    }[];
    repo: string;
    slug: string;
    url: string;
    features: React.ReactNode[];
    sections: string[];
    downloadUrl: string;
  }[];
}

export const templates: Template[] = [
  {
    label: "Landing Page Templates",
    slug: "Landing Page",
    icon: "solar:laptop-minimalistic-linear",
    description:
      "Website Blocks are a collection of Shadcn UI Blocks that are designed to help you create stunning and user- friendly marketing websites.",
    items: [
      {
        metatitle: "Crypgo - Shadcn UI Crypto Landing Page Template",
        metadescription:
          "Free Crypgo NextJS Tailwind landing page template built with Shadcn UI - developer-friendly, responsive, SEO optimized, and ready to customize for crypto, SaaS & Web3 projects.",
        name: "Crypgo - Shadcn UI Crypto Landing Page Template",
        price: 0,
        category: "Landing Page",
        figma:
          "https://www.figma.com/design/xN0ICHXEd4moz5sfE5no4r/shadcnspace-figma-uikit-free?node-id=4268-10&t=xt8uLiqbrDoEXaUL-1",
        subtitle:
          "Transform your crypto business with Crypgo NextJS landing page template designed specifically for NFT startups, bitcoin trading platforms, blockchain consultancy, and digital coin services. ",
        description: (
          <>
            <p className="text-muted-foreground">
              Crypgo is a free{" "}
              <strong className="text-foreground font-semibold">
                Next.js and Tailwind CSS landing page template
              </strong>{" "}
              built for developers who need a fast, modern starting point for
              crypto, SaaS, or Web3 products. It follows a component-driven
              architecture with clean code practices, making it easy to
              understand, extend, and maintain in real-world production
              environments.
            </p>
            <p className="text-muted-foreground">
              The template leverages{" "}
              <strong className="text-foreground font-semibold">
                Shadcn UI
              </strong>{" "}
              for accessible, reusable components and a consistent design
              system. With performance-focused layouts, responsive sections, and
              SEO-friendly structure, Crypgo helps teams ship professional
              landing pages quickly without sacrificing code quality or
              scalability.
            </p>
          </>
        ),
        images: [
          "/images/templates/crypgo/crypgo-1.png",
          "/images/templates/crypgo/crypgo-2.png",
          "/images/templates/crypgo/crypgo-3.png",
          "/images/templates/crypgo/crypgo-4.png",
        ],
        coverImage:
          "https://images.shadcnspace.com/assets/templates/crypgo-cover.webp",
        repo: "https://github.com/GetNextjsTemplates/Crypgo-nextjs-tailwind",
        slug: "Crypgo",
        url: "https://crypgo-nextjs-tailwind.vercel.app/",
        technologies: [
          { name: "v16.1.0", icon: "devicon:nextjs" },
          { name: "v19+", icon: "devicon:react" },
          { name: "v4.0.0", icon: "devicon:tailwindcss" },
          { name: "v3.5.1", icon: "vscode-icons:file-type-shadcn" },
        ],
        features: [
          <>
            Built with{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>{" "}
            for server rendering and optimized performance
          </>,
          <>
            Styled using{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            for rapid and flexible UI development
          </>,
          <>
            Integrated{" "}
            <strong className="text-foreground font-semibold">
              Shadcn UI components
            </strong>{" "}
            for accessibility and design consistency
          </>,
          <>Developer-friendly folder structure and reusable components</>,
          <>Fully responsive layout optimized for all screen sizes</>,
          <>SEO-ready markup following modern best practices</>,
          <>Lightweight and fast loading with minimal dependencies</>,
          <>Easy customization for crypto, SaaS, and Web3 landing pages</>,
        ],
        downloadUrl:
          "https://github.com/GetNextjsTemplates/Crypgo-nextjs-tailwind/archive/refs/heads/main.zip",
        sections: [],
      },
      {
        metatitle: "Typefolio - Shadcn UI Personal Portfolio Template",
        metadescription:
          "Free Typefolio NextJS portfolio template built with Shadcn UI & Tailwind CSS - clean, minimal, SEO-friendly, and perfect for developers, designers & creatives.",
        name: "Typefolio - Shadcn UI Personal Portfolio Template",
        price: 0,
        category: "Landing Page",
        figma:
          "https://www.figma.com/design/xN0ICHXEd4moz5sfE5no4r/shadcnspace-figma-uikit-free?node-id=4268-1106&t=xt8uLiqbrDoEXaUL-1",
        subtitle:
          "Typefolio is a modern personal portfolio template crafted for developers who want a sharp, distraction-free way to present their work, skills, and online presence.",
        description: (
          <>
            <p className="text-muted-foreground">
              Typefolio is a sleek{" "}
              <strong className="text-foreground font-semibold">
                one-page portfolio template
              </strong>{" "}
              crafted with Next.js and Tailwind CSS to help developers,
              designers, and technologists present their work with clarity and
              professionalism. Its minimal architecture keeps your code lean
              while ensuring rapid performance and clean visual hierarchy across
              sections.
            </p>
            <p className="text-muted-foreground">
              Integrated with{" "}
              <strong className="text-foreground font-semibold">
                Shadcn UI
              </strong>{" "}
              components, Typefolio delivers a consistent, accessible UI
              foundation right out of the box. From project showcases to
              personal details, every element is optimized for responsiveness
              and straightforward customization, making it ideal for personal
              websites, resumes, or client portfolios.
            </p>
          </>
        ),
        images: [
          "/images/templates/typefolio/typefolio-1.png",
          "/images/templates/typefolio/typefolio-2.png",
          "/images/templates/typefolio/typefolio-3.png",
          "/images/templates/typefolio/typefolio-4.png",
        ],
        coverImage:
          "https://images.shadcnspace.com/assets/templates/typefolio-cover.webp",
        repo: "https://github.com/GetNextjsTemplates/typefolio",
        slug: "Typefolio",
        url: "https://typefolio-nextjs.vercel.app/",
        technologies: [
          { name: "v16.1.0", icon: "devicon:nextjs" },
          { name: "v19+", icon: "devicon:react" },
          { name: "v4.0.0", icon: "devicon:tailwindcss" },
          { name: "v3.5.1", icon: "vscode-icons:file-type-shadcn" },
        ],
        features: [
          <>One-page layout designed for personal portfolio showcases</>,
          <>
            Built with{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>{" "}
            for efficient navigation and performance
          </>,
          <>
            Styled using{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            for utility-first design flexibility
          </>,
          <>
            Includes reusable components from{" "}
            <strong className="text-foreground font-semibold">Shadcn UI</strong>
          </>,
          <>Lightning-fast loading and minimal bundle size</>,
          <>Fully responsive across devices and viewports</>,
          <>Clean, well-organized code for easy editing</>,
          <>Lightweight and fast loading with minimal dependencies</>,
          <>Ready for personal branding and digital CV sites</>,
        ],
        downloadUrl:
          "https://github.com/GetNextjsTemplates/typefolio/archive/refs/heads/main.zip",
        sections: [],
      },
      {
        metatitle: "Resume - Shadcn UI Resume and Portfolio Template",
        metadescription:
          "Free Resume NextJS Template with Tailwind CSS and Shadcn UI - modern, responsive, fast, and easy to personalize for your online professional profile.",
        name: "Resume - Shadcn UI Resume and Portfolio Template",
        price: 0,
        category: "Landing Page",
        figma:
          "https://www.figma.com/design/xN0ICHXEd4moz5sfE5no4r/shadcnspace-figma-uikit-free?node-id=4268-1418&t=xt8uLiqbrDoEXaUL-1",
        subtitle:
          "Resume is a lightweight Next.js resume template created for individuals who want a simple, professional online presence.",
        description: (
          <>
            <p>
              Showcase your skills, experience, and portfolio effortlessly with
              this free{" "}
              <strong className="text-foreground font-semibold">
                Resume NextJS Template
              </strong>{" "}
              built for developers, designers, and tech professionals. The
              template features a clean, modern layout tailored to highlight
              your professional story while maintaining performance and
              accessibility.
            </p>
            <p>
              Designed with{" "}
              <strong className="text-foreground font-semibold">
                Tailwind CSS
              </strong>{" "}
              and enhanced with{" "}
              <strong className="text-foreground font-semibold">
                Shadcn UI
              </strong>{" "}
              components, this resume template prioritizes modularity and
              clarity in code structure. Its responsive design adapts seamlessly
              across devices, making your web CV look sharp on mobile, tablet,
              and desktop.
            </p>
          </>
        ),
        images: [
          "/images/templates/resume/resume-1.png",
          "/images/templates/resume/resume-2.png",
          "/images/templates/resume/resume-3.png",
          "/images/templates/resume/resume-4.png",
        ],
        coverImage:
          "https://images.shadcnspace.com/assets/templates/resume-cover.webp",
        repo: "https://github.com/GetNextjsTemplates/resume-nextjs",
        slug: "Resume",
        url: "https://resume-getnextjs-template.vercel.app/",
        technologies: [
          { name: "v16.1.0", icon: "devicon:nextjs" },
          { name: "v19+", icon: "devicon:react" },
          { name: "v4.0.0", icon: "devicon:tailwindcss" },
          { name: "v3.5.1", icon: "vscode-icons:file-type-shadcn" },
        ],
        features: [
          <>
            Built with{" "}
            <strong className="text-foreground font-semibold">Next.js</strong>{" "}
            for optimized performance and SEO
          </>,
          <>
            Styled using{" "}
            <strong className="text-foreground font-semibold">
              Tailwind CSS
            </strong>{" "}
            for utility-first design
          </>,
          <>
            Includes{" "}
            <strong className="text-foreground font-semibold">Shadcn UI</strong>{" "}
            components for consistent UI/UX
          </>,
          <>
            Modern resume layout with clear sections for skills and experience
          </>,
          <>Fully responsive across all device sizes</>,
          <>Lightning-fast loading and SEO-focused structure</>,
          <>Easy to personalize content and visuals</>,
          <>Ready to deploy on platforms like Vercel</>,
        ],
        downloadUrl:
          "https://github.com/GetNextjsTemplates/resume-nextjs/archive/refs/heads/main.zip",
        sections: [],
      },
    ],
  },
];
