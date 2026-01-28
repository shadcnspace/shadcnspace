
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const FallbackDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <Avatar>
        <AvatarFallback className="bg-blue-200 text-blue-500 font-medium">WP</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default FallbackDemo;
