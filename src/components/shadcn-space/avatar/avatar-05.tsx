
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const CounterAvatarDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="relative w-fit">
        <Avatar>
          <AvatarImage
            alt="user"
            src="https://images.shadcnspace.com/assets/profiles/user-6.jpg"
          />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-2 border-background bg-red-500 text-xs font-medium text-white">
         5
        </span>
      </div>
    </div>
  );
};

export default CounterAvatarDemo;
