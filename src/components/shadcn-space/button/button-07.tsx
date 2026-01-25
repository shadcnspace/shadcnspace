import { Button } from "@/components/ui/button";

const ButtonSocialDemo = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* google */}
      <Button
        variant="outline"
        type="button"
        className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-google.svg"
          alt="google icon"
          className="h-4 w-4"
        />
        Sign in with Google
      </Button>
      {/* github */}
      <Button
        variant="outline"
        type="button"
        className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github.svg"
          alt="github icon"
          className="dark:hidden h-4 w-4"
        />
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-github-white.svg"
          alt="github icon"
          className="hidden dark:block h-4 w-4"
        />
        Sign in with Github
      </Button>
      {/* linkedin */}
      <Button
        variant="outline"
        type="button"
        className="text-sm text-medium text-card-foreground gap-2 dark:bg-background rounded-lg"
      >
        <img
          src="https://images.shadcnspace.com/assets/svgs/icon-linkedin.svg"
          alt="linkedin icon"
          className="h-4 w-4"
        />
        Continue with Linkedin
      </Button>
    </div>
  );
};

export default ButtonSocialDemo;
