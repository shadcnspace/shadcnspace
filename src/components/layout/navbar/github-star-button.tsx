import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icon } from "@iconify/react";

const OWNER = "shadcnspace";
const REPO = "shadcnspace";

export const GithubStarButton = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn("shadow-none px-3", className)}
      {...props}
    >
      <Link href={`https://github.com/${OWNER}/${REPO}`} target="_blank" className="flex gap-2 items-center">
        <Icon icon={"tabler:brand-github"} className="w-5! h-5!" width={20} height={20} />
        <span className="sm:inline hidden">
          Github
        </span>
      </Link>
    </Button>
  );
};
