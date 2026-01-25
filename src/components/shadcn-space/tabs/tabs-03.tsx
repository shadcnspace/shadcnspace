import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LockKeyhole,
  LucideIcon,
  NotebookTabs,
  UserRoundPen,
  Users,
} from "lucide-react";

type TabsWithIconProps = {
  tabs: {
    name: string;
    value: string;
    icon: LucideIcon;
    content: React.ReactNode;
  }[];
};

const tabs: TabsWithIconProps["tabs"] = [
  {
    name: "My details",
    value: "my-details",
    icon: NotebookTabs,
    content: (
      <>
        Manage your personal{" "}
        <span className="text-foreground font-semibold">account details</span> .
        Keep everything up to date so we can serve you better.
      </>
    ),
  },
  {
    name: "Profile",
    value: "profile",
    icon: UserRoundPen,
    content: (
      <>
        Customize how others see you. Update your{" "}
        <span className="text-foreground font-semibold">
          profile information
        </span>
        , bio, and preferences to reflect who you are.
      </>
    ),
  },
  {
    name: "Password",
    value: "password",
    icon: LockKeyhole,
    content: (
      <>
        Keep your account{" "}
        <span className="text-foreground font-semibold">secure</span> by
        updating your password regularly. Choose a strong password to protect
        your data.
      </>
    ),
  },
  {
    name: "Team",
    value: "team",
    icon: Users,
    content: (
      <>
        Manage your{" "}
        <span className="text-foreground font-semibold">team members</span>,
        invite new collaborators, assign roles, and control access permissions
        from one place.
      </>
    ),
  },
];

const TabsWithIconDemo = () => {
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="explore" className="gap-4">
        <TabsList>
          {tabs.map(({ icon: Icon, name, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-1 px-2.5 sm:px-3"
            >
              <Icon />
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <p className="text-muted-foreground text-sm">{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsWithIconDemo;
