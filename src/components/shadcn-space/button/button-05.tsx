import { Button } from "@/components/ui/button";

const ButtonFigmaDemo = () => {
  return (
    <>
      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#F24E1E] via-[#A259FF] to-[#1ABCFE] py-[1px] px-[0.5px]">
        <Button className="bg-background hover:bg-background text-foreground">
          <img
            src="https://images.shadcnspace.com/assets/svgs/icon-figma.svg"
            alt="figma"
            className="h-4 w-4"
          />
          Get Figma File
        </Button>
      </span>
    </>
  );
};

export default ButtonFigmaDemo;
