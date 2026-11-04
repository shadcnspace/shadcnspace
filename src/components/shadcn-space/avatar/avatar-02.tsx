import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const GroupAvatarDemo = () => {
  return (
    <div className="flex items-center justify-center px-4">
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
            <Avatar >
              <AvatarImage src="https://images.shadcnspace.com/assets/profiles/user-1.jpg" alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar >
              <AvatarImage
                src="https://images.shadcnspace.com/assets/profiles/user-2.jpg"
                alt="user"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar >
              <AvatarImage
                src="https://images.shadcnspace.com/assets/profiles/user-3.jpg"
                alt="user"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar >
              <AvatarFallback className="text-card-foreground font-medium text-sm">+4</AvatarFallback>
            </Avatar>
          </div>
        </div>
    </div>
  );
};

export default GroupAvatarDemo;
