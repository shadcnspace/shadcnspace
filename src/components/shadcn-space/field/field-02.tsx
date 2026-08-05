import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

type NotificationOption = {
  id: string;
  title: string;
  description: string;
  defaultChecked: boolean;
};

const notificationOptions: NotificationOption[] = [
  {
    id: "notif-comments",
    title: "Comments",
    description: "Get notified when someone comments on your post.",
    defaultChecked: true,
  },
  {
    id: "notif-mentions",
    title: "Mentions",
    description: "Get notified when someone mentions you.",
    defaultChecked: true,
  },
  {
    id: "notif-marketing",
    title: "Marketing emails",
    description: "Receive emails about new products and features.",
    defaultChecked: false,
  },
];

const NotificationSettingsDemo = () => {
  return (
    <div className="w-full max-w-md rounded-xl border border-border p-6">
      <FieldGroup className="gap-4">
        {notificationOptions.map((option, index) => (
          <div key={option.id} className="flex flex-col gap-4">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{option.title}</FieldTitle>
                <FieldDescription>{option.description}</FieldDescription>
              </FieldContent>
              <Switch id={option.id} defaultChecked={option.defaultChecked} />
            </Field>
            {index < notificationOptions.length - 1 && <FieldSeparator />}
          </div>
        ))}
      </FieldGroup>
    </div>
  );
};

export default NotificationSettingsDemo;
