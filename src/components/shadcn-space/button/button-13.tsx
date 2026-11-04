import { Button } from "@/components/ui/button";

const ButtonSizeDemo = () => {
  return (
    <Button
      variant="default"
      size={"xs"}
      className="hover:-translate-y-1 transition-transform duration-200"
    >
      Button Size: xs
    </Button>
  );
};

export default ButtonSizeDemo;
