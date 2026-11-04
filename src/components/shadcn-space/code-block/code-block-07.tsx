import { InstallCommand } from "@/components/ui/code-block";

export default function CodeBlockInstallCommand() {
  return (
    <div className="w-full max-w-lg">
      <InstallCommand registryUrl="@shadcn-space/code-block-03" />
    </div>
  );
}
