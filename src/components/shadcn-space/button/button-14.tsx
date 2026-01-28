import { Button } from "@/components/ui/button";

const ButtonSizeDemo = () => {
  return (
    <Button
      variant="default"
      size={"sm"}
      className="hover:-translate-y-1 transition-transform duration-200"
    >
      Button Size: sm
    </Button>
  );
};

export default ButtonSizeDemo;
