import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

const InviteMemberCard = () => {
    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card>
                <CardContent>
                    <Empty className="h-56 border border-dashed">
                        <EmptyHeader>
                            <EmptyMedia>
                                <AvatarGroup>
                                    <Avatar size="lg">
                                        <AvatarImage src="https://images.shadcnspace.com/assets/profiles/jenny.webp" alt="@shadcn" />
                                    </Avatar>
                                    <Avatar size="lg">
                                        <AvatarImage src="https://images.shadcnspace.com/assets/profiles/albert.webp" alt="@maxleiter" />
                                    </Avatar>
                                    <Avatar size="lg">
                                        <AvatarImage src="https://images.shadcnspace.com/assets/profiles/jessica.webp" alt="@evilrabbit" />
                                    </Avatar>
                                </AvatarGroup>
                            </EmptyMedia>
                            <EmptyTitle>No Team Members</EmptyTitle>
                            <EmptyDescription>
                                Invite your team to collaborate on this project.
                            </EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent>
                            <Button size="sm" className="cursor-pointer hover:bg-primary/80">
                                Invite Members
                            </Button>
                        </EmptyContent>
                    </Empty>
                </CardContent>
            </Card>
        </div>
    )
}

export default InviteMemberCard