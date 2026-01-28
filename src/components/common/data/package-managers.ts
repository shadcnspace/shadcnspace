import { BunLogo, NPMLogo, PnpmLogo, YarnLogo } from "@/components/common/icons";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

interface PackageManagerConfig {
  name: string;
  command: (slug: string) => string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  displayCommand: (slug: string) => string;
}

export const packageManagers: Record<PackageManager, PackageManagerConfig> = {
  pnpm: {
    name: "pnpm",
    command: (slug: string) => `pnpm dlx shadcn@latest add ${slug}`,
    logo: PnpmLogo,
    displayCommand: (slug: string) => `pnpm dlx shadcn@latest add ${slug}`,
  },
  npm: {
    name: "npm",
    command: (slug: string) => `npx shadcn@latest add ${slug}`,
    logo: NPMLogo,
    displayCommand: (slug: string) => `npx shadcn@latest add ${slug}`,
  },
  yarn: {
    name: "Yarn",
    command: (slug: string) => `yarn shadcn@latest add ${slug}`,
    logo: YarnLogo,
    displayCommand: (slug: string) => `yarn shadcn@latest add ${slug}`,
  },
  bun: {
    name: "Bun",
    command: (slug: string) => `bunx --bun shadcn@latest add ${slug}`,
    logo: BunLogo,
    displayCommand: (slug: string) => `bunx --bun shadcn@latest add ${slug}`,
  },
};
