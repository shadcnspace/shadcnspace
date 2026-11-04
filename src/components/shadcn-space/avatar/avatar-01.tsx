import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const DefaultAvatarDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="flex flex-row justify-center items-center gap-3">
        <Avatar>
          <AvatarImage
            src="https://images.shadcnspace.com/assets/profiles/user-1.jpg"
            alt="user"
          />
          <AvatarFallback className="text-sm font-medium">CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DefaultAvatarDemo;
