/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.shadcnui-blocks.com/:path*",
        has: [
          {
            type: "host",
            value: "shadcn-ui-blocks.akashmoradiya.com",
          },
        ],
        permanent: true,
      },
    ];
  },
  images: {
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
