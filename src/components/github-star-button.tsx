import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubLogo } from "./ui/icons";

const OWNER = "shadcnspace";
const REPO = "shadcnspace";

export const GithubStarButton = async ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("shadow-none px-3", className)}
      asChild
      {...props}
    >
      <Link href={`https://github.com/${OWNER}/${REPO}`} target="_blank">
        <GithubLogo className="h-5! w-5!" />
      </Link>
    </Button>
  );
};
