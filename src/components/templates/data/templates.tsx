export interface Template {
  label: string;
  slug: string;
  icon: string;
  description: string;
  items: {
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
    features: string[];
    sections: string[];
    downloadUrl: string;
  }[];
}

export const templates = [
  {
    label: "Landing Page Templates",
    slug: "Landing Page",
    icon: "solar:laptop-minimalistic-linear",
    description: "Website Blocks are a collection of Shadcn UI Blocks that are designed to help you create stunning and user- friendly marketing websites.",
    items: [
      {
        name: "Crypgo - Shadcn UI Crypto Landing Page Template",
        price: 0,
        category: "Landing Page",
        figma: "#",
        subtitle: "Transform your crypto business with Crypgo NextJS landing page template designed specifically for NFT startups, bitcoin trading platforms, blockchain consultancy, and digital coin services. ",
        description:
          <>
            <p>
              Transform your crypto business with Crypgo NextJS landing page template designed specifically for NFT startups, bitcoin trading platforms, blockchain consultancy, and digital coin services. It offers seamless performance, modern design, and easy customization, perfect for launching your crypto platform. The ultimate Nextjs template for NFT startups, trading, and blockchain services.
            </p>
          </>,
        images: [
          "/images/templates/crypgo/crypgo-1.png",
          "/images/templates/crypgo/crypgo-2.png",
          "/images/templates/crypgo/crypgo-3.png",
          "/images/templates/crypgo/crypgo-4.png",
        ],
        coverImage: "https://images.shadcnspace.com/assets/templates/crypgo-cover.webp",
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
          "Designed and Engineered For Crypto Trading LandingPage",
          "Made with React 19+, NextJs 16+ and TypeScript",
          "Styled Using Tailwind CSS",
          "High-quality Premium Design",
          "Easy-To-Understand Folder Structure",
          "Organized Code Structure",
          "The Hassle-free Setup Process",
        ],
        downloadUrl: "https://github.com/GetNextjsTemplates/Crypgo-nextjs-tailwind/archive/refs/heads/main.zip",
        sections: [],
      },
      {
        name: "Typefolio - Shadcn UI Personal Portfolio Template",
        price: 0,
        category: "Landing Page",
        figma: "#",
        subtitle: "Typefolio is a clean and modern one-page portfolio template built with Next.js. It loads fast, looks great on all screen sizes, and is simple to customize. Perfect for developers, designers, and creatives who want to showcase their work online with style and ease.",
        description:
          <>
            <p>
              Typefolio is a clean and modern one-page portfolio template built with Next.js. It loads fast, looks great on all screen sizes, and is simple to customize. Perfect for developers, designers, and creatives who want to showcase their work online with style and ease.
            </p>
          </>,
        images: [
          "/images/templates/typefolio/typefolio-1.png",
          "/images/templates/typefolio/typefolio-2.png",
          "/images/templates/typefolio/typefolio-3.png",
          "/images/templates/typefolio/typefolio-4.png",
        ],
        coverImage: "https://images.shadcnspace.com/assets/templates/typefolio-cover.webp",
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
          "Designed and Engineered For Portfolio LandingPage",
          "Made with React 19+, NextJs 16+ and TypeScript",
          "Styled Using Tailwind CSS",
          "High-quality Premium Design",
          "Easy-To-Understand Folder Structure",
          "Organized Code Structure",
          "The Hassle-free Setup Process",
        ],
        downloadUrl: "https://github.com/GetNextjsTemplates/typefolio/archive/refs/heads/main.zip",
        sections: [],
      },
      {
        name: "Resume - Shadcn UI Resume and Portfolio Template",
        price: 0,
        category: "Landing Page",
        figma: "#",
        subtitle: "Build your personal brand with this modern Resume template built using Next.js and Tailwind CSS. Perfect for developers, designers, and freelancers who want to showcase their skills, projects, and experience professionally.",
        description:
          <>
            <p>
              Build your personal brand with this modern Resume template built using Next.js and Tailwind CSS. Perfect for developers, designers, and freelancers who want to showcase their skills, projects, and experience professionally.
            </p>
          </>,
        images: [
          "/images/templates/resume/resume-1.png",
          "/images/templates/resume/resume-2.png",
          "/images/templates/resume/resume-3.png",
          "/images/templates/resume/resume-4.png",
        ],
        coverImage: "https://images.shadcnspace.com/assets/templates/resume-cover.webp",
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
          "Designed and Engineered For Portfolio LandingPage",
          "Made with React 19+, NextJs 16+ and TypeScript",
          "Styled Using Tailwind CSS",
          "High-quality Premium Design",
          "Easy-To-Understand Folder Structure",
          "Organized Code Structure",
          "The Hassle-free Setup Process",
        ],
        downloadUrl: "https://github.com/GetNextjsTemplates/resume-nextjs/archive/refs/heads/main.zip",
        sections: [],
      },
    ]
  },
]