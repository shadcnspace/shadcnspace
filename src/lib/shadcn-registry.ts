export const getInstallationCommand = (
  packageManager: string,
  registryUrl: string
) => {
  switch (packageManager) {
    case "npm":
      return `npx shadcn@latest add ${registryUrl}`;
    case "yarn":
      return `yarn dlx shadcn@latest add ${registryUrl}`;
    case "pnpm":
      return `pnpm dlx shadcn@latest add ${registryUrl}`;
    case "bun":
      return `bunx --bun shadcn@latest add ${registryUrl}`;
    default:
      throw new Error(`Unsupported package manager: ${packageManager}`);
  }
};
