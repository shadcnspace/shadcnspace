"use client"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox"
import { PlusIcon } from "lucide-react"

interface User {
  value: string;
  label: string;
  avatar: string;
}

const users: User[] = [
  {
    value: "shadcnspace",
    label: "shadcnspace",
    avatar: "https://images.shadcnspace.com/assets/profiles/user-1.jpg"
  },
  {
    value: "sarahlee",
    label: "sarahlee",
    avatar: "https://images.shadcnspace.com/assets/profiles/user-2.jpg"
  },
  {
    value: "danielross",
    label: "danielross",
    avatar: "https://images.shadcnspace.com/assets/profiles/user-3.jpg"
  },
  {
    value: "emilyclark",
    label: "emilyclark",
    avatar: "https://images.shadcnspace.com/assets/profiles/user-4.jpg"
  },
  {
    value: "michaelstone",
    label: "michaelstone",
    avatar: "https://images.shadcnspace.com/assets/profiles/user-5.jpg"
  }
]

const AssignTaskCard = () => {
  const anchor = useComboboxAnchor()

  return (
    <div className="max-w-sm mx-auto px-4 w-full">
      <Card size="sm">
        <CardHeader className="border-b">
          <CardTitle>Assign Issue</CardTitle>
          <CardDescription>Select users to assign to this issue.</CardDescription>
          <CardAction>
            <Button variant="outline" size="icon-xs" className="cursor-pointer">
              <PlusIcon />
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <Combobox multiple items={users} defaultValue={[users[0]]}>
            <ComboboxChips ref={anchor} className="w-full">

              <ComboboxValue>
                {(values: User[]) => (
                  <>
                    {values.map((user) => (
                      <ComboboxChip key={user.value}>
                        <Avatar className="size-4 mr-1">
                          <AvatarImage src={user.avatar} />
                        </Avatar>
                        {user.label}
                      </ComboboxChip>
                    ))}
                    <ComboboxChipsInput />
                  </>
                )}
              </ComboboxValue>

            </ComboboxChips>

            <ComboboxContent anchor={anchor}>
              <ComboboxEmpty>No users found.</ComboboxEmpty>

              <ComboboxList>
                {(user: User) => (
                  <ComboboxItem key={user.value} value={user}>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-5">
                        <AvatarImage src={user.avatar} />
                      </Avatar>
                      {user.label}
                    </div>
                  </ComboboxItem>
                )}
              </ComboboxList>

            </ComboboxContent>
          </Combobox>
        </CardContent>
      </Card>
    </div>
  )
}

export default AssignTaskCard