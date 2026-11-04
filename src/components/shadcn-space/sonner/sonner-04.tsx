'use client'

import { toast } from "sonner"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GitPullRequest, GitMerge, ExternalLink } from "lucide-react"

const reviewers = [
  {
    name: "Albert Flores",
    avatar: "https://images.shadcnspace.com/assets/profiles/albert.webp",
    initials: "AF",
  },
  {
    name: "Rough Smith",
    avatar: "https://images.shadcnspace.com/assets/profiles/rough.webp",
    initials: "RS",
  },
  {
    name: "Jenny Wilson",
    avatar: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
    initials: "JW",
  },
]

const ToastComponent = () => {
  const showToast = () => {
    toast.custom(() => (
      <div className="bg-popover/95 backdrop-blur-md text-popover-foreground rounded-2xl flex w-89 flex-col gap-3.5 border border-border p-4 shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg flex size-7 shrink-0 items-center justify-center bg-teal-400/10 text-teal-400 border border-teal-400/20">
              <GitPullRequest className="size-4 animate-pulse" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold tracking-tight">Pull Request #284</p>
          </div>
          <span className="text-muted-foreground/80 text-xs font-medium">2m ago</span>
        </div>
        <p className="text-muted-foreground/90 text-xs font-medium leading-relaxed">
          All reviewers approved. Ready to merge into{" "}
          <code className="bg-muted text-foreground rounded px-1.5 py-0.5 text-xs font-semibold border border-border">
            main
          </code>
        </p>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {reviewers.map((reviewer) => (
                <Avatar
                  key={reviewer.name}
                  className="size-6 border"
                >
                  <AvatarImage src={reviewer.avatar} alt={reviewer.name} />
                  <AvatarFallback>
                    {reviewer.initials}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium">3 approvals</span>
          </div>
          <div className="flex gap-2">
            <Button
              size="xs"
              variant="outline"
              className="cursor-pointer gap-1 h-7"
              onClick={() => toast.dismiss()}
            >
              <ExternalLink className="size-3" aria-hidden="true" />
              View
            </Button>
            <Button
              size="xs"
              className="cursor-pointer gap-1 bg-teal-400 hover:bg-teal-400/90 text-white border-none h-7 font-medium"
              onClick={() => {
                toast.dismiss()
                toast.success("Merged successfully", {
                  description: "PR #284 has been merged into main.",
                  icon: <GitMerge className="size-4 text-teal-400" />
                })
              }}
            >
              <GitMerge className="size-3" aria-hidden="true" />
              Merge
            </Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex items-center justify-center">
      <Button onClick={showToast} variant="outline" className="w-fit cursor-pointer">
        PR Merge Toast
      </Button>
    </div>
  )
}

export default ToastComponent

