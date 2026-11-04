export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL ??
      process.env.NEXT_PUBLIC_APP_URL!
      : "http://localhost:3000",
  social: {
    github: "https://github.com/shadcnspace/shadcnspace",
    twitter: "https://twitter.com/",
  },
};
