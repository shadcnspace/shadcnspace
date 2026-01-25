import Dropdown from "@/components/shadcn-space/blocks/dropdown-01/dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <Dropdown
      defaultOpen={true}
      align="center"
      trigger={
        <button className="rounded-full">
          <Avatar className="size-10 cursor-pointer">
            <AvatarImage
              src="https://images.shadcnspace.com/assets/profiles/user-11.jpg"
              alt="David McMichael"
            />
            <AvatarFallback>DM</AvatarFallback>
          </Avatar>
        </button>
      }
    />
  );
};

export default page;