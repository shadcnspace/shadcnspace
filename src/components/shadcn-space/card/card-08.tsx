import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Plus, Copy } from "lucide-react"

const InviteCard = () => {
    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card className="flex flex-col">
                <CardHeader className="grid auto-rows-min items-start gap-1">
                    <CardTitle>Invite Team</CardTitle>
                    <CardDescription>Add members to your workspace</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <Input
                                className="flex-1"
                                defaultValue="shadcnspace@example.com"
                                placeholder="Email address"
                            />
                            <Select defaultValue="admin">
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="admin">Admin</SelectItem>
                                    <SelectItem className="cursor-pointer" value="editor">Editor</SelectItem>
                                    <SelectItem className="cursor-pointer" value="viewer">Viewer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center gap-2">
                            <Input
                                className="flex-1"
                                defaultValue="ss@example.com"
                                placeholder="Email address"
                            />
                            <Select defaultValue="editor">
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem className="cursor-pointer" value="admin">Admin</SelectItem>
                                    <SelectItem className="cursor-pointer" value="editor">Editor</SelectItem>
                                    <SelectItem className="cursor-pointer" value="viewer">Viewer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full cursor-pointer">
                        <Plus className="size-4" />
                        Add another
                    </Button>

                    <Separator />

                    <div className="space-y-2">
                        <Label htmlFor="invite-link">Or share invite link</Label>
                        <InputGroup>
                            <InputGroupInput
                                id="invite-link"
                                readOnly
                                defaultValue="https://app.co/invite/x8f2k"
                            />
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton size="icon-xs" variant="ghost" aria-label="Copy link">
                                    <Copy className="size-4" />
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full cursor-pointer hover:bg-primary/80">Send Invites</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default InviteCard