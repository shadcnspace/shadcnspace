"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const contributors = [
  { name: "shadcn", img: "https://images.shadcnspace.com/assets/profiles/user-1.jpg" },
  { name: "vercel", img: "https://images.shadcnspace.com/assets/profiles/albert.webp" },
  { name: "nextjs", img: "https://images.shadcnspace.com/assets/profiles/user-2.jpg" },
  { name: "tailwindlabs", img: "https://images.shadcnspace.com/assets/profiles/user-3.jpg" },
  { name: "typescript", img: "https://images.shadcnspace.com/assets/profiles/user-4.jpg" },
  { name: "eslint", img: "https://images.shadcnspace.com/assets/profiles/user-5.jpg" },
  { name: "prettier", img: "https://images.shadcnspace.com/assets/profiles/user-6.jpg" },
  { name: "babel", img: "https://images.shadcnspace.com/assets/profiles/jenny.webp" },
  { name: "webpack", img: "https://images.shadcnspace.com/assets/profiles/linda.webp" },
  { name: "rollup", img: "https://images.shadcnspace.com/assets/profiles/user-7.jpg" },
  { name: "parcel", img: "https://images.shadcnspace.com/assets/profiles/user-8.jpg" },
  { name: "vite", img: "https://images.shadcnspace.com/assets/profiles/user-9.jpg" },
  { name: "react", img: "https://images.shadcnspace.com/assets/profiles/user-10.jpg" },
  { name: "vue", img: "https://images.shadcnspace.com/assets/profiles/user-11.jpg" },
  { name: "angular", img: "https://images.shadcnspace.com/assets/profiles/jessica.webp" },
  { name: "solid", img: "https://images.shadcnspace.com/assets/profiles/user-12.jpg" },
]

const ContributedCard = () => {
    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card className="max-w-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        Contributors
                        <Badge variant="secondary">312</Badge>
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {contributors.map((user) => (
                            <Avatar key={user.name}>
                                <AvatarImage src={user.img} alt={user.name} />
                            </Avatar>
                        ))}
                    </div>
                </CardContent>

                <CardFooter>
                    <a
                        href="#"
                        className="text-sm underline underline-offset-4"
                    >
                        + 810 contributors
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ContributedCard