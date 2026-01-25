/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.shadcnspace.com/:path*",
        has: [
          {
            type: "host",
            value: "shadcnspace.com",
          },
        ],
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "matdash-nextjs-main.vercel.app",
      },
      {
        hostname: "material-m-nextjs-main.vercel.app",
      }
    ],
  },
  outputFileTracingIncludes: {
    "/blocks/*": ["./src/**/*.{js,ts,tsx}"],
  },
  outputFileTracingExcludes: {
    "*": [
      ".next/cache/webpack",
      ".pnpm-store/**/*",
      ".git/**/*",
      "public/images/blocks/**/*",
      "public/images/templates/**/*",
      "public/r/**/*",
      "node_modules/@shikijs/langs/**/*",
      "node_modules/@shikijs/themes/**/*",
    ],
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
