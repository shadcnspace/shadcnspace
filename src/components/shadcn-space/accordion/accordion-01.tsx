import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { FileText, Folder, LucideIcon, Settings, Users } from "lucide-react";

const data: {
  value: string;
  title: string;
  subtitle: string;
  content: string;
  icon: LucideIcon;
  textColor: string;
  bgColor: string;
}[] = [
  {
    value: "documents",
    title: "Documents",
    subtitle: "Manage your files",
    content:
      "View, upload, and organize all your documents in one place. Keep everything structured and easy to find.",
    icon: FileText,
    textColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    value: "projects",
    title: "Projects",
    subtitle: "Organize your work",
    content:
      "Group related files and tasks into projects to keep your workflow clean and efficient.",
    icon: Folder,
    textColor: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    value: "settings",
    title: "Settings",
    subtitle: "Customize your experience",
    content:
      "Adjust preferences, update account details, and configure application behavior.",
    icon: Settings,
    textColor: "text-teal-400",
    bgColor: "bg-teal-400/10",
  },
  {
    value: "team",
    title: "Team Members",
    subtitle: "Manage users and roles",
    content:
      "Invite new members, assign roles, and control access permissions for your team.",
    icon: Users,
    textColor: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

const AccordionDemo = () => (
  <div className="flex items-center justify-center max-w-md w-full">
    <Accordion className="w-full -space-y-px" defaultValue={[data[0].value]}>
      {data.map((item) => {
        const Icon = item.icon;
        return (
          <AccordionItem
            key={item.value}
            value={item.value}
            className=" border bg-background px-4 first:rounded-t-lg last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2.5 rounded-xl",
                    item.bgColor,
                    item.textColor,
                  )}
                >
                  <Icon size={20} className="size-5" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span>{item.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ps-14">
              <p className="text-muted-foreground">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  </div>
);

export default AccordionDemo;
