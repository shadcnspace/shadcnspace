import { Button } from "@/components/ui/button";

const ButtonSizeDemo = () => {
  return (
    <Button
      variant="default"
      size={"lg"}
      className="px-6 hover:-translate-y-1 transition-transform duration-200"
    >
      Button Size: lg
    </Button>
  );
};

export default ButtonSizeDemo;
