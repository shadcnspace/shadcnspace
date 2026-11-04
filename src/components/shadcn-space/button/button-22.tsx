import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const LoadingButtonDemo = () => {
  return (
    <Button disabled>
      <Loader className="animate-spin" />
      Loading
    </Button>
  );
};

export default LoadingButtonDemo;
